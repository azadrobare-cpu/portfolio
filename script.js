// ===== Theme Toggle =====
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;

// Check for saved theme preference or default to 'light'
const currentTheme = localStorage.getItem('theme') || 'light';
html.setAttribute('data-theme', currentTheme);

themeToggle.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';

    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);

    // Add rotation animation
    themeToggle.style.transform = 'rotate(360deg)';
    setTimeout(() => {
        themeToggle.style.transform = 'rotate(0deg)';
    }, 300);
});

// ===== Language Toggle & Translation =====
const langToggle = document.getElementById('langToggle');
const langText = langToggle.querySelector('.lang-text');

const translations = {
    en: {
        nav_about: "About",
        nav_skills: "Skills",
        nav_projects: "Projects",
        nav_testimonials: "Testimonials",
        nav_blog: "Blog",
        nav_contact: "Contact",
        hero_greeting: "Hi, I'm",
        hero_description: "Multi-passionate developer crafting innovative Android experiences with Kotlin and building robust system architectures. Turning complex problems into elegant solutions.",
        hero_cta_primary: "View My Work",
        hero_cta_secondary: "Get In Touch",
        section_about: "About Me",
        about_text_1: "I'm a <strong>Computer Systems Engineering student</strong> with a passion for creating impactful mobile applications and understanding the intricate workings of computer systems.",
        about_text_2: "As an <strong>Android Kotlin Developer</strong>, I specialize in building modern, user-centric applications using Jetpack Compose, Coroutines, and Material Design 3.",
        about_text_3: "Beyond development, I'm fascinated by <strong>system architecture</strong>, <strong>UI/UX design principles</strong>, and the intersection of hardware and software.",
        section_skills: "Skills & Expertise",
        skill_android_title: "Android Development",
        skill_android_desc: "Building native Android apps with Kotlin and modern architecture patterns",
        skill_systems_title: "System Engineering",
        skill_systems_desc: "Deep understanding of computer architecture and operating systems",
        skill_uiux_title: "UI/UX Design",
        skill_uiux_desc: "Creating intuitive, beautiful interfaces with focus on user experience",
        section_projects: "Featured Projects",
        filter_all: "All",
        project_1_title: "Smart Task Manager",
        project_1_desc: "Modern Android task management app with Jetpack Compose and Material Design 3. Features smart categorization and deadline reminders.",
        btn_view_code: "View Code",
        btn_live_demo: "Live Demo",
        project_2_title: "Weather Forecast App",
        project_2_desc: "Beautiful weather app with real-time forecasts and stunning animations. Integrates with OpenWeather API.",
        project_3_title: "System Monitor",
        project_3_desc: "Real-time system monitoring tool built with C++ for tracking CPU, memory, and network usage.",
        section_testimonials: "Testimonials & Recognition",
        testimonial_1_text: "Jemal Aziz's ability to understand complex system architectures and translate them into elegant Android solutions is remarkable. His code is clean, efficient, and maintainable.",
        testimonial_1_role: "Senior Software Engineer",
        testimonial_2_text: "Working with Jemal Aziz on our Android project was a pleasure. His attention to UI/UX details and understanding of Material Design principles resulted in a beautiful, user-friendly app.",
        testimonial_2_role: "Product Designer",
        testimonial_3_text: "Jemal Aziz demonstrates exceptional problem-solving skills and a deep understanding of computer systems. His contributions to our systems programming course were invaluable.",
        testimonial_3_role: "Computer Science Professor",
        section_blog: "Blog & Ideas",
        blog_1_title: "Modern Android Architecture: MVVM vs MVI",
        blog_1_desc: "Exploring architecture patterns in Android development and when to use each approach.",
        blog_2_title: "Kotlin Coroutines: Beyond the Basics",
        blog_2_desc: "Deep dive into advanced coroutine patterns and structured concurrency.",
        blog_3_title: "Understanding Memory Management",
        blog_3_desc: "How operating systems handle memory allocation and optimization techniques.",
        section_contact: "Get In Touch",
        contact_text: "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Whether you want to collaborate or just say hi, feel free to reach out!",
        btn_send_email: "Send Email",
        footer_text: "&copy; 2025 Jemal Aziz."
    },
    ku: {
        nav_about: "Derbar",
        nav_skills: "Jêhatîbûn",
        nav_projects: "Proje",
        nav_testimonials: "Pêşniyar",
        nav_blog: "Blog",
        nav_contact: "Pêwendî",
        hero_greeting: "Silav, ez",
        hero_description: "Pêşdebirê pir-alî ku bi Kotlin ezmûnên Android-ê yên nûjen diafirîne û mîmariyên pergalê yên bihêz ava dike. Pirsgirêkên tevlihev vediguherîne çareseriyên elegant.",
        hero_cta_primary: "Karên Min Bibîne",
        hero_cta_secondary: "Têkilî Daynin",
        section_about: "Derbarê Min De",
        about_text_1: "Ez <strong>Xwendekarê Endezyariya Pergalên Komputerê</strong> me ku xwedî hewesek mezin im ji bo afirandina sepanên mobîl ên bi bandor û têgihiştina xebata tevlihev a pergalên komputerê.",
        about_text_2: "Wekî <strong>Pêşdebirê Android Kotlin</strong>, ez pispor im di avakirina sepanên nûjen û bikarhêner-navendî de bi karanîna Jetpack Compose, Coroutines, û Material Design 3.",
        about_text_3: "Ji bilî pêşveçûnê, ez bi <strong>mîmariya pergalê</strong>, <strong>prensîbên sêwirana UI/UX</strong>, û hevberdana hardware û nermalavê re eleqedar im.",
        section_skills: "Jêhatîbûn & Pisporî",
        skill_android_title: "Pêşveçûna Android",
        skill_android_desc: "Avakirina sepanên native Android bi Kotlin û qalibên mîmariya nûjen",
        skill_systems_title: "Endezyariya Pergalê",
        skill_systems_desc: "Têgihiştina kûr a mîmariya komputerê û pergalên xebitandinê",
        skill_uiux_title: "Sêwirana UI/UX",
        skill_uiux_desc: "Afirandina navgînên têgihîştî û bedew bi baldarî li ser ezmûna bikarhêner",
        section_projects: "Proyeyên Hilbijartî",
        filter_all: "Hemû",
        project_1_title: "Rêvebirê Peywiran ê Zîrek",
        project_1_desc: "Sepana rêveberiya peywiran a Android-ê ya nûjen bi Jetpack Compose û Material Design 3. Kategorîzekirina zîrek û bîranînên demjimêrê vedihewîne.",
        btn_view_code: "Kodê Bibîne",
        btn_live_demo: "Demo Zindî",
        project_2_title: "Sepana Pêşbîniya Hewa",
        project_2_desc: "Sepana hewayê ya bedew bi pêşbîniyên rast-dem û anîmasyonên balkêş. Bi OpenWeather API re entegre dibe.",
        project_3_title: "Çavdêriya Pergalê",
        project_3_desc: "Amûra çavdêriya pergalê ya rast-dem ku bi C++ hatî çêkirin ji bo şopandina CPU, bîr, û karanîna torê.",
        section_testimonials: "Pêşniyar & Naskirin",
        testimonial_1_text: "Qabiliyeta Jemal Aziz a têgihiştina mîmariyên pergalê yên tevlihev û wergerandina wan bo çareseriyên Android-ê yên elegant balkêş e. Koda wî paqij, bikêrhatî û hêsan e ji bo parastinê.",
        testimonial_1_role: "Endezyarê Nermalavê yê Bilind",
        testimonial_2_text: "Xebata bi Jemal Aziz re li ser projeya me ya Android-ê kêfxweşiyek bû. Baldariya wî li ser hûrguliyên UI/UX û têgihiştina prensîbên Material Design bû sedema sepanek bedew û bikarhêner-dostane.",
        testimonial_2_role: "Sêwirînerê Hilberê",
        testimonial_3_text: "Jemal Aziz jêhatîbûnên çareserkirina pirsgirêkan ên awarte û têgihiştinek kûr a pergalên komputerê nîşan dide. Beşdariyên wî di qursa me ya bernamesaziya pergalê de bêhempa bûn.",
        testimonial_3_role: "Profesorê Zanistên Komputerê",
        section_blog: "Blog & Raman",
        blog_1_title: "Mîmariya Android-a Nûjen: MVVM vs MVI",
        blog_1_desc: "Lêkolîna qalibên mîmariyê di pêşveçûna Android de û kengê her nêzîkatiyek were bikar anîn.",
        blog_2_title: "Kotlin Coroutines: Ji Bingehîn Wêdetir",
        blog_2_desc: "Kûrbûna di qalibên pêşkeftî yên coroutine û hevdemiya pêkhatî de.",
        blog_3_title: "Têgihiştina Rêveberiya Bîrê",
        blog_3_desc: "Çawa pergalên xebitandinê veqetandina bîrê û teknîkên optimîzasyonê birêve dibin.",
        section_contact: "Têkilî Daynin",
        contact_text: "Ez her gav vekirî me ji bo nîqaşkirina projeyên nû, ramanên afirîner, an derfetên ku bibim beşek ji dîtina we. Ma hûn dixwazin hevkariyê bikin an tenê silav bidin, hûn dikarin têkilî daynin!",
        btn_send_email: "E-name Bişîne",
        footer_text: "&copy; 2025 Jemal Aziz."
    },
    ar: {
        nav_about: "حول",
        nav_skills: "المهارات",
        nav_projects: "المشاريع",
        nav_testimonials: "التوصيات",
        nav_blog: "المدونة",
        nav_contact: "اتصل بنا",
        hero_greeting: "مرحباً، أنا",
        hero_description: "مطور متعدد الشغف يبدع تجارب أندرويد مبتكرة باستخدام Kotlin ويبني هياكل أنظمة قوية. أحول المشاكل المعقدة إلى حلول أنيقة.",
        hero_cta_primary: "شاهد أعمالي",
        hero_cta_secondary: "تواصل معي",
        section_about: "عني",
        about_text_1: "أنا <strong>طالب هندسة أنظمة حاسوب</strong> بشغف لإنشاء تطبيقات جوال مؤثرة وفهم العمل المعقد لأنظمة الحاسوب.",
        about_text_2: "كـ <strong>مطور أندرويد Kotlin</strong>، أتخصص في بناء تطبيقات حديثة تتمحور حول المستخدم باستخدام Jetpack Compose و Coroutines و Material Design 3.",
        about_text_3: "بخلاف التطوير، أنا مفتون بـ <strong>بنية الأنظمة</strong>، و <strong>مبادئ تصميم UI/UX</strong>، والتقاطع بين الأجهزة والبرامج.",
        section_skills: "المهارات والخبرات",
        skill_android_title: "تطوير أندرويد",
        skill_android_desc: "بناء تطبيقات أندرويد أصلية باستخدام Kotlin وأنماط البنية الحديثة",
        skill_systems_title: "هندسة الأنظمة",
        skill_systems_desc: "فهم عميق لبنية الحاسوب وأنظمة التشغيل",
        skill_uiux_title: "تصميم UI/UX",
        skill_uiux_desc: "إنشاء واجهات بديهية وجميلة مع التركيز على تجربة المستخدم",
        section_projects: "مشاريع مميزة",
        filter_all: "الكل",
        project_1_title: "مدير المهام الذكي",
        project_1_desc: "تطبيق إدارة مهام أندرويد حديث مع Jetpack Compose و Material Design 3. يتميز بالتصنيف الذكي وتذكيرات المواعيد النهائية.",
        btn_view_code: "عرض الكود",
        btn_live_demo: "عرض مباشر",
        project_2_title: "تطبيق توقعات الطقس",
        project_2_desc: "تطبيق طقس جميل مع توقعات في الوقت الفعلي ورسوم متحركة مذهلة. يتكامل مع OpenWeather API.",
        project_3_title: "مراقب النظام",
        project_3_desc: "أداة مراقبة نظام في الوقت الفعلي مبنية بـ C++ لتتبع وحدة المعالجة المركزية والذاكرة واستخدام الشبكة.",
        section_testimonials: "التوصيات والاعترافات",
        testimonial_1_text: "قدرة جمال عزيز على فهم بنيات الأنظمة المعقدة وترجمتها إلى حلول أندرويد أنيقة رائعة. كوده نظيف وفعال وقابل للصيانة.",
        testimonial_1_role: "مهندس برمجيات أول",
        testimonial_2_text: "كان العمل مع جمال عزيز في مشروع أندرويد الخاص بنا من دواعي سروري. اهتمامه بتفاصيل UI/UX وفهمه لمبادئ Material Design أدى إلى تطبيق جميل وسهل الاستخدام.",
        testimonial_2_role: "مصمم منتجات",
        testimonial_3_text: "يظهر جمال عزيز مهارات استثنائية في حل المشكلات وفهمًا عميقًا لأنظمة الكمبيوتر. مساهماته في دورة برمجة النظم لدينا كانت لا تقدر بثمن.",
        testimonial_3_role: "أستاذ علوم الحاسوب",
        section_blog: "المدونة والأفكار",
        blog_1_title: "بنية أندرويد الحديثة: MVVM مقابل MVI",
        blog_1_desc: "استكشاف أنماط الهندسة المعمارية في تطوير أندرويد ومتى يتم استخدام كل نهج.",
        blog_2_title: "Kotlin Coroutines: ما وراء الأساسيات",
        blog_2_desc: "الغوص العميق في أنماط coroutine المتقدمة والتزامن المنظم.",
        blog_3_title: "فهم إدارة الذاكرة",
        blog_3_desc: "كيفية تعامل أنظمة التشغيل مع تخصيص الذاكرة وتقنيات التحسين.",
        section_contact: "تواصل معي",
        contact_text: "أنا منفتح دائمًا لمناقشة المشاريع الجديدة والأفكار الإبداعية أو الفرص لأكون جزءًا من رؤيتك. سواء كنت ترغب في التعاون أو مجرد قول مرحبًا، فلا تتردد في التواصل!",
        btn_send_email: "إرسال بريد إلكتروني",
        footer_text: "&copy; 2025 جمال عزيز."
    }
};

function updateLanguage(lang) {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = translations[lang][key];
            } else {
                el.innerHTML = translations[lang][key];
            }
        }
    });

    // Update button text
    if (lang === 'en') {
        langText.textContent = 'KU';
        document.body.classList.remove('arabic-layout');
    } else if (lang === 'ku') {
        langText.textContent = 'AR';
        document.body.classList.remove('arabic-layout');
    } else {
        langText.textContent = 'EN';
        document.body.classList.add('arabic-layout');
    }

    // Save preference
    localStorage.setItem('language', lang);
    document.documentElement.lang = lang;
}

// Initialize language
const savedLang = localStorage.getItem('language') || 'en';
updateLanguage(savedLang);

langToggle.addEventListener('click', () => {
    const currentLang = localStorage.getItem('language') || 'en';
    let newLang;
    if (currentLang === 'en') {
        newLang = 'ku';
    } else if (currentLang === 'ku') {
        newLang = 'ar';
    } else {
        newLang = 'en';
    }
    updateLanguage(newLang);
});

// ===== Mobile Navigation =====
const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close mobile menu when clicking on a nav link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// ===== Smooth Scrolling =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ===== Navbar Scroll Effect =====
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = 'none';
    }

    lastScroll = currentScroll;
});

// ===== Typing Animation =====
const typingText = document.querySelector('.typing-text');
const texts = [
    'Computer Systems Engineer',
    'Android Kotlin Developer',
    'Tech Innovator',
    'UI/UX Enthusiast',
    'Problem Solver'
];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100;

function typeText() {
    const currentText = texts[textIndex];

    if (isDeleting) {
        typingText.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 50;
    } else {
        typingText.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 100;
    }

    if (!isDeleting && charIndex === currentText.length) {
        isDeleting = true;
        typingSpeed = 2000; // Pause at end
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        typingSpeed = 500; // Pause before typing next
    }

    setTimeout(typeText, typingSpeed);
}

// Start typing animation
setTimeout(typeText, 1000);

// ===== Scroll Animations =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all sections and cards
document.querySelectorAll('section, .skill-card, .project-card, .blog-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ===== Skill Card Hover Effects =====
const skillCards = document.querySelectorAll('.skill-card');

skillCards.forEach(card => {
    card.addEventListener('mouseenter', function () {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });

    card.addEventListener('mouseleave', function () {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// ===== Project Card Animations =====
document.querySelectorAll('.project-card').forEach((card, index) => {
    card.style.animationDelay = `${index * 0.1}s`;

    card.addEventListener('mouseenter', function () {
        this.style.transform = 'translateY(-12px) rotate(1deg)';
    });

    card.addEventListener('mouseleave', function () {
        this.style.transform = 'translateY(0) rotate(0deg)';
    });
});

// ===== Gradient Orbs Animation =====
const orbs = document.querySelectorAll('.gradient-orb');

document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;

    orbs.forEach((orb, index) => {
        const speed = (index + 1) * 20;
        const x = mouseX * speed;
        const y = mouseY * speed;

        orb.style.transform = `translate(${x}px, ${y}px)`;
    });
});

// ===== Active Nav Link Highlighting =====
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

function highlightNavLink() {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', highlightNavLink);

// ===== Parallax Effect for Hero Section =====
const heroContent = document.querySelector('.hero-content');

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    if (heroContent && scrolled < window.innerHeight) {
        heroContent.style.transform = `translateY(${scrolled * 0.5}px)`;
        heroContent.style.opacity = 1 - (scrolled / 700);
    }
});

// ===== Tag Hover Effects =====
const tags = document.querySelectorAll('.tag');

tags.forEach(tag => {
    tag.addEventListener('mouseenter', function () {
        this.style.transform = 'translateY(-3px) scale(1.05)';
    });

    tag.addEventListener('mouseleave', function () {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// ===== Cursor Trail Effect =====
const createCursorTrail = () => {
    const trail = document.createElement('div');
    trail.className = 'cursor-trail';
    document.body.appendChild(trail);

    document.addEventListener('mousemove', (e) => {
        const dot = document.createElement('div');
        dot.style.position = 'fixed';
        dot.style.width = '6px';
        dot.style.height = '6px';
        dot.style.borderRadius = '50%';
        dot.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
        dot.style.pointerEvents = 'none';
        dot.style.left = e.clientX + 'px';
        dot.style.top = e.clientY + 'px';
        dot.style.opacity = '0.6';
        dot.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        dot.style.zIndex = '9999';

        document.body.appendChild(dot);

        setTimeout(() => {
            dot.style.opacity = '0';
            dot.style.transform = 'scale(2)';
        }, 10);

        setTimeout(() => {
            dot.remove();
        }, 500);
    });
};

// Enable cursor trail effect
createCursorTrail();

// ===== Performance Optimization =====
// Debounce function for scroll events
function debounce(func, wait = 10, immediate = true) {
    let timeout;
    return function () {
        const context = this, args = arguments;
        const later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

// Apply debounce to scroll handlers
window.addEventListener('scroll', debounce(highlightNavLink));

// ===== Loading Animation =====
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// ===== Console Easter Egg =====
console.log('%c👋 Hi there!', 'font-size: 20px; font-weight: bold; color: #667eea;');
console.log('%cLooking at the code? I like your curiosity!', 'font-size: 14px; color: #764ba2;');
console.log('%cFeel free to reach out if you want to collaborate!', 'font-size: 14px; color: #667eea;');

// ===== Project Filtering =====
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        filterBtns.forEach(b => b.classList.remove('active'));
        // Add active class to clicked button
        btn.classList.add('active');

        const filter = btn.getAttribute('data-filter');

        projectCards.forEach(card => {
            const category = card.getAttribute('data-category');

            if (filter === 'all' || category === filter) {
                card.style.display = 'block';
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'scale(1)';
                }, 10);
            } else {
                card.style.opacity = '0';
                card.style.transform = 'scale(0.8)';
                setTimeout(() => {
                    card.style.display = 'none';
                }, 300);
            }
        });
    });
});

// ===== Skill Progress Animation =====
function animateSkillBars() {
    const progressFills = document.querySelectorAll('.progress-fill');

    progressFills.forEach(fill => {
        const progress = fill.getAttribute('data-progress');
        fill.style.width = progress + '%';
    });
}

// Trigger skill animation when section is visible
const skillsSection = document.querySelector('.skills');
if (skillsSection) {
    const skillsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateSkillBars();
                skillsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    skillsObserver.observe(skillsSection);
}

// ===== Enhanced Parallax for Multiple Elements =====
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;

    // Hero parallax
    if (heroContent && scrolled < window.innerHeight) {
        heroContent.style.transform = `translateY(${scrolled * 0.5}px)`;
        heroContent.style.opacity = 1 - (scrolled / 700);
    }

    // Floating elements parallax
    const floatIcons = document.querySelectorAll('.float-icon');
    floatIcons.forEach((icon, index) => {
        const speed = (index + 1) * 0.3;
        icon.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// ===== Lazy Loading Images =====
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.classList.add('loaded');
                    observer.unobserve(img);
                }
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ===== Enhanced Card Interactions =====
document.querySelectorAll('.project-card, .testimonial-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
    });
});

// ===== Initialize =====
document.addEventListener('DOMContentLoaded', () => {
    // Add smooth reveal to hero section
    const hero = document.querySelector('.hero');
    if (hero) {
        hero.style.opacity = '0';
        setTimeout(() => {
            hero.style.transition = 'opacity 1s ease';
            hero.style.opacity = '1';
        }, 100);
    }

    // Initialize all animations
    highlightNavLink();

    // Add entrance animations to cards
    const cards = document.querySelectorAll('.skill-card, .project-card, .blog-card, .testimonial-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        setTimeout(() => {
            card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 100 + (index * 50));
    });
});
