// ===== HOME PAGE JAVASCRIPT - ALL FUNCTIONALITY MERGED =====

// ===== NAVBAR FUNCTIONALITY =====
// Mobile Navigation Toggle with improved functionality
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const header = document.querySelector('.header');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', (e) => {
        e.stopPropagation();
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        
        // Prevent body scroll when menu is open
        if (navMenu.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
    
    // Close menu on window resize
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
        
        if (profileDropdown) {
            profileDropdown.classList.remove('active');
        }
    });
}
// Enhanced navbar background on scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Profile dropdown functionality
const profileIcon = document.querySelector('.profile-icon');
const profileDropdown = document.querySelector('.profile-dropdown');

if (profileIcon && profileDropdown) {
    profileIcon.addEventListener('click', (e) => {
        e.stopPropagation();
        profileDropdown.classList.toggle('active');
        
        if (navMenu && navMenu.classList.contains('active')) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    document.addEventListener('click', (e) => {
        if (!profileIcon.contains(e.target)) {
            profileDropdown.classList.remove('active');
        }
    });

    document.querySelectorAll('.profile-dropdown a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const linkText = link.textContent.trim();
            profileDropdown.classList.remove('active');
            
            switch(linkText) {
                case 'My Profile':
                    showNotification('Profile page coming soon!', 'info');
                    break;
                case 'My Appointments':
                    showNotification('Appointments page coming soon!', 'info');
                    break;
                case 'Medical Records':
                    showNotification('Medical records page coming soon!', 'info');
                    break;
                case 'Logout':
                    showNotification('Logged out successfully!', 'success');
                    break;
            }
        });
    });
}
// ===== DOCTORS SLIDER FUNCTIONALITY =====
document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.doctors-slider');
    const dots = document.querySelectorAll('.dot');
    
    if (!slider || !dots.length) return;
    
    let currentSlide = 0;
    let autoSlideTimer;
    const slideInterval = 3000;
    const originalCards = 6;
    let isMobile = window.innerWidth <= 768;
    
    window.addEventListener('resize', function() {
        isMobile = window.innerWidth <= 768;
        updateSlider(false);
    });
    
    function updateSlider(smooth = true) {
        if (smooth) {
            slider.style.transition = 'transform 1.2s ease-in-out';
        } else {
            slider.style.transition = 'none';
        }
        
        let singleCardWidth;
        if (window.innerWidth <= 480) {
            singleCardWidth = 95;
        } else if (window.innerWidth <= 768) {
            singleCardWidth = 90;
        } else {
            singleCardWidth = 11.111;
        }
        
        const translateX = currentSlide * -singleCardWidth;
        slider.style.transform = `translateX(${translateX}%)`;
        updateDots();
    }
    
    function updateDots() {
        const middleCardIndex = (currentSlide + 1) % originalCards;
        const dotIndex = middleCardIndex % 3;
        
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === dotIndex);
        });
    }
    
    function startAutoSlide() {
        autoSlideTimer = setInterval(function() {
            currentSlide++;
            
            if (currentSlide >= originalCards) {
                updateSlider(true);
                setTimeout(() => {
                    currentSlide = 0;
                    updateSlider(false);
                }, 1200);
            } else {
                updateSlider(true);
            }
        }, slideInterval);
    }
    
    function resetTimer() {
        clearInterval(autoSlideTimer);
        setTimeout(startAutoSlide, 200);
    }
    
    dots.forEach((dot, index) => {
        dot.addEventListener('click', function() {
            currentSlide = index;
            if (currentSlide >= originalCards) {
                currentSlide = originalCards - 1;
            }
            updateSlider(true);
            resetTimer();
        });
    });
    
    // Touch support
    let startX = 0;
    let isDragging = false;
    
    slider.addEventListener('touchstart', function(e) {
        startX = e.touches[0].clientX;
        isDragging = true;
        clearInterval(autoSlideTimer);
    });
    
    slider.addEventListener('touchend', function(e) {
        if (!isDragging) return;
        isDragging = false;
        
        const endX = e.changedTouches[0].clientX;
        const diffX = startX - endX;
        
        if (Math.abs(diffX) > 50) {
            if (diffX > 0) {
                currentSlide++;
                if (currentSlide >= originalCards) {
                    currentSlide = 0;
                }
            } else {
                currentSlide--;
                if (currentSlide < 0) {
                    currentSlide = originalCards - 1;
                }
            }
            updateSlider(true);
        }
        
        resetTimer();
    });
    
    updateSlider(false);
    updateDots();
    setTimeout(startAutoSlide, 2000);
    
    if (!isMobile) {
        slider.addEventListener('mouseenter', function() {
            clearInterval(autoSlideTimer);
        });
        
        slider.addEventListener('mouseleave', function() {
            resetTimer();
        });
    }
});
// ===== WHY CHOOSE US ACCORDION =====
document.addEventListener('DOMContentLoaded', function() {
    const featureItems = document.querySelectorAll('.feature-item');
    
    featureItems.forEach(item => {
        const header = item.querySelector('.feature-header');
        const expandIcon = item.querySelector('.expand-icon i');
        
        header.addEventListener('click', function() {
            featureItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                    const otherIcon = otherItem.querySelector('.expand-icon i');
                    otherIcon.className = 'fas fa-chevron-down';
                }
            });
            
            item.classList.toggle('active');
            
            if (item.classList.contains('active')) {
                expandIcon.className = 'fas fa-chevron-up';
            } else {
                expandIcon.className = 'fas fa-chevron-down';
            }
        });
    });
});

// ===== HOVER EFFECTS SYSTEM =====
class HoverEffects {
    constructor() {
        this.init();
    }

    init() {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.setupHoverEffects());
        } else {
            this.setupHoverEffects();
        }
        this.observeNewElements();
    }

    setupHoverEffects() {
        const hoverElements = document.querySelectorAll('.hover-effect');
        hoverElements.forEach(element => {
            this.addHoverTracking(element);
        });
    }

    addHoverTracking(element) {
        if (element.hasAttribute('data-hover-tracking')) {
            return;
        }

        element.setAttribute('data-hover-tracking', 'true');
        let isHovered = false;

        element.addEventListener('mouseenter', (e) => {
            const rect = element.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width) * 100;
            const y = ((e.clientY - rect.top) / rect.height) * 100;
            
            element.style.setProperty('--mouse-x', x + '%');
            element.style.setProperty('--mouse-y', y + '%');
            isHovered = true;
        });

        element.addEventListener('mousemove', (e) => {
            if (isHovered) {
                const rect = element.getBoundingClientRect();
                const x = ((e.clientX - rect.left) / rect.width) * 100;
                const y = ((e.clientY - rect.top) / rect.height) * 100;
                
                element.style.setProperty('--mouse-x', x + '%');
                element.style.setProperty('--mouse-y', y + '%');
            }
        });

        element.addEventListener('mouseleave', (e) => {
            const rect = element.getBoundingClientRect();
            const x = ((e.clientX - rect.left) / rect.width) * 100;
            const y = ((e.clientY - rect.top) / rect.height) * 100;
            
            element.style.setProperty('--mouse-x', x + '%');
            element.style.setProperty('--mouse-y', y + '%');
            isHovered = false;
        });
    }

    observeNewElements() {
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                mutation.addedNodes.forEach((node) => {
                    if (node.nodeType === Node.ELEMENT_NODE) {
                        if (node.classList && node.classList.contains('hover-effect')) {
                            this.addHoverTracking(node);
                        }
                        
                        const hoverElements = node.querySelectorAll && node.querySelectorAll('.hover-effect');
                        if (hoverElements) {
                            hoverElements.forEach(element => {
                                this.addHoverTracking(element);
                            });
                        }
                    }
                });
            });
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    }
}

const hoverEffectsSystem = new HoverEffects();
window.HoverEffects = hoverEffectsSystem;
// ===== GENERAL HOME PAGE FUNCTIONALITY =====
// Smooth scrolling for navigation links
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

// Notification system
function showNotification(message, type = 'info') {
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    const isMobile = window.innerWidth <= 768;
    
    notification.style.cssText = `
        position: fixed;
        top: ${isMobile ? '80px' : '100px'};
        right: ${isMobile ? '10px' : '20px'};
        left: ${isMobile ? '10px' : 'auto'};
        background: ${type === 'success' ? '#4CAF50' : type === 'warning' ? '#FF9800' : '#2196F3'};
        color: white;
        padding: ${isMobile ? '12px 15px' : '15px 20px'};
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 10000;
        max-width: ${isMobile ? 'calc(100% - 20px)' : '400px'};
        transform: translateY(-100%);
        transition: transform 0.3s ease;
        font-size: ${isMobile ? '0.9rem' : '1rem'};
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.transform = 'translateY(0)';
    }, 100);
    
    notification.querySelector('.notification-close').addEventListener('click', () => {
        notification.style.transform = 'translateY(-100%)';
        setTimeout(() => {
            notification.remove();
        }, 300);
    });
    
    const autoRemoveTime = isMobile ? 3000 : 5000;
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.transform = 'translateY(-100%)';
            setTimeout(() => {
                notification.remove();
            }, 300);
        }
    }, autoRemoveTime);
}

// Hero buttons functionality
document.addEventListener('DOMContentLoaded', () => {
    const btnPrimary = document.querySelector('.btn-primary');
    if (btnPrimary) {
        btnPrimary.addEventListener('click', () => {
            const contactSection = document.querySelector('#contact');
            if (contactSection) {
                contactSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    }

    // Set minimum date to today for date inputs
    const dateInput = document.querySelector('input[type="date"]');
    if (dateInput) {
        const today = new Date().toISOString().split('T')[0];
        dateInput.setAttribute('min', today);
    }
});

// Touch device optimization
if ('ontouchstart' in window) {
    document.body.classList.add('touch-device');
}

console.log('MediCare Clinic - Home page loaded successfully!');
// ========== LOADER ANIMATION ==========
let progress = 0;
const counter = document.getElementById('counter');
const loader = document.getElementById('loader');
const mainContent = document.getElementById('mainContent');

const progressInterval = setInterval(() => {
    if (progress >= 100) {
        clearInterval(progressInterval);
        return;
    }
    
    const increment = Math.random() * 2 + 1;
    progress = Math.min(progress + increment, 100);
    counter.textContent = Math.floor(progress).toString().padStart(3, '0');
}, 20);

setTimeout(() => {
    loader.classList.add('exit');
    setTimeout(() => {
        loader.style.display = 'none';
    }, 1000);
}, 2800);