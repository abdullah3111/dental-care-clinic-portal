<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MED.CARE | Premium Healthcare</title>
    <link rel="stylesheet" href="style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700&family=Oswald:wght@200;300;400;500;600;700&family=Playfair+Display:ital,wght@0,400;1,400;1,700&display=swap" rel="stylesheet">
</head>
<body>
    <!-- Loader -->
    <div id="loader" class="loader">
        <div class="loader-content">
            <div class="loader-logo">
                <div class="logo-box">
                    <div class="logo-dot"></div>
                </div>
                <span class="logo-text">MED.CARE</span>
            </div>
            <div class="gold-line"></div>
            <div class="counter-wrapper">
                <span class="counter" id="counter">000</span>
            </div>
        </div>
        <svg class="loader-curve" viewBox="0 0 1440 320" preserveAspectRatio="none">
            <path d="M0,0 C480,200 960,200 1440,0 V0 H0 Z" />
        </svg>
    </div>

    <!-- Main Content -->
    <div id="mainContent" class="main-content">
        <!-- Navbar -->
        <nav id="navbar" class="navbar">
            <div class="nav-container">
                <div class="nav-logo">
                    <div class="nav-logo-box">
                        <div class="nav-logo-dot"></div>
                    </div>
                    <span class="nav-logo-text">MED.CARE</span>
                </div>
                <div class="nav-links">
                    <a href="#home" class="nav-link">HOMEPAGE</a>
                    <a href="#services" class="nav-link">SERVICES</a>
                    <a href="#about" class="nav-link">ABOUT US</a>
                    <a href="#portfolio" class="nav-link">PORTFOLIO</a>
                    <a href="../diseases/diseases.php" class="nav-link">DISEASES & CONDITIONS</a>
                </div>
                <div class="nav-profile">
                    <a href="../own/login.php" class="profile-icon">
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                            <circle cx="12" cy="8" r="4" stroke="currentColor" stroke-width="2"/>
                            <path d="M4 20C4 16.6863 6.68629 14 10 14H14C17.3137 14 20 16.6863 20 20" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
                        </svg>
                    </a>
                </div>
                <button class="mobile-toggle" id="mobileToggle">
                    <span class="hamburger"></span>
                    <span class="hamburger"></span>
                    <span class="hamburger"></span>
                </button>
            </div>
            <div class="mobile-menu" id="mobileMenu">
                <a href="#home" class="mobile-link">HOMEPAGE</a>
                <a href="#services" class="mobile-link">SERVICES</a>
                <a href="#about" class="mobile-link">ABOUT US</a>
                <a href="#portfolio" class="mobile-link">PORTFOLIO</a>
                <a href="diseases/diseases.php" class="mobile-link">DISEASES & CONDITIONS</a>
                <a href="../own/login.php" class="mobile-link mobile-login">LOGIN</a>
            </div>
        </nav>

        <!-- Hero Section -->
        <section id="home" class="hero">
            <div class="hero-bg">
                <img src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=3868&auto=format&fit=crop" alt="Modern Luxury Medical Interior" class="hero-bg-img">
                <div class="hero-overlay"></div>
            </div>
            <div class="hero-content">
                <div class="hero-content-wrapper">
                    <!-- Main Title Group -->
                    <div class="hero-title-group">
                        <br>
                        <br>
                        <br>
                        <br>
                        <br>
                        <h1 class="hero-main-title">MEDIC.CO</h1>
                        <div class="hero-subtitle-wrapper">
                            <div class="hero-line"></div>
                            <p class="hero-subtitle">
                                EXCEPTIONAL CARE <br>
                                <span class="hero-subtitle-accent">FOR YOUR HEALTH</span>
                            </p>
                        </div>
                    </div>

                    <!-- Call to Action Button -->
                    <button class="hero-cta-btn">
                        <span class="hero-cta-text">BOOK AN APPOINTMENT</span>
                        <div class="hero-cta-icon">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 4V20M4 12H20" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                    </button>
                </div>
            </div>
            <div class="scroll-indicator">
                <span class="scroll-text">SCROLL DOWN</span>
                <div class="scroll-line"></div>
            </div>
        </section>

        <!-- Services Section -->
        <section id="services" class="services">
            <div class="services-container">
                <div class="services-header">
                    <h2 class="services-title">OUR <br><span>SERVICES</span></h2>
                    <p class="services-desc">Doing our job from the bottom of our hearts. Providing exceptional medical care with cutting-edge technology.</p>
                </div>
                <div class="services-grid">
                    <!-- Service 1 -->
                    <div class="service-card" data-service="1">
                        <div class="service-bg" style="background-image: url('https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080&auto=format&fit=crop')"></div>
                        <div class="service-content">
                            <div class="service-header">
                                <span class="service-number">01</span>
                                <div class="service-line"></div>
                            </div>
                            <h3 class="service-title">ADVANCED CARDIOLOGY</h3>
                            <p class="service-desc">Comprehensive heart care using state-of-the-art diagnostic technology.</p>
                            <button class="service-btn">
                                <span>LEARN MORE</span>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </button>
                        </div>
                        <div class="service-line-bottom"></div>
                    </div>
                    <!-- Service 2 -->
                    <div class="service-card" data-service="2">
                        <div class="service-bg" style="background-image: url('https://images.unsplash.com/photo-1559757175-5700dde675bc?q=80&w=2070&auto=format&fit=crop')"></div>
                        <div class="service-content">
                            <div class="service-header">
                                <span class="service-number">02</span>
                                <div class="service-line"></div>
                            </div>
                            <h3 class="service-title">NEUROLOGY CENTER</h3>
                            <p class="service-desc">Expert care for neurological disorders with a focus on rehabilitation.</p>
                            <button class="service-btn">
                                <span>LEARN MORE</span>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </button>
                        </div>
                        <div class="service-line-bottom"></div>
                    </div>
                    <!-- Service 3 -->
                    <div class="service-card" data-service="3">
                        <div class="service-bg" style="background-image: url('https://i.pinimg.com/736x/85/ed/cd/85edcd9e1037cbcfac85fdd5e106fdfd.jpg')"></div>
                        <div class="service-content">
                            <div class="service-header">
                                <span class="service-number">03</span>
                                <div class="service-line"></div>
                            </div>
                            <h3 class="service-title">SURGICAL EXCELLENCE</h3>
                            <p class="service-desc">Minimally invasive procedures performed by leading surgeons.</p>
                            <button class="service-btn">
                                <span>LEARN MORE</span>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </button>
                        </div>
                        <div class="service-line-bottom"></div>
                    </div>
                </div>
            </div>
        </section>

        <!-- About Section -->
        <section id="about" class="about">
            <div class="about-container">
                <div class="about-left">
                    <h5 class="about-label">ABOUT THE CLINIC</h5>
                    <h2 class="about-title">Compassionate <br> Care, Advanced <br> Medicine</h2>
                    <div class="about-image-wrapper">
                        <img src="https://picsum.photos/600/800?random=15" alt="Doctor consultation" class="about-image">
                        <div class="about-badge">
                            <span class="badge-number">25</span>
                            <span class="badge-text">Years Exp</span>
                        </div>
                    </div>
                </div>
                <div class="about-right">
                    <div class="stat-item">
                        <span class="stat-value">15k+</span>
                        <div class="stat-content">
                            <h4 class="stat-label">SUCCESSFUL OPERATIONS</h4>
                            <p class="stat-desc">Performing complex surgeries with high success rates across all departments.</p>
                            <div class="stat-line"></div>
                        </div>
                    </div>
                    <div class="stat-item">
                        <span class="stat-value">300+</span>
                        <div class="stat-content">
                            <h4 class="stat-label">MEDICAL SPECIALISTS</h4>
                            <p class="stat-desc">A dedicated team of doctors, nurses, and support staff ensuring 24/7 care.</p>
                            <div class="stat-line"></div>
                        </div>
                    </div>
                    <div class="stat-item">
                        <span class="stat-value">50+</span>
                        <div class="stat-content">
                            <h4 class="stat-label">GLOBAL AWARDS</h4>
                            <p class="stat-desc">Recognized internationally for excellence in patient care and medical innovation.</p>
                            <div class="stat-line"></div>
                        </div>
                    </div>
                    <button class="about-btn">Meet Our Team</button>
                </div>
            </div>
        </section>

        <!-- Portfolio Section -->
        <section id="portfolio" class="portfolio">
            <div class="portfolio-container">
                <h2 class="portfolio-title">Our <span>Facilities</span></h2>
                <div class="portfolio-grid">
                    <div class="portfolio-item tall">
                        <img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2000" alt="VIP Recovery Suite">
                        <div class="portfolio-overlay">
                            <div class="portfolio-content">
                                <h3>VIP RECOVERY SUITE</h3>
                                <div class="portfolio-meta">
                                    <span class="portfolio-location">BERLIN</span>
                                    <span class="portfolio-duration">14 DAYS</span>
                                </div>
                                <div class="portfolio-arrow">→</div>
                            </div>
                        </div>
                    </div>
                    <div class="portfolio-item wide">
                        <img src="https://i.pinimg.com/1200x/79/da/fc/79dafc3de67216d52cd49208a14a1f85.jpg" alt="MRI Diagnostics Lab">
                        <div class="portfolio-overlay">
                            <div class="portfolio-content">
                                <h3>MRI DIAGNOSTICS LAB</h3>
                                <div class="portfolio-meta">
                                    <span class="portfolio-location">LONDON</span>
                                    <span class="portfolio-duration">ONGOING</span>
                                </div>
                                <div class="portfolio-arrow">→</div>
                            </div>
                        </div>
                    </div>
                    <div class="portfolio-item">
                        <img src="https://images.unsplash.com/photo-1504813184591-01572f98c85f?q=80&w=2000" alt="Pediatric Wing">
                        <div class="portfolio-overlay">
                            <div class="portfolio-content">
                                <h3>PEDIATRIC WING</h3>
                                <div class="portfolio-meta">
                                    <span class="portfolio-location">NEW YORK</span>
                                    <span class="portfolio-duration">30 DAYS</span>
                                </div>
                                <div class="portfolio-arrow">→</div>
                            </div>
                        </div>
                    </div>
                    <div class="portfolio-item">
                        <img src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=2000" alt="Dental Clinic">
                        <div class="portfolio-overlay">
                            <div class="portfolio-content">
                                <h3>DENTAL CLINIC</h3>
                                <div class="portfolio-meta">
                                    <span class="portfolio-location">DUBAI</span>
                                    <span class="portfolio-duration">7 DAYS</span>
                                </div>
                                <div class="portfolio-arrow">→</div>
                            </div>
                        </div>
                    </div>
                    <div class="portfolio-item wide">
                        <img src="https://i.pinimg.com/1200x/ec/54/01/ec5401f21a24f64702b87bb2103766cc.jpg" alt="Rehabilitation Center">
                        <div class="portfolio-overlay">
                            <div class="portfolio-content">
                                <h3>REHABILITATION CENTER</h3>
                                <div class="portfolio-meta">
                                    <span class="portfolio-location">TOKYO</span>
                                    <span class="portfolio-duration">60 DAYS</span>
                                </div>
                                <div class="portfolio-arrow">→</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        <!-- Service Modal -->
        <div id="serviceModal" class="modal">
            <div class="modal-overlay"></div>
            <div class="modal-content">
                <button class="modal-close">×</button>
                <div class="modal-image">
                    <img id="modalImage" src="" alt="">
                    <span id="modalNumber" class="modal-number"></span>
                </div>
                <div class="modal-body">
                    <h3 class="modal-label">MEDICAL SERVICE</h3>
                    <h2 id="modalTitle" class="modal-title"></h2>
                    <div class="modal-line"></div>
                    <p id="modalDesc" class="modal-desc"></p>
                    <div id="modalFeatures" class="modal-features"></div>
                    <button class="modal-btn">CLOSE DETAILS</button>
                </div>
            </div>
        </div>
    </div>

    <script src="script.js"></script>
</body>
</html>