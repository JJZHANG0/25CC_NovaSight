# 🗺️ NovaSight 网站地图

## 📄 完整页面列表

### 🏠 首页
**文件**: `index.html`  
**路径**: `/` 或 `/index.html`  
**内容**:
- Hero区域（标题、副标题、统计数据）
- 快速链接卡片（6个）
- 粒子背景动画
- 语言切换功能

---

### 🏢 关于我们
**文件**: `about.html`  
**路径**: `/about.html`  
**内容**:
- 我们的使命
- 我们的愿景
- 核心价值观（3个）
- 为什么做这件事
- 我们的优势

---

### 👥 团队介绍
**文件**: `team.html`  
**路径**: `/team.html`  
**内容**:
- 核心成员（6位）
  - 技术负责人
  - 硬件工程师
  - 软件开发
  - 产品经理
  - 市场运营
  - 测试工程师
- 团队特色（4个亮点）

---

### 💡 创新产品
**文件**: `innovation.html`  
**路径**: `/innovation.html`  
**内容**:
- 产品介绍
- 产品视觉展示
- 6大核心特性
  - 语音交互导航
  - AI环境感知
  - 智能路径规划
  - 震动反馈系统
  - 配套App管理
  - 超长续航
- 技术参数（6项）

---

### 🖼️ 模型展示
**文件**: `gallery.html`  
**路径**: `/gallery.html`  
**内容**:
- 6个展示项目
  - 3D设计模型
  - 内部结构
  - 电路板设计
  - 测试场景
  - 用户测试
  - 原型机
- 悬停查看详情

---

### 🌍 社会影响
**文件**: `impact.html`  
**路径**: `/impact.html`  
**内容**:
- 3个关键统计数据
- 4大影响领域
  - 推动无障碍城市建设
  - 提升就业与社会参与
  - 全球辅助技术创新
  - 公益合作与普及
- 团队承诺引用

---

### 🎨 品牌形象
**文件**: `brand.html`  
**路径**: `/brand.html`  
**内容**:
- Logo展示
- 品牌色彩（3种）
  - 活力橙 #FF9C00
  - 深空蓝 #05152E
  - 纯白 #FFFFFF
- 品牌元素
  - 字体系统
  - 图标语言
  - 视觉风格
- 品牌应用（4个场景）

---

### ⏱️ 项目历程
**文件**: `timeline.html`  
**路径**: `/timeline.html`  
**内容**:
- 8个关键里程碑
  - 2024 Q1: 项目启动
  - 2024 Q2: 概念设计
  - 2024 Q3: 原型开发
  - 2024 Q4: 测试优化
  - 2025 Q1: 试点推广
  - 2025 Q2: 专利申请
  - 2025 Q3: 商业化准备
  - 2025 Q4: 正式发布（规划中）

---

### 📧 联系我们
**文件**: `contact.html`  
**路径**: `/contact.html`  
**内容**:
- 联系方式
  - 邮箱
  - 电话
  - 地址
- 社交媒体链接
- 在线联系表单
  - 姓名
  - 邮箱
  - 电话
  - 主题
  - 留言
- 合作伙伴类型

---

## 🔗 导航结构

```
NovaSight 官网
│
├── 首页 (index.html)
│   ├── Hero区域
│   ├── 统计数据
│   └── 快速链接
│
├── 关于我们 (about.html)
│   ├── 使命愿景
│   └── 核心价值
│
├── 团队介绍 (team.html)
│   ├── 核心成员
│   └── 团队特色
│
├── 创新产品 (innovation.html)
│   ├── 产品介绍
│   ├── 核心特性
│   └── 技术参数
│
├── 模型展示 (gallery.html)
│   └── 6个展示项
│
├── 社会影响 (impact.html)
│   ├── 统计数据
│   └── 影响领域
│
├── 品牌形象 (brand.html)
│   ├── Logo与色彩
│   └── 品牌元素
│
├── 项目历程 (timeline.html)
│   └── 8个里程碑
│
└── 联系我们 (contact.html)
    ├── 联系方式
    └── 在线表单
```

---

## 🌐 URL结构

### 本地开发
```
http://localhost:8000/
http://localhost:8000/index.html
http://localhost:8000/about.html
http://localhost:8000/team.html
http://localhost:8000/innovation.html
http://localhost:8000/gallery.html
http://localhost:8000/impact.html
http://localhost:8000/brand.html
http://localhost:8000/timeline.html
http://localhost:8000/contact.html
```

### 生产环境（示例）
```
https://novasight.com/
https://novasight.com/about.html
https://novasight.com/team.html
https://novasight.com/innovation.html
https://novasight.com/gallery.html
https://novasight.com/impact.html
https://novasight.com/brand.html
https://novasight.com/timeline.html
https://novasight.com/contact.html
```

---

## 📱 页面组件

### 所有页面共享
- **导航栏** - 自动加载（components.js）
- **页脚** - 自动加载（components.js）
- **加载屏幕** - 自动显示
- **返回顶部按钮** - 滚动显示
- **语言切换按钮** - 导航栏右侧

### 页面特定组件
- **首页**: 粒子背景、快速链接卡片
- **关于**: 价值观卡片、视觉卡片
- **团队**: 成员卡片、特色亮点
- **产品**: 特性卡片、技术参数表
- **展示**: 图库网格、悬停效果
- **影响**: 统计卡片、影响领域
- **品牌**: 色彩展示、元素卡片
- **历程**: 时间线、里程碑
- **联系**: 联系卡片、表单

---

## 🎨 页面样式

### 通用样式
- **页面头部**: 标题 + 副标题 + 粒子背景
- **内容区域**: 容器 + 网格布局
- **卡片设计**: 悬停效果 + 阴影
- **动画**: AOS滚动触发

### 配色方案
- **主色**: #FF9C00（活力橙）
- **背景**: #05152E（深空蓝）
- **辅助**: #0a1e3f（浅蓝）
- **文字**: #FFFFFF / #b0b8c9

---

## 🌍 语言支持

### 中文 (zh)
- 所有页面完整翻译
- 导航栏、页脚翻译
- 表单标签翻译

### 英文 (en)
- 所有页面完整翻译
- 导航栏、页脚翻译
- 表单标签翻译

---

## 📊 页面统计

| 页面 | 文件名 | 大小 | 区域数 |
|------|--------|------|--------|
| 首页 | index.html | 7.6KB | 2 |
| 关于 | about.html | 5.2KB | 1 |
| 团队 | team.html | 7.1KB | 1 |
| 产品 | innovation.html | 7.4KB | 1 |
| 展示 | gallery.html | 5.1KB | 1 |
| 影响 | impact.html | 5.8KB | 1 |
| 品牌 | brand.html | 7.2KB | 1 |
| 历程 | timeline.html | 5.9KB | 1 |
| 联系 | contact.html | 5.9KB | 1 |

**总计**: 9个页面, ~57KB HTML代码

---

## 🔍 SEO信息

每个页面都包含：
- ✅ `<title>` 标签
- ✅ `<meta description>` 标签
- ✅ 语义化HTML结构
- ✅ 响应式viewport设置
- ✅ 合理的标题层级

---

**更新日期**: 2025-01-09  
**版本**: v2.0.0