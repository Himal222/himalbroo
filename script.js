// Theme Toggle Functionality
const themeToggle = document.getElementById('themeToggle');
const htmlElement = document.documentElement;
const themeIcon = themeToggle.querySelector('i');

// Check for saved theme preference or default to 'light' mode
const currentTheme = localStorage.getItem('theme') || 'light';
htmlElement.setAttribute('data-theme', currentTheme);

// Update icon based on current theme
if (currentTheme === 'dark') {
    themeIcon.classList.remove('fa-moon');
    themeIcon.classList.add('fa-sun');
}

// Theme toggle click event
themeToggle.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    // Update theme
    htmlElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    // Update icon with animation
    themeIcon.style.transform = 'rotate(360deg)';
    
    setTimeout(() => {
        if (newTheme === 'dark') {
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
        } else {
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
        }
        themeIcon.style.transform = 'rotate(0deg)';
    }, 150);
});

// Mobile Menu Toggle
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Scroll animations for elements
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            // Add staggered delay for multiple elements
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                entry.target.classList.add('animated');
            }, index * 100);
        }
    });
}, observerOptions);

// Observe elements for animation with different effects
document.querySelectorAll('.project-item').forEach((element, index) => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(40px) scale(0.95)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)';
    observer.observe(element);
});

document.querySelectorAll('.research-entry').forEach((element, index) => {
    element.style.opacity = '0';
    element.style.transform = 'translateX(-30px)';
    element.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
    observer.observe(element);
});

document.querySelectorAll('.testimonial-card').forEach((element, index) => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(40px)';
    element.style.transition = `opacity 0.6s ease ${index * 0.2}s, transform 0.6s ease ${index * 0.2}s`;
    observer.observe(element);
});

document.querySelectorAll('.skill-card').forEach((element, index) => {
    element.style.opacity = '0';
    element.style.transform = 'scale(0.8)';
    element.style.transition = `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s`;
    observer.observe(element);
});

// Animate section headers on scroll
const headerObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.3
});

document.querySelectorAll('.section-header').forEach(header => {
    header.style.opacity = '0';
    header.style.transform = 'translateY(30px)';
    header.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    headerObserver.observe(header);
});

// Animate about content
const aboutObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const aboutText = entry.target.querySelector('.about-text');
            const academicsSection = entry.target.querySelector('.academics-section');
            
            if (aboutText) {
                aboutText.style.opacity = '1';
                aboutText.style.transform = 'translateX(0)';
            }
            if (academicsSection) {
                setTimeout(() => {
                    academicsSection.style.opacity = '1';
                    academicsSection.style.transform = 'translateX(0)';
                }, 300);
            }
        }
    });
}, { threshold: 0.2 });

const aboutContent = document.querySelector('.about-content');
if (aboutContent) {
    const aboutText = aboutContent.querySelector('.about-text');
    const academicsSection = aboutContent.querySelector('.academics-section');
    
    if (aboutText) {
        aboutText.style.opacity = '0';
        aboutText.style.transform = 'translateX(-40px)';
        aboutText.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    }
    if (academicsSection) {
        academicsSection.style.opacity = '0';
        academicsSection.style.transform = 'translateX(40px)';
        academicsSection.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    }
    
    aboutObserver.observe(aboutContent);
}

// Animate gallery items on scroll
const galleryObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.filter = 'blur(0)';
        }
    });
}, { threshold: 0.2 });

document.querySelectorAll('.gallery-item').forEach(item => {
    item.style.opacity = '0';
    item.style.filter = 'blur(5px)';
    item.style.transition = 'opacity 1s ease, filter 1s ease';
    galleryObserver.observe(item);
});

// Active navigation highlight on scroll
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Keep section scrolling stable (no hero parallax shift)
const hero = document.querySelector('.hero');
if (hero) {
    hero.style.transform = 'none';
}

// Preload images for better performance
window.addEventListener('load', () => {
    const images = document.querySelectorAll('img[data-src]');
    images.forEach(img => {
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
    });
});

// Add typing effect to greeting (optional enhancement)
const greetingElement = document.querySelector('.greeting');
if (greetingElement) {
    const greetingText = greetingElement.textContent;
    greetingElement.textContent = '';
    let i = 0;
    
    function typeGreeting() {
        if (i < greetingText.length) {
            greetingElement.textContent += greetingText.charAt(i);
            i++;
            setTimeout(typeGreeting, 100);
        }
    }
    
    // Start typing after a short delay
    setTimeout(typeGreeting, 500);
}

// Gallery continuous loop slider
function initGalleryLoop() {
    const gallerySlider = document.querySelector('.gallery-slider');
    const galleryTrack = document.querySelector('.gallery-track');
    if (!gallerySlider || !galleryTrack) return;

    let rafId = null;
    let lastTimestamp = null;
    let offset = 0;
    let loopWidth = 0;

    const getSpeedPxPerMs = () => {
        if (window.innerWidth <= 768) return 0.12;
        if (window.innerWidth <= 1200) return 0.1;
        return 0.08;
    };

    const calculateLoopWidth = () => {
        const items = Array.from(galleryTrack.querySelectorAll('.gallery-item'));
        const halfCount = Math.floor(items.length / 2);
        if (halfCount < 1 || !items[halfCount]) return false;

        loopWidth = items[halfCount].offsetLeft - items[0].offsetLeft;
        if (loopWidth <= 0) return false;

        if (offset >= loopWidth) {
            offset = offset % loopWidth;
        }
        galleryTrack.style.transform = `translateX(-${offset}px)`;
        return true;
    };

    const tick = (timestamp) => {
        if (lastTimestamp == null) lastTimestamp = timestamp;
        const delta = timestamp - lastTimestamp;
        lastTimestamp = timestamp;

        if (loopWidth > 0 && !document.body.classList.contains('gallery-modal-open')) {
            offset += delta * getSpeedPxPerMs();
            if (offset >= loopWidth) {
                offset -= loopWidth;
            }
            galleryTrack.style.transform = `translateX(-${offset}px)`;
        }

        rafId = window.requestAnimationFrame(tick);
    };

    const start = () => {
        if (rafId == null) {
            rafId = window.requestAnimationFrame(tick);
        }
    };

    const stop = () => {
        if (rafId != null) {
            window.cancelAnimationFrame(rafId);
            rafId = null;
        }
    };

    let resizeTimer = null;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            stop();
            lastTimestamp = null;
            if (calculateLoopWidth()) {
                start();
            }
        }, 180);
    });

    if (calculateLoopWidth()) {
        start();
    }
}

function initImageLightbox() {
    const lightboxImages = document.querySelectorAll('.gallery .gallery-item img, .photos-grid img');
    if (!lightboxImages.length) return;
    const captionByFile = {
        'ktm-terai fasttrack model.jpg': 'Kathmandu-Terai Fasttrack 3D alignment model showing major engineering features. Visualized for route planning and corridor understanding.',
        'survey camp1.jpeg': 'Field survey camp snapshot with practical topographic measurement work. Captures hands-on learning and real-site data collection.',
        'green building .png': 'Green building concept focused on sustainable and energy-efficient design. Highlights eco-friendly materials and climate-responsive planning.',
        'LST analysis of KTM.png': 'Land Surface Temperature analysis map of Kathmandu Valley. Supports urban climate interpretation and heat-island research insights.',
        'soil severity classes.png': 'Soil erosion severity classification output for terrain risk evaluation. Used to identify vulnerable zones for mitigation planning.',
        'landslide.jpg': 'Landslide assessment visualization for slope instability understanding. Supports hazard mapping and safer infrastructure decisions.'
    };

    const lightbox = document.createElement('div');
    lightbox.className = 'gallery-lightbox';
    lightbox.setAttribute('aria-hidden', 'true');
    lightbox.innerHTML = `
        <button class="gallery-lightbox-close" type="button" aria-label="Close image view">&times;</button>
        <div class="gallery-lightbox-content">
            <img class="gallery-lightbox-image" alt="">
            <p class="gallery-lightbox-caption"></p>
        </div>
    `;
    document.body.appendChild(lightbox);

    const lightboxImage = lightbox.querySelector('.gallery-lightbox-image');
    const lightboxCaption = lightbox.querySelector('.gallery-lightbox-caption');
    const closeButton = lightbox.querySelector('.gallery-lightbox-close');

    const closeLightbox = () => {
        lightbox.classList.remove('active');
        lightbox.setAttribute('aria-hidden', 'true');
        document.body.classList.remove('gallery-modal-open');
    };

    const openLightbox = (src, alt) => {
        const fileName = src.split('/').pop() || '';
        const caption = captionByFile[fileName] || alt || 'Project gallery image';
        lightboxImage.src = src;
        lightboxImage.alt = alt || 'Gallery image';
        lightboxCaption.textContent = caption;
        lightbox.classList.add('active');
        lightbox.setAttribute('aria-hidden', 'false');
        document.body.classList.add('gallery-modal-open');
    };

    lightboxImages.forEach((img) => {
        img.addEventListener('click', () => {
            openLightbox(img.src, img.alt);
        });
    });

    closeButton.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (event) => {
        if (event.target === lightbox) {
            closeLightbox();
        }
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && lightbox.classList.contains('active')) {
            closeLightbox();
        }
    });
}

// Testimonials continuous horizontal loop slider
function initTestimonialSlider() {
    const testimonialSlider = document.querySelector('.testimonials-slider');
    const testimonialTrack = document.querySelector('.testimonial-track');
    if (!testimonialSlider || !testimonialTrack) return;

    let rafId = null;
    let lastTimestamp = null;
    let offset = 0;
    let loopWidth = 0;
    let paused = false;
    let originals = [];
    let speedPxPerMs = window.innerWidth <= 768 ? 0.04 : 0.06;

    const removeClones = () => {
        testimonialTrack.querySelectorAll('.testimonial-card.clone').forEach((clone) => clone.remove());
    };

    const rebuildLoop = () => {
        removeClones();
        originals = Array.from(testimonialTrack.querySelectorAll('.testimonial-card:not(.clone)'));
        if (originals.length <= 1) return false;

        originals.forEach((card) => {
            const clone = card.cloneNode(true);
            clone.classList.add('clone');
            clone.style.opacity = '1';
            clone.style.transform = 'none';
            testimonialTrack.appendChild(clone);
        });

        originals.forEach((card) => {
            card.style.opacity = '1';
            card.style.transform = 'none';
        });

        const firstOriginal = originals[0];
        const firstClone = testimonialTrack.querySelector('.testimonial-card.clone');
        if (!firstOriginal || !firstClone) return false;

        loopWidth = firstClone.offsetLeft - firstOriginal.offsetLeft;
        offset = 0;
        testimonialTrack.style.transform = 'translateX(0)';
        return loopWidth > 0;
    };

    const tick = (timestamp) => {
        if (lastTimestamp == null) lastTimestamp = timestamp;
        const delta = timestamp - lastTimestamp;
        lastTimestamp = timestamp;

        if (!paused && loopWidth > 0) {
            offset += delta * speedPxPerMs;
            if (offset >= loopWidth) {
                offset -= loopWidth;
            }
            testimonialTrack.style.transform = `translateX(-${offset}px)`;
        }

        rafId = window.requestAnimationFrame(tick);
    };

    const start = () => {
        if (rafId == null) {
            rafId = window.requestAnimationFrame(tick);
        }
    };

    const stop = () => {
        if (rafId != null) {
            window.cancelAnimationFrame(rafId);
            rafId = null;
        }
    };

    testimonialSlider.addEventListener('mouseenter', () => {
        paused = true;
    });
    testimonialSlider.addEventListener('mouseleave', () => {
        paused = false;
    });
    let resizeTimer = null;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            stop();
            lastTimestamp = null;
            speedPxPerMs = window.innerWidth <= 768 ? 0.04 : 0.06;
            if (rebuildLoop()) {
                start();
            }
        }, 180);
    });

    if (rebuildLoop()) {
        start();
    }
}

// Initialize slider after full layout is ready
window.addEventListener('load', initTestimonialSlider);
window.addEventListener('load', initGalleryLoop);
window.addEventListener('load', initImageLightbox);

// Add counter animation for stats (if you want to add statistics section)
function animateCounter(element, target, duration) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start);
        }
    }, 16);
}

// Form validation enhancement
const form = document.getElementById('contactForm');
if (form) {
    const inputs = form.querySelectorAll('input, textarea');

    inputs.forEach(input => {
        input.addEventListener('blur', () => {
            if (input.value.trim() === '') {
                input.style.borderColor = '#ef4444';
            } else {
                input.style.borderColor = '#e2e8f0';
            }
        });
        
        input.addEventListener('focus', () => {
            input.style.borderColor = 'var(--accent)';
        });
    });

    // Add loading state to submit button
    form.addEventListener('submit', function(e) {
        const submitBtn = this.querySelector('.submit-btn');
        const originalText = submitBtn.textContent;
        
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        
        // Simulate API call delay
        setTimeout(() => {
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 2000);
    });
}

// Add scroll-to-top button functionality (optional)
function createScrollToTopButton() {
    const button = document.createElement('button');
    button.innerHTML = '<i class="fas fa-arrow-up"></i>';
    button.className = 'scroll-to-top';
    button.style.cssText = `
        position: fixed;
        bottom: 110px;
        right: 35px;
        width: 50px;
        height: 50px;
        background: var(--accent);
        border: none;
        border-radius: 50%;
        color: var(--dark);
        font-size: 1.2rem;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 998;
        box-shadow: 0 5px 20px rgba(212, 175, 55, 0.3);
    `;
    
    document.body.appendChild(button);
    
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 500) {
            button.style.opacity = '1';
            button.style.visibility = 'visible';
        } else {
            button.style.opacity = '0';
            button.style.visibility = 'hidden';
        }
    });
    
    button.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    button.addEventListener('mouseenter', () => {
        button.style.transform = 'translateY(-5px)';
        button.style.boxShadow = '0 8px 30px rgba(212, 175, 55, 0.4)';
    });
    
    button.addEventListener('mouseleave', () => {
        button.style.transform = 'translateY(0)';
        button.style.boxShadow = '0 5px 20px rgba(212, 175, 55, 0.3)';
    });
}

// Initialize scroll-to-top button
createScrollToTopButton();

// Add cursor effect for project and research items
const interactiveElements = document.querySelectorAll('.project-item, .research-content');
interactiveElements.forEach(element => {
    element.addEventListener('mouseenter', function() {
        this.style.cursor = 'pointer';
    });
});

// Animate contact form elements
const contactObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const formGroups = entry.target.querySelectorAll('.form-group');
            formGroups.forEach((group, index) => {
                setTimeout(() => {
                    group.style.opacity = '1';
                    group.style.transform = 'translateY(0)';
                }, index * 100);
            });
        }
    });
}, { threshold: 0.2 });

const contactForm = document.querySelector('.contact-form-section');
if (contactForm) {
    const formGroups = contactForm.querySelectorAll('.form-group');
    formGroups.forEach(group => {
        group.style.opacity = '0';
        group.style.transform = 'translateY(20px)';
        group.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    contactObserver.observe(contactForm);
}

// Animate contact info items
const contactInfo = document.querySelector('.contact-info-section');
if (contactInfo) {
    const items = contactInfo.querySelectorAll('.contact-item');
    items.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(-20px)';
        item.style.transition = `opacity 0.6s ease ${index * 0.15}s, transform 0.6s ease ${index * 0.15}s`;
    });
    
    const infoObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                items.forEach(item => {
                    item.style.opacity = '1';
                    item.style.transform = 'translateX(0)';
                });
            }
        });
    }, { threshold: 0.3 });
    
    infoObserver.observe(contactInfo);
}

// ============================================
// BLOG PAGE ANIMATIONS
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    
    // Check if we're on blog page
    if (window.location.pathname.includes('blog')) {
        
        // Animate blog cards
        const blogCards = document.querySelectorAll('.blog-card');
        
        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -70px 0px'
        });
        
        blogCards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(28px)';
            card.style.transition = `all 0.72s cubic-bezier(0.25, 0.46, 0.45, 0.94) ${index * 0.08}s`;
            observer.observe(card);
        });
        
        // Animate page header
        const pageHeader = document.querySelector('.page-header');
        if (pageHeader) {
            pageHeader.style.opacity = '0';
            pageHeader.style.transform = 'translateY(18px)';
            pageHeader.style.transition = 'all 0.75s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
            
            setTimeout(() => {
                pageHeader.style.opacity = '1';
                pageHeader.style.transform = 'translateY(0)';
            }, 60);
        }
        
    }
    
});


// ============================================
// PROJECT DETAIL PAGE ANIMATIONS
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    const projectPage = document.querySelector('.project-page');
    if (!projectPage) return;

    const projectHero = document.querySelector('.project-hero');
    if (projectHero) {
        projectHero.style.opacity = '0';
        projectHero.style.transform = 'translateY(24px)';
        projectHero.style.transition = 'opacity 0.8s ease, transform 0.8s ease';

        setTimeout(() => {
            projectHero.style.opacity = '1';
            projectHero.style.transform = 'translateY(0)';
        }, 80);
    }

    const projectCards = document.querySelectorAll('.project-card');
    const cardsObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.16,
        rootMargin: '0px 0px -60px 0px'
    });

    projectCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(32px)';
        card.style.transition = `opacity 0.65s ease ${index * 0.1}s, transform 0.65s ease ${index * 0.1}s`;
        cardsObserver.observe(card);
    });

    const photos = document.querySelectorAll('.photos-grid img');
    const photosObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'scale(1)';
            }
        });
    }, {
        threshold: 0.2
    });

    photos.forEach((img, index) => {
        img.style.opacity = '0';
        img.style.transform = 'scale(0.93)';
        img.style.transition = `opacity 0.55s ease ${index * 0.08}s, transform 0.55s ease ${index * 0.08}s`;
        photosObserver.observe(img);
    });

    const nextBtn = document.querySelector('.project-nav-next a');
    if (nextBtn) {
        nextBtn.style.opacity = '0';
        nextBtn.style.transform = 'translateY(18px)';
        nextBtn.style.transition = 'opacity 0.55s ease 0.2s, transform 0.55s ease 0.2s';

        const btnObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    nextBtn.style.opacity = '1';
                    nextBtn.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.3 });

        btnObserver.observe(nextBtn);
    }
});
// Console log for developers
console.log('%c Welcome to Himal Bhandari\'s Portfolio ', 'background: #0a2540; color: #d4af37; font-size: 20px; padding: 10px;');
console.log('%c Designed with ❤️ ', 'background: #d4af37; color: #0a2540; font-size: 14px; padding: 5px;');

