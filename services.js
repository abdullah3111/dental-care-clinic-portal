// ========== SERVICE MODAL ==========
const serviceModal = document.getElementById('serviceModal');
const modalOverlay = serviceModal.querySelector('.modal-overlay');
const modalClose = serviceModal.querySelector('.modal-close');
const modalBtn = serviceModal.querySelector('.modal-btn');

const servicesData = {
    1: {
        number: '01',
        title: 'ADVANCED CARDIOLOGY',
        image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080&auto=format&fit=crop',
        description: 'Our Advanced Cardiology department offers a holistic approach to heart health. From preventative screenings to complex interventions, our team of world-renowned cardiologists ensures the best possible outcomes. We utilize the latest in non-invasive imaging and minimally invasive surgical techniques to reduce recovery time and improve patient comfort.',
        features: ['Echocardiography', 'Cardiac MRI', 'Interventional Cardiology', 'Preventive Care']
    },
    2: {
        number: '02',
        title: 'NEUROLOGY CENTER',
        image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?q=80&w=2070&auto=format&fit=crop',
        description: 'The Neurology Center provides specialized care for disorders of the brain, spine, and nervous system. Our multidisciplinary team works together to treat conditions such as stroke, epilepsy, and multiple sclerosis. We emphasize a patient-centered approach, integrating advanced medical treatments with comprehensive rehabilitation programs to restore function and quality of life.',
        features: ['Stroke Unit', 'Epilepsy Monitoring', 'Neuro-Rehabilitation', 'Sleep Medicine']
    },
    3: {
        number: '03',
        title: 'SURGICAL EXCELLENCE',
        image: 'https://i.pinimg.com/736x/85/ed/cd/85edcd9e1037cbcfac85fdd5e106fdfd.jpg',
        description: 'We are leaders in minimally invasive surgery, reducing pain and scarring while speeding up recovery. Our operating theaters are equipped with robotic surgical systems and real-time imaging capabilities. Whether it is orthopedic, general, or cosmetic surgery, our priority is patient safety and exceptional results.',
        features: ['Robotic Surgery', 'Orthopedics', 'General Surgery', 'Post-Op Care']
    }
};

function openServiceModal(serviceId) {
    const service = servicesData[serviceId];
    if (!service) return;
    
    document.getElementById('modalNumber').textContent = service.number;
    document.getElementById('modalTitle').textContent = service.title;
    document.getElementById('modalImage').src = service.image;
    document.getElementById('modalDesc').textContent = service.description;
    
    const featuresContainer = document.getElementById('modalFeatures');
    featuresContainer.innerHTML = '';
    service.features.forEach(feature => {
        const featureEl = document.createElement('div');
        featureEl.className = 'modal-feature';
        featureEl.innerHTML = `
            <div class="modal-feature-icon">✓</div>
            <span class="modal-feature-text">${feature}</span>
        `;
        featuresContainer.appendChild(featureEl);
    });
    
    serviceModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeServiceModal() {
    serviceModal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

const serviceButtons = document.querySelectorAll('.service-btn');
serviceButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        const card = e.target.closest('.service-card');
        const serviceId = card.getAttribute('data-service');
        openServiceModal(serviceId);
    });
});

modalOverlay.addEventListener('click', closeServiceModal);
modalClose.addEventListener('click', closeServiceModal);
modalBtn.addEventListener('click', closeServiceModal);

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && serviceModal.classList.contains('active')) {
        closeServiceModal();
    }
});

// ========== SERVICE CARDS ANIMATION ==========
document.addEventListener('DOMContentLoaded', () => {
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(50px)';
        
        setTimeout(() => {
            card.style.transition = 'all 0.6s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 200);
    });
});

// ========== SMOOTH SCROLLING ==========
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

console.log('Services Page Loaded! 🏥✨');
console.log('Interactive service cards with modal details');