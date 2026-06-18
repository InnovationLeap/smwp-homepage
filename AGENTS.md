# AGENTS.md - SMWP 2 Homepage

本仓库的 AI 编码助手指南。

## 项目概述

本项目是一个基于 Astro 6 的静态网站，用于展示 SMWP 2。使用 Tailwind CSS v4、MDX 内容、Font Awesome 图标和 TypeScript。包管理器为 **Bun**。支持通过 `data-lang` 属性实现中英双语内容。

## 构建与开发命令

```bash
bun run dev        # 启动开发服务器 (host 0.0.0.0:4321)
bun run build      # 生产环境构建
bun run preview    # 本地预览生产构建
bun run deploy     # 通过 deploy.sh 部署 (Linux 服务器, rsync)
```

- 未配置测试框架。除非明确要求，否则不要添加测试。
- 没有 lint 或 typecheck 命令。TypeScript 由 Astro 内部处理。
- 要验证更改，运行 `bun run build` 来捕获编译错误。

## 项目结构

```
├── public/
│   └── images/            # 静态图片 (logo, 图标)
├── src/
│   ├── components/        # Astro 组件 (Navbar.astro, Footer.astro)
│   ├── content/
│   │   └── pages/         # 按语言分割的 Markdown 内容
│   │       ├── zh/        # 中文内容 (*.md)
│   │       └── en/        # 英文内容 (*.md)
│   ├── content.config.ts  # 内容集合 (Zod schema, glob loader)
│   ├── layouts/           # BaseLayout.astro
│   ├── pages/             # 基于文件的路由 (index.astro, downloads.astro)
│   └── styles/            # global.css (Tailwind, 主题, 深色模式)
├── astro.config.mjs       # Astro + MDX + Tailwind Vite 插件
└── package.json
```

## 代码风格

### Astro 组件
- 使用 `---` frontmatter 标记脚本/逻辑部分。
- 在 frontmatter 中使用 `interface Props` 定义 props。双语站点使用后缀：`titleZh`、`titleEn`、`descriptionZh`、`descriptionEn`。
- 仅在 `BaseLayout.astro` 中导入全局样式，不要在每个组件中导入。
- 使用相对导入 (`../components/Foo.astro`)，不使用路径别名。
- 保持组件逻辑最小化；优先使用声明式模板。

### 国际化 (i18n)
- 内容集合按语言分割：`src/content/pages/zh/` 和 `src/content/pages/en/`。
- 在元素上使用 `data-lang="zh"` 和 `data-lang="en"` 属性来切换语言可见性。
- 语言状态通过 `localStorage` 管理，键为 `lang`（值：`zh` | `en`）。
- 默认语言从 `navigator.language` 推断；如果不是中文或英文则回退到 `zh`。
- 语言更改时在 `window` 上派发 `CustomEvent('language-change')`。

### TypeScript
- 使用 TypeScript 接口定义组件 props 和数据结构（如 `NavItem`、`Props`）。
- 类型定义内联在组件文件中；不创建单独的 `types.ts` 文件。
- 在 `content.config.ts` 中使用 Zod schema 进行内容集合验证。
- 在 `<script>` 标签中，在支持的地方添加类型注解（如 `let hideMenuTimer: number | null = null`）。

### 样式
- 主要样式：Tailwind CSS 实用类。
- 深色模式：通过 global.css 中的 `@custom-variant dark (&:where(.dark, .dark *))` 切换 `html.dark` 类。
  - 在模板中使用 Tailwind `dark:` 变体（如 `dark:bg-gray-900 dark:text-gray-300`）。
  - 在 `<style is:global>` 块中使用 `html.dark .selector` 处理复杂选择器。
- 自定义 CSS：使用 `<style is:global>` 块处理动画/过渡。
- CSS 变量：在 global.css 的 `@theme` 块中定义。
- 响应式：移动优先，使用 `md:` 断点 (768px)。

### 格式化与缩进
- 所有文件类型使用 2 空格缩进（`.astro`、`.ts`、`.js`、`.css`、`.md`）。
- UTF-8 编码。文件末尾有换行符。删除行尾空格（`.md` 除外）。
- HTML 属性：属性较多时每行一个；垂直对齐以提高可读性。

### 命名约定
- 组件：PascalCase 文件名（`BaseLayout.astro`、`Navbar.astro`）。
- 页面：小写文件名（`index.astro`、`downloads.astro`）。
- CSS 类：kebab-case（`mobile-menu-btn`、`desktop-dropdown-link`）。
- 变量/函数：camelCase（`getPreferredTheme`、`setTheme`、`updateLanguage`）。
- 常量：UPPER_SNAKE_CASE（`MOBILE_MENU_ANIMATION_DURATION`）。
- 接口：PascalCase（`NavItem`、`Props`）。

### 导入
- Astro 导入：`import { getEntry, render } from 'astro:content'`。
- Loader 导入：`import { glob } from 'astro/loaders'`。
- 组件导入：相对路径，`.astro` 扩展名可省略。
- CSS 导入：在 global.css 中使用 `@import` 和 `@plugin` 指令。
- 导入顺序：先 Astro/框架，然后组件，最后工具函数。

### `<script>` 标签中的 JavaScript
- 使用 `const` 和箭头函数。避免使用 `var`。
- 使用 `?.` 可选链对 DOM 元素进行空值检查。
- 对多个元素使用 `querySelectorAll` 和 `forEach`。
- DOM 过渡优先使用 `requestAnimationFrame`。
- 使用 `window.setTimeout` 而不是裸 `setTimeout`。
- 对滚动/调整大小监听器使用 `{ passive: true }`。

### 无障碍访问
- 在交互元素上包含 `aria-label`、`aria-expanded`、`aria-controls`、`aria-hidden`。
- 使用 `sr-only` 类处理仅屏幕阅读器可见的文本。
- 外部链接：始终使用 `target="_blank"` 和 `rel="noopener noreferrer"`。

### 错误处理
- 当内容条目缺失时抛出描述性的 `Error` 对象。
- 在处理前使用早期返回（`if (!entry) throw ...`）。
- 在脚本中，使用可选链保护空 DOM 元素。

### 内容 (Markdown)
- 将内容存储在 `src/content/pages/{zh,en}/` 中作为 `.md` 文件。
- Frontmatter 必须匹配 Zod schema：`title`（必需）、`description`（可选）、`layout`（可选）。
- 通过 `await render(entry)` 和 `<Content />` 组件渲染内容。

## 主要依赖

- `astro` ^6.4.8 - 静态网站框架
- `@astrojs/mdx` ^6.0.3 - MDX 集成
- `tailwindcss` ^4.3.1 - CSS 框架
- `@tailwindcss/vite` ^4.3.1 - Tailwind Vite 插件
- `@tailwindcss/typography` ^0.5.20 - 文章内容的 Prose 样式
- `@fortawesome/fontawesome-free` ^7.2.0 - 图标库（通过 CSS 全局加载）
- `typescript` ^6.0.3

## 重要说明

- 开发服务器默认绑定到 `0.0.0.0:4321`。
- 仓库中不存在 CI/CD 管道文件。
- Font Awesome 通过 global.css 中的 CSS 导入全局加载，不是按组件加载。
- `deploy.sh` 脚本在 Linux 服务器上运行；它使用 `bun run build` 和 rsync 进行部署。
- 深色模式和语言偏好通过 `localStorage` 持久化（`theme`：`light`|`dark`，`lang`：`zh`|`en`）。
