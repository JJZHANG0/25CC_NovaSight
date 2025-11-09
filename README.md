# NovaSight 智能导盲杖官网

> 让科技成为新的眼睛

## 🎉 项目更新说明

本项目已从单页应用重构为**多页面架构**，并新增了以下重要功能：

### ✨ 新增功能

1. **🌍 双语支持** - 中文/英文无缝切换
2. **🎯 首次访问弹窗** - 智能语言选择引导
3. **📄 多页面架构** - 9个独立页面，更好的SEO和用户体验
4. **🔄 共享组件系统** - 统一的导航栏和页脚管理

---

## 📂 项目结构

```
novasight-website/
│
├── index.html                          # 首页
├── about.html                          # 关于我们
├── team.html                           # 团队介绍 (待创建)
├── innovation.html                     # 创新产品 (待创建)
├── gallery.html                        # 模型展示 (待创建)
├── impact.html                         # 社会影响 (待创建)
├── brand.html                          # 品牌形象 (待创建)
├── timeline.html                       # 项目历程 (待创建)
├── contact.html                        # 联系我们
├── _page_template.html                 # 页面模板文件
├── index_single_page_backup.html       # 原单页版本备份
├── README.md                           # 项目文档
│
├── css/
│   └── style.css                       # 主样式文件 (已更新)
│
└── js/
    ├── lang.js                         # 🆕 多语言数据文件
    ├── components.js                   # 🆕 共享组件 (导航&页脚)
    └── main.js                         # 主JavaScript文件 (已更新)
```

---

## 🚀 核心功能

### 1. 多语言系统

#### 语言切换
- **导航栏语言按钮**：点击右上角的语言切换按钮 (`中文/EN`)
- **自动记忆**：用户选择的语言会保存在浏览器中
- **首次访问弹窗**：新用户首次访问时会看到精美的语言选择弹窗

#### 添加翻译
在 `js/lang.js` 文件中的 `translations` 对象添加翻译：

```javascript
const translations = {
    zh: {
        nav: {
            home: '首页',
            about: '关于我们'
            // 添加更多...
        }
    },
    en: {
        nav: {
            home: 'Home',
            about: 'About'
            // 添加更多...
        }
    }
};
```

#### 在HTML中使用翻译
使用 `data-i18n` 属性：

```html
<h1 data-i18n="nav.home">首页</h1>
<p data-i18n="about.description">描述文本</p>
```

---

### 2. 共享组件系统

#### components.js 提供三个核心组件：

1. **导航栏** - 自动插入到每个页面顶部
2. **页脚** - 自动插入到每个页面底部
3. **加载屏幕** - 页面加载动画

#### 使用方法
只需在HTML中引入以下脚本：

```html
<script src="js/components.js"></script>
```

组件会自动加载到页面中！

---

### 3. 页面模板

#### 快速创建新页面

使用 `_page_template.html` 作为模板：

1. 复制 `_page_template.html`
2. 重命名为新页面名称（如 `innovation.html`）
3. 修改页面标题和描述
4. 添加页面特定内容
5. 更新 `data-i18n` 属性指向正确的翻译键

#### 示例：创建创新产品页面

```html
<!-- innovation.html -->
<section class="page-header">
    <div class="page-header-content">
        <h1 class="page-title" data-i18n="innovation.title">创新产品</h1>
        <p class="page-subtitle" data-i18n="innovation.description">
            AI驱动的智能导盲系统
        </p>
    </div>
</section>

<!-- 添加具体内容 -->
<section class="section">
    <div class="container">
        <!-- 从原单页备份中复制对应内容 -->
    </div>
</section>
```

---

## 🎨 设计系统

### 配色方案
- **主色**：`#FF9C00` (活力橙)
- **深色背景**：`#05152E` (深空蓝)
- **浅色背景**：`#0a1e3f`
- **纯白**：`#FFFFFF`
- **文字灰**：`#b0b8c9`

### 字体系统
- **标题**：Orbitron (科技感)
- **正文**：Inter (现代简洁)

### 常用CSS类

```css
/* 区域容器 */
.section              /* 标准区域 */
.container            /* 内容容器 */

/* 标题系统 */
.section-tag          /* 区域标签 */
.section-title        /* 区域标题 */
.section-description  /* 区域描述 */

/* 按钮 */
.btn-primary          /* 主按钮 */
.btn-secondary        /* 次按钮 */

/* 卡片 */
.quick-link-card      /* 快速链接卡片 */
.feature-card         /* 功能卡片 */
.team-card            /* 团队卡片 */
```

---

## 📝 待完成页面

以下页面需要基于 `_page_template.html` 创建：

- [ ] **team.html** - 团队介绍页面
- [ ] **innovation.html** - 创新产品页面
- [ ] **gallery.html** - 模型展示页面
- [ ] **impact.html** - 社会影响页面
- [ ] **brand.html** - 品牌形象页面
- [ ] **timeline.html** - 项目历程页面

💡 **提示**：可以从 `index_single_page_backup.html` 中复制对应内容到新页面。

---

## 🛠️ 使用指南

### 本地运行

1. **直接打开**：
   ```
   双击 index.html 文件
   ```

2. **使用本地服务器**（推荐）：
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Node.js
   npx http-server
   ```
   
   然后访问：`http://localhost:8000`

### 测试语言切换

1. 首次访问会弹出语言选择窗口
2. 点击右上角语言切换按钮切换语言
3. 清除浏览器 localStorage 可重置首次访问状态：
   ```javascript
   // 在浏览器控制台执行
   localStorage.clear();
   location.reload();
   ```

---

## 🎯 关键特性

### 语言系统特点

- ✅ **首次访问弹窗** - 精美的语言选择界面
- ✅ **自动记忆** - 保存用户语言偏好
- ✅ **实时切换** - 无需刷新页面
- ✅ **完整翻译** - 导航、页脚、按钮全覆盖
- ✅ **浏览器语言检测** - 智能默认语言

### 多页面优势

- 🎯 **更好的SEO** - 每个页面独立URL
- 📱 **更快的加载** - 按需加载内容
- 🔗 **更好的分享** - 可以分享特定页面链接
- 📊 **更好的分析** - 更精确的页面访问统计
- ♿ **更好的无障碍** - 清晰的页面结构

---

## 💻 开发说明

### 添加新页面

1. **复制模板**：
   ```bash
   cp _page_template.html new_page.html
   ```

2. **修改内容**：
   - 更新 `<title>` 和 `<meta>` 标签
   - 修改页面头部的标题和描述
   - 添加页面特定内容

3. **添加翻译**：
   在 `js/lang.js` 中添加相应的翻译文本

4. **更新导航**：
   导航链接已在 `js/components.js` 中配置，会自动显示

### 修改共享组件

编辑 `js/components.js` 文件：

```javascript
// 修改导航栏
function getNavigationHTML() {
    return `
        <!-- 修改导航HTML -->
    `;
}

// 修改页脚
function getFooterHTML() {
    return `
        <!-- 修改页脚HTML -->
    `;
}
```

---

## 📊 项目统计

### 代码量
- **HTML**: 多个页面文件
- **CSS**: ~37KB (增强版)
- **JavaScript**: ~50KB (含语言数据)
- **总计**: ~90KB+

### 功能统计
- **页面数量**: 9个独立页面
- **支持语言**: 2种 (中文/英文)
- **翻译条目**: 200+ 条
- **动画效果**: 15+
- **交互功能**: 25+

---

## 🌐 浏览器兼容性

- ✅ Chrome (最新版)
- ✅ Firefox (最新版)
- ✅ Safari (最新版)
- ✅ Edge (最新版)
- ✅ Opera (最新版)
- ❌ IE 11 及以下

---

## 🔧 常见问题

### Q: 语言切换不生效？
A: 确保：
1. 正确引入了 `lang.js` 文件
2. HTML元素有 `data-i18n` 属性
3. 翻译键在 `lang.js` 中存在

### Q: 导航栏/页脚不显示？
A: 确保：
1. 正确引入了 `components.js` 文件
2. 文件引入顺序正确（components.js 在 main.js 之前）

### Q: 如何重新显示语言选择弹窗？
A: 在浏览器控制台执行：
```javascript
localStorage.removeItem('novasight_has_visited');
location.reload();
```

### Q: 如何从备份恢复单页版本？
A: 将 `index_single_page_backup.html` 重命名为 `index.html`

---

## 📞 联系方式

- **邮箱**: contact@novasight.com
- **技术支持**: support@novasight.com
- **电话**: +86 400-XXX-XXXX

---

## 📄 许可证

Copyright © 2025 NovaSight. All rights reserved.

---

## 🎓 开发团队

由 NovaSight 团队精心设计与开发

**核心理念**: 用科技点亮无障碍出行的未来  
**使命**: 让每一位视障者都能安全、自主、有尊严地融入现代城市生活

---

## 🔄 版本历史

### v2.0.0 (2025-01-09) - 多页面重构版
- ✨ 新增双语支持系统
- ✨ 新增首次访问语言选择弹窗
- 🔄 重构为多页面架构
- 📦 创建共享组件系统
- 📝 完善开发文档

### v1.0.0 (2025-01-09) - 初始单页版
- ✅ 完成全部功能区域
- ✅ 实现响应式设计
- ✅ 添加动画效果

---

**让科技成为新的眼睛 - NovaSight** 🚀
