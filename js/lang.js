/**
 * NovaSight 多语言数据
 * 支持中文和英文
 */

const translations = {
    zh: {
        // 导航栏
        nav: {
            home: '首页',
            about: '关于我们',
            team: '团队',
            innovation: '创新产品',
            gallery: '模型展示',
            impact: '社会影响',
            brand: '品牌',
            timeline: '历程',
            contact: '联系'
        },
        
        // 首页
        home: {
            badge: '全球首创智能导盲系统',
            title: 'NovaSight',
            subtitle: '让科技成为新的眼睛',
            description: '全球首款具有实时语音交互功能的地图导航智能导盲杖<br>赋予视障者安全与尊严的自由出行',
            btn_learn: '了解产品',
            btn_contact: '联系我们',
            stat1_num: '2.8亿',
            stat1_label: '全球视障人群',
            stat2_num: '≥95%',
            stat2_label: '导航精度',
            stat3_num: '4米',
            stat3_label: '障碍识别距离',
            stat4_num: '30%+',
            stat4_label: '碰撞事件减少',
            scroll_text: '向下滚动探索',
            quick_section_tag: 'EXPLORE',
            quick_section_title: '探索 NovaSight',
            quick_section_desc: '了解我们的创新产品与愿景',
            quick_about_desc: '用科技点亮无障碍出行的未来',
            quick_innovation_desc: 'AI驱动的智能导盲系统',
            quick_team_desc: '多学科协作驱动创新',
            quick_impact_desc: '创造包容与平等的社会',
            quick_gallery_desc: '从概念到原型的技术落地',
            quick_contact_desc: '携手创造无障碍未来'
        },
        
        // 关于我们
        about: {
            tag: 'ABOUT US',
            title: '关于我们',
            description: '用科技点亮无障碍出行的未来',
            mission_title: '我们的使命',
            mission_p1: '全球约2.8亿视障者，70%因出行风险减少独立出行。传统盲杖仅识别地面障碍，缺乏环境理解与动态预警。',
            mission_p2: 'NovaSight 团队致力于通过创新技术打破视障人群的出行障碍，让每一位视障者都能安全、自主、有尊严地融入现代城市生活。',
            vision_title: '我们的愿景',
            vision_p: '成为全球领先的智能辅助出行解决方案提供商，用AI技术赋能每一个需要帮助的人，创造一个真正无障碍的包容社会。',
            value1_title: '关怀与包容',
            value1_desc: '以用户需求为核心',
            value2_title: '创新与突破',
            value2_desc: '持续技术革新',
            value3_title: '安全与可靠',
            value3_desc: '严格品质把控',
            card1_title: '为什么做这件事？',
            card1_desc: '传统导盲设备无法满足现代城市复杂环境下的出行需求。导盲犬稀缺且昂贵，智能盲杖探测范围小、适应性差。我们相信，每个人都应该拥有自由出行的权利。',
            card2_title: '我们的优势',
            card2_desc: '全球首款融合实时语音交互与地图导航的智能导盲杖，结合AI感知、3D环境建模与多传感器融合技术，打造软硬一体的闭环生态。'
        },
        
        // 团队
        team: {
            tag: 'TEAM',
            title: '核心团队',
            description: '多学科协作，用专业与热情驱动创新',
            member1_name: '技术负责人',
            member1_role: 'AI算法 & 系统架构',
            member1_desc: '负责导航算法、环境感知与系统集成',
            member2_name: '硬件工程师',
            member2_role: '结构设计 & 传感器集成',
            member2_desc: '负责产品结构设计与硬件开发',
            member3_name: '软件开发',
            member3_role: 'App开发 & 云端服务',
            member3_desc: '负责配套App与后端系统',
            member4_name: '产品经理',
            member4_role: '用户研究 & 体验设计',
            member4_desc: '负责产品规划与用户体验优化',
            member5_name: '市场运营',
            member5_role: '渠道拓展 & 品牌推广',
            member5_desc: '负责市场合作与品牌建设',
            member6_name: '测试工程师',
            member6_role: '质量保障 & 用户反馈',
            member6_desc: '负责产品测试与质量把控',
            highlight_title: '团队特色',
            highlight1: '跨学科协作',
            highlight2: '技术驱动',
            highlight3: '用户为先',
            highlight4: '追求卓越'
        },
        
        // 创新产品
        innovation: {
            tag: 'INNOVATION',
            title: '创新产品',
            description: 'AI驱动的智能导盲系统',
            product_name: 'NovaSight 智能导盲杖',
            intro_title: '产品介绍',
            intro_desc: 'NovaSight 是一款面向视障人群的智能出行辅助设备，融合语音输入智能导航、超声波探测与 GPS 定位技术，能够构建三维环境感知，并通过震动反馈与语音播报实时传递行走指引。',
            feature1_title: '语音交互导航',
            feature1_desc: '自然语言输入目的地，实时语音播报路线指引，解放双手，安全便捷',
            feature2_title: 'AI环境感知',
            feature2_desc: '融合视觉与超声波传感器，实时构建3D环境模型，智能识别障碍物类型',
            feature3_title: '智能路径规划',
            feature3_desc: '结合GPS与地图数据，自动规划最优无障碍路线，实时动态调整',
            feature4_title: '震动反馈系统',
            feature4_desc: '多点震动反馈，直观传递方向与障碍信息，配合语音形成双重提示',
            feature5_title: '配套App管理',
            feature5_desc: '个性化设置、路线收藏、使用记录分析，打造软硬一体化生态',
            feature6_title: '超长续航',
            feature6_desc: '优化电源管理，单次充电支持全天使用，快充技术1小时满电',
            specs_title: '技术参数',
            spec1_label: '导航精度',
            spec1_value: '≥ 95%',
            spec2_label: '障碍识别距离',
            spec2_value: '最远 4米',
            spec3_label: '响应时间',
            spec3_value: '毫秒级',
            spec4_label: '续航时间',
            spec4_value: '8-10小时',
            spec5_label: '重量',
            spec5_value: '约 500g',
            spec6_label: '防水等级',
            spec6_value: 'IPX5'
        },
        
        // 模型展示
        gallery: {
            tag: 'MODEL GALLERY',
            title: '模型展示',
            description: '从概念到原型的技术落地',
            item1_title: '产品3D建模',
            item1_desc: '人体工学设计，轻量化结构',
            item2_title: '传感器布局',
            item2_desc: '多传感器融合设计',
            item3_title: '核心控制板',
            item3_desc: '高集成度嵌入式系统',
            item4_title: '实地测试',
            item4_desc: '多场景适应性验证',
            item5_title: '用户体验测试',
            item5_desc: '真实用户反馈收集',
            item6_title: '最终原型',
            item6_desc: '量产前完整功能验证',
            note: '更多产品细节图片与演示视频将持续更新'
        },
        
        // 社会影响
        impact: {
            tag: 'IMPACT',
            title: '社会影响',
            description: '用科技创造包容与平等',
            stat1_num: '2.8亿',
            stat1_label: '全球视障人群',
            stat1_desc: 'WHO数据显示，全球约2.8亿人受视力障碍影响',
            stat2_num: '70%',
            stat2_label: '减少独立出行',
            stat2_desc: '因出行安全担忧，大部分视障者减少外出频率',
            stat3_num: '30%+',
            stat3_label: '碰撞事件减少',
            stat3_desc: '使用NovaSight后，用户碰撞事件显著降低',
            area1_title: '推动无障碍城市建设',
            area1_desc: 'NovaSight 通过收集真实的出行障碍数据，为城市规划部门提供无障碍设施优化建议，推动智慧城市的包容性发展。',
            area2_title: '提升就业与社会参与',
            area2_desc: '安全的出行能力是视障者参与工作、教育和社交的基础。NovaSight 帮助用户重获独立，提升生活质量和社会融入度。',
            area3_title: '全球辅助技术创新',
            area3_desc: '作为全球首款融合AI导航与语音交互的智能导盲杖，NovaSight 为辅助技术领域树立新标杆，推动行业技术升级。',
            area4_title: '公益合作与普及',
            area4_desc: '我们积极与残联、康复中心、NGO组织合作，通过B2G采购与公益项目，让更多视障者享受科技带来的便利。',
            quote_text: '"科技不应该有界限，每个人都应该平等地享受现代生活的便利。NovaSight 不仅仅是一款产品，更是我们对包容社会的承诺。"',
            quote_author: '— NovaSight 团队'
        },
        
        // 品牌
        brand: {
            tag: 'BRAND',
            title: '品牌形象',
            description: '科技与人文的完美融合',
            tagline: '让科技成为新的眼睛',
            colors_title: '品牌色彩',
            color1_name: '活力橙',
            color1_desc: '创新、温暖、希望',
            color2_name: '深空蓝',
            color2_desc: '科技、稳重、信赖',
            color3_name: '纯白',
            color3_desc: '纯净、清晰、未来',
            elements_title: '品牌元素',
            element1_title: '字体系统',
            element1_primary: 'Orbitron',
            element1_desc1: '主标题使用，科技感十足',
            element1_secondary: 'Inter',
            element1_desc2: '正文使用，现代简洁',
            element2_title: '图标语言',
            element2_desc: '简洁线条，科技风格',
            element3_title: '视觉风格',
            element3_desc1: '渐变色彩、毛玻璃效果',
            element3_desc2: '动态交互、科技氛围',
            element3_desc3: '简约现代、注重体验',
            applications_title: '品牌应用',
            app1: '移动应用界面',
            app2: '产品包装设计',
            app3: '品牌周边文创',
            app4: '宣传物料设计'
        },
        
        // 项目历程
        timeline: {
            tag: 'TIMELINE',
            title: '项目历程',
            description: '从概念到现实的创新之路',
            item1_date: '2024 Q1',
            item1_title: '项目启动',
            item1_desc: '团队组建，市场调研，确定产品方向与核心价值主张',
            item2_date: '2024 Q2',
            item2_title: '概念设计',
            item2_desc: '完成产品概念设计，技术可行性分析，用户需求调研与验证',
            item3_date: '2024 Q3',
            item3_title: '原型开发',
            item3_desc: '硬件原型制作，AI算法开发，传感器融合技术验证',
            item4_date: '2024 Q4',
            item4_title: '测试优化',
            item4_desc: '多场景实地测试，用户体验优化，功能迭代升级',
            item5_date: '2025 Q1',
            item5_title: '试点推广',
            item5_desc: '与康复中心、公益组织合作，小规模试点部署',
            item6_date: '2025 Q2',
            item6_title: '专利申请',
            item6_desc: '结构设计专利、软件系统专利申请，建立技术壁垒',
            item7_date: '2025 Q3',
            item7_title: '商业化准备',
            item7_desc: '生产供应链建设，渠道合作谈判，市场推广策划',
            item8_date: '2025 Q4',
            item8_title: '正式发布',
            item8_desc: '产品正式上市，全国渠道铺开，B2G合作落地（规划中）'
        },
        
        // 联系我们
        contact: {
            tag: 'CONTACT',
            title: '联系我们',
            description: '期待与您携手创造无障碍未来',
            info_email_title: '邮箱',
            info_email1: 'contact@novasight.com',
            info_email2: 'support@novasight.com',
            info_phone_title: '电话',
            info_phone: '+86 400-XXX-XXXX',
            info_phone_note: '工作日 9:00-18:00',
            info_address_title: '地址',
            info_address: '中国·上海',
            info_address_note: '具体地址请邮件咨询',
            social_title: '关注我们',
            form_name: '姓名',
            form_email: '邮箱',
            form_phone: '电话',
            form_subject: '主题',
            form_subject_placeholder: '请选择',
            form_subject1: '产品咨询',
            form_subject2: '合作洽谈',
            form_subject3: '媒体采访',
            form_subject4: '技术支持',
            form_subject5: '其他',
            form_message: '留言',
            form_submit: '发送消息',
            partners_title: '合作伙伴',
            partners_desc: '我们正在积极寻求与康复中心、残联组织、公益机构、科技企业的合作',
            partner1: '康复机构',
            partner2: '公益组织',
            partner3: '政府部门',
            partner4: '渠道商'
        },
        
        // 页脚
        footer: {
            tagline: '让科技成为新的眼睛',
            desc: '用AI技术赋能视障人群，<br>创造更包容的无障碍社会',
            product_title: '产品',
            product_intro: '产品介绍',
            product_specs: '技术参数',
            product_gallery: '模型展示',
            company_title: '公司',
            company_about: '关于我们',
            company_team: '团队介绍',
            company_timeline: '发展历程',
            resources_title: '资源',
            resources_impact: '社会影响',
            resources_brand: '品牌资源',
            resources_media: '媒体联系',
            contact_title: '联系',
            contact_us: '联系我们',
            contact_business: '商务合作',
            contact_support: '技术支持',
            copyright: '© 2025 NovaSight. All rights reserved.',
            note: '本网站为 NovaSight 智能导盲杖官方展示平台'
        },
        
        // 通用按钮和消息
        common: {
            loading: '加载中...',
            sending: '发送中...',
            success: '成功！',
            error: '错误',
            required: '必填',
            learn_more: '了解更多',
            back_to_top: '返回顶部',
            form_success: '感谢您的留言！我们会尽快与您联系。',
            form_error_email: '请输入有效的邮箱地址',
            form_error_required: '请填写所有必填字段'
        },
        
        // 语言选择弹窗
        langModal: {
            title: '选择语言 / Choose Language',
            subtitle: '请选择您偏好的浏览语言',
            chinese: '中文',
            english: 'English',
            confirm: '确认'
        }
    },
    
    en: {
        // Navigation
        nav: {
            home: 'Home',
            about: 'About',
            team: 'Team',
            innovation: 'Innovation',
            gallery: 'Gallery',
            impact: 'Impact',
            brand: 'Brand',
            timeline: 'Timeline',
            contact: 'Contact'
        },
        
        // Home
        home: {
            badge: 'World\'s First Smart Navigation Cane',
            title: 'NovaSight',
            subtitle: 'Technology as Your New Eyes',
            description: 'The world\'s first map-navigation smart guiding cane with real-time voice interaction,<br>empowering the visually impaired with safe and dignified mobility',
            btn_learn: 'Learn More',
            btn_contact: 'Contact Us',
            stat1_num: '285M',
            stat1_label: 'Visually Impaired Globally',
            stat2_num: '≥95%',
            stat2_label: 'Navigation Accuracy',
            stat3_num: '4m',
            stat3_label: 'Obstacle Detection Range',
            stat4_num: '30%+',
            stat4_label: 'Collision Reduction',
            scroll_text: 'Scroll to Explore',
            quick_section_tag: 'EXPLORE',
            quick_section_title: 'Explore NovaSight',
            quick_section_desc: 'Discover our innovations and vision',
            quick_about_desc: 'Illuminating the future of accessible mobility with technology',
            quick_innovation_desc: 'AI-powered smart guiding system',
            quick_team_desc: 'Multidisciplinary collaboration driving innovation',
            quick_impact_desc: 'Building an inclusive and equal society',
            quick_gallery_desc: 'From concept to prototype',
            quick_contact_desc: 'Co-create an accessible future'
        },
        
        // About
        about: {
            tag: 'ABOUT US',
            title: 'About Us',
            description: 'Lighting the Future of Accessible Mobility with Technology',
            mission_title: 'Our Mission',
            mission_p1: 'WHO reports 285M visually impaired globally, 70% avoid solo travel due to navigation fear. Traditional canes detect only ground-level obstacles and lack environmental awareness.',
            mission_p2: 'NovaSight team is dedicated to breaking mobility barriers for the visually impaired through innovative technology, enabling every user to navigate safely, independently, and with dignity in modern urban life.',
            vision_title: 'Our Vision',
            vision_p: 'To become the world\'s leading provider of intelligent assistive mobility solutions, empowering everyone in need with AI technology and creating a truly inclusive society.',
            value1_title: 'Care & Inclusion',
            value1_desc: 'User-centric approach',
            value2_title: 'Innovation & Breakthrough',
            value2_desc: 'Continuous tech evolution',
            value3_title: 'Safety & Reliability',
            value3_desc: 'Strict quality control',
            card1_title: 'Why We Do This?',
            card1_desc: 'Traditional guide devices cannot meet complex urban navigation needs. Guide dogs are scarce and costly; smart canes have limited range and adaptability. We believe everyone deserves the right to move freely.',
            card2_title: 'Our Advantage',
            card2_desc: 'World\'s first smart cane integrating real-time voice interaction with map navigation, combining AI perception, 3D environmental modeling, and multi-sensor fusion to create a comprehensive hardware-software ecosystem.'
        },
        
        // Team
        team: {
            tag: 'TEAM',
            title: 'Core Team',
            description: 'Multidisciplinary Collaboration Driving Innovation',
            member1_name: 'Tech Lead',
            member1_role: 'AI Algorithms & System Architecture',
            member1_desc: 'Navigation algorithms, perception systems, and integration',
            member2_name: 'Hardware Engineer',
            member2_role: 'Structure Design & Sensor Integration',
            member2_desc: 'Product structure design and hardware development',
            member3_name: 'Software Developer',
            member3_role: 'App Development & Cloud Services',
            member3_desc: 'Companion app and backend systems',
            member4_name: 'Product Manager',
            member4_role: 'User Research & Experience Design',
            member4_desc: 'Product planning and UX optimization',
            member5_name: 'Marketing Manager',
            member5_role: 'Channel Expansion & Brand Promotion',
            member5_desc: 'Market partnerships and brand building',
            member6_name: 'QA Engineer',
            member6_role: 'Quality Assurance & User Feedback',
            member6_desc: 'Product testing and quality control',
            highlight_title: 'Team Highlights',
            highlight1: 'Cross-disciplinary',
            highlight2: 'Tech-driven',
            highlight3: 'User-first',
            highlight4: 'Excellence pursuit'
        },
        
        // Innovation
        innovation: {
            tag: 'INNOVATION',
            title: 'Innovation',
            description: 'AI-Driven Smart Navigation System',
            product_name: 'NovaSight Smart Guiding Cane',
            intro_title: 'Product Introduction',
            intro_desc: 'NovaSight is an intelligent mobility-assistance device for the visually impaired. It integrates voice-input navigation, ultrasonic detection, and GPS positioning to build a 3D perception of the environment, providing real-time walking guidance through vibration feedback and voice prompts.',
            feature1_title: 'Voice Interactive Navigation',
            feature1_desc: 'Natural language destination input, real-time voice route guidance, hands-free and safe',
            feature2_title: 'AI Environmental Perception',
            feature2_desc: 'Fusing vision and ultrasonic sensors to build 3D environmental models and identify obstacle types',
            feature3_title: 'Smart Path Planning',
            feature3_desc: 'Combining GPS and map data to automatically plan optimal accessible routes with real-time adjustments',
            feature4_title: 'Vibration Feedback System',
            feature4_desc: 'Multi-point vibration feedback intuitively conveys direction and obstacle info with dual voice alerts',
            feature5_title: 'Companion App Management',
            feature5_desc: 'Personalized settings, route favorites, usage analytics in a complete hardware-software ecosystem',
            feature6_title: 'Extended Battery Life',
            feature6_desc: 'Optimized power management for all-day use, fast charging to full in 1 hour',
            specs_title: 'Technical Specifications',
            spec1_label: 'Navigation Accuracy',
            spec1_value: '≥ 95%',
            spec2_label: 'Detection Range',
            spec2_value: 'Up to 4m',
            spec3_label: 'Response Time',
            spec3_value: 'Milliseconds',
            spec4_label: 'Battery Life',
            spec4_value: '8-10 hours',
            spec5_label: 'Weight',
            spec5_value: '~500g',
            spec6_label: 'Water Resistance',
            spec6_value: 'IPX5'
        },
        
        // Gallery
        gallery: {
            tag: 'MODEL GALLERY',
            title: 'Model Gallery',
            description: 'From Concept to Prototype',
            item1_title: 'Product 3D Modeling',
            item1_desc: 'Ergonomic design, lightweight structure',
            item2_title: 'Sensor Layout',
            item2_desc: 'Multi-sensor fusion design',
            item3_title: 'Core Control Board',
            item3_desc: 'Highly integrated embedded system',
            item4_title: 'Field Testing',
            item4_desc: 'Multi-scenario adaptability verification',
            item5_title: 'User Experience Testing',
            item5_desc: 'Real user feedback collection',
            item6_title: 'Final Prototype',
            item6_desc: 'Complete functional verification before production',
            note: 'More product detail images and demo videos coming soon'
        },
        
        // Impact
        impact: {
            tag: 'IMPACT',
            title: 'Social Impact',
            description: 'Creating Inclusion and Equality Through Technology',
            stat1_num: '285M',
            stat1_label: 'Visually Impaired Globally',
            stat1_desc: 'WHO data shows approximately 285 million people worldwide affected by vision impairment',
            stat2_num: '70%',
            stat2_label: 'Reduced Independent Travel',
            stat2_desc: 'Due to safety concerns, most visually impaired reduce outdoor frequency',
            stat3_num: '30%+',
            stat3_label: 'Collision Reduction',
            stat3_desc: 'After using NovaSight, users experience significant reduction in collision incidents',
            area1_title: 'Promoting Accessible Urban Development',
            area1_desc: 'NovaSight collects real mobility barrier data, providing optimization recommendations for urban planning departments to advance inclusive smart city development.',
            area2_title: 'Enhancing Employment & Social Participation',
            area2_desc: 'Safe mobility is fundamental for visually impaired individuals to participate in work, education, and social activities. NovaSight helps users regain independence and improve quality of life.',
            area3_title: 'Global Assistive Technology Innovation',
            area3_desc: 'As the world\'s first smart cane integrating AI navigation with voice interaction, NovaSight sets new standards in assistive technology and drives industry advancement.',
            area4_title: 'Public Welfare Collaboration',
            area4_desc: 'We actively partner with disability associations, rehabilitation centers, and NGOs through B2G procurement and public welfare projects to bring technology benefits to more visually impaired users.',
            quote_text: '"Technology should have no boundaries. Everyone deserves equal access to modern life\'s conveniences. NovaSight is not just a product—it\'s our commitment to an inclusive society."',
            quote_author: '— NovaSight Team'
        },
        
        // Brand
        brand: {
            tag: 'BRAND',
            title: 'Brand Identity',
            description: 'Perfect Fusion of Technology and Humanity',
            tagline: 'Technology as Your New Eyes',
            colors_title: 'Brand Colors',
            color1_name: 'Vibrant Orange',
            color1_desc: 'Innovation, Warmth, Hope',
            color2_name: 'Deep Space Blue',
            color2_desc: 'Technology, Stability, Trust',
            color3_name: 'Pure White',
            color3_desc: 'Purity, Clarity, Future',
            elements_title: 'Brand Elements',
            element1_title: 'Typography',
            element1_primary: 'Orbitron',
            element1_desc1: 'Headings with strong tech feel',
            element1_secondary: 'Inter',
            element1_desc2: 'Body text, modern and clean',
            element2_title: 'Icon Language',
            element2_desc: 'Clean lines, tech style',
            element3_title: 'Visual Style',
            element3_desc1: 'Gradient colors, frosted glass',
            element3_desc2: 'Dynamic interaction, tech atmosphere',
            element3_desc3: 'Minimal modern, experience-focused',
            applications_title: 'Brand Applications',
            app1: 'Mobile App Interface',
            app2: 'Product Packaging Design',
            app3: 'Brand Merchandise',
            app4: 'Marketing Materials'
        },
        
        // Timeline
        timeline: {
            tag: 'TIMELINE',
            title: 'Project Timeline',
            description: 'Innovation Journey from Concept to Reality',
            item1_date: '2024 Q1',
            item1_title: 'Project Launch',
            item1_desc: 'Team formation, market research, product direction and core value proposition',
            item2_date: '2024 Q2',
            item2_title: 'Concept Design',
            item2_desc: 'Product concept design completion, technical feasibility analysis, user requirement research',
            item3_date: '2024 Q3',
            item3_title: 'Prototype Development',
            item3_desc: 'Hardware prototype fabrication, AI algorithm development, sensor fusion technology verification',
            item4_date: '2024 Q4',
            item4_title: 'Testing & Optimization',
            item4_desc: 'Multi-scenario field testing, UX optimization, feature iteration and upgrade',
            item5_date: '2025 Q1',
            item5_title: 'Pilot Deployment',
            item5_desc: 'Partnership with rehabilitation centers and NGOs for small-scale pilot deployment',
            item6_date: '2025 Q2',
            item6_title: 'Patent Application',
            item6_desc: 'Structure design and software system patent applications, establishing technical barriers',
            item7_date: '2025 Q3',
            item7_title: 'Commercialization Prep',
            item7_desc: 'Production supply chain setup, channel partnership negotiations, marketing planning',
            item8_date: '2025 Q4',
            item8_title: 'Official Launch',
            item8_desc: 'Product official launch, nationwide channel deployment, B2G partnerships (planned)'
        },
        
        // Contact
        contact: {
            tag: 'CONTACT',
            title: 'Contact Us',
            description: 'Let\'s Create an Accessible Future Together',
            info_email_title: 'Email',
            info_email1: 'contact@novasight.com',
            info_email2: 'support@novasight.com',
            info_phone_title: 'Phone',
            info_phone: '+86 400-XXX-XXXX',
            info_phone_note: 'Weekdays 9:00-18:00',
            info_address_title: 'Address',
            info_address: 'Shanghai, China',
            info_address_note: 'Detailed address available via email',
            social_title: 'Follow Us',
            form_name: 'Name',
            form_email: 'Email',
            form_phone: 'Phone',
            form_subject: 'Subject',
            form_subject_placeholder: 'Please select',
            form_subject1: 'Product Inquiry',
            form_subject2: 'Partnership',
            form_subject3: 'Media Interview',
            form_subject4: 'Technical Support',
            form_subject5: 'Other',
            form_message: 'Message',
            form_submit: 'Send Message',
            partners_title: 'Partners',
            partners_desc: 'We are actively seeking partnerships with rehabilitation centers, disability associations, NGOs, and tech companies',
            partner1: 'Rehabilitation Centers',
            partner2: 'NGOs',
            partner3: 'Government Agencies',
            partner4: 'Distributors'
        },
        
        // Footer
        footer: {
            tagline: 'Technology as Your New Eyes',
            desc: 'Empowering visually impaired with AI,<br>Creating a more inclusive accessible society',
            product_title: 'Product',
            product_intro: 'Introduction',
            product_specs: 'Specifications',
            product_gallery: 'Gallery',
            company_title: 'Company',
            company_about: 'About Us',
            company_team: 'Team',
            company_timeline: 'Timeline',
            resources_title: 'Resources',
            resources_impact: 'Impact',
            resources_brand: 'Brand',
            resources_media: 'Media',
            contact_title: 'Contact',
            contact_us: 'Contact Us',
            contact_business: 'Business',
            contact_support: 'Support',
            copyright: '© 2025 NovaSight. All rights reserved.',
            note: 'Official website for NovaSight Smart Guiding Cane'
        },
        
        // Common
        common: {
            loading: 'Loading...',
            sending: 'Sending...',
            success: 'Success!',
            error: 'Error',
            required: 'Required',
            learn_more: 'Learn More',
            back_to_top: 'Back to Top',
            form_success: 'Thank you for your message! We will contact you soon.',
            form_error_email: 'Please enter a valid email address',
            form_error_required: 'Please fill in all required fields'
        },
        
        // Language Modal
        langModal: {
            title: 'Choose Language / 选择语言',
            subtitle: 'Please select your preferred language',
            chinese: '中文',
            english: 'English',
            confirm: 'Confirm'
        }
    }
};

// 默认语言
let currentLang = 'zh';

// 获取翻译文本
function t(key) {
    const keys = key.split('.');
    let value = translations[currentLang];
    
    for (const k of keys) {
        value = value[k];
        if (value === undefined) {
            console.warn(`Translation key not found: ${key}`);
            return key;
        }
    }
    
    return value;
}

// 切换语言
function switchLanguage(lang) {
    if (lang !== 'zh' && lang !== 'en') {
        console.error('Invalid language:', lang);
        return;
    }
    
    currentLang = lang;
    localStorage.setItem('novasight_lang', lang);
    updatePageLanguage();
}

// 获取当前语言
function getCurrentLanguage() {
    return currentLang;
}

// 初始化语言
function initLanguage() {
    // 从localStorage读取语言设置
    const savedLang = localStorage.getItem('novasight_lang');
    
    if (savedLang && (savedLang === 'zh' || savedLang === 'en')) {
        currentLang = savedLang;
    } else {
        // 检测浏览器语言
        const browserLang = navigator.language || navigator.userLanguage;
        currentLang = browserLang.startsWith('zh') ? 'zh' : 'en';
    }
    
    return currentLang;
}

// 导出函数
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { translations, t, switchLanguage, getCurrentLanguage, initLanguage };
}