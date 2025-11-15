# 🎯 BNE Slides Collection

這是一個包含多個 Slidev 簡報的 monorepo 專案，已配置為可輕鬆部署到各種靜態網站託管平台。

## 📂 專案結構

```
bne-slides/
├── 231027-adlink-web-training-1/    → /231027-adlink-web-training-1
├── 231208-fellowship/               → /231208-fellowship
├── 240628-fellowship/               → /240628-fellowship
├── 240906-fellowship/               → /240906-fellowship
├── 240920-fellowship/               → /240920-fellowship
├── 241027-youth-fellowship/         → /241027-youth-fellowship
├── 251029-twinkleai-llmfromscratch-ch2/ → /251029-twinkleai-llmfromscratch-ch2
├── scripts/
│   └── build-all.ts                 # 統一建置腳本
├── public/
│   └── _redirects                   # 路由配置
├── vercel.json                      # Vercel 配置
└── DEPLOYMENT.md                    # 詳細部署說明
```

## 🚀 快速開始

### 開發單一專案

```bash
# 安裝依賴
pnpm install

# 選擇並運行專案
pnpm run dev
```

### 建置所有專案

```bash
# 建置所有專案到 dist/ 目錄
pnpm run build

# 本地預覽
npx serve dist
```

建置完成後，訪問：
- `http://localhost:3000/` - 索引頁（列出所有簡報）
- `http://localhost:3000/251029-twinkleai-llmfromscratch-ch2/` - 特定簡報

## 📤 部署

本專案已配置好以下平台的部署：

### Vercel (推薦)
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/bne-slides)

```bash
vercel --prod
```

### Cloudflare Pages
```bash
pnpm run build
wrangler pages deploy dist
```

### Netlify
```bash
pnpm run build
netlify deploy --dir=dist --prod
```

### Zeabur
直接從 [Zeabur Dashboard](https://zeabur.com) 連接 Git repository 即可自動部署。

**詳細部署說明請參考 [DEPLOYMENT.md](./DEPLOYMENT.md)**

## 🛠️ 新增簡報

1. 在根目錄建立新資料夾（例如：`250115-new-presentation`）
2. 在該資料夾內初始化 Slidev 專案：
   ```bash
   cd 250115-new-presentation
   pnpm init
   pnpm add -D @slidev/cli @slidev/theme-default
   ```
3. 建立 `slides.md` 並開始編輯
4. 執行 `pnpm run build` 會自動包含新專案

## 📝 技術棧

- **簡報框架**: [Slidev](https://sli.dev)
- **套件管理**: pnpm (workspace)
- **建置工具**: Vite
- **部署平台**: Vercel / Cloudflare Pages / Netlify / Zeabur

## 🤝 貢獻

歡迎提交 Pull Request 或開 Issue！

## 📄 授權

MIT
