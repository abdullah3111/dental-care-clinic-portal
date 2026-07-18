// Theme Colors
const THEME_COLORS = [
    { name: 'Purple', hex: '#8b5cf6' },
    { name: 'Blue', hex: '#3b82f6' },
    { name: 'Emerald', hex: '#10b981' },
    { name: 'Orange', hex: '#f97316' },
    { name: 'Pink', hex: '#ec4899' },
    { name: 'Red', hex: '#ef4444' }
];

// Mock Data
const MOCK_TRANSACTIONS = [
    { id: '1', date: '25 Jul 12:30', amount: -10, paymentName: 'YouTube', method: 'VISA **3254', category: 'Subscription', icon: 'https://picsum.photos/40/40?random=1' },
    { id: '2', date: '26 Jul 15:00', amount: -150, paymentName: 'Reserved', method: 'Mastercard **2154', category: 'Shopping', icon: 'https://picsum.photos/40/40?random=2' },
    { id: '3', date: '27 Jul 9:00', amount: -80, paymentName: 'Yaposhka', method: 'Mastercard **2154', category: 'Cafe & Restaurants', icon: 'https://picsum.photos/40/40?random=3' },
    { id: '4', date: '28 Jul 11:45', amount: 4500, paymentName: 'Upwork', method: 'Wire Transfer', category: 'Income', icon: 'https://picsum.photos/40/40?random=4' }
];

const MONEY_FLOW_DATA = [
    { name: 'Jan', income: 9000, expense: 8000 },
    { name: 'Feb', income: 12000, expense: 13000 },
    { name: 'Mar', income: 10000, expense: 9500 },
    { name: 'Apr', income: 14000, expense: 12500 },
    { name: 'May', income: 12500, expense: 11000 },
    { name: 'Jun', income: 7000, expense: 6000 },
    { name: 'Jul', income: 9000, expense: 7000 }
];

const BUDGET_DATA = [
    { name: 'Cafe & Restaurants', value: 400, color: '#8b5cf6' },
    { name: 'Entertainment', value: 300, color: '#a78bfa' },
    { name: 'Investments', value: 300, color: '#c4b5fd' },
    { name: 'Food & Groceries', value: 200, color: '#4b5563' }
];

const SAVING_GOALS = [
    { id: '1', name: 'MacBook Pro', currentAmount: 412.5, targetAmount: 1650, color: '#3b82f6' },
    { id: '2', name: 'New Car', currentAmount: 25200, targetAmount: 60000, color: '#8b5cf6' },
    { id: '3', name: 'New House', currentAmount: 4500, targetAmount: 150000, color: '#ec4899' }
];

// Admin Panel Manager
class AdminPanel {
    constructor() {
        this.sidebarCollapsed = false;
        this.activeTab = 'dashboard';
        this.isDarkMode = false;
        this.currentTheme = THEME_COLORS[0].hex;
        this.services = [];
        this.servicesViewMode = 'initial';
        this.init();
    }

    init() {
        this.bindEvents();
        this.generateThemeColors();
        this.loadDashboard();
        this.setupServicesModal();
    }

    bindEvents() {
        // Sidebar toggle
        document.getElementById('sidebarToggle').addEventListener('click', () => {
            this.toggleSidebar();
        });

        // Tab navigation
        document.querySelectorAll('.nav-item[data-tab]').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const tab = e.currentTarget.dataset.tab;
                this.switchTab(tab);
            });
        });

        // Theme customizer
        document.getElementById('themeBtn').addEventListener('click', () => {
            this.openThemeModal();
        });

        document.getElementById('themeModalClose').addEventListener('click', () => {
            this.closeThemeModal();
        });

        document.getElementById('saveTheme').addEventListener('click', () => {
            this.closeThemeModal();
        });

        // Dark mode toggle
        document.getElementById('darkModeBtn').addEventListener('click', () => {
            this.toggleDarkMode();
        });

        // Modal overlay click
        document.getElementById('themeModal').addEventListener('click', (e) => {
            if (e.target.id === 'themeModal') {
                this.closeThemeModal();
            }
        });
    }

    toggleSidebar() {
        this.sidebarCollapsed = !this.sidebarCollapsed;
        const sidebar = document.getElementById('sidebar');
        const mainWrapper = document.getElementById('mainWrapper');
        
        sidebar.classList.toggle('collapsed', this.sidebarCollapsed);
        mainWrapper.classList.toggle('collapsed', this.sidebarCollapsed);
    }

    switchTab(tabName) {
        // Update active nav item
        document.querySelectorAll('.nav-item[data-tab]').forEach(btn => {
            btn.classList.remove('active');
        });
        document.querySelector(`[data-tab="${tabName}"]`).classList.add('active');

        // Update active tab content
        document.querySelectorAll('.tab-content').forEach(tab => {
            tab.classList.remove('active');
        });
        document.getElementById(`${tabName}-tab`).classList.add('active');

        this.activeTab = tabName;

        // Load tab content
        if (tabName === 'dashboard') {
            this.loadDashboard();
        } else if (tabName === 'services') {
            this.loadServices();
        }
    }

    toggleDarkMode() {
        this.isDarkMode = !this.isDarkMode;
        document.body.classList.toggle('dark-theme', this.isDarkMode);
    }

    openThemeModal() {
        document.getElementById('themeModal').classList.add('active');
    }

    closeThemeModal() {
        document.getElementById('themeModal').classList.remove('active');
    }

    generateThemeColors() {
        const colorGrid = document.getElementById('colorGrid');
        colorGrid.innerHTML = '';

        THEME_COLORS.forEach(color => {
            const colorOption = document.createElement('div');
            colorOption.className = 'color-option';
            colorOption.innerHTML = `
                <div class="color-circle ${color.hex === this.currentTheme ? 'selected' : ''}" style="background-color: ${color.hex}">
                    ${color.hex === this.currentTheme ? '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20,6 9,17 4,12"></polyline></svg>' : ''}
                </div>
                <span class="color-name">${color.name}</span>
            `;
            
            colorOption.addEventListener('click', () => {
                this.selectThemeColor(color.hex);
            });
            
            colorGrid.appendChild(colorOption);
        });
    }

    selectThemeColor(hex) {
        this.currentTheme = hex;
        document.documentElement.style.setProperty('--color-primary', hex);
        document.documentElement.style.setProperty('--color-secondary', hex + '80');
        this.generateThemeColors();
    }

    loadDashboard() {
        const dashboardTab = document.getElementById('dashboard-tab');
        dashboardTab.innerHTML = `
            <div class="dashboard-container">
                <!-- Header Actions -->
                <div class="dashboard-header">
                    <div class="date-selector">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                            <line x1="16" y1="2" x2="16" y2="6"></line>
                            <line x1="8" y1="2" x2="8" y2="6"></line>
                            <line x1="3" y1="10" x2="21" y2="10"></line>
                        </svg>
                        <span>This month</span>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <polyline points="6,9 12,15 18,9"></polyline>
                        </svg>
                    </div>
                    
                    <div class="header-actions">
                        <button class="btn-secondary">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <circle cx="12" cy="12" r="1"></circle>
                                <circle cx="19" cy="12" r="1"></circle>
                                <circle cx="5" cy="12" r="1"></circle>
                            </svg>
                            Manage widgets
                        </button>
                        <button class="btn-primary">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <line x1="12" y1="5" x2="12" y2="19"></line>
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                            </svg>
                            Add new widget
                        </button>
                    </div>
                </div>

                <!-- Stat Cards -->
                <div class="stats-grid">
                    ${this.generateStatCards()}
                </div>

                <!-- Charts Section -->
                <div class="charts-grid">
                    <div class="chart-card">
                        <div class="chart-header">
                            <h3 class="chart-title">Money flow</h3>
                            <div class="chart-legend">
                                <div class="legend-item">
                                    <div class="legend-dot" style="background-color: var(--color-primary)"></div>
                                    <span>Income</span>
                                </div>
                                <div class="legend-item">
                                    <div class="legend-dot" style="background-color: var(--color-secondary)"></div>
                                    <span>Expense</span>
                                </div>
                                <select style="background-color: var(--color-background); border: none; border-radius: 0.5rem; padding: 0.25rem 0.5rem; color: var(--color-text);">
                                    <option>This year</option>
                                </select>
                            </div>
                        </div>
                        <div class="chart-container">
                            <canvas id="moneyFlowChart"></canvas>
                        </div>
                    </div>

                    <div class="chart-card budget-chart">
                        <div class="chart-header">
                            <h3 class="chart-title">Budget</h3>
                            <div class="stat-icon">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <line x1="7" y1="17" x2="17" y2="7"></line>
                                    <polyline points="17,7 17,13 11,7"></polyline>
                                </svg>
                            </div>
                        </div>
                        
                        <div class="budget-center">
                            <div class="chart-container" style="height: 12rem;">
                                <canvas id="budgetChart"></canvas>
                            </div>
                            <div class="budget-total">
                                <div class="budget-total-label">Total for month</div>
                                <div class="budget-total-amount">$5,950.00</div>
                            </div>
                        </div>

                        <div class="budget-legend">
                            ${BUDGET_DATA.map(item => `
                                <div class="budget-legend-item">
                                    <div class="budget-legend-left">
                                        <div class="legend-dot" style="background-color: ${item.color}"></div>
                                        <span class="budget-legend-name">${item.name}</span>
                                    </div>
                                    <span class="budget-legend-percent">${Math.round((item.value / 1200) * 100)}%</span>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>

                <!-- Bottom Section -->
                <div class="bottom-grid">
                    <div class="transactions-card">
                        <div class="transactions-header">
                            <h3 class="transactions-title">Recent transactions</h3>
                            <div class="transactions-actions">
                                <button class="btn-secondary">All accounts</button>
                                <button class="btn-secondary">See all</button>
                            </div>
                        </div>
                        
                        <table class="transactions-table">
                            <thead>
                                <tr>
                                    <th>Date</th>
                                    <th>Amount</th>
                                    <th>Payment Name</th>
                                    <th>Method</th>
                                    <th>Category</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${MOCK_TRANSACTIONS.map(tx => `
                                    <tr>
                                        <td class="transaction-date">${tx.date}</td>
                                        <td class="transaction-amount ${tx.amount > 0 ? 'positive' : ''}">${tx.amount > 0 ? '+' : ''}${tx.amount}</td>
                                        <td class="transaction-payment">
                                            <img src="${tx.icon}" alt="" class="transaction-icon">
                                            <span class="transaction-name">${tx.paymentName}</span>
                                        </td>
                                        <td class="transaction-method">${tx.method}</td>
                                        <td><span class="transaction-category">${tx.category}</span></td>
                                    </tr>
                                `).join('')}
                            </tbody>
                        </table>
                    </div>

                    <div class="goals-card">
                        <div class="goals-header">
                            <h3 class="goals-title">Saving goals</h3>
                            <div class="stat-icon">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <line x1="7" y1="17" x2="17" y2="7"></line>
                                    <polyline points="17,7 17,13 11,7"></polyline>
                                </svg>
                            </div>
                        </div>

                        <div class="goals-list">
                            ${SAVING_GOALS.map(goal => {
                                const percent = Math.round((goal.currentAmount / goal.targetAmount) * 100);
                                return `
                                    <div class="goal-item">
                                        <div class="goal-header">
                                            <span class="goal-name">${goal.name}</span>
                                            <span class="goal-target">$${goal.targetAmount.toLocaleString()}</span>
                                        </div>
                                        <div class="goal-progress-info">
                                            <span class="goal-percent">${percent}%</span>
                                        </div>
                                        <div class="goal-progress-bar">
                                            <div class="goal-progress-fill" style="width: ${percent}%; background-color: ${goal.color}"></div>
                                        </div>
                                    </div>
                                `;
                            }).join('')}
                        </div>
                        
                        <button class="add-goal-btn">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <line x1="12" y1="5" x2="12" y2="19"></line>
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                            </svg>
                            Add New Goal
                        </button>
                    </div>
                </div>
            </div>
        `;

        // Initialize charts
        setTimeout(() => {
            this.initCharts();
        }, 100);
    }

    generateStatCards() {
        const stats = [
            { label: 'Total balance', amount: '$15,700.00', change: '12.1%', positive: true },
            { label: 'Income', amount: '$8,500.00', change: '6.3%', positive: true },
            { label: 'Expense', amount: '$6,222.00', change: '2.4%', positive: false },
            { label: 'Total savings', amount: '$32,913.00', change: '12.1%', positive: true }
        ];

        return stats.map(stat => `
            <div class="stat-card">
                <div class="stat-header">
                    <span class="stat-label">${stat.label}</span>
                    <div class="stat-icon">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <line x1="7" y1="17" x2="17" y2="7"></line>
                            <polyline points="17,7 17,13 11,7"></polyline>
                        </svg>
                    </div>
                </div>
                <div class="stat-amount">${stat.amount}</div>
                <div class="stat-change">
                    <span class="change-badge ${stat.positive ? 'positive' : 'negative'}">
                        ↑ ${stat.change}
                    </span>
                    <span class="change-text">vs last month</span>
                </div>
            </div>
        `).join('');
    }

    initCharts() {
        // Money Flow Chart
        const moneyFlowCtx = document.getElementById('moneyFlowChart');
        if (moneyFlowCtx) {
            new Chart(moneyFlowCtx, {
                type: 'bar',
                data: {
                    labels: MONEY_FLOW_DATA.map(d => d.name),
                    datasets: [
                        {
                            label: 'Income',
                            data: MONEY_FLOW_DATA.map(d => d.income),
                            backgroundColor: this.currentTheme,
                            borderRadius: 6,
                            barThickness: 12
                        },
                        {
                            label: 'Expense',
                            data: MONEY_FLOW_DATA.map(d => d.expense),
                            backgroundColor: this.currentTheme + '80',
                            borderRadius: 6,
                            barThickness: 12
                        }
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            display: false
                        }
                    },
                    scales: {
                        x: {
                            grid: {
                                display: false
                            }
                        },
                        y: {
                            grid: {
                                color: '#E5E7EB',
                                drawBorder: false
                            },
                            ticks: {
                                callback: function(value) {
                                    return value;
                                }
                            }
                        }
                    }
                }
            });
        }

        // Budget Chart
        const budgetCtx = document.getElementById('budgetChart');
        if (budgetCtx) {
            new Chart(budgetCtx, {
                type: 'doughnut',
                data: {
                    labels: BUDGET_DATA.map(d => d.name),
                    datasets: [{
                        data: BUDGET_DATA.map(d => d.value),
                        backgroundColor: BUDGET_DATA.map(d => d.color),
                        borderWidth: 0,
                        cutout: '60%'
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            display: false
                        }
                    }
                }
            });
        }
    }

    loadServices() {
        const servicesTab = document.getElementById('services-tab');
        
        if (this.servicesViewMode === 'initial') {
            servicesTab.innerHTML = `
                <div class="services-container">
                    <div class="services-initial">
                        <button class="explore-btn" onclick="adminPanel.switchServicesView('grid')">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <polygon points="12,2 2,7 12,12 22,7 12,2"></polygon>
                                <polyline points="2,17 12,22 22,17"></polyline>
                                <polyline points="2,12 12,17 22,12"></polyline>
                            </svg>
                            Explore Services
                        </button>
                    </div>
                </div>
            `;
        } else {
            servicesTab.innerHTML = `
                <div class="services-container">
                    <div class="services-grid-view">
                        <div class="services-header">
                            <div class="services-title">
                                <h2>Our Services</h2>
                                <p>Manage and offer your specialized services</p>
                            </div>
                            <button class="btn-primary" onclick="adminPanel.openServicesModal()">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <line x1="12" y1="5" x2="12" y2="19"></line>
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                </svg>
                                Add Service
                            </button>
                        </div>

                        ${this.services.length === 0 ? `
                            <div class="empty-services">
                                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <polygon points="12,2 2,7 12,12 22,7 12,2"></polygon>
                                    <polyline points="2,17 12,22 22,17"></polyline>
                                    <polyline points="2,12 12,17 22,12"></polyline>
                                </svg>
                                <p>No services added yet</p>
                                <p>Click "Add Service" to get started</p>
                            </div>
                        ` : `
                            <div class="services-grid">
                                ${this.services.map(service => `
                                    <div class="service-card">
                                        <div class="service-icon">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                                <polyline points="14,2 14,8 20,8"></polyline>
                                                <line x1="16" y1="13" x2="8" y2="13"></line>
                                                <line x1="16" y1="17" x2="8" y2="17"></line>
                                                <polyline points="10,9 9,9 8,9"></polyline>
                                            </svg>
                                        </div>
                                        <h3 class="service-name">${service.name}</h3>
                                        <p class="service-description">${service.description}</p>
                                        <div class="service-details">
                                            <p class="service-details-label">Details</p>
                                            <p class="service-details-text">${service.detail || 'No additional details provided.'}</p>
                                        </div>
                                    </div>
                                `).join('')}
                            </div>
                        `}
                    </div>
                </div>
            `;
        }
    }

    switchServicesView(mode) {
        this.servicesViewMode = mode;
        this.loadServices();
    }

    setupServicesModal() {
        const modal = document.getElementById('servicesModal');
        const modalContent = modal.querySelector('.services-modal-content');
        const header = document.getElementById('modalHeader');
        
        let isDragging = false;
        let dragOffset = { x: 0, y: 0 };
        let modalPosition = { x: 0, y: 0 };

        // Close modal
        document.getElementById('servicesModalClose').addEventListener('click', () => {
            this.closeServicesModal();
        });

        // Save service
        document.getElementById('saveService').addEventListener('click', () => {
            this.saveService();
        });

        // Dragging functionality
        header.addEventListener('mousedown', (e) => {
            isDragging = true;
            dragOffset.x = e.clientX - modalPosition.x;
            dragOffset.y = e.clientY - modalPosition.y;
            header.style.cursor = 'grabbing';
        });

        document.addEventListener('mousemove', (e) => {
            if (isDragging) {
                modalPosition.x = e.clientX - dragOffset.x;
                modalPosition.y = e.clientY - dragOffset.y;
                modalContent.style.left = modalPosition.x + 'px';
                modalContent.style.top = modalPosition.y + 'px';
            }
        });

        document.addEventListener('mouseup', () => {
            isDragging = false;
            header.style.cursor = 'grab';
        });
    }

    openServicesModal() {
        const modal = document.getElementById('servicesModal');
        const modalContent = modal.querySelector('.services-modal-content');
        
        // Center modal
        const centerX = window.innerWidth / 2 - 200;
        const centerY = window.innerHeight / 2 - 250;
        
        modalContent.style.left = centerX + 'px';
        modalContent.style.top = centerY + 'px';
        
        modal.style.display = 'block';
        
        // Clear form
        document.getElementById('serviceName').value = '';
        document.getElementById('serviceDesc').value = '';
        document.getElementById('serviceDetail').value = '';
    }

    closeServicesModal() {
        document.getElementById('servicesModal').style.display = 'none';
    }

    saveService() {
        const name = document.getElementById('serviceName').value;
        const description = document.getElementById('serviceDesc').value;
        const detail = document.getElementById('serviceDetail').value;

        if (!name || !description) return;

        const newService = {
            id: Date.now().toString(),
            name,
            description,
            detail
        };

        this.services.push(newService);
        this.closeServicesModal();
        this.loadServices();
    }
}

// Initialize Admin Panel
let adminPanel;

document.addEventListener('DOMContentLoaded', () => {
    adminPanel = new AdminPanel();
});