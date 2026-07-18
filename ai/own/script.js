// Get DOM elements
const signUpButton = document.getElementById('signUpBtn');
const signInButton = document.getElementById('signInBtn');
const authContainer = document.getElementById('authContainer');
const signUpForm = document.getElementById('signUpForm');
const signInForm = document.getElementById('signInForm');

// Toggle between sign up and sign in
signUpButton.addEventListener('click', () => {
    authContainer.classList.add('active');
});

signInButton.addEventListener('click', () => {
    authContainer.classList.remove('active');
});

// Handle Sign Up Form Submission
signUpForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = new FormData(signUpForm);
    const name = signUpForm.querySelector('input[type="text"]').value;
    const email = signUpForm.querySelector('input[type="email"]').value;
    const password = signUpForm.querySelector('input[type="password"]').value;
    
    // Basic validation
    if (!name || !email || !password) {
        alert('Please fill in all fields');
        return;
    }
    
    if (password.length < 6) {
        alert('Password must be at least 6 characters long');
        return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address');
        return;
    }
    
    // Simulate successful registration
    alert(`Welcome ${name}! Account created successfully with email: ${email}`);
    
    // Clear form
    signUpForm.reset();
    
    // Switch to sign in form
    authContainer.classList.remove('active');
});

// Handle Sign In Form Submission
signInForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const email = signInForm.querySelector('input[type="email"]').value;
    const password = signInForm.querySelector('input[type="password"]').value;
    
    // Basic validation
    if (!email || !password) {
        alert('Please fill in all fields');
        return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address');
        return;
    }
    
    // Simulate successful login
    alert(`Welcome back! Signed in successfully with email: ${email}`);
    
    // Clear form
    signInForm.reset();
});

// Social media login handlers
document.addEventListener('DOMContentLoaded', () => {
    const socialIcons = document.querySelectorAll('.social-icon');
    
    socialIcons.forEach(icon => {
        icon.addEventListener('click', (e) => {
            e.preventDefault();
            
            const platform = icon.querySelector('i').classList[1].split('-')[2];
            let platformName = '';
            
            switch(platform) {
                case 'google':
                    platformName = 'Google';
                    break;
                case 'facebook':
                    platformName = 'Facebook';
                    break;
                case 'github':
                    platformName = 'GitHub';
                    break;
                case 'linkedin':
                    platformName = 'LinkedIn';
                    break;
                default:
                    platformName = 'Social Media';
            }
            
            alert(`${platformName} login functionality would be implemented here`);
        });
    });
});

// Forgot password handler
document.addEventListener('DOMContentLoaded', () => {
    const forgotPasswordLink = document.querySelector('.forgot-password');
    
    forgotPasswordLink.addEventListener('click', (e) => {
        e.preventDefault();
        
        const email = prompt('Please enter your email address to reset password:');
        
        if (email) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (emailRegex.test(email)) {
                alert(`Password reset link has been sent to ${email}`);
            } else {
                alert('Please enter a valid email address');
            }
        }
    });
});

// Add smooth animations and effects
document.addEventListener('DOMContentLoaded', () => {
    // Add loading effect to buttons
    const buttons = document.querySelectorAll('button');
    
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            // Add ripple effect
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = event.clientX - rect.left - size / 2;
            const y = event.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
});

// Add CSS for ripple effect dynamically
const style = document.createElement('style');
style.textContent = `
    button {
        position: relative;
        overflow: hidden;
    }
    
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.6);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);