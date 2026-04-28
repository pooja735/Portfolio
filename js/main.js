// Simple and reliable navigation system
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing navigation...');
    
    // Initialize everything
    initNavigation();
    initMobileMenu();
    initScrollToTop();
    initThemeToggle();
    initAnimations();
    initTypingAnimation();
});

// Simple navigation function
function initNavigation() {
    console.log('Initializing navigation...');
    
    // Get all navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    console.log('Found navigation links:', navLinks.length);
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            console.log('Clicked:', targetId);
            
            // Simple scroll to element
            const targetElement = document.getElementById(targetId.substring(1));
            if (targetElement) {
                console.log('Found target:', targetElement);
                targetElement.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
            } else {
                console.log('Target not found:', targetId);
            }
        });
    });
}

// Mobile menu functionality
function initMobileMenu() {
    console.log('Initializing mobile menu...');
    // Use event delegation so this works even when the header is rendered later (React/Babel).
    const getEls = () => ({
        mobileMenuToggle: document.getElementById('mobile-menu-toggle'),
        mobileMenu: document.getElementById('mobile-menu'),
    });

    const setMenuOpen = (open) => {
        const { mobileMenuToggle, mobileMenu } = getEls();
        if (!mobileMenuToggle || !mobileMenu) return;

        mobileMenu.classList.toggle('active', open);
        const icon = mobileMenuToggle.querySelector('.material-icons');
        if (icon) icon.textContent = open ? 'close' : 'menu';
    };

    // Toggle button
    document.addEventListener('click', function(e) {
        const { mobileMenuToggle, mobileMenu } = getEls();
        if (!mobileMenuToggle || !mobileMenu) return;

        const toggleBtn = e.target.closest('#mobile-menu-toggle');
        if (toggleBtn) {
            e.preventDefault();
            setMenuOpen(!mobileMenu.classList.contains('active'));
            return;
        }

        // Mobile menu link click
        const mobileLink = e.target.closest('.mobile-menu__link');
        if (mobileLink) {
            // Let initNavigation handle scrolling, just close the menu.
            setMenuOpen(false);
            return;
        }

        // Click outside closes the menu
        if (mobileMenu.classList.contains('active')) {
            const clickedInside = mobileMenu.contains(e.target) || mobileMenuToggle.contains(e.target);
            if (!clickedInside) setMenuOpen(false);
        }
    });
}

// Scroll to top functionality
function initScrollToTop() {
    const scrollTopButton = document.getElementById('scroll-top');
    
    if (scrollTopButton) {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                scrollTopButton.classList.add('visible');
            } else {
                scrollTopButton.classList.remove('visible');
            }
        });
    }
}

// Theme toggle functionality
function initThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            body.classList.toggle('dark');
            body.classList.toggle('light');
            
            const icon = themeToggle.querySelector('.material-icons');
            if (icon) {
                icon.textContent = body.classList.contains('dark') ? 'light_mode' : 'dark_mode';
            }
        });
    }
}

// Simple animations
function initAnimations() {
    // Intersection Observer for scroll-triggered animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe all elements with animation classes
    const animatedElements = document.querySelectorAll(
        '.fade-in-on-scroll, .slide-left-on-scroll, .slide-right-on-scroll, .scale-in-on-scroll, .card-entrance, .stagger-item, .timeline-item'
    );

    animatedElements.forEach(el => {
        observer.observe(el);
    });
}

// Scroll to top function
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Enhanced hover effects
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.glass-card, .project, .timeline-item, .education__item');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.02)';
            this.style.boxShadow = 'var(--shadow-hover)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = 'var(--shadow)';
        });
    });
});

// Beautiful name animation
function initTypingAnimation() {
    const nameElement = document.querySelector('.name-glow');
    if (nameElement) {
        // Add a subtle entrance effect
        nameElement.style.opacity = '0';
        nameElement.style.transform = 'translateY(20px) scale(0.9)';
        
        setTimeout(() => {
            nameElement.style.transition = 'all 1.5s ease-out';
            nameElement.style.opacity = '1';
            nameElement.style.transform = 'translateY(0) scale(1)';
        }, 500);
    }
}

// Loading animation
window.addEventListener('load', function() {
    document.body.classList.add('loaded');
    
    // Trigger initial animations
    const initialElements = document.querySelectorAll('.card-entrance, .text-reveal');
    initialElements.forEach((el, index) => {
        setTimeout(() => {
            el.classList.add('visible');
        }, index * 200);
    });
});