import { promises as fs } from 'node:fs'
import { resolve, join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { execa } from 'execa'
import fg from 'fast-glob'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const rootDir = resolve(__dirname, '..')
const distDir = join(rootDir, 'dist')

interface Project {
  name: string
  path: string
  urlPath: string
}

async function getProjects(): Promise<Project[]> {
  const packageJsonFiles = await fg('*/package.json', {
    cwd: rootDir,
    ignore: ['node_modules/**', 'dist/**', 'scripts/**'],
  })

  return packageJsonFiles.map((file) => {
    const dirName = file.split('/')[0]
    return {
      name: dirName,
      path: join(rootDir, dirName),
      urlPath: dirName,
    }
  })
}

async function buildProject(project: Project) {
  console.log(`\n🔨 Building ${project.name}...`)

  try {
    // Run build command in project directory
    await execa('pnpm', ['run', 'build'], {
      cwd: project.path,
      stdio: 'inherit',
    })

    // Copy dist to output directory
    const projectDist = join(project.path, 'dist')
    const targetDist = join(distDir, project.urlPath)

    // Check if dist exists
    try {
      await fs.access(projectDist)
      await fs.cp(projectDist, targetDist, { recursive: true })
      console.log(`✅ ${project.name} built successfully → /${project.urlPath}`)
    }
    catch (error) {
      console.warn(`⚠️  No dist folder found for ${project.name}, skipping...`)
    }
  }
  catch (error) {
    console.error(`❌ Failed to build ${project.name}:`, error)
    throw error
  }
}

async function createIndexPage(projects: Project[]) {
  const html = `<!DOCTYPE html>
<html lang="zh-TW">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Slides Collection</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
      line-height: 1.6;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      min-height: 100vh;
      padding: 2rem;
    }
    .container {
      max-width: 1200px;
      margin: 0 auto;
    }
    h1 {
      color: white;
      text-align: center;
      margin-bottom: 3rem;
      font-size: 3rem;
      text-shadow: 2px 2px 4px rgba(0,0,0,0.2);
    }
    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 2rem;
    }
    .card {
      background: white;
      border-radius: 12px;
      padding: 2rem;
      box-shadow: 0 10px 30px rgba(0,0,0,0.2);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      text-decoration: none;
      color: inherit;
      display: block;
    }
    .card:hover {
      transform: translateY(-5px);
      box-shadow: 0 15px 40px rgba(0,0,0,0.3);
    }
    .card h2 {
      color: #667eea;
      margin-bottom: 0.5rem;
      font-size: 1.5rem;
    }
    .card p {
      color: #666;
      font-size: 0.9rem;
    }
    .card .path {
      margin-top: 1rem;
      padding: 0.5rem;
      background: #f7f7f7;
      border-radius: 6px;
      font-family: 'Monaco', 'Courier New', monospace;
      font-size: 0.85rem;
      color: #764ba2;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>📊 Slides Collection</h1>
    <div class="grid">
${projects.map(p => `      <a href="/${p.urlPath}/" class="card">
        <h2>${formatProjectName(p.name)}</h2>
        <p class="path">/${p.urlPath}</p>
      </a>`).join('\n')}
    </div>
  </div>
</body>
</html>`

  await fs.writeFile(join(distDir, 'index.html'), html, 'utf-8')
  console.log('✅ Index page created')
}

function formatProjectName(name: string): string {
  // Convert directory names to readable titles
  return name
    .replace(/^\d+-/, '')
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

async function copyPublicFiles() {
  const publicDir = join(rootDir, 'public')

  try {
    await fs.access(publicDir)
    const files = await fs.readdir(publicDir)

    for (const file of files) {
      const src = join(publicDir, file)
      const dest = join(distDir, file)
      await fs.copyFile(src, dest)
      console.log(`📄 Copied ${file} to dist/`)
    }
  }
  catch {
    // public directory doesn't exist, skip
  }
}

async function main() {
  console.log('🚀 Starting build process...\n')

  // Install all dependencies using workspace
  console.log('📦 Installing workspace dependencies...')
  await execa('pnpm', ['install'], {
    cwd: rootDir,
    stdio: 'inherit',
  })

  // Clean dist directory
  await fs.rm(distDir, { recursive: true, force: true })
  await fs.mkdir(distDir, { recursive: true })

  // Get all projects
  const projects = await getProjects()
  console.log(`Found ${projects.length} projects:\n${projects.map(p => `  - ${p.name}`).join('\n')}\n`)

  // Build all projects (continue on errors)
  const results = {
    successful: [] as Project[],
    failed: [] as { project: Project, error: any }[],
  }

  for (const project of projects) {
    try {
      await buildProject(project)
      results.successful.push(project)
    }
    catch (error) {
      console.error(`⚠️  Skipping ${project.name} due to build error\n`)
      results.failed.push({ project, error })
    }
  }

  // Create index page with only successful projects
  await createIndexPage(results.successful)

  // Copy public files (_redirects, etc.)
  await copyPublicFiles()

  // Report results
  console.log('\n📊 Build Summary:')
  console.log(`✅ Successfully built: ${results.successful.length}/${projects.length}`)
  results.successful.forEach(p => console.log(`   - ${p.name} → /${p.urlPath}`))

  if (results.failed.length > 0) {
    console.log(`\n❌ Failed to build: ${results.failed.length}/${projects.length}`)
    results.failed.forEach(({ project }) => console.log(`   - ${project.name}`))
  }

  console.log('\n✨ Build process completed!')
}

main().catch((error) => {
  console.error('Build failed:', error)
  process.exit(1)
})
