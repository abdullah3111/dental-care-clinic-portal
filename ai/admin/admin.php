<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Dashboard - MEDIC.CO</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
</head>
<body class="light-theme">
    <!-- Sidebar -->
    <aside class="sidebar" id="sidebar">
        <!-- Logo Area -->
        <div class="sidebar-logo">
            <div class="logo-container">
                <div class="logo-icon">
                    <span>F</span>
                </div>
                <span class="logo-text">FinSet</span>
            </div>
        </div>

        <!-- Main Navigation -->
        <nav class="sidebar-nav">
            <button class="nav-item active" data-tab="dashboard">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <rect x="3" y="3" width="7" height="7"></rect>
                    <rect x="14" y="3" width="7" height="7"></rect>
                    <rect x="14" y="14" width="7" height="7"></rect>
                    <rect x="3" y="14" width="7" height="7"></rect>
                </svg>
                <span class="nav-text">Dashboard</span>
            </button>
            
            <button class="nav-item" data-tab="services">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                    <line x1="8" y1="21" x2="16" y2="21"></line>
                    <line x1="12" y1="17" x2="12" y2="21"></line>
                </svg>
                <span class="nav-text">Services</span>
            </button>

            <!-- Separator -->
            <div class="nav-separator"></div>

            <!-- Theme Customizer -->
            <button class="nav-item" id="themeBtn">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="13.5" cy="6.5" r=".5"></circle>
                    <circle cx="17.5" cy="10.5" r=".5"></circle>
                    <circle cx="8.5" cy="7.5" r=".5"></circle>
                    <circle cx="6.5" cy="12.5" r=".5"></circle>
                    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"></path>
                </svg>
                <span class="nav-text">Customize Theme</span>
            </button>

            <!-- Dark Mode Toggle -->
            <button class="nav-item" id="darkModeBtn">
                <svg class="dark-icon" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                </svg>
                <svg class="light-icon" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="display: none;">
                    <circle cx="12" cy="12" r="5"></circle>
                    <line x1="12" y1="1" x2="12" y2="3"></line>
                    <line x1="12" y1="21" x2="12" y2="23"></line>
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                    <line x1="1" y1="12" x2="3" y2="12"></line>
                    <line x1="21" y1="12" x2="23" y2="12"></line>
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                </svg>
                <span class="nav-text">Dark Mode</span>
            </button>
        </nav>

        <!-- Footer / Logout -->
        <div class="sidebar-footer">
            <button class="nav-item logout-btn">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                    <polyline points="16,17 21,12 16,7"></polyline>
                    <line x1="21" y1="12" x2="9" y2="12"></line>
                </svg>
                <span class="nav-text">Log out</span>
            </button>
        </div>
    </aside>

    <!-- Main Content Wrapper -->
    <div class="main-wrapper" id="mainWrapper">
        <!-- Navbar -->
        <header class="navbar">
            <!-- Left Side -->
            <div class="navbar-left">
                <button class="sidebar-toggle" id="sidebarToggle">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <line x1="3" y1="6" x2="21" y2="6"></line>
                        <line x1="3" y1="12" x2="21" y2="12"></line>
                        <line x1="3" y1="18" x2="21" y2="18"></line>
                    </svg>
                </button>
                
                <div class="navbar-title">
                    <h1>Welcome back, Adaline!</h1>
                    <p>It is the best time to manage your finances</p>
                </div>
            </div>

            <!-- Right Side -->
            <div class="navbar-right">
                <!-- Search -->
                <div class="search-box">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <circle cx="11" cy="11" r="8"></circle>
                        <path d="m21 21-4.35-4.35"></path>
                    </svg>
                    <input type="text" placeholder="Search...">
                </div>

                <!-- Icons -->
                <div class="navbar-icons">
                    <button class="icon-btn">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                        </svg>
                    </button>
                    <button class="icon-btn">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path>
                            <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                        </svg>
                        <span class="notification-dot"></span>
                    </button>
                </div>

                <!-- Profile -->
                <div class="profile-section">
                    <img src="https://picsum.photos/100/100?random=user" alt="Profile" class="profile-img">
                    <div class="profile-info">
                        <p class="profile-name">Adaline Lively</p>
                        <p class="profile-email">adalineal@gmail.com</p>
                    </div>
                </div>
            </div>
        </header>

        <!-- Page Content -->
        <main class="main-content">
            <!-- Dashboard Tab -->
            <div class="tab-content active" id="dashboard-tab">
                <!-- Dashboard content will be loaded here -->
            </div>

            <!-- Services Tab -->
            <div class="tab-content" id="services-tab">
                <!-- Services content will be loaded here -->
            </div>
        </main>
    </div>

    <!-- Theme Customizer Modal -->
    <div class="modal-overlay" id="themeModal">
        <div class="theme-modal">
            <div class="modal-header">
                <h3>Customize Theme</h3>
                <button class="modal-close" id="themeModalClose">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>
            </div>
            <p class="modal-subtitle">Pick a primary color for your dashboard.</p>
            
            <div class="color-grid" id="colorGrid">
                <!-- Color options will be generated by JavaScript -->
            </div>

            <div class="modal-footer">
                <button class="save-btn" id="saveTheme">Save Changes</button>
            </div>
        </div>
    </div>

    <!-- Services Modal -->
    <div class="services-modal" id="servicesModal" style="display: none;">
        <div class="services-modal-content">
            <div class="services-modal-header" id="modalHeader">
                <div class="modal-drag-handle">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <circle cx="9" cy="12" r="1"></circle>
                        <circle cx="9" cy="5" r="1"></circle>
                        <circle cx="9" cy="19" r="1"></circle>
                        <circle cx="15" cy="12" r="1"></circle>
                        <circle cx="15" cy="5" r="1"></circle>
                        <circle cx="15" cy="19" r="1"></circle>
                    </svg>
                    <span>New Service</span>
                </div>
                <button class="modal-close" id="servicesModalClose">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>
            </div>
            <div class="services-modal-body">
                <div class="form-group">
                    <label>Service Name</label>
                    <input type="text" id="serviceName" placeholder="e.g. Web Design">
                </div>
                <div class="form-group">
                    <label>Description</label>
                    <input type="text" id="serviceDesc" placeholder="Short summary...">
                </div>
                <div class="form-group">
                    <label>Details</label>
                    <textarea id="serviceDetail" rows="3" placeholder="Full details..."></textarea>
                </div>
                <button class="save-service-btn" id="saveService">Save Service</button>
            </div>
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <script src="script.js"></script>
</body>
</html>