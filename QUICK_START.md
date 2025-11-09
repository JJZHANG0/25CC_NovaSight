# 🚀 NovaSight 快速开始指南

## 📦 已完成的内容

### ✅ 核心功能
1. ✨ **双语系统** (中文/英文)
2. 🎯 **首次访问弹窗** - 语言选择
3. 📄 **多页面架构**
4. 🔄 **共享组件系统**

### ✅ 已创建的页面
- ✅ `index.html` - 首页 (含快速链接)
- ✅ `about.html` - 关于我们
- ✅ `contact.html` - 联系我们
- ✅ `_page_template.html` - 页面模板

### ⏳ 待创建的页面
- ⏳ `team.html` - 团队介绍
- ⏳ `innovation.html` - 创新产品
- ⏳ `gallery.html` - 模型展示
- ⏳ `impact.html` - 社会影响
- ⏳ `brand.html` - 品牌形象
- ⏳ `timeline.html` - 项目历程

---

## 🎬 立即体验

### 1. 打开首页
直接用浏览器打开 `index.html`

### 2. 查看语言选择弹窗
首次访问会自动弹出精美的语言选择界面

### 3. 测试语言切换
点击右上角导航栏的语言按钮 (`中文/EN`)

### 4. 浏览已完成页面
- 首页：`index.html`
- 关于我们：`about.html`
- 联系我们：`contact.html`

---

## 🛠️ 创建剩余页面

### 方法一：快速复制（推荐）

从备份文件 `index_single_page_backup.html` 复制内容：

1. **打开备份文件** `index_single_page_backup.html`
2. **找到对应区域** (例如：Innovation Section)
3. **复制区域HTML**
4. **打开模板** `_page_template.html`
5. **粘贴到新文件** 并命名（如 `innovation.html`）
6. **修改标题和翻译键**

### 方法二：从头创建

使用 `_page_template.html` 作为起点：

```bash
# 复制模板
cp _page_template.html innovation.html

# 编辑文件
# 1. 修改 <title> 和 <meta> 标签
# 2. 更新页面标题和描述
# 3. 添加页面内容
# 4. 更新 data-i18n 翻译键
```

---

## 📝 创建 innovation.html 示例

### 步骤：

1. **复制模板文件**
```bash
cp _page_template.html innovation.html
```

2. **从备份文件复制内容**

打开 `index_single_page_backup.html`，找到：
```html
<!-- Innovation Section -->
<section id="innovation" class="section innovation-section">
    <!-- 复制这里的所有内容 -->
</section>
```

3. **粘贴到 innovation.html**

将复制的内容替换模板中的主内容区域

4. **修改标题**
```html
<h1 class="page-title" data-i18n="innovation.title">创新产品</h1>
<p class="page-subtitle" data-i18n="innovation.description">
    AI驱动的智能导盲系统
</p>
```

5. **确保 data-i18n 正确**

所有需要翻译的文本都应该有 `data-i18n` 属性

6. **保存并测试**

在浏览器中打开查看效果

---

## 🌍 添加更多翻译

### 编辑 `js/lang.js`

```javascript
const translations = {
    zh: {
        // 添加新的翻译键
        newpage: {
            title: '新页面标题',
            description: '新页面描述'
        }
    },
    en: {
        newpage: {
            title: 'New Page Title',
            description: 'New Page Description'
        }
    }
};
```

### 在HTML中使用

```html
<h1 data-i18n="newpage.title">新页面标题</h1>
<p data-i18n="newpage.description">新页面描述</p>
```

---

## 🎨 自定义样式

### 修改颜色

编辑 `css/style.css` 顶部的CSS变量：

```css
:root {
    --primary-color: #FF9C00;  /* 主色 */
    --dark-bg: #05152E;        /* 深色背景 */
    --white: #FFFFFF;          /* 纯白 */
}
```

### 添加新样式

在 `css/style.css` 底部添加自定义样式：

```css
/* 自定义样式 */
.my-custom-class {
    /* 你的样式 */
}
```

---

## 🔧 修改导航和页脚

### 编辑 `js/components.js`

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

## 🐛 常见问题解决

### 问题：语言切换不生效

**解决方案：**
1. 检查是否引入了 `lang.js`
2. 确认 `data-i18n` 属性正确
3. 查看浏览器控制台是否有错误

### 问题：导航栏不显示

**解决方案：**
1. 确认引入了 `components.js`
2. 检查脚本引入顺序
3. 查看浏览器控制台

### 问题：想重新看语言选择弹窗

**解决方案：**
```javascript
// 在浏览器控制台执行
localStorage.clear();
location.reload();
```

---

## 📚 完整页面创建检查清单

创建新页面时，请确保：

- [ ] 从模板复制或从备份提取内容
- [ ] 更新 `<title>` 标签
- [ ] 更新 `<meta description>` 标签
- [ ] 修改页面标题和副标题
- [ ] 添加所有 `data-i18n` 属性
- [ ] 在 `lang.js` 中添加对应翻译
- [ ] 测试中文显示
- [ ] 测试英文显示
- [ ] 测试响应式布局
- [ ] 检查导航链接是否正确

---

## 💡 最佳实践

### 1. 始终使用 data-i18n

所有用户可见的文本都应该支持多语言：
```html
<!-- ✅ 好 -->
<h1 data-i18n="page.title">标题</h1>

<!-- ❌ 不好 -->
<h1>标题</h1>
```

### 2. 保持翻译键结构清晰

```javascript
// ✅ 好 - 清晰的层级结构
innovation.product_name
innovation.feature1_title

// ❌ 不好 - 扁平化难以管理
innovation_product_name
innovation_feature_one_title
```

### 3. 使用语义化的CSS类名

```html
<!-- ✅ 好 -->
<div class="product-feature">...</div>

<!-- ❌ 不好 -->
<div class="box1">...</div>
```

---

## 🎯 下一步建议

1. **创建剩余6个页面** - 使用模板快速创建
2. **添加真实图片** - 替换占位符
3. **测试所有链接** - 确保导航正确
4. **优化移动端** - 在手机上测试
5. **添加更多动画** - 使用 AOS 库
6. **SEO优化** - 完善meta标签

---

## 📞 需要帮助？

如果遇到问题：

1. **查看 README.md** - 完整文档
2. **检查浏览器控制台** - 查看错误信息
3. **参考备份文件** - `index_single_page_backup.html`
4. **使用页面模板** - `_page_template.html`

---

## 🎉 开始构建吧！

您现在已经拥有：

✅ 完整的语言系统  
✅ 多页面架构  
✅ 共享组件  
✅ 页面模板  
✅ 完整文档  

开始创建剩余页面，打造完美的 NovaSight 官网！

---

**让科技成为新的眼睛** 🚀