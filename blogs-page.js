// ============================================
// BLOG PAGE JAVASCRIPT
// ============================================

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    
    // Initialize all features
    initMobileNavigation();
    initScrollToTop();
    initBlogCardAnimations();
    initNavbarEffects();
    initThemeToggle();
    initSmoothScrolling();
    
});

// ============================================
// MOBILE NAVIGATION
// ============================================
function initMobileNavigation() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    
    if (hamburger && navMenu) {
        // Toggle mobile menu
        hamburger.addEventListener('click', function(e) {
            e.stopPropagation();
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
        
        // Close menu when clicking on a nav link
        const navLinks = document.querySelectorAll('.nav-menu li a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            const isClickInsideNav = navMenu.contains(event.target);
            const isClickOnHamburger = hamburger.contains(event.target);
            
            if (!isClickInsideNav && !isClickOnHamburger && navMenu.classList.contains('active')) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    }
}

// ============================================
// SCROLL TO TOP BUTTON
// ============================================
function initScrollToTop() {
    const scrollTopBtn = document.getElementById('scrollTop');
    
    if (scrollTopBtn) {
        // Show/hide scroll to top button
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                scrollTopBtn.classList.add('visible');
            } else {
                scrollTopBtn.classList.remove('visible');
            }
        });
        
        // Scroll to top when clicked
        scrollTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

// ============================================
// BLOG CARD ANIMATIONS
// ============================================
function initBlogCardAnimations() {
    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const blogObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Apply animation to all blog cards
    const blogCards = document.querySelectorAll('.blog-card');
    blogCards.forEach((card, index) => {
        // Set initial state
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `all 0.6s ease ${index * 0.15}s`;
        
        // Observe the card
        blogObserver.observe(card);
    });
    
    // Add hover sound effect (optional - uncomment if you want)
    // blogCards.forEach(card => {
    //     card.addEventListener('mouseenter', function() {
    //         // You can add sound here if needed
    //     });
    // });
}

// ============================================
// NAVBAR SCROLL EFFECTS
// ============================================
function initNavbarEffects() {
    const navbar = document.querySelector('.navbar');
    let lastScroll = 0;
    
    if (navbar) {
        window.addEventListener('scroll', function() {
            const currentScroll = window.pageYOffset;
            
            // Add shadow when scrolling
            if (currentScroll > 100) {
                navbar.style.boxShadow = '0 4px 30px rgba(212, 175, 55, 0.3)';
                navbar.style.background = 'rgba(19, 42, 63, 0.98)';
            } else {
                navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.3)';
                navbar.style.background = 'var(--secondary-dark)';
            }
            
            lastScroll = currentScroll;
        });
    }
    
    // Highlight active page in navigation
    highlightActivePage();
}

// ============================================
// HIGHLIGHT ACTIVE PAGE
// ============================================
function highlightActivePage() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        
        // Remove active class from all links
        link.classList.remove('active');
        
        // Add active class to current page
        if (href === currentPage || 
            (currentPage.includes('blog') && href.includes('blog'))) {
            link.classList.add('active');
        }
    });
}

// ============================================
// THEME TOGGLE (OPTIONAL)
// ============================================
function initThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            document.body.classList.toggle('light-mode');
            
            // Change icon
            const icon = themeToggle.querySelector('.moon-icon');
            if (document.body.classList.contains('light-mode')) {
                icon.textContent = '☀️';
                // Save preference
                localStorage.setItem('theme', 'light');
            } else {
                icon.textContent = '🌙';
                // Save preference
                localStorage.setItem('theme', 'dark');
            }
        });
        
        // Load saved theme preference
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'light') {
            document.body.classList.add('light-mode');
            const icon = themeToggle.querySelector('.moon-icon');
            if (icon) icon.textContent = '☀️';
        }
    }
}

// ============================================
// SMOOTH SCROLLING
// ============================================
function initSmoothScrolling() {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
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
}

// ============================================
// READ MORE BUTTON ANIMATION
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    const readMoreButtons = document.querySelectorAll('.read-more-btn');
    
    readMoreButtons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            const arrow = this.querySelector('i');
            if (arrow) {
                arrow.style.transform = 'translateX(5px)';
            }
        });
        
        button.addEventListener('mouseleave', function() {
            const arrow = this.querySelector('i');
            if (arrow) {
                arrow.style.transform = 'translateX(0)';
            }
        });
    });
});

// ============================================
// TAG HOVER EFFECT
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    const tags = document.querySelectorAll('.tag');
    
    tags.forEach(tag => {
        tag.addEventListener('click', function() {
            const tagName = this.textContent.trim();
            console.log('Tag clicked:', tagName);
            // You can add functionality to filter blogs by tag here
        });
    });
});

// ============================================
// LAZY LOAD IMAGES (Performance Optimization)
// ============================================
function initLazyLoading() {
    const images = document.querySelectorAll('.blog-image img');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.src; // This triggers the load
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading
document.addEventListener('DOMContentLoaded', initLazyLoading);

// ============================================
// PAGE LOAD ANIMATION
// ============================================
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    
    setTimeout(function() {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

// ============================================
// BLOG SEARCH FUNCTION (Optional - for future use)
// ============================================
function searchBlogs(searchTerm) {
    const blogCards = document.querySelectorAll('.blog-card');
    const lowerSearchTerm = searchTerm.toLowerCase();
    
    blogCards.forEach(card => {
        const title = card.querySelector('.blog-title').textContent.toLowerCase();
        const excerpt = card.querySelector('.blog-excerpt').textContent.toLowerCase();
        const tags = Array.from(card.querySelectorAll('.tag'))
            .map(tag => tag.textContent.toLowerCase())
            .join(' ');
        
        if (title.includes(lowerSearchTerm) || 
            excerpt.includes(lowerSearchTerm) || 
            tags.includes(lowerSearchTerm)) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });
}

// ============================================
// FILTER BY TAG (Optional - for future use)
// ============================================
function filterByTag(tagName) {
    const blogCards = document.querySelectorAll('.blog-card');
    
    if (tagName === 'all') {
        blogCards.forEach(card => {
            card.style.display = 'flex';
        });
        return;
    }
    
    blogCards.forEach(card => {
        const tags = Array.from(card.querySelectorAll('.tag'))
            .map(tag => tag.textContent.toLowerCase().trim());
        
        if (tags.includes(tagName.toLowerCase())) {
            card.style.display = 'flex';
        } else {
            card.style.display = 'none';
        }
    });
}

// ============================================
// READING TIME CALCULATOR (Optional)
// ============================================
function calculateReadingTime(text) {
    const wordsPerMinute = 200;
    const words = text.trim().split(/\s+/).length;
    const time = Math.ceil(words / wordsPerMinute);
    return time;
}

// ============================================
// SHARE BLOG POST (Optional - for future use)
// ============================================
function shareBlog(title, url) {
    if (navigator.share) {
        navigator.share({
            title: title,
            url: url
        }).then(() => {
            console.log('Thanks for sharing!');
        }).catch(err => {
            console.log('Error sharing:', err);
        });
    } else {
        // Fallback - copy to clipboard
        navigator.clipboard.writeText(url).then(() => {
            alert('Link copied to clipboard!');
        });
    }
}

// ============================================
// CONSOLE LOG (for debugging)
// ============================================
console.log('✅ Blog page JavaScript loaded successfully!');
console.log('📝 Total blog posts:', document.querySelectorAll('.blog-card').length);

// ============================================
// PERFORMANCE MONITORING (Optional)
// ============================================
window.addEventListener('load', function() {
    const loadTime = performance.now();
    console.log(`⚡ Page loaded in ${loadTime.toFixed(2)}ms`);
});
