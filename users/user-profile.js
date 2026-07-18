// User Profile JavaScript - Clean Style for Hospital

document.addEventListener('DOMContentLoaded', function() {
    // Tab switching functionality for sidebar menu
    const menuItems = document.querySelectorAll('.menu-item[data-tab]');
    const tabContents = document.querySelectorAll('.tab-content');

    menuItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const targetTab = this.getAttribute('data-tab');
            
            // Remove active class from all menu items and tab contents
            menuItems.forEach(menuItem => menuItem.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked menu item and corresponding tab content
            this.classList.add('active');
            const targetContent = document.getElementById(targetTab);
            if (targetContent) {
                targetContent.classList.add('active');
            }
            
            // Update page title based on active tab
            const tabTitles = {
                'profile': 'My Profile - Hospital',
                'appointments': 'My Appointments - Hospital',
                'medical': 'Medical Records - Hospital',
                'prescriptions': 'Prescriptions - Hospital',
                'reports': 'Health Reports - Hospital',
                'security': 'Security Settings - Hospital'
            };
            
            if (tabTitles[targetTab]) {
                document.title = tabTitles[targetTab];
            }
            
            // Show notification for tab switch
            const tabNames = {
                'profile': '👤 Personal Information',
                'appointments': '📅 My Appointments',
                'medical': '🏥 Medical Records',
                'prescriptions': '💊 Prescriptions',
                'reports': '📊 Health Reports',
                'security': '🔒 Security Settings'
            };
            
            if (tabNames[targetTab]) {
                showNotification(`Switched to ${tabNames[targetTab]} section`, 'info');
            }
        });
    });

    // Initialize first tab as active if none is active
    const activeTab = document.querySelector('.menu-item.active[data-tab]');
    const activeContent = document.querySelector('.tab-content.active');
    
    if (!activeTab && menuItems.length > 0) {
        menuItems[0].classList.add('active');
    }
    
    if (!activeContent && tabContents.length > 0) {
        tabContents[0].classList.add('active');
    }
    
    // Handle external page links (appointments.html, medical-records.html, prescriptions.html, health-reports.html)
    const externalLinks = document.querySelectorAll('a[href$=".html"]:not([href^="../"])');
    externalLinks.forEach(link => {
        const href = link.getAttribute('href');
        
        if (href === 'appointments.html' || href === 'medical-records.html' || href === 'prescriptions.html' || href === 'health-reports.html') {
            link.addEventListener('click', function(e) {
                // Let the default navigation happen, but show notification
                if (href === 'appointments.html') {
                    showNotification('🗓️ Loading appointments page...', 'info');
                } else if (href === 'medical-records.html') {
                    showNotification('📋 Loading medical records...', 'info');
                } else if (href === 'prescriptions.html') {
                    showNotification('💊 Loading prescriptions page...', 'info');
                } else if (href === 'health-reports.html') {
                    showNotification('📊 Loading health reports...', 'info');
                }
                // Don't prevent default - let normal navigation work
            });
        }
    });
    
    // Handle top navigation links
    const topNavLinks = document.querySelectorAll('.nav-link:not(.logout)');
    topNavLinks.forEach(link => {
        const href = link.getAttribute('href');
        
        if (href && !href.startsWith('../') && !href.startsWith('#')) {
            link.addEventListener('click', function(e) {
                const currentPage = window.location.pathname.split('/').pop();
                
                if (href === 'index.html') {
                    if (currentPage === 'index.html' || currentPage === '') {
                        e.preventDefault();
                        showNotification('👤 You are already on the profile page!', 'info');
                    } else {
                        showNotification('👤 Loading profile page...', 'info');
                    }
                } else if (href === 'appointments.html') {
                    if (currentPage === 'appointments.html') {
                        e.preventDefault();
                        showNotification('🗓️ You are already on the appointments page!', 'info');
                    } else {
                        showNotification('🗓️ Loading appointments...', 'info');
                    }
                } else if (href === 'medical-records.html') {
                    if (currentPage === 'medical-records.html') {
                        e.preventDefault();
                        showNotification('📋 You are already on the medical records page!', 'info');
                    } else {
                        showNotification('📋 Loading medical records...', 'info');
                    }
                } else if (href === 'prescriptions.html') {
                    if (currentPage === 'prescriptions.html') {
                        e.preventDefault();
                        showNotification('💊 You are already on the prescriptions page!', 'info');
                    } else {
                        showNotification('💊 Loading prescriptions...', 'info');
                    }
                } else if (href === 'health-reports.html') {
                    if (currentPage === 'health-reports.html') {
                        e.preventDefault();
                        showNotification('📊 You are already on the health reports page!', 'info');
                    } else {
                        showNotification('📊 Loading health reports...', 'info');
                    }
                }
            });
        }
    });
    
    // Handle logout link
    const logoutLink = document.querySelector('.nav-link.logout');
    if (logoutLink) {
        logoutLink.addEventListener('click', function(e) {
            e.preventDefault();
            
            showCustomConfirm(
                'Logout Confirmation',
                'Are you sure you want to logout from your medical account?',
                'You will need to login again to access your medical records and appointments.',
                function() {
                    showNotification('🔐 Logging out securely... Your session will be terminated safely.', 'info');
                    setTimeout(() => {
                        showNotification('✅ Logged out successfully! Redirecting to home page...', 'success');
                        setTimeout(() => {
                            window.location.href = '../home.html';
                        }, 1500);
                    }, 1000);
                },
                function() {
                    showNotification('❌ Logout cancelled. You remain logged in to your medical account.', 'info');
                }
            );
        });
    }
    
    // Handle sidebar logout and home links
    const sidebarLinks = document.querySelectorAll('.side-menu .menu-item');
    sidebarLinks.forEach(link => {
        const href = link.getAttribute('href');
        const text = link.textContent.trim();
        
        if (href === '../home.html' && text.includes('Back to Home')) {
            // Back to Home link
            link.addEventListener('click', function(e) {
                e.preventDefault();
                showNotification('🏠 Returning to home page... Thank you for using MediCare Clinic portal.', 'info');
                setTimeout(() => {
                    window.location.href = '../home.html';
                }, 1000);
            });
        } else if (href === '../home.html' && text.includes('Logout')) {
            // Logout link (red colored)
            link.addEventListener('click', function(e) {
                e.preventDefault();
                
                showCustomConfirm(
                    'Logout Confirmation',
                    'Are you sure you want to logout from your medical account?',
                    'You will need to login again to access your medical records and appointments.',
                    function() {
                        showNotification('🔐 Logging out securely... Your session will be terminated safely.', 'info');
                        setTimeout(() => {
                            showNotification('✅ Logged out successfully! Redirecting to home page...', 'success');
                            setTimeout(() => {
                                window.location.href = '../home.html';
                            }, 1500);
                        }, 1000);
                    },
                    function() {
                        showNotification('❌ Logout cancelled. You remain logged in to your medical account.', 'info');
                    }
                );
            });
        } else if (href === 'appointments.html') {
            // Appointments link
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const currentPage = window.location.pathname.split('/').pop();
                if (currentPage === 'appointments.html') {
                    showNotification('🗓️ You are already on the appointments page!', 'info');
                } else {
                    showNotification('🗓️ Loading appointments page... Please wait while we fetch your appointment history.', 'info');
                    setTimeout(() => {
                        window.location.href = href;
                    }, 1000);
                }
            });
        } else if (href === 'medical-records.html') {
            // Medical Records link
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const currentPage = window.location.pathname.split('/').pop();
                if (currentPage === 'medical-records.html') {
                    showNotification('📋 You are already on the medical records page!', 'info');
                } else {
                    showNotification('📋 Loading medical records... Accessing your secure health information.', 'info');
                    setTimeout(() => {
                        window.location.href = href;
                    }, 1000);
                }
            });
        } else if (href === 'prescriptions.html') {
            // Prescriptions link
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const currentPage = window.location.pathname.split('/').pop();
                if (currentPage === 'prescriptions.html') {
                    showNotification('💊 You are already on the prescriptions page!', 'info');
                } else {
                    showNotification('💊 Loading prescriptions... Accessing your medication information.', 'info');
                    setTimeout(() => {
                        window.location.href = href;
                    }, 1000);
                }
            });
        } else if (href === 'health-reports.html') {
            // Health Reports link
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const currentPage = window.location.pathname.split('/').pop();
                if (currentPage === 'health-reports.html') {
                    showNotification('📊 You are already on the health reports page!', 'info');
                } else {
                    showNotification('📊 Loading health reports... Accessing your health analytics and trends.', 'info');
                    setTimeout(() => {
                        window.location.href = href;
                    }, 1000);
                }
            });
        } else if (href === 'index.html') {
            // Profile link
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const currentPage = window.location.pathname.split('/').pop();
                if (currentPage === 'index.html' || currentPage === '') {
                    showNotification('👤 You are already on the profile page!', 'info');
                } else {
                    showNotification('👤 Loading profile page... Accessing your personal information.', 'info');
                    setTimeout(() => {
                        window.location.href = href;
                    }, 1000);
                }
            });
        }
    });
});

// Toggle edit functionality
function toggleEdit(field) {
    const edit = document.getElementById('edit_' + field);
    const val = document.getElementById('val_' + field);
    
    if (edit && val) {
        if (edit.classList.contains('show')) {
            edit.classList.remove('show');
            val.style.display = 'block';
        } else {
            edit.classList.add('show');
            val.style.display = 'none';
        }
    }
}

// Save field functionality
function saveField(field) {
    const edit = document.getElementById('edit_' + field);
    const val = document.getElementById('val_' + field);
    const input = edit.querySelector('input, select, textarea');
    
    if (edit && val && input) {
        let newValue = input.value;
        
        // Format date if it's a date field
        if (field === 'dob' && newValue) {
            const date = new Date(newValue);
            newValue = date.toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
            });
        }
        
        // Update the display value
        val.textContent = newValue || 'Not set';
        
        // Hide edit form and show value
        edit.classList.remove('show');
        val.style.display = 'block';
        
        // Show success message based on field type
        const fieldMessages = {
            'name': '👤 Your name has been updated successfully! This change will reflect across all your medical records.',
            'phone': '📱 Phone number updated! We will use this number for appointment reminders and emergency contact.',
            'dob': '🎂 Date of birth updated in your medical profile. This helps us provide age-appropriate healthcare.',
            'blood': '🩸 Blood group information updated! This is crucial for emergency medical situations.',
            'city': '🏙️ City information updated! We will show you nearby healthcare facilities and services.',
            'address': '🏠 Address updated successfully! This will be used for home healthcare services and medical deliveries.'
        };
        
        showNotification(fieldMessages[field] || '✅ Profile information updated successfully!', 'success');
    }
}

// Change password functionality
function changePassword() {
    const currentPassword = document.querySelector('input[name="current_password"]').value;
    const newPassword = document.querySelector('input[name="new_password"]').value;
    const confirmPassword = document.querySelector('input[name="confirm_password"]').value;
    
    if (!currentPassword || !newPassword || !confirmPassword) {
        showNotification('🔒 Please fill in all password fields to secure your medical account.', 'error');
        return;
    }
    
    if (newPassword.length < 6) {
        showNotification('🔐 Password must be at least 6 characters long to protect your sensitive medical information.', 'error');
        return;
    }
    
    if (newPassword !== confirmPassword) {
        showNotification('❌ New passwords do not match. Please ensure both password fields are identical.', 'error');
        return;
    }
    
    // Show loading message
    showNotification('🔄 Updating your account security... Please wait while we encrypt your new password.', 'info');
    
    // Simulate password change process
    setTimeout(() => {
        showNotification('✅ Password updated successfully! Your medical account is now more secure. Please use your new password for future logins.', 'success');
        
        // Clear form
        document.querySelector('input[name="current_password"]').value = '';
        document.querySelector('input[name="new_password"]').value = '';
        document.querySelector('input[name="confirm_password"]').value = '';
    }, 2000);
}

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());

    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${getNotificationIcon(type)}"></i>
            <span>${message}</span>
            <button class="notification-close">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `;

    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${getNotificationColor(type)};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 10px;
        box-shadow: 0 5px 20px rgba(0,0,0,0.3);
        z-index: 10000;
        transform: translateX(400px);
        transition: transform 0.3s ease;
        max-width: 400px;
        border: 1px solid ${getNotificationBorderColor(type)};
    `;

    notification.querySelector('.notification-content').style.cssText = `
        display: flex;
        align-items: center;
        gap: 0.8rem;
    `;

    notification.querySelector('.notification-close').style.cssText = `
        background: none;
        border: none;
        color: white;
        cursor: pointer;
        padding: 0;
        margin-left: auto;
        opacity: 0.8;
    `;

    notification.querySelector('.notification-close').addEventListener('mouseover', function() {
        this.style.opacity = '1';
    });

    notification.querySelector('.notification-close').addEventListener('mouseout', function() {
        this.style.opacity = '0.8';
    });

    // Add to page
    document.body.appendChild(notification);

    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);

    // Close button functionality
    notification.querySelector('.notification-close').addEventListener('click', function() {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => notification.remove(), 300);
    });

    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.transform = 'translateX(400px)';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

function getNotificationIcon(type) {
    switch (type) {
        case 'success': return 'check-circle';
        case 'error': return 'times-circle';
        case 'warning': return 'exclamation-triangle';
        default: return 'info-circle';
    }
}

function getNotificationColor(type) {
    switch (type) {
        case 'success': return '#4CAF50';
        case 'error': return '#FF3B30';
        case 'warning': return '#FF9500';
        default: return '#2989d8';
    }
}

function getNotificationBorderColor(type) {
    switch (type) {
        case 'success': return '#66BB6A';
        case 'error': return '#FF6B6B';
        case 'warning': return '#FFB74D';
        default: return '#42A5F5';
    }
}

// Add click handlers for all buttons and actions
document.addEventListener('click', function(e) {
    const target = e.target.closest('button, .btn-track, .appointment-card[style*="cursor: pointer"], .medical-card, .prescription-card, .report-card, .allergy-tag, .btn-taken, .btn-pending');
    if (!target) return;
    
    const text = target.textContent.trim();
    
    // Appointment Actions
    if (text.includes('Reschedule')) {
        handleReschedule(target);
    } else if (text.includes('Cancel')) {
        handleCancelAppointment(target);
    } else if (text.includes('View Report')) {
        handleViewReport(target);
    } else if (text.includes('Book Again')) {
        handleBookAgain(target);
    } else if (text.includes('View') && !text.includes('Report')) {
        handleViewDocument(target);
    } else if (text.includes('Download')) {
        handleDownload(target);
    }
    
    // Prescription Actions
    else if (text.includes('Request Refill')) {
        handleRequestRefill(target);
    } else if (text.includes('Contact Doctor')) {
        handleContactDoctor();
    } else if (text.includes('Renew Prescription')) {
        handleRenewPrescription(target);
    }
    
    // Pharmacy Actions
    else if (text.includes('Call')) {
        handlePharmacyCall(target);
    } else if (text.includes('Directions')) {
        handlePharmacyDirections(target);
    }
    
    // Health Reports Actions
    else if (text.includes('Trends')) {
        handleViewTrends(target);
    }
    
    // Medical Card Interactions
    else if (target.classList.contains('medical-card')) {
        handleMedicalCardClick(target);
    }
    
    // Prescription Card Interactions
    else if (target.classList.contains('prescription-card')) {
        handlePrescriptionCardClick(target);
    }
    
    // Report Card Interactions (when clicking the card itself, not buttons)
    else if (target.classList.contains('report-card') && !target.closest('.report-actions')) {
        handleReportCardClick(target);
    }
    
    // Allergy Tag Interactions
    else if (target.classList.contains('allergy-tag')) {
        handleAllergyTagClick(target);
    }
    
    // Dashboard Quick Actions
    else if (text.includes('Book New Appointment') || text.includes('Book Appointment')) {
        handleBookNewAppointment();
    } else if (text.includes('Download Records')) {
        handleDownloadAllRecords();
    } else if (text.includes('Contact Support')) {
        handleContactSupport();
    } else if (text.includes('Refill Prescription')) {
        handleRefillPrescription();
    }
    
    // Profile Actions
    else if (text.includes('View Details')) {
        handleViewDetails(target);
    }
});

// Appointment Functions
function handleReschedule(button) {
    const appointmentCard = button.closest('.appointment-card');
    const doctorName = appointmentCard.querySelector('.appointment-info span').textContent.split(' - ')[0].replace('Dr. ', '');
    
    showNotification(`Opening reschedule options for Dr. ${doctorName}...`, 'info');
    
    // Simulate reschedule process
    setTimeout(() => {
        if (confirm(`Would you like to reschedule your appointment with Dr. ${doctorName}?\n\nAvailable slots:\n• Tomorrow 2:00 PM\n• Day after tomorrow 10:00 AM\n• Next week 3:30 PM`)) {
            showNotification('Appointment rescheduled successfully! Confirmation sent to your email.', 'success');
            
            // Update the appointment card
            const dateInfo = appointmentCard.querySelector('.appointment-info span:nth-child(2)');
            dateInfo.innerHTML = '<i class="fas fa-calendar"></i>February 16, 2026 - 2:00 PM';
        }
    }, 1000);
}

function handleCancelAppointment(button) {
    const appointmentCard = button.closest('.appointment-card');
    const doctorName = appointmentCard.querySelector('.appointment-info span').textContent.split(' - ')[0].replace('Dr. ', '');
    
    if (confirm(`Are you sure you want to cancel your appointment with Dr. ${doctorName}?\n\nCancellation Policy:\n• Free cancellation up to 24 hours before\n• 50% charge for same-day cancellation`)) {
        showNotification('Appointment cancelled successfully. Refund will be processed within 3-5 business days.', 'success');
        
        // Update appointment status
        const statusElement = appointmentCard.querySelector('.appointment-status');
        statusElement.textContent = 'Cancelled';
        statusElement.className = 'appointment-status status-cancelled';
        
        // Update actions
        const actionsDiv = appointmentCard.querySelector('.appointment-actions');
        actionsDiv.innerHTML = '<button class="btn-track"><i class="fas fa-redo"></i> Book Again</button>';
    }
}

function handleViewReport(button) {
    const appointmentCard = button.closest('.appointment-card, .report-card');
    let doctorName = 'Doctor';
    
    if (appointmentCard) {
        const doctorElement = appointmentCard.querySelector('.appointment-info span, .doctor');
        if (doctorElement) {
            doctorName = doctorElement.textContent.split(' - ')[0].replace('Dr. ', '');
        }
    }
    
    showNotification(`🏥 Opening medical report from Dr. ${doctorName}... Please wait while we load your test results.`, 'info');
    
    setTimeout(() => {
        showNotification('📋 Medical report loaded successfully! All vitals are within normal range. Report is ready for viewing.', 'success');
    }, 2000);
}

function handleBookAgain(button) {
    const appointmentCard = button.closest('.appointment-card');
    let doctorName = 'your preferred doctor';
    
    if (appointmentCard) {
        const doctorElement = appointmentCard.querySelector('.appointment-info span');
        if (doctorElement) {
            doctorName = doctorElement.textContent.split(' - ')[0];
        }
    }
    
    showNotification(`🗓️ Finding available slots with ${doctorName}... Checking doctor's schedule for next available appointments.`, 'info');
    
    setTimeout(() => {
        showNotification('✅ Available slots found! Redirecting to booking page with your preferred time slots.', 'success');
    }, 1500);
}

function handleViewDocument(button) {
    showNotification('👁️ Opening secure document viewer... Loading your medical records with end-to-end encryption.', 'info');
    
    setTimeout(() => {
        showNotification('🔒 Document loaded securely. Your medical information is protected and encrypted.', 'success');
    }, 1800);
}

function handleDownload(button) {
    const reportCard = button.closest('.report-card');
    let reportType = 'medical report';
    
    if (reportCard) {
        const titleElement = reportCard.querySelector('h4');
        if (titleElement) {
            reportType = titleElement.textContent.toLowerCase();
        }
    }
    
    showNotification(`⬇️ Downloading your ${reportType}... File will be saved to your downloads folder.`, 'info');
    
    setTimeout(() => {
        showNotification(`✅ Download completed! Your ${reportType} is now available offline and ready for printing.`, 'success');
    }, 3000);
}

// Dashboard Quick Actions
function handleBookNewAppointment() {
    showNotification('🏥 Opening appointment booking system... Finding available doctors and time slots for you.', 'info');
    
    setTimeout(() => {
        showNotification('📅 Booking system ready! Choose your preferred doctor, date, and time from available slots.', 'success');
    }, 1500);
}

function handleDownloadAllRecords() {
    showNotification('📋 Preparing your complete medical records... This may take a few moments to compile all reports.', 'info');
    
    setTimeout(() => {
        showNotification('⬇️ Downloading complete medical history... File size: 2.4 MB, includes all reports and prescriptions.', 'info');
    }, 2000);
    
    setTimeout(() => {
        showNotification('✅ All medical records downloaded successfully! Your complete health history is now available offline.', 'success');
    }, 5000);
}

function handleContactSupport() {
    showNotification('📞 Connecting you to medical support... Our healthcare team is available 24/7 for assistance.', 'info');
    
    setTimeout(() => {
        showNotification('👨‍⚕️ Medical support is ready to help! Average wait time: 2 minutes. You can also use live chat.', 'success');
    }, 1200);
}

function handleContactDoctor() {
    showNotification('👩‍⚕️ Finding your primary care physician... Checking doctor availability for consultation.', 'info');
    
    setTimeout(() => {
        showNotification('✅ Dr. Ahmed Hassan is available for consultation. You can call directly or schedule a video call.', 'success');
    }, 1800);
}

function handleRefillPrescription() {
    showNotification('💊 Checking your current prescriptions... Reviewing medications that need refill approval.', 'info');
    
    setTimeout(() => {
        showNotification('📋 2 prescriptions are eligible for refill: Aspirin 75mg and Vitamin D3. Sending request to your doctor.', 'info');
    }, 2000);
    
    setTimeout(() => {
        showNotification('✅ Prescription refill request sent to Dr. Ahmed Hassan. You will receive approval within 24 hours.', 'success');
    }, 4000);
}

function handleViewDetails(button) {
    showNotification('🔍 Loading detailed medical information... Accessing your complete health profile and history.', 'info');
    
    setTimeout(() => {
        showNotification('📊 Medical details loaded! View includes prescription history, dosage instructions, and side effects.', 'success');
    }, 1500);
}

// New handler functions for interactive elements

function handleMedicalCardClick(card) {
    const cardTitle = card.querySelector('h4').textContent;
    
    if (cardTitle.includes('Vital Signs')) {
        showNotification('📊 Loading detailed vital signs history... Accessing your health monitoring data.', 'info');
        
        setTimeout(() => {
            showCustomConfirm(
                'Vital Signs History',
                'View your complete vital signs tracking over the past 6 months?',
                'This includes:\n• Blood pressure trends\n• Heart rate variations\n• Temperature records\n• BMI tracking\n• Weight changes',
                function() {
                    showNotification('📈 Opening vital signs dashboard... Loading your health trends and analytics.', 'success');
                }
            );
        }, 1000);
        
    } else if (cardTitle.includes('Allergies')) {
        showNotification('🚨 Managing your allergy information... Loading allergy profile and emergency protocols.', 'info');
        
        setTimeout(() => {
            showCustomConfirm(
                'Allergy Management',
                'Would you like to update your allergy information?',
                'You can:\n• Add new allergies\n• Remove resolved allergies\n• Update severity levels\n• Set emergency contacts',
                function() {
                    showNotification('✏️ Opening allergy management panel... You can now edit your allergy information.', 'success');
                }
            );
        }, 1000);
    }
}

function handlePrescriptionCardClick(card) {
    const cardTitle = card.querySelector('h4').textContent;
    
    showNotification('💊 Loading prescription details... Accessing medication information and instructions.', 'info');
    
    setTimeout(() => {
        if (cardTitle.includes('Active')) {
            showCustomConfirm(
                'Active Prescriptions',
                'Manage your current medications?',
                'Available actions:\n• View detailed instructions\n• Request refills\n• Report side effects\n• Contact prescribing doctor',
                function() {
                    showNotification('💊 Opening medication management... You can now manage your prescriptions and request refills.', 'success');
                }
            );
        } else {
            showCustomConfirm(
                'Prescription History',
                'View your complete medication history?',
                'This includes:\n• Previous medications\n• Treatment effectiveness\n• Side effects reported\n• Dosage changes\n• Doctor notes',
                function() {
                    showNotification('📋 Loading prescription history... Accessing your complete medication records.', 'success');
                }
            );
        }
    }, 1000);
}

function handleReportCardClick(card) {
    const reportTitle = card.querySelector('h4').textContent;
    const doctorName = card.querySelector('.doctor').textContent;
    
    showNotification(`📋 Opening ${reportTitle.toLowerCase()} from ${doctorName}... Loading detailed medical report.`, 'info');
    
    setTimeout(() => {
        showCustomConfirm(
            `${reportTitle}`,
            `View detailed report from ${doctorName}?`,
            'Report includes:\n• Test results and analysis\n• Doctor recommendations\n• Follow-up instructions\n• Comparison with previous results',
            function() {
                handleViewReport(card);
            }
        );
    }, 1000);
}

function handleAllergyTagClick(tag) {
    const allergyName = tag.textContent;
    
    showCustomConfirm(
        `Allergy: ${allergyName}`,
        `Manage your ${allergyName} allergy information?`,
        'You can:\n• Update severity level\n• Add reaction details\n• Set emergency protocols\n• Remove if no longer applicable',
        function() {
            showNotification(`🚨 Managing ${allergyName} allergy... Opening detailed allergy management panel.`, 'info');
            
            setTimeout(() => {
                const severityOptions = ['Mild', 'Moderate', 'Severe', 'Life-threatening'];
                const selectedSeverity = prompt(`Update severity for ${allergyName} allergy:\n\n1. Mild\n2. Moderate\n3. Severe\n4. Life-threatening\n\nEnter number (1-4):`);
                
                if (selectedSeverity && selectedSeverity >= 1 && selectedSeverity <= 4) {
                    const severity = severityOptions[selectedSeverity - 1];
                    showNotification(`✅ ${allergyName} allergy updated to ${severity} level. Emergency contacts have been notified.`, 'success');
                    
                    // Update the tag appearance based on severity
                    if (severity === 'Severe' || severity === 'Life-threatening') {
                        tag.style.background = 'linear-gradient(135deg, #f44336, #e91e63)';
                    } else if (severity === 'Moderate') {
                        tag.style.background = 'linear-gradient(135deg, #ff9800, #ffc107)';
                    } else {
                        tag.style.background = 'linear-gradient(135deg, #4CAF50, #66BB6A)';
                    }
                }
            }, 1000);
        }
    );
}
    
    if (appointmentCard.querySelector('.appointment-info')) {
        doctorName = appointmentCard.querySelector('.appointment-info span').textContent.split(' - ')[0].replace('Dr. ', '');
    } else if (appointmentCard.querySelector('.doctor')) {
        doctorName = appointmentCard.querySelector('.doctor').textContent.replace('Dr. ', '');
    }
    
    showNotification(`Opening medical report from Dr. ${doctorName}...`, 'info');
    
    // Simulate opening report
    setTimeout(() => {
        const reportWindow = window.open('', '_blank', 'width=800,height=600');
        reportWindow.document.write(`
            <html>
                <head>
                    <title>Medical Report - Dr. ${doctorName}</title>
                    <style>
                        body { font-family: Arial, sans-serif; padding: 20px; background: #f5f5f5; }
                        .report { background: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
                        .header { border-bottom: 2px solid #2989d8; padding-bottom: 20px; margin-bottom: 20px; }
                        .logo { color: #2989d8; font-size: 24px; font-weight: bold; }
                        .patient-info { background: #f8f9fa; padding: 15px; border-radius: 5px; margin: 20px 0; }
                        .findings { margin: 20px 0; }
                        .recommendations { background: #e8f5e8; padding: 15px; border-radius: 5px; border-left: 4px solid #4CAF50; }
                    </style>
                </head>
                <body>
                    <div class="report">
                        <div class="header">
                            <div class="logo">🏥 MediCare Clinic</div>
                            <h2>Medical Report</h2>
                            <p><strong>Doctor:</strong> Dr. ${doctorName}</p>
                            <p><strong>Date:</strong> ${new Date().toLocaleDateString()}</p>
                        </div>
                        
                        <div class="patient-info">
                            <h3>Patient Information</h3>
                            <p><strong>Name:</strong> John Doe</p>
                            <p><strong>Age:</strong> 35 years</p>
                            <p><strong>Blood Group:</strong> A+</p>
                        </div>
                        
                        <div class="findings">
                            <h3>Clinical Findings</h3>
                            <ul>
                                <li>Blood Pressure: 120/80 mmHg (Normal)</li>
                                <li>Heart Rate: 72 bpm (Normal)</li>
                                <li>Temperature: 98.6°F (Normal)</li>
                                <li>General condition: Good</li>
                            </ul>
                        </div>
                        
                        <div class="recommendations">
                            <h3>Recommendations</h3>
                            <ul>
                                <li>Continue current medication as prescribed</li>
                                <li>Regular exercise and balanced diet</li>
                                <li>Follow-up appointment in 3 months</li>
                                <li>Monitor blood pressure weekly</li>
                            </ul>
                        </div>
                        
                        <div style="margin-top: 30px; text-align: center; color: #666;">
                            <p>This is a computer-generated report for demonstration purposes.</p>
                        </div>
                    </div>
                </body>
            </html>
        `);
        reportWindow.document.close();
    }, 1500);
}

function handleBookAgain(button) {
    const appointmentCard = button.closest('.appointment-card');
    const doctorName = appointmentCard.querySelector('.appointment-info span').textContent.split(' - ')[0].replace('Dr. ', '');
    const specialty = appointmentCard.querySelector('.appointment-info span').textContent.split(' - ')[1];
    
    showNotification(`Booking new appointment with Dr. ${doctorName}...`, 'info');
    
    setTimeout(() => {
        if (confirm(`Book appointment with Dr. ${doctorName} (${specialty})?\n\nAvailable slots:\n• Today 4:00 PM\n• Tomorrow 10:00 AM\n• Tomorrow 3:00 PM`)) {
            showNotification('New appointment booked successfully! Confirmation sent to your email.', 'success');
        }
    }, 1000);
}

function handleViewDocument(button) {
    showNotification('Opening document viewer...', 'info');
    setTimeout(() => {
        showNotification('Document loaded successfully.', 'success');
    }, 1500);
}

function handleDownload(button) {
    const reportCard = button.closest('.report-card');
    let fileName = 'medical-report.pdf';
    
    if (reportCard && reportCard.querySelector('h4')) {
        fileName = reportCard.querySelector('h4').textContent.toLowerCase().replace(/\s+/g, '-') + '.pdf';
    }
    
    showNotification(`Downloading ${fileName}...`, 'info');
    
    // Simulate download
    setTimeout(() => {
        showNotification(`${fileName} downloaded successfully!`, 'success');
        
        // Create a fake download link
        const link = document.createElement('a');
        link.href = 'data:application/pdf;base64,JVBERi0xLjQKJdPr6eEKMSAwIG9iago8PAovVGl0bGUgKE1lZGljYWwgUmVwb3J0KQovQ3JlYXRvciAoTWVkaUNhcmUgQ2xpbmljKQovUHJvZHVjZXIgKE1lZGljYWwgUmVwb3J0IEdlbmVyYXRvcikKL0NyZWF0aW9uRGF0ZSAoRDoyMDI2MDIwMjAwMDAwMFopCj4+CmVuZG9iago=';
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }, 2000);
}

// Dashboard Functions
function handleBookNewAppointment() {
    showNotification('Opening appointment booking system...', 'info');
    
    setTimeout(() => {
        const doctors = [
            'Dr. Ahmed Hassan - Cardiologist',
            'Dr. Sarah Khan - Neurologist', 
            'Dr. Hassan Ali - Dermatologist',
            'Dr. Maria Rodriguez - Pediatrician',
            'Dr. Ali Raza - Orthopedic',
            'Dr. Fatima Sheikh - Gynecologist'
        ];
        
        const selectedDoctor = prompt(`Select a doctor:\n\n${doctors.map((doc, i) => `${i+1}. ${doc}`).join('\n')}\n\nEnter number (1-6):`);
        
        if (selectedDoctor && selectedDoctor >= 1 && selectedDoctor <= 6) {
            const doctor = doctors[selectedDoctor - 1];
            showNotification(`Booking appointment with ${doctor}...`, 'success');
            
            setTimeout(() => {
                showNotification('Appointment booked successfully! You will receive a confirmation email shortly.', 'success');
            }, 1500);
        }
    }, 1000);
}

function handleDownloadAllRecords() {
    showNotification('Preparing your medical records for download...', 'info');
    
    setTimeout(() => {
        showNotification('Generating comprehensive medical report...', 'info');
        
        setTimeout(() => {
            showNotification('All medical records downloaded successfully!', 'success');
            
            // Simulate download
            const link = document.createElement('a');
            link.href = 'data:application/zip;base64,UEsDBBQAAAAIAA==';
            link.download = 'john-doe-medical-records.zip';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }, 3000);
    }, 1000);
}

function handleContactSupport() {
    showNotification('Connecting to medical support...', 'info');
    
    setTimeout(() => {
        const supportOptions = confirm(`Medical Support Options:\n\n1. Live Chat - Available now\n2. Phone Support - +92 21 1234 5678\n3. Emergency Line - 911\n\nWould you like to start a live chat session?`);
        
        if (supportOptions) {
            showNotification('Starting live chat session...', 'success');
            
            setTimeout(() => {
                alert(`Live Chat Session Started\n\nSupport Agent: Dr. Assistant\nStatus: Online\n\nHello John! How can I help you today?\n\nType your message below to continue...`);
            }, 1500);
        } else {
            showNotification('Support contact information copied to clipboard.', 'info');
        }
    }, 1000);
}

function handleContactDoctor() {
    showNotification('Loading your doctors...', 'info');
    
    setTimeout(() => {
        const doctors = [
            'Dr. Ahmed Hassan - Cardiologist (Available)',
            'Dr. Sarah Khan - Neurologist (Busy)',
            'Dr. Hassan Ali - Dermatologist (Available)'
        ];
        
        const selectedDoctor = prompt(`Your Doctors:\n\n${doctors.map((doc, i) => `${i+1}. ${doc}`).join('\n')}\n\nSelect doctor to contact (1-3):`);
        
        if (selectedDoctor && selectedDoctor >= 1 && selectedDoctor <= 3) {
            const doctor = doctors[selectedDoctor - 1];
            if (doctor.includes('Available')) {
                showNotification(`Connecting to ${doctor.split(' - ')[0]}...`, 'success');
                setTimeout(() => {
                    alert(`Connected to ${doctor.split(' - ')[0]}\n\nDoctor: Hello John! How can I help you today?\n\nYou can now send a message or request a callback.`);
                }, 1500);
            } else {
                showNotification(`${doctor.split(' - ')[0]} is currently busy. Would you like to leave a message?`, 'warning');
            }
        }
    }, 1000);
}

function handleRefillPrescription() {
    showNotification('Loading your active prescriptions...', 'info');
    
    setTimeout(() => {
        const prescriptions = [
            'Aspirin 75mg - Dr. Ahmed Hassan (30 days left)',
            'Vitamin D3 1000 IU - Dr. Ahmed Hassan (15 days left)'
        ];
        
        const selectedPrescription = prompt(`Active Prescriptions:\n\n${prescriptions.map((med, i) => `${i+1}. ${med}`).join('\n')}\n\nSelect prescription to refill (1-2):`);
        
        if (selectedPrescription && selectedPrescription >= 1 && selectedPrescription <= 2) {
            const prescription = prescriptions[selectedPrescription - 1];
            showNotification(`Processing refill for ${prescription.split(' - ')[0]}...`, 'success');
            
            setTimeout(() => {
                showNotification('Prescription refill request sent to pharmacy. You will receive SMS confirmation within 30 minutes.', 'success');
            }, 2000);
        }
    }, 1000);
}

function handleViewDetails(button) {
    const card = button.closest('.appointment-card');
    const details = card.querySelector('.appointment-info').textContent;
    
    showNotification('Loading detailed information...', 'info');
    
    setTimeout(() => {
        alert(`Detailed Information:\n\n${details}\n\nAdditional Notes:\n• Prescription updated\n• Next follow-up recommended\n• Patient responded well to treatment`);
    }, 1000);
}

// Mobile menu toggle for responsive design
function toggleMobileMenu() {
    const sidebar = document.querySelector('.sidebar');
    if (sidebar) {
        sidebar.classList.toggle('mobile-open');
    }
}

// Add mobile menu styles
const mobileStyles = `
    @media(max-width: 900px) {
        .sidebar {
            position: fixed;
            left: -280px;
            top: 0;
            height: 100vh;
            z-index: 1000;
            transition: left 0.3s ease;
            width: 260px;
        }
        
        .sidebar.mobile-open {
            left: 0;
        }
        
        .mobile-overlay {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0,0,0,0.5);
            z-index: 999;
            display: none;
        }
        
        .mobile-overlay.show {
            display: block;
        }
    }
`;

// Add mobile styles to head
const styleSheet = document.createElement('style');
styleSheet.textContent = mobileStyles;
document.head.appendChild(styleSheet);

// Handle mobile overlay
document.addEventListener('click', function(e) {
    const sidebar = document.querySelector('.sidebar');
    const overlay = document.querySelector('.mobile-overlay');
    
    if (window.innerWidth <= 900) {
        if (e.target.closest('.sidebar')) {
            // Click inside sidebar - do nothing
            return;
        } else if (sidebar && sidebar.classList.contains('mobile-open')) {
            // Click outside sidebar when open - close it
            sidebar.classList.remove('mobile-open');
            if (overlay) overlay.classList.remove('show');
        }
    }
});

console.log('MediCare User Profile initialized successfully');

// New Button Handlers for Prescriptions Page

function handleRequestRefill(button) {
    const prescriptionCard = button.closest('.prescription-card');
    const medications = prescriptionCard.querySelectorAll('.med-name');
    let medList = '';
    
    medications.forEach(med => {
        medList += '• ' + med.textContent + '\n';
    });
    
    showNotification('💊 Processing prescription refill request...', 'info');
    
    setTimeout(() => {
        showCustomConfirm(
            'Prescription Refill Request',
            'Request refill for the following medications?',
            medList + '\nRefill will be sent to your preferred pharmacy:\nMediCare Pharmacy - 123 Health Street',
            function() {
                showNotification('✅ Refill request sent successfully! Your pharmacy will contact you within 2 hours.', 'success');
                
                // Update button text temporarily
                button.innerHTML = '<i class="fas fa-check"></i> Requested';
                button.style.background = '#4CAF50';
                
                setTimeout(() => {
                    button.innerHTML = '<i class="fas fa-redo"></i> Request Refill';
                    button.style.background = '';
                }, 3000);
            },
            function() {
                showNotification('❌ Refill request cancelled.', 'info');
            }
        );
    }, 1000);
}

function handleRenewPrescription(button) {
    const prescriptionCard = button.closest('.prescription-card');
    const doctorName = prescriptionCard.querySelector('.prescription-doctor span').textContent.replace('Prescribed by: ', '');
    
    showNotification('🔄 Processing prescription renewal...', 'info');
    
    setTimeout(() => {
        showCustomConfirm(
            'Prescription Renewal',
            `Renew prescription from ${doctorName}?`,
            'This will:\n• Send renewal request to your doctor\n• Schedule follow-up if needed\n• Update your medication schedule\n• Notify your pharmacy',
            function() {
                showNotification(`📋 Renewal request sent to ${doctorName}. You will receive approval within 24 hours.`, 'success');
                
                // Update button
                button.innerHTML = '<i class="fas fa-clock"></i> Pending Approval';
                button.style.background = '#FF9500';
                button.disabled = true;
                
                setTimeout(() => {
                    button.innerHTML = '<i class="fas fa-check"></i> Approved';
                    button.style.background = '#4CAF50';
                    showNotification('✅ Prescription renewed successfully! New prescription sent to pharmacy.', 'success');
                }, 5000);
            },
            function() {
                showNotification('❌ Prescription renewal cancelled.', 'info');
            }
        );
    }, 1000);
}

// Pharmacy Handlers

function handlePharmacyCall(button) {
    const pharmacyCard = button.closest('.pharmacy-card');
    const pharmacyName = pharmacyCard.querySelector('h4').textContent;
    const phoneNumber = pharmacyCard.querySelector('p:nth-child(3)').textContent.replace('Phone: ', '');
    
    showNotification(`📞 Calling ${pharmacyName}...`, 'info');
    
    setTimeout(() => {
        showCustomConfirm(
            `Call ${pharmacyName}`,
            `Would you like to call ${pharmacyName}?`,
            `Phone: ${phoneNumber}\n\nServices available:\n• Prescription pickup\n• Medication consultation\n• Insurance verification\n• Home delivery inquiry`,
            function() {
                showNotification(`📱 Dialing ${phoneNumber}... Please wait while we connect you.`, 'success');
                
                // Simulate call
                setTimeout(() => {
                    alert(`📞 Connected to ${pharmacyName}\n\nPharmacist: Hello! How can I help you today?\n\nYou can now speak with the pharmacy staff about your prescriptions.`);
                }, 2000);
            },
            function() {
                showNotification('❌ Call cancelled.', 'info');
            }
        );
    }, 1000);
}

function handlePharmacyDirections(button) {
    const pharmacyCard = button.closest('.pharmacy-card');
    const pharmacyName = pharmacyCard.querySelector('h4').textContent;
    const address = pharmacyCard.querySelector('p:nth-child(2)').textContent;
    
    showNotification('🗺️ Getting directions to pharmacy...', 'info');
    
    setTimeout(() => {
        showCustomConfirm(
            `Directions to ${pharmacyName}`,
            'Open directions in maps app?',
            `Address: ${address}\n\nEstimated travel time:\n• By car: 12 minutes\n• By public transport: 25 minutes\n• Walking: 45 minutes\n\nParking available on-site`,
            function() {
                showNotification('🚗 Opening directions in your default maps app...', 'success');
                
                // Simulate opening maps
                setTimeout(() => {
                    const mapsUrl = `https://maps.google.com/maps?q=${encodeURIComponent(address)}`;
                    window.open(mapsUrl, '_blank');
                    showNotification('📍 Directions opened! Safe travels to the pharmacy.', 'success');
                }, 1500);
            },
            function() {
                showNotification('❌ Directions cancelled.', 'info');
            }
        );
    }, 1000);
}

// Health Reports Handlers

function handleViewTrends(button) {
    const reportCard = button.closest('.report-card');
    const reportTitle = reportCard.querySelector('h4').textContent;
    
    showNotification(`📈 Loading trend analysis for ${reportTitle}...`, 'info');
    
    setTimeout(() => {
        showCustomConfirm(
            `${reportTitle} - Trend Analysis`,
            'View detailed health trends and analytics?',
            'This will show:\n• 6-month trend graphs\n• Comparison with normal ranges\n• Improvement recommendations\n• Risk factor analysis\n• Personalized health insights',
            function() {
                showNotification('📊 Opening advanced health analytics dashboard...', 'success');
                
                // Simulate opening trends dashboard
                setTimeout(() => {
                    const trendsWindow = window.open('', '_blank', 'width=1000,height=700');
                    trendsWindow.document.write(`
                        <html>
                            <head>
                                <title>${reportTitle} - Health Trends</title>
                                <style>
                                    body { font-family: Inter, sans-serif; background: #0a0a0a; color: white; padding: 20px; }
                                    .dashboard { max-width: 1200px; margin: 0 auto; }
                                    .header { text-align: center; margin-bottom: 30px; }
                                    .trend-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px; }
                                    .trend-card { background: #111; border: 1px solid #222; border-radius: 12px; padding: 20px; }
                                    .trend-title { color: #2989d8; font-size: 1.2rem; margin-bottom: 15px; }
                                    .chart-placeholder { height: 200px; background: linear-gradient(135deg, #1a1a1a, #2a2a2a); border-radius: 8px; display: flex; align-items: center; justify-content: center; margin: 15px 0; }
                                    .insight { background: #0a2a0a; border-left: 4px solid #4CAF50; padding: 15px; margin: 15px 0; border-radius: 0 8px 8px 0; }
                                    .warning { background: #2a1a0a; border-left-color: #FF9500; }
                                </style>
                            </head>
                            <body>
                                <div class="dashboard">
                                    <div class="header">
                                        <h1>📊 ${reportTitle} - Health Trends</h1>
                                        <p>Comprehensive analysis of your health data over the past 6 months</p>
                                    </div>
                                    
                                    <div class="trend-grid">
                                        <div class="trend-card">
                                            <div class="trend-title">📈 Trend Overview</div>
                                            <div class="chart-placeholder">Interactive Chart Loading...</div>
                                            <div class="insight">
                                                <strong>✅ Positive Trend:</strong> Your values have improved by 15% over the last 3 months.
                                            </div>
                                        </div>
                                        
                                        <div class="trend-card">
                                            <div class="trend-title">🎯 Target Ranges</div>
                                            <div class="chart-placeholder">Range Comparison Chart</div>
                                            <div class="insight warning">
                                                <strong>⚠️ Attention:</strong> Some values are approaching upper limits. Consider lifestyle adjustments.
                                            </div>
                                        </div>
                                        
                                        <div class="trend-card">
                                            <div class="trend-title">💡 Recommendations</div>
                                            <ul style="line-height: 1.6;">
                                                <li>Continue current medication regimen</li>
                                                <li>Increase physical activity to 150 min/week</li>
                                                <li>Monitor sodium intake</li>
                                                <li>Schedule follow-up in 3 months</li>
                                            </ul>
                                        </div>
                                        
                                        <div class="trend-card">
                                            <div class="trend-title">🔮 Predictions</div>
                                            <div class="chart-placeholder">Predictive Model Chart</div>
                                            <div class="insight">
                                                <strong>📊 Forecast:</strong> With current trends, expect continued improvement over next 3 months.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </body>
                        </html>
                    `);
                    trendsWindow.document.close();
                }, 1500);
            },
            function() {
                showNotification('❌ Trend analysis cancelled.', 'info');
            }
        );
    }, 1500);
}
// Custom confirmation dialog for medical actions
function showCustomConfirm(title, message, details, onConfirm, onCancel) {
    // Remove existing confirmations
    const existingConfirms = document.querySelectorAll('.custom-confirm');
    existingConfirms.forEach(confirm => confirm.remove());

    // Create confirmation dialog
    const confirmDialog = document.createElement('div');
    confirmDialog.className = 'custom-confirm';
    confirmDialog.innerHTML = `
        <div class="confirm-overlay"></div>
        <div class="confirm-dialog">
            <div class="confirm-header">
                <h3>${title}</h3>
                <button class="confirm-close">
                    <i class="fas fa-times"></i>
                </button>
            </div>
            <div class="confirm-content">
                <p class="confirm-message">${message}</p>
                ${details ? `<div class="confirm-details">${details}</div>` : ''}
            </div>
            <div class="confirm-actions">
                <button class="btn-confirm">
                    <i class="fas fa-check"></i> Confirm
                </button>
                <button class="btn-cancel-confirm">
                    <i class="fas fa-times"></i> Cancel
                </button>
            </div>
        </div>
    `;

    // Add styles
    confirmDialog.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 10001;
        display: flex;
        align-items: center;
        justify-content: center;
    `;

    const overlay = confirmDialog.querySelector('.confirm-overlay');
    overlay.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.7);
        backdrop-filter: blur(5px);
    `;

    const dialog = confirmDialog.querySelector('.confirm-dialog');
    dialog.style.cssText = `
        background: #111;
        border: 1px solid #222;
        border-radius: 16px;
        max-width: 500px;
        width: 90%;
        position: relative;
        transform: scale(0.9);
        transition: transform 0.3s ease;
    `;

    const header = confirmDialog.querySelector('.confirm-header');
    header.style.cssText = `
        padding: 20px 20px 0 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #222;
        margin-bottom: 20px;
    `;

    const headerTitle = confirmDialog.querySelector('.confirm-header h3');
    headerTitle.style.cssText = `
        color: #2989d8;
        font-size: 1.2rem;
        margin: 0;
    `;

    const closeBtn = confirmDialog.querySelector('.confirm-close');
    closeBtn.style.cssText = `
        background: none;
        border: none;
        color: #666;
        cursor: pointer;
        font-size: 1.2rem;
        padding: 5px;
    `;

    const content = confirmDialog.querySelector('.confirm-content');
    content.style.cssText = `
        padding: 0 20px 20px 20px;
    `;

    const message = confirmDialog.querySelector('.confirm-message');
    message.style.cssText = `
        color: #fff;
        font-size: 1rem;
        line-height: 1.5;
        margin-bottom: 15px;
    `;

    const details = confirmDialog.querySelector('.confirm-details');
    if (details) {
        details.style.cssText = `
            background: #0a0a0a;
            border: 1px solid #222;
            border-radius: 8px;
            padding: 15px;
            color: #888;
            font-size: 0.9rem;
            line-height: 1.4;
            white-space: pre-line;
        `;
    }

    const actions = confirmDialog.querySelector('.confirm-actions');
    actions.style.cssText = `
        padding: 0 20px 20px 20px;
        display: flex;
        gap: 10px;
        justify-content: flex-end;
    `;

    const confirmBtn = confirmDialog.querySelector('.btn-confirm');
    confirmBtn.style.cssText = `
        background: #2989d8;
        color: white;
        border: none;
        padding: 10px 20px;
        border-radius: 8px;
        font-size: 0.9rem;
        font-weight: 600;
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 8px;
        transition: background 0.3s ease;
    `;

    const cancelBtn = confirmDialog.querySelector('.btn-cancel-confirm');
    cancelBtn.style.cssText = `
        background: #222;
        color: #888;
        border: none;
        padding: 10px 20px;
        border-radius: 8px;
        font-size: 0.9rem;
        font-weight: 600;
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 8px;
        transition: all 0.3s ease;
    `;

    // Add to page
    document.body.appendChild(confirmDialog);

    // Animate in
    setTimeout(() => {
        dialog.style.transform = 'scale(1)';
    }, 100);

    // Event handlers
    const closeDialog = () => {
        dialog.style.transform = 'scale(0.9)';
        setTimeout(() => {
            confirmDialog.remove();
            if (onCancel) onCancel();
        }, 300);
    };

    closeBtn.addEventListener('click', closeDialog);
    cancelBtn.addEventListener('click', closeDialog);
    overlay.addEventListener('click', closeDialog);

    confirmBtn.addEventListener('click', () => {
        dialog.style.transform = 'scale(0.9)';
        setTimeout(() => {
            confirmDialog.remove();
            if (onConfirm) onConfirm();
        }, 300);
    });

    // Hover effects
    confirmBtn.addEventListener('mouseover', () => {
        confirmBtn.style.background = '#1976d2';
    });

    confirmBtn.addEventListener('mouseout', () => {
        confirmBtn.style.background = '#2989d8';
    });

    cancelBtn.addEventListener('mouseover', () => {
        cancelBtn.style.background = '#333';
        cancelBtn.style.color = '#fff';
    });

    cancelBtn.addEventListener('mouseout', () => {
        cancelBtn.style.background = '#222';
        cancelBtn.style.color = '#888';
    });
}

// Health Dashboard Card Interactions
document.addEventListener('click', function(e) {
    const dashboardCard = e.target.closest('.dashboard-card');
    if (dashboardCard) {
        handleDashboardCardClick(dashboardCard);
    }
    
    const goalCard = e.target.closest('.goal-card');
    if (goalCard) {
        handleGoalCardClick(goalCard);
    }
    
    const recommendationItem = e.target.closest('.recommendation-item');
    if (recommendationItem) {
        handleRecommendationClick(recommendationItem);
    }
    
    const trendCard = e.target.closest('.trend-card');
    if (trendCard) {
        handleTrendCardClick(trendCard);
    }
});

function handleDashboardCardClick(card) {
    const title = card.querySelector('h4').textContent;
    const score = card.querySelector('.health-score').textContent;
    const status = card.queryS