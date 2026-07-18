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

    // Close menu when clicking outside (but not on hamburger)
    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
    
    // Close menu on window resize - simplified for 3 basic sizes
    window.addEventListener('resize', () => {
        // Mobile breakpoint
        if (window.innerWidth > 768) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
        
        // Close dropdowns on any resize
        if (profileDropdown) {
            profileDropdown.classList.remove('active');
        }
    });
    
    // Close menu on page refresh or navigation
    window.addEventListener('beforeunload', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
    });
}

// Enhanced navbar background on scroll with mobile optimization
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Profile dropdown functionality with mobile optimization
const profileIcon = document.querySelector('.profile-icon');
const profileDropdown = document.querySelector('.profile-dropdown');

if (profileIcon && profileDropdown) {
    // Toggle dropdown on profile icon click
    profileIcon.addEventListener('click', (e) => {
        e.stopPropagation();
        profileDropdown.classList.toggle('active');
        
        // Close mobile menu if open
        if (navMenu && navMenu.classList.contains('active')) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (!profileIcon.contains(e.target)) {
            profileDropdown.classList.remove('active');
        }
    });

    // Close dropdown on window resize
    window.addEventListener('resize', () => {
        profileDropdown.classList.remove('active');
    });

    // Profile dropdown items with improved mobile handling
    document.querySelectorAll('.profile-dropdown a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const linkText = link.textContent.trim();
            
            // Close dropdown first
            profileDropdown.classList.remove('active');
            
            // Handle different menu items
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

// Enhanced notification system with mobile optimization
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    // Mobile-responsive positioning
    const isMobile = window.innerWidth <= 768;
    
    // Add notification styles with mobile optimization
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
    
    // Add to body
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateY(0)';
    }, 100);
    
    // Close button functionality
    notification.querySelector('.notification-close').addEventListener('click', () => {
        notification.style.transform = 'translateY(-100%)';
        setTimeout(() => {
            notification.remove();
        }, 300);
    });
    
    // Auto remove after 5 seconds (3 seconds on mobile)
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

// Touch event optimization for mobile
if ('ontouchstart' in window) {
    // Add touch class to body for CSS targeting
    document.body.classList.add('touch-device');
    
    // Optimize touch events for better mobile performance
    let touchStartY = 0;
    
    document.addEventListener('touchstart', (e) => {
        touchStartY = e.touches[0].clientY;
    }, { passive: true });
    
    document.addEventListener('touchmove', (e) => {
        // Prevent pull-to-refresh when menu is open
        if (navMenu && navMenu.classList.contains('active')) {
            const touchY = e.touches[0].clientY;
            const touchDiff = touchY - touchStartY;
            
            if (touchDiff > 0 && window.scrollY === 0) {
                e.preventDefault();
            }
        }
    }, { passive: false });
}

console.log('Enhanced responsive navbar JavaScript loaded successfully!');