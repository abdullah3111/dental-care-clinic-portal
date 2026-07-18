// ===== DOCTOR PROFILE PAGE JAVASCRIPT =====

// ===== NAVBAR FUNCTIONALITY =====
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const header = document.querySelector('.header');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', (e) => {
        e.stopPropagation();
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        
        if (navMenu.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    });

    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
    
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            document.body.style.overflow = '';
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

// ===== DOCTOR DATA AND FUNCTIONALITY =====
const doctorsData = {
    'hassan-ali': {
        name: 'Dr. Hassan Ali',
        specialty: 'Dermatologist',
        experience: '14+ Years Experience',
        image: 'assets/images/doc1.jpg',
        about: 'Dr. Hassan Ali is a highly experienced dermatologist with over 14 years of practice in treating various skin conditions. He specializes in cosmetic dermatology, skin cancer treatment, and advanced dermatological procedures. Dr. Ali is known for his patient-centered approach and commitment to providing the highest quality care.',
        specializations: [
            'Cosmetic Dermatology',
            'Skin Cancer Treatment',
            'Acne Treatment',
            'Laser Therapy',
            'Anti-aging Treatments'
        ],
        education: [
            {
                degree: 'MBBS',
                institution: 'Dow University of Health Sciences, Karachi',
                year: '2006-2011'
            },
            {
                degree: 'MD Dermatology',
                institution: 'Aga Khan University Hospital, Karachi',
                year: '2012-2015'
            },
            {
                degree: 'Fellowship in Cosmetic Dermatology',
                institution: 'American Academy of Dermatology',
                year: '2016'
            }
        ],
        services: [
            {
                icon: 'fas fa-user-md',
                title: 'General Dermatology',
                description: 'Comprehensive skin examination and treatment'
            },
            {
                icon: 'fas fa-magic',
                title: 'Cosmetic Procedures',
                description: 'Botox, fillers, and aesthetic treatments'
            },
            {
                icon: 'fas fa-microscope',
                title: 'Skin Cancer Screening',
                description: 'Early detection and treatment of skin cancer'
            },
            {
                icon: 'fas fa-laser',
                title: 'Laser Treatments',
                description: 'Advanced laser therapy for various conditions'
            }
        ],
        schedule: [
            { day: 'Monday', time: '9:00 AM - 5:00 PM', available: true },
            { day: 'Tuesday', time: '9:00 AM - 5:00 PM', available: true },
            { day: 'Wednesday', time: '9:00 AM - 5:00 PM', available: true },
            { day: 'Thursday', time: '9:00 AM - 5:00 PM', available: true },
            { day: 'Friday', time: '9:00 AM - 3:00 PM', available: true },
            { day: 'Saturday', time: 'Closed', available: false },
            { day: 'Sunday', time: 'Closed', available: false }
        ]
    },
    'ayesha-malik': {
        name: 'Dr. Ayesha Malik',
        specialty: 'Gynecologist',
        experience: '16+ Years Experience',
        image: 'assets/images/doc2.jpg',
        about: 'Dr. Ayesha Malik is a renowned gynecologist with over 16 years of experience in women\'s health. She specializes in obstetrics, gynecology, and reproductive health. Dr. Malik is dedicated to providing comprehensive care for women at all stages of life.',
        specializations: [
            'Obstetrics & Gynecology',
            'Reproductive Health',
            'Prenatal Care',
            'Minimally Invasive Surgery',
            'Family Planning'
        ],
        education: [
            {
                degree: 'MBBS',
                institution: 'King Edward Medical University, Lahore',
                year: '2004-2009'
            },
            {
                degree: 'FCPS Gynecology',
                institution: 'College of Physicians and Surgeons Pakistan',
                year: '2010-2014'
            },
            {
                degree: 'Fellowship in Reproductive Medicine',
                institution: 'Royal College of Obstetricians, UK',
                year: '2015'
            }
        ],
        services: [
            {
                icon: 'fas fa-baby',
                title: 'Prenatal Care',
                description: 'Comprehensive pregnancy care and monitoring'
            },
            {
                icon: 'fas fa-female',
                title: 'Women\'s Health',
                description: 'Complete gynecological examinations and care'
            },
            {
                icon: 'fas fa-heartbeat',
                title: 'Reproductive Health',
                description: 'Fertility counseling and treatment options'
            },
            {
                icon: 'fas fa-procedures',
                title: 'Minimally Invasive Surgery',
                description: 'Advanced laparoscopic procedures'
            }
        ],
        schedule: [
            { day: 'Monday', time: '8:00 AM - 4:00 PM', available: true },
            { day: 'Tuesday', time: '8:00 AM - 4:00 PM', available: true },
            { day: 'Wednesday', time: '8:00 AM - 4:00 PM', available: true },
            { day: 'Thursday', time: '8:00 AM - 4:00 PM', available: true },
            { day: 'Friday', time: '8:00 AM - 2:00 PM', available: true },
            { day: 'Saturday', time: '9:00 AM - 1:00 PM', available: true },
            { day: 'Sunday', time: 'Closed', available: false }
        ]
    },
    'ahmed-hassan': {
        name: 'Dr. Ahmed Hassan',
        specialty: 'Cardiologist',
        experience: '15+ Years Experience',
        image: 'assets/images/doc3.jpg',
        about: 'Dr. Ahmed Hassan is a distinguished cardiologist with 15 years of experience in cardiovascular medicine. He specializes in interventional cardiology, heart disease prevention, and cardiac rehabilitation. Dr. Hassan is committed to providing cutting-edge cardiac care.',
        specializations: [
            'Interventional Cardiology',
            'Heart Disease Prevention',
            'Cardiac Rehabilitation',
            'Echocardiography',
            'Coronary Angioplasty'
        ],
        education: [
            {
                degree: 'MBBS',
                institution: 'Allama Iqbal Medical College, Lahore',
                year: '2005-2010'
            },
            {
                degree: 'FCPS Cardiology',
                institution: 'College of Physicians and Surgeons Pakistan',
                year: '2011-2015'
            },
            {
                degree: 'Fellowship in Interventional Cardiology',
                institution: 'American College of Cardiology',
                year: '2016'
            }
        ],
        services: [
            {
                icon: 'fas fa-heartbeat',
                title: 'Cardiac Consultation',
                description: 'Comprehensive heart health evaluation'
            },
            {
                icon: 'fas fa-stethoscope',
                title: 'Echocardiography',
                description: 'Advanced cardiac imaging and diagnosis'
            },
            {
                icon: 'fas fa-procedures',
                title: 'Angioplasty',
                description: 'Minimally invasive cardiac procedures'
            },
            {
                icon: 'fas fa-running',
                title: 'Cardiac Rehabilitation',
                description: 'Post-treatment recovery programs'
            }
        ],
        schedule: [
            { day: 'Monday', time: '10:00 AM - 6:00 PM', available: true },
            { day: 'Tuesday', time: '10:00 AM - 6:00 PM', available: true },
            { day: 'Wednesday', time: '10:00 AM - 6:00 PM', available: true },
            { day: 'Thursday', time: '10:00 AM - 6:00 PM', available: true },
            { day: 'Friday', time: '10:00 AM - 4:00 PM', available: true },
            { day: 'Saturday', time: 'Closed', available: false },
            { day: 'Sunday', time: 'Emergency Only', available: true }
        ]
    },
    'sarah-khan': {
        name: 'Dr. Sarah Khan',
        specialty: 'Neurologist',
        experience: '12+ Years Experience',
        image: 'assets/images/doc4.jpg',
        about: 'Dr. Sarah Khan is a skilled neurologist with 12 years of experience in treating neurological disorders. She specializes in epilepsy, stroke management, and neurodegenerative diseases. Dr. Khan is known for her compassionate care and expertise in complex neurological conditions.',
        specializations: [
            'Epilepsy Treatment',
            'Stroke Management',
            'Neurodegenerative Diseases',
            'Headache Disorders',
            'Movement Disorders'
        ],
        education: [
            {
                degree: 'MBBS',
                institution: 'Fatima Jinnah Medical University, Lahore',
                year: '2007-2012'
            },
            {
                degree: 'FCPS Neurology',
                institution: 'College of Physicians and Surgeons Pakistan',
                year: '2013-2017'
            },
            {
                degree: 'Fellowship in Epilepsy',
                institution: 'Mayo Clinic, USA',
                year: '2018'
            }
        ],
        services: [
            {
                icon: 'fas fa-brain',
                title: 'Neurological Consultation',
                description: 'Comprehensive neurological examination'
            },
            {
                icon: 'fas fa-bolt',
                title: 'Epilepsy Treatment',
                description: 'Advanced seizure management and care'
            },
            {
                icon: 'fas fa-head-side-virus',
                title: 'Headache Management',
                description: 'Specialized treatment for chronic headaches'
            },
            {
                icon: 'fas fa-walking',
                title: 'Movement Disorders',
                description: 'Treatment for Parkinson\'s and related conditions'
            }
        ],
        schedule: [
            { day: 'Monday', time: '9:00 AM - 5:00 PM', available: true },
            { day: 'Tuesday', time: '9:00 AM - 5:00 PM', available: true },
            { day: 'Wednesday', time: 'Closed', available: false },
            { day: 'Thursday', time: '9:00 AM - 5:00 PM', available: true },
            { day: 'Friday', time: '9:00 AM - 3:00 PM', available: true },
            { day: 'Saturday', time: '10:00 AM - 2:00 PM', available: true },
            { day: 'Sunday', time: 'Closed', available: false }
        ]
    },
    'ali-raza': {
        name: 'Dr. Ali Raza',
        specialty: 'Orthopedic Surgeon',
        experience: '18+ Years Experience',
        image: 'assets/images/doc5.jpg',
        about: 'Dr. Ali Raza is a highly experienced orthopedic surgeon with 18 years of practice in bone and joint surgery. He specializes in sports medicine, joint replacement, and trauma surgery. Dr. Raza is renowned for his surgical expertise and patient care.',
        specializations: [
            'Joint Replacement Surgery',
            'Sports Medicine',
            'Trauma Surgery',
            'Spine Surgery',
            'Arthroscopic Surgery'
        ],
        education: [
            {
                degree: 'MBBS',
                institution: 'University of Health Sciences, Lahore',
                year: '2002-2007'
            },
            {
                degree: 'FCPS Orthopedic Surgery',
                institution: 'College of Physicians and Surgeons Pakistan',
                year: '2008-2013'
            },
            {
                degree: 'Fellowship in Joint Replacement',
                institution: 'Johns Hopkins Hospital, USA',
                year: '2014'
            }
        ],
        services: [
            {
                icon: 'fas fa-bone',
                title: 'Joint Replacement',
                description: 'Advanced knee and hip replacement surgery'
            },
            {
                icon: 'fas fa-running',
                title: 'Sports Medicine',
                description: 'Treatment of sports-related injuries'
            },
            {
                icon: 'fas fa-ambulance',
                title: 'Trauma Surgery',
                description: 'Emergency orthopedic trauma care'
            },
            {
                icon: 'fas fa-spine',
                title: 'Spine Surgery',
                description: 'Minimally invasive spine procedures'
            }
        ],
        schedule: [
            { day: 'Monday', time: '8:00 AM - 4:00 PM', available: true },
            { day: 'Tuesday', time: '8:00 AM - 4:00 PM', available: true },
            { day: 'Wednesday', time: '8:00 AM - 4:00 PM', available: true },
            { day: 'Thursday', time: '8:00 AM - 4:00 PM', available: true },
            { day: 'Friday', time: '8:00 AM - 2:00 PM', available: true },
            { day: 'Saturday', time: 'Surgery Only', available: true },
            { day: 'Sunday', time: 'Closed', available: false }
        ]
    },
    'muhammad-tariq': {
        name: 'Dr. Muhammad Tariq',
        specialty: 'Pediatrician',
        experience: '10+ Years Experience',
        image: 'assets/images/doc6.jpg',
        about: 'Dr. Muhammad Tariq is a dedicated pediatrician with 10 years of experience in child healthcare. He specializes in pediatric medicine, child development, and preventive care. Dr. Tariq is known for his gentle approach with children and comprehensive family care.',
        specializations: [
            'Pediatric Medicine',
            'Child Development',
            'Preventive Care',
            'Vaccination Programs',
            'Pediatric Nutrition'
        ],
        education: [
            {
                degree: 'MBBS',
                institution: 'Nishtar Medical University, Multan',
                year: '2009-2014'
            },
            {
                degree: 'FCPS Pediatrics',
                institution: 'College of Physicians and Surgeons Pakistan',
                year: '2015-2019'
            },
            {
                degree: 'Diploma in Child Health',
                institution: 'Royal College of Pediatrics, UK',
                year: '2020'
            }
        ],
        services: [
            {
                icon: 'fas fa-baby',
                title: 'Newborn Care',
                description: 'Comprehensive care for newborns and infants'
            },
            {
                icon: 'fas fa-syringe',
                title: 'Vaccination',
                description: 'Complete immunization programs for children'
            },
            {
                icon: 'fas fa-child',
                title: 'Child Development',
                description: 'Growth monitoring and developmental assessment'
            },
            {
                icon: 'fas fa-apple-alt',
                title: 'Pediatric Nutrition',
                description: 'Nutritional counseling for healthy growth'
            }
        ],
        schedule: [
            { day: 'Monday', time: '9:00 AM - 5:00 PM', available: true },
            { day: 'Tuesday', time: '9:00 AM - 5:00 PM', available: true },
            { day: 'Wednesday', time: '9:00 AM - 5:00 PM', available: true },
            { day: 'Thursday', time: '9:00 AM - 5:00 PM', available: true },
            { day: 'Friday', time: '9:00 AM - 3:00 PM', available: true },
            { day: 'Saturday', time: '10:00 AM - 2:00 PM', available: true },
            { day: 'Sunday', time: 'Closed', available: false }
        ]
    }
};

// Get doctor ID from URL parameters
function getDoctorIdFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('doctor') || 'hassan-ali'; // Default to hassan-ali
}

// Load doctor data
function loadDoctorData() {
    const doctorId = getDoctorIdFromURL();
    const doctor = doctorsData[doctorId];
    
    if (!doctor) {
        console.error('Doctor not found:', doctorId);
        return;
    }
    
    // Update basic info
    document.getElementById('doctor-image').src = doctor.image;
    document.getElementById('doctor-image').alt = doctor.name;
    document.getElementById('doctor-name').textContent = doctor.name;
    document.getElementById('doctor-specialty').textContent = doctor.specialty;
    document.getElementById('doctor-experience').textContent = doctor.experience;
    
    // Update about section
    document.getElementById('about-doctor-name').textContent = doctor.name.replace('Dr. ', '');
    document.getElementById('doctor-about').textContent = doctor.about;
    
    // Update specializations
    const specializationsList = document.getElementById('doctor-specializations');
    specializationsList.innerHTML = '';
    doctor.specializations.forEach(spec => {
        const li = document.createElement('li');
        li.textContent = spec;
        specializationsList.appendChild(li);
    });
    
    // Update education
    const educationContainer = document.getElementById('doctor-education');
    educationContainer.innerHTML = '';
    doctor.education.forEach(edu => {
        const eduDiv = document.createElement('div');
        eduDiv.className = 'education-item';
        eduDiv.innerHTML = `
            <h4>${edu.degree}</h4>
            <p>${edu.institution}</p>
            <span>${edu.year}</span>
        `;
        educationContainer.appendChild(eduDiv);
    });
    
    // Update services
    const servicesContainer = document.getElementById('doctor-services');
    servicesContainer.innerHTML = '';
    doctor.services.forEach(service => {
        const serviceDiv = document.createElement('div');
        serviceDiv.className = 'service-item';
        serviceDiv.innerHTML = `
            <i class="${service.icon}"></i>
            <h4>${service.title}</h4>
            <p>${service.description}</p>
        `;
        servicesContainer.appendChild(serviceDiv);
    });
    
    // Update schedule
    const scheduleContainer = document.getElementById('doctor-schedule');
    scheduleContainer.innerHTML = '';
    doctor.schedule.forEach(day => {
        const dayDiv = document.createElement('div');
        dayDiv.className = `schedule-day ${!day.available ? 'unavailable' : ''}`;
        dayDiv.innerHTML = `
            <span class="day">${day.day}</span>
            <span class="time">${day.time}</span>
        `;
        scheduleContainer.appendChild(dayDiv);
    });
}

// Tab functionality
function initializeTabs() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetTab = btn.getAttribute('data-tab');
            
            // Remove active class from all tabs and panes
            tabBtns.forEach(b => b.classList.remove('active'));
            tabPanes.forEach(p => p.classList.remove('active'));
            
            // Add active class to clicked tab and corresponding pane
            btn.classList.add('active');
            document.getElementById(targetTab).classList.add('active');
        });
    });
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', () => {
    loadDoctorData();
    initializeTabs();
    
    // Add scroll effect to navbar
    window.addEventListener('scroll', () => {
        const header = document.querySelector('.header');
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
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