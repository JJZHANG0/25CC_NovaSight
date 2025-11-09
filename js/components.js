/**
 * NovaSight 共享组件
 * 包含导航栏和页脚的HTML模板
 */

// ==========================================
// 导航栏HTML
// ==========================================
function getNavigationHTML() {
    return `
        <nav class="navbar" id="navbar">
            <div class="nav-container">
                <a href="index.html" class="nav-logo">
                    <span class="logo-nova">Nova</span><span class="logo-sight">Sight</span>
                </a>
                <ul class="nav-menu" id="nav-menu">
                    <li><a href="index.html" class="nav-link" data-i18n="nav.home">首页</a></li>
                    <li><a href="about.html" class="nav-link" data-i18n="nav.about">关于我们</a></li>
                    <li><a href="team.html" class="nav-link" data-i18n="nav.team">团队</a></li>
                    <li><a href="innovation.html" class="nav-link" data-i18n="nav.innovation">创新产品</a></li>
                    <li><a href="gallery.html" class="nav-link" data-i18n="nav.gallery">模型展示</a></li>
                    <li><a href="impact.html" class="nav-link" data-i18n="nav.impact">社会影响</a></li>
                    <li><a href="brand.html" class="nav-link" data-i18n="nav.brand">品牌</a></li>
                    <li><a href="timeline.html" class="nav-link" data-i18n="nav.timeline">历程</a></li>
                    <li><a href="contact.html" class="nav-link" data-i18n="nav.contact">联系</a></li>
                    <li>
                        <button class="lang-switcher" id="langSwitcher">
                            <i class="fas fa-globe"></i>
                            <span>EN</span>
                        </button>
                    </li>
                </ul>
                <div class="hamburger" id="hamburger">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </nav>
    `;
}

// ==========================================
// 页脚HTML
// ==========================================
function getFooterHTML() {
    return `
        <footer class="footer">
            <div class="container">
                <div class="footer-content">
                    <div class="footer-brand">
                        <h3 class="footer-logo">
                            <span class="logo-nova">Nova</span><span class="logo-sight">Sight</span>
                        </h3>
                        <p class="footer-tagline" data-i18n="footer.tagline">让科技成为新的眼睛</p>
                        <p class="footer-desc" data-i18n="footer.desc">
                            用AI技术赋能视障人群，<br>
                            创造更包容的无障碍社会
                        </p>
                    </div>
                    
                    <div class="footer-links">
                        <div class="footer-column">
                            <h4 data-i18n="footer.product_title">产品</h4>
                            <ul>
                                <li><a href="innovation.html" data-i18n="footer.product_intro">产品介绍</a></li>
                                <li><a href="innovation.html" data-i18n="footer.product_specs">技术参数</a></li>
                                <li><a href="gallery.html" data-i18n="footer.product_gallery">模型展示</a></li>
                            </ul>
                        </div>
                        
                        <div class="footer-column">
                            <h4 data-i18n="footer.company_title">公司</h4>
                            <ul>
                                <li><a href="about.html" data-i18n="footer.company_about">关于我们</a></li>
                                <li><a href="team.html" data-i18n="footer.company_team">团队介绍</a></li>
                                <li><a href="timeline.html" data-i18n="footer.company_timeline">发展历程</a></li>
                            </ul>
                        </div>
                        
                        <div class="footer-column">
                            <h4 data-i18n="footer.resources_title">资源</h4>
                            <ul>
                                <li><a href="impact.html" data-i18n="footer.resources_impact">社会影响</a></li>
                                <li><a href="brand.html" data-i18n="footer.resources_brand">品牌资源</a></li>
                                <li><a href="contact.html" data-i18n="footer.resources_media">媒体联系</a></li>
                            </ul>
                        </div>
                        
                        <div class="footer-column">
                            <h4 data-i18n="footer.contact_title">联系</h4>
                            <ul>
                                <li><a href="contact.html" data-i18n="footer.contact_us">联系我们</a></li>
                                <li><a href="mailto:contact@novasight.com" data-i18n="footer.contact_business">商务合作</a></li>
                                <li><a href="mailto:support@novasight.com" data-i18n="footer.contact_support">技术支持</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                
                <div class="footer-bottom">
                    <p data-i18n="footer.copyright">&copy; 2025 NovaSight. All rights reserved.</p>
                    <p class="footer-note" data-i18n="footer.note">本网站为 NovaSight 智能导盲杖官方展示平台</p>
                </div>
            </div>
        </footer>
        
        <!-- Back to Top Button -->
        <button class="back-to-top" id="backToTop">
            <i class="fas fa-arrow-up"></i>
        </button>
    `;
}

// ==========================================
// 加载屏幕HTML
// ==========================================
function getLoadingScreenHTML() {
    return `
        <div id="loading-screen">
            <div class="loader">
                <div class="loader-circle"></div>
                <div class="loader-text">NovaSight</div>
            </div>
        </div>
    `;
}

// ==========================================
// 插入组件到页面
// ==========================================
function loadSharedComponents() {
    // 插入加载屏幕
    document.body.insertAdjacentHTML('afterbegin', getLoadingScreenHTML());
    
    // 插入导航栏
    document.body.insertAdjacentHTML('afterbegin', getNavigationHTML());
    
    // 插入页脚
    document.body.insertAdjacentHTML('beforeend', getFooterHTML());
}

// 页面加载时自动执行
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadSharedComponents);
} else {
    loadSharedComponents();
}