import { resolve, join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import fg from 'fast-glob'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const rootDir = resolve(__dirname, '..')

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

async function main() {
  const projects = await getProjects()
  console.log(`Found ${projects.length} projects:\n`)

  projects.forEach((p) => {
    console.log(`  📁 ${p.name}`)
    console.log(`     Path: ${p.path}`)
    console.log(`     URL:  /${p.urlPath}\n`)
  })
}

main()
