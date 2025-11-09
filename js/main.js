/**
 * NovaSight 官网主要JavaScript文件
 * 包含所有交互功能、动画效果和语言切换
 */

// ==========================================
// 加载完成后初始化
// ==========================================
window.addEventListener('load', () => {
    // 初始化语言系统
    initLanguageSystem();
    
    // 隐藏加载屏幕
    const loadingScreen = document.getElementById('loading-screen');
    setTimeout(() => {
        loadingScreen.classList.add('hidden');
    }, 1000);
    
    // 初始化所有功能
    initializeParticles();
    initializeAOS();
    initializeNavigation();
    initializeScrollEffects();
    initializeContactForm();
});

// ==========================================
// 语言系统初始化
// ==========================================
function initLanguageSystem() {
    // 检查是否是首次访问
    const hasVisited = localStorage.getItem('novasight_has_visited');
    
    if (!hasVisited) {
        // 首次访问，显示语言选择弹窗
        showLanguageModal();
        localStorage.setItem('novasight_has_visited', 'true');
    } else {
        // 不是首次访问，加载保存的语言设置
        const savedLang = initLanguage();
        updatePageLanguage();
    }
    
    // 监听语言切换按钮
    const langSwitcher = document.getElementById('langSwitcher');
    if (langSwitcher) {
        langSwitcher.addEventListener('click', toggleLanguage);
    }
}

// ==========================================
// 显示语言选择弹窗
// ==========================================
function showLanguageModal() {
    const modal = document.createElement('div');
    modal.id = 'languageModal';
    modal.className = 'language-modal';
    modal.innerHTML = `
        <div class="language-modal-overlay"></div>
        <div class="language-modal-content">
            <h2>选择语言 / Choose Language</h2>
            <p>请选择您偏好的浏览语言<br>Please select your preferred language</p>
            <div class="language-options">
                <button class="lang-option" data-lang="zh">
                    <i class="fas fa-globe"></i>
                    <span>中文简体</span>
                    <small>Chinese</small>
                </button>
                <button class="lang-option" data-lang="en">
                    <i class="fas fa-globe"></i>
                    <span>English</span>
                    <small>英语</small>
                </button>
            </div>
        </div>
    `;
    
    document.body.appendChild(modal);
    
    // 添加动画效果
    setTimeout(() => {
        modal.classList.add('show');
    }, 100);
    
    // 监听语言选择
    const langOptions = modal.querySelectorAll('.lang-option');
    langOptions.forEach(option => {
        option.addEventListener('click', () => {
            const selectedLang = option.getAttribute('data-lang');
            switchLanguage(selectedLang);
            closeLanguageModal(modal);
        });
    });
}

// ==========================================
// 关闭语言选择弹窗
// ==========================================
function closeLanguageModal(modal) {
    modal.classList.remove('show');
    setTimeout(() => {
        modal.remove();
    }, 300);
}

// ==========================================
// 切换语言
// ==========================================
function toggleLanguage() {
    const newLang = getCurrentLanguage() === 'zh' ? 'en' : 'zh';
    switchLanguage(newLang);
}

// ==========================================
// 更新页面语言
// ==========================================
function updatePageLanguage() {
    const lang = getCurrentLanguage();
    
    // 更新HTML lang属性
    document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
    
    // 更新语言切换按钮文本
    const langSwitcher = document.getElementById('langSwitcher');
    if (langSwitcher) {
        langSwitcher.innerHTML = `
            <i class="fas fa-globe"></i>
            <span>${lang === 'zh' ? 'EN' : '中文'}</span>
        `;
    }
    
    // 更新所有带有 data-i18n 属性的元素
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const translation = t(key);
        
        if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
            element.placeholder = translation;
        } else {
            element.innerHTML = translation;
        }
    });
    
    // 触发自定义事件，通知语言已更改
    document.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang } }));
}

// ==========================================
// 粒子背景效果
// ==========================================
function initializeParticles() {
    const particlesContainer = document.getElementById('particles');
    if (!particlesContainer) return;
    
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        createParticle(particlesContainer);
    }
    
    // 持续创建新粒子
    setInterval(() => {
        createParticle(particlesContainer);
    }, 3000);
}

function createParticle(container) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    // 随机位置和大小
    const startX = Math.random() * window.innerWidth;
    const size = Math.random() * 4 + 2;
    const duration = Math.random() * 15 + 15;
    const delay = Math.random() * 5;
    
    particle.style.left = startX + 'px';
    particle.style.bottom = '0';
    particle.style.width = size + 'px';
    particle.style.height = size + 'px';
    particle.style.animationDuration = duration + 's';
    particle.style.animationDelay = delay + 's';
    
    container.appendChild(particle);
    
    // 动画结束后移除粒子
    setTimeout(() => {
        particle.remove();
    }, (duration + delay) * 1000);
}

// ==========================================
// 初始化 AOS 动画库
// ==========================================
function initializeAOS() {
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 1000,
            once: true,
            offset: 100,
            easing: 'ease-out-cubic',
        });
    }
}

// ==========================================
// 导航栏功能
// ==========================================
function initializeNavigation() {
    const navbar = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // 滚动时添加背景
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // 汉堡菜单切换
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }
    
    // 点击导航链接后关闭移动菜单
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (hamburger) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    });
    
    // 高亮当前页面的导航项
    highlightCurrentPage();
}

// ==========================================
// 高亮当前页面
// ==========================================
function highlightCurrentPage() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

// ==========================================
// 滚动效果
// ==========================================
function initializeScrollEffects() {
    const backToTopButton = document.getElementById('backToTop');
    
    if (backToTopButton) {
        // 显示/隐藏返回顶部按钮
        window.addEventListener('scroll', () => {
            if (window.scrollY > 500) {
                backToTopButton.classList.add('visible');
            } else {
                backToTopButton.classList.remove('visible');
            }
        });
        
        // 返回顶部功能
        backToTopButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // 视差效果 - Hero区域
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        window.addEventListener('scroll', () => {
            const scrolled = window.scrollY;
            if (scrolled < window.innerHeight) {
                heroContent.style.transform = `translateY(${scrolled * 0.5}px)`;
                heroContent.style.opacity = 1 - (scrolled / window.innerHeight);
            }
        });
    }
}

// ==========================================
// 联系表单处理
// ==========================================
function initializeContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmit);
    }
}

function handleFormSubmit(e) {
    e.preventDefault();
    
    // 获取表单数据
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone')?.value || '',
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value,
    };
    
    // 验证表单
    if (!validateForm(formData)) {
        return;
    }
    
    // 显示提交按钮加载状态
    const submitButton = e.target.querySelector('.btn-submit');
    const originalText = submitButton.innerHTML;
    submitButton.innerHTML = `<span>${t('common.sending')}</span><i class="fas fa-spinner fa-spin"></i>`;
    submitButton.disabled = true;
    
    // 模拟表单提交（实际项目中这里应该调用API）
    setTimeout(() => {
        // 成功提示
        showNotification(t('common.form_success'), 'success');
        
        // 重置表单
        e.target.reset();
        
        // 恢复按钮状态
        submitButton.innerHTML = originalText;
        submitButton.disabled = false;
    }, 2000);
}

function validateForm(data) {
    // 验证邮箱格式
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
        showNotification(t('common.form_error_email'), 'error');
        return false;
    }
    
    // 验证必填字段
    if (!data.name || !data.subject || !data.message) {
        showNotification(t('common.form_error_required'), 'error');
        return false;
    }
    
    return true;
}

function showNotification(message, type = 'info') {
    // 创建通知元素
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i>
            <span>${message}</span>
        </div>
    `;
    
    // 添加样式
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 40px;
        background: ${type === 'success' ? 'linear-gradient(135deg, #4CAF50, #45a049)' : 'linear-gradient(135deg, #f44336, #da190b)'};
        color: white;
        padding: 20px 30px;
        border-radius: 12px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        z-index: 10000;
        animation: slideInRight 0.3s ease-out;
        font-size: 16px;
    `;
    
    document.body.appendChild(notification);
    
    // 3秒后移除
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease-out';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// ==========================================
// 添加通知动画样式
// ==========================================
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
    
    .notification-content {
        display: flex;
        align-items: center;
        gap: 12px;
    }
    
    .notification-content i {
        font-size: 24px;
    }
    
    /* 语言选择弹窗样式 */
    .language-modal {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 10000;
        opacity: 0;
        transition: opacity 0.3s ease;
    }
    
    .language-modal.show {
        opacity: 1;
    }
    
    .language-modal-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(5, 21, 46, 0.95);
        backdrop-filter: blur(10px);
    }
    
    .language-modal-content {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: linear-gradient(135deg, #0a1e3f, #05152E);
        border: 2px solid rgba(255, 156, 0, 0.3);
        border-radius: 30px;
        padding: 60px;
        max-width: 600px;
        width: 90%;
        text-align: center;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
    }
    
    .language-modal-content h2 {
        font-family: 'Orbitron', sans-serif;
        font-size: 36px;
        margin-bottom: 20px;
        background: linear-gradient(135deg, #FF9C00, #ffb347);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
    }
    
    .language-modal-content p {
        font-size: 16px;
        color: #b0b8c9;
        margin-bottom: 40px;
        line-height: 1.8;
    }
    
    .language-options {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 20px;
    }
    
    .lang-option {
        padding: 30px 20px;
        background: rgba(255, 156, 0, 0.05);
        border: 2px solid rgba(255, 156, 0, 0.2);
        border-radius: 20px;
        cursor: pointer;
        transition: all 0.3s;
        font-family: 'Inter', sans-serif;
        color: white;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 12px;
    }
    
    .lang-option:hover {
        background: rgba(255, 156, 0, 0.15);
        border-color: #FF9C00;
        transform: translateY(-5px);
        box-shadow: 0 10px 30px rgba(255, 156, 0, 0.3);
    }
    
    .lang-option i {
        font-size: 48px;
        color: #FF9C00;
    }
    
    .lang-option span {
        font-size: 24px;
        font-weight: 600;
    }
    
    .lang-option small {
        font-size: 14px;
        color: #b0b8c9;
    }
    
    @media (max-width: 768px) {
        .language-modal-content {
            padding: 40px 30px;
        }
        
        .language-modal-content h2 {
            font-size: 28px;
        }
        
        .language-options {
            grid-template-columns: 1fr;
        }
    }
`;
document.head.appendChild(style);

// ==========================================
// 统计数字动画
// ==========================================
function animateValue(element, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        
        const currentValue = Math.floor(progress * (end - start) + start);
        
        // 处理不同格式的数字
        const originalText = element.getAttribute('data-original');
        if (originalText.includes('亿') || originalText.includes('M')) {
            element.textContent = originalText;
        } else if (originalText.includes('%')) {
            element.textContent = currentValue + '%+';
        } else if (originalText.includes('米') || originalText.includes('m')) {
            element.textContent = currentValue + (originalText.includes('米') ? '米' : 'm');
        } else {
            element.textContent = currentValue;
        }
        
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

// 当统计数字进入视口时触发动画
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
            entry.target.classList.add('animated');
            
            const text = entry.target.textContent;
            entry.target.setAttribute('data-original', text);
            
            let targetValue = 0;
            
            if (text.includes('%')) {
                targetValue = 30;
            } else if (text.includes('米') || text.includes('m')) {
                targetValue = 4;
            }
            
            if (targetValue > 0) {
                animateValue(entry.target, 0, targetValue, 2000);
            }
        }
    });
}, { threshold: 0.5 });

// 观察所有统计数字
document.querySelectorAll('.stat-number, .impact-number').forEach(stat => {
    observer.observe(stat);
});

// ==========================================
// 鼠标跟随效果（可选）
// ==========================================
let cursorGlow = null;

function initCursorGlow() {
    cursorGlow = document.createElement('div');
    cursorGlow.className = 'cursor-glow';
    cursorGlow.style.cssText = `
        position: fixed;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(255, 156, 0, 0.5) 0%, transparent 70%);
        pointer-events: none;
        z-index: 9999;
        transform: translate(-50%, -50%);
        transition: width 0.3s, height 0.3s;
    `;
    document.body.appendChild(cursorGlow);
    
    document.addEventListener('mousemove', (e) => {
        cursorGlow.style.left = e.clientX + 'px';
        cursorGlow.style.top = e.clientY + 'px';
    });
    
    // 在可点击元素上放大光晕
    const clickableElements = document.querySelectorAll('a, button, .team-card, .feature-card, .gallery-item');
    clickableElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            cursorGlow.style.width = '40px';
            cursorGlow.style.height = '40px';
        });
        
        element.addEventListener('mouseleave', () => {
            cursorGlow.style.width = '20px';
            cursorGlow.style.height = '20px';
        });
    });
}

// 仅在桌面设备上启用鼠标光晕效果
if (window.innerWidth > 768) {
    initCursorGlow();
}

// ==========================================
// 响应式处理
// ==========================================
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        // 窗口大小改变后重新初始化某些功能
        if (window.innerWidth <= 768 && cursorGlow) {
            cursorGlow.remove();
            cursorGlow = null;
        } else if (window.innerWidth > 768 && !cursorGlow) {
            initCursorGlow();
        }
    }, 250);
});

// ==========================================
// 键盘导航支持
// ==========================================
document.addEventListener('keydown', (e) => {
    // ESC键关闭移动菜单
    if (e.key === 'Escape') {
        const hamburger = document.getElementById('hamburger');
        const navMenu = document.getElementById('nav-menu');
        
        if (navMenu && navMenu.classList.contains('active')) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    }
});

// ==========================================
// 性能优化 - 防抖函数
// ==========================================
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// ==========================================
// 性能优化 - 节流函数
// ==========================================
function throttle(func, limit) {
    let inThrottle;
    return function executedFunction(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// ==========================================
// 页面可见性API - 节省资源
// ==========================================
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        console.log('页面隐藏，暂停动画');
    } else {
        console.log('页面可见，恢复动画');
    }
});

// ==========================================
// 预加载关键资源
// ==========================================
function preloadImages() {
    const imageUrls = [
        // 在这里添加需要预加载的图片URL
    ];
    
    imageUrls.forEach(url => {
        const img = new Image();
        img.src = url;
    });
}

// 页面加载完成后预加载图片
window.addEventListener('load', preloadImages);

// ==========================================
// 错误处理
// ==========================================
window.addEventListener('error', (e) => {
    console.error('全局错误:', e.error);
});

window.addEventListener('unhandledrejection', (e) => {
    console.error('未处理的Promise拒绝:', e.reason);
});

// ==========================================
// 开发者控制台提示
// ==========================================
console.log('%c🚀 NovaSight 智能导盲杖官网', 'color: #FF9C00; font-size: 24px; font-weight: bold;');
console.log('%c让科技成为新的眼睛', 'color: #b0b8c9; font-size: 16px;');
console.log('%c如有技术问题，请联系: support@novasight.com', 'color: #FF9C00; font-size: 14px;');

// ==========================================
// 导出函数供外部调用
// ==========================================
window.NovaSight = {
    showNotification,
    initializeParticles,
    debounce,
    throttle,
    switchLanguage,
    getCurrentLanguage
};