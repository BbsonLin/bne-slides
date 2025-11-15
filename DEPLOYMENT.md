# 部署說明 / Deployment Guide

本專案已配置為統一建置所有 Slidev 簡報，並可輕鬆部署到多個平台。

## 🌐 支援的平台

- ✅ Vercel
- ✅ Cloudflare Pages
- ✅ Netlify
- ✅ Zeabur

## 📦 專案結構

建置完成後，所有簡報會以子路徑的方式提供：

```
https://your-domain.com/          → 索引頁（列出所有簡報）
https://your-domain.com/twinkleai → 251029-twinkleai-llmfromscratch-ch2
https://your-domain.com/fellowship → 各種 fellowship 簡報
...
```

## 🚀 快速開始

### 1. 本地建置測試

```bash
# 安裝依賴
pnpm install

# 建置所有專案
pnpm run build

# 建置結果會在 dist/ 目錄，可用任何靜態伺服器測試
npx serve dist
```

## 📤 部署到各平台

### Vercel

#### 方法 1：從 Dashboard 部署

1. 登入 [Vercel Dashboard](https://vercel.com)
2. 點擊 "Add New Project"
3. 匯入此 Git repository
4. Vercel 會自動偵測 `vercel.json` 配置
5. 點擊 "Deploy"

#### 方法 2：使用 Vercel CLI

```bash
# 安裝 Vercel CLI
npm i -g vercel

# 登入
vercel login

# 部署
vercel

# 部署到生產環境
vercel --prod
```

**配置說明：**
- 建置命令：`pnpm run build`
- 輸出目錄：`dist`
- Node 版本：18.x 或更高

---

### Cloudflare Pages

#### 方法 1：從 Dashboard 部署

1. 登入 [Cloudflare Dashboard](https://dash.cloudflare.com)
2. 進入 "Pages" → "Create a project"
3. 連接你的 Git repository
4. 配置如下：
   - **Framework preset**: None
   - **Build command**: `pnpm run build`
   - **Build output directory**: `dist`
5. 點擊 "Save and Deploy"

#### 方法 2：使用 Wrangler CLI

```bash
# 安裝 Wrangler
npm i -g wrangler

# 登入
wrangler login

# 建置專案
pnpm run build

# 部署
wrangler pages deploy dist --project-name=bne-slides
```

**注意事項：**
- Cloudflare Pages 會自動使用 `public/_redirects` 文件
- 支援 SPA 路由重定向

---

### Netlify

#### 方法 1：從 Dashboard 部署

1. 登入 [Netlify](https://app.netlify.com)
2. 點擊 "Add new site" → "Import an existing project"
3. 連接你的 Git repository
4. 配置如下：
   - **Build command**: `pnpm run build`
   - **Publish directory**: `dist`
5. 點擊 "Deploy site"

#### 方法 2：使用 Netlify CLI

```bash
# 安裝 Netlify CLI
npm i -g netlify-cli

# 登入
netlify login

# 建置
pnpm run build

# 部署
netlify deploy --dir=dist

# 部署到生產環境
netlify deploy --dir=dist --prod
```

---

### Zeabur

#### 方法 1：從 Dashboard 部署

1. 登入 [Zeabur Dashboard](https://zeabur.com)
2. 建立新專案
3. 選擇 "Git" 作為來源
4. 連接你的 repository
5. Zeabur 會自動偵測 `package.json` 並執行 `pnpm run build`
6. 配置環境變數（如需要）：
   - `INSTALL_COMMAND`: `pnpm install`
   - `BUILD_COMMAND`: `pnpm run build`
   - `OUTPUT_DIRECTORY`: `dist`

#### 方法 2：使用 Zeabur CLI

```bash
# 安裝 Zeabur CLI
curl -fsSL https://zeabur.com/install.sh | bash

# 登入
zeabur auth login

# 部署
zeabur deploy
```

---

## 🔧 進階配置

### 新增專案

當你新增新的簡報專案時：

1. 在根目錄建立新資料夾（例如：`250115-new-presentation`）
2. 確保資料夾內有 `package.json` 和 Slidev 配置
3. 執行 `pnpm run build`，新專案會自動被偵測並建置

### 自訂 URL 路徑

如果想自訂專案的 URL 路徑，可以修改 `scripts/build-all.ts` 中的 `getProjects()` 函數：

```typescript
return packageJsonFiles.map((file) => {
  const dirName = file.split('/')[0]
  return {
    name: dirName,
    path: join(rootDir, dirName),
    urlPath: customPathMapping[dirName] || dirName, // 自訂映射
  }
})
```

### 環境變數

如果需要在建置時使用環境變數，可以在各平台的 Dashboard 中設定，或使用 `.env` 文件（記得加入 `.gitignore`）。

---

## 📝 注意事項

1. **建置時間**：根據專案數量，建置時間可能需要幾分鐘
2. **快取**：各平台都有快取機制，如需強制重新建置：
   - Vercel: 在部署設定中啟用 "Clear cache"
   - Cloudflare Pages: 重新部署會自動清除快取
   - Netlify: 使用 "Clear cache and deploy site"
3. **Node 版本**：建議使用 Node 18.x 或更高版本

---

## 🆘 疑難排解

### 建置失敗

1. 確認所有依賴都已安裝：`pnpm install`
2. 確認各子專案的 `package.json` 配置正確
3. 檢查建置日誌中的錯誤訊息

### 路由不工作

1. 確認 `vercel.json` 或 `_redirects` 文件存在
2. 確認各平台的 SPA fallback 規則已設定

### 圖片或資源載入失敗

1. 確認圖片路徑使用相對路徑
2. 檢查 `public/` 目錄下的資源是否正確複製到 `dist/`

---

## 📚 相關資源

- [Vercel 文件](https://vercel.com/docs)
- [Cloudflare Pages 文件](https://developers.cloudflare.com/pages)
- [Netlify 文件](https://docs.netlify.com)
- [Zeabur 文件](https://zeabur.com/docs)
- [Slidev 文件](https://sli.dev)
