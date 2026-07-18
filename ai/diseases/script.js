const ALPHABET = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '#'];

// Disease Manager Class
class DiseaseManager {
    constructor() {
        this.selectedLetter = null; // Start with null to show only 3 diseases
        this.searchQuery = '';
        this.selectedDisease = null;
        this.allDiseases = [];
        this.init();
    }

    async init() {
        this.generateAlphabetButtons();
        this.bindEvents();
        await this.loadAllDiseases();
        this.displayDiseases();
    }

    async loadAllDiseases() {
        try {
            // Load diseases from all JSON files
            const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'hash'];
            
            for (const letter of letters) {
                try {
                    const response = await fetch(`diseases/diseases_${letter}.json`);
                    if (response.ok) {
                        const diseases = await response.json();
                        // Add letter property to each disease for filtering
                        diseases.forEach(disease => {
                            disease.letter = letter === 'hash' ? '#' : letter.toUpperCase();
                        });
                        this.allDiseases.push(...diseases);
                    }
                } catch (error) {
                    console.log(`Could not load diseases for letter ${letter}`);
                }
            }
            
            console.log(`Loaded ${this.allDiseases.length} diseases`);
        } catch (error) {
            console.error('Error loading diseases:', error);
        }
    }

    generateAlphabetButtons() {
        const alphabetGrid = document.getElementById('alphabetGrid');
        alphabetGrid.innerHTML = '';

        ALPHABET.forEach(letter => {
            const button = document.createElement('button');
            button.className = 'alphabet-btn';
            button.textContent = letter;
            button.addEventListener('click', () => this.selectLetter(letter));
            alphabetGrid.appendChild(button);
        });
    }

    bindEvents() {
        // Search input with debouncing
        const searchInput = document.getElementById('searchInput');
        let searchTimeout;
        
        searchInput.addEventListener('input', (e) => {
            clearTimeout(searchTimeout);
            searchTimeout = setTimeout(() => {
                this.searchQuery = e.target.value;
                // Reset letter selection when searching
                if (this.searchQuery.length > 0) {
                    this.selectedLetter = 'ALL';
                    this.updateActiveStates();
                }
                this.displayDiseases();
            }, 300); // 300ms delay for better performance
        });

        // View All button
        const viewAllBtn = document.getElementById('viewAllBtn');
        viewAllBtn.addEventListener('click', () => this.selectLetter('ALL'));

        // Modal close events
        document.getElementById('modalCloseMobile').addEventListener('click', () => this.closeModal());
        document.getElementById('modalCloseDesktop').addEventListener('click', () => this.closeModal());
        
        // Close modal on overlay click
        document.getElementById('diseaseModal').addEventListener('click', (e) => {
            if (e.target.id === 'diseaseModal') {
                this.closeModal();
            }
        });

        // Close modal on ESC key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closeModal();
            }
        });
    }

    selectLetter(letter) {
        if (letter === 'ALL') {
            // Toggle between showing all and clearing
            if (this.selectedLetter === 'ALL' && this.searchQuery === '') {
                // Clear everything - hide all diseases
                this.selectedLetter = null;
                this.clearAllFilters();
            } else {
                // Show all diseases
                this.selectedLetter = 'ALL';
                this.searchQuery = '';
                document.getElementById('searchInput').value = '';
            }
        } else {
            this.selectedLetter = letter;
            this.searchQuery = '';
            document.getElementById('searchInput').value = '';
        }
        
        this.updateActiveStates();
        this.displayDiseases();
    }

    clearAllFilters() {
        this.selectedLetter = null;
        this.searchQuery = '';
        document.getElementById('searchInput').value = '';
        this.updateActiveStates();
        this.displayDiseases();
    }

    updateActiveStates() {
        // Update View All button
        const viewAllBtn = document.getElementById('viewAllBtn');
        const isViewingAll = this.selectedLetter === 'ALL' && this.searchQuery === '';
        viewAllBtn.classList.toggle('active', isViewingAll);

        // Update alphabet buttons
        const alphabetBtns = document.querySelectorAll('.alphabet-btn');
        alphabetBtns.forEach(btn => {
            btn.classList.toggle('active', btn.textContent === this.selectedLetter && this.selectedLetter !== 'ALL' && this.selectedLetter !== null);
        });
    }

    filterDiseases() {
        // If no filter selected, show first 3 'A' diseases by default (page load)
        if (this.selectedLetter === null && this.searchQuery === '') {
            return this.allDiseases.filter(disease => disease.letter === 'A').slice(0, 3);
        }

        return this.allDiseases.filter(disease => {
            // If no search query, just filter by letter
            if (this.searchQuery === '') {
                const matchesLetter = this.selectedLetter === 'ALL' || 
                    disease.letter === this.selectedLetter;
                return matchesLetter;
            }

            // Enhanced search functionality
            const query = this.searchQuery.toLowerCase().trim();
            
            // Search in disease name
            const nameMatch = disease.disease_name.toLowerCase().includes(query);
            
            // Search in description
            const descriptionMatch = disease.description.toLowerCase().includes(query);
            
            // Search in symptoms (each symptom)
            const symptomsMatch = disease.symptoms.some(symptom => 
                symptom.toLowerCase().includes(query)
            );
            
            // Search in causes
            const causesMatch = disease.causes.toLowerCase().includes(query);
            
            // Search in prevention
            const preventionMatch = disease.prevention.toLowerCase().includes(query);
            
            // Search in treatment
            const treatmentMatch = disease.treatment_action.toLowerCase().includes(query);
            
            // Search in complications
            const complicationsMatch = disease.complications.toLowerCase().includes(query);
            
            // Keyword-based search (split query into words)
            const keywords = query.split(' ').filter(word => word.length > 2);
            const keywordMatch = keywords.length > 0 && keywords.some(keyword => {
                return disease.disease_name.toLowerCase().includes(keyword) ||
                       disease.description.toLowerCase().includes(keyword) ||
                       disease.symptoms.some(symptom => symptom.toLowerCase().includes(keyword)) ||
                       disease.causes.toLowerCase().includes(keyword) ||
                       disease.prevention.toLowerCase().includes(keyword) ||
                       disease.treatment_action.toLowerCase().includes(keyword) ||
                       disease.complications.toLowerCase().includes(keyword);
            });
            
            // Return true if any field matches
            return nameMatch || descriptionMatch || symptomsMatch || 
                   causesMatch || preventionMatch || treatmentMatch || 
                   complicationsMatch || keywordMatch;
        });
    }

    displayDiseases() {
        const resultsGrid = document.getElementById('resultsGrid');
        const filteredDiseases = this.filterDiseases();

        if (filteredDiseases.length === 0) {
            // Check if no filter is selected
            if (this.selectedLetter === null && this.searchQuery === '') {
                resultsGrid.innerHTML = `
                    <div class="no-results">
                        <div class="no-results-icon">
                            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.35-4.35"></path>
                            </svg>
                        </div>
                        <h3>Select a filter to view diseases</h3>
                        <p>Choose an alphabet letter or click "View All" to browse diseases, or use the search box to find specific conditions.</p>
                    </div>
                `;
            } else {
                resultsGrid.innerHTML = `
                    <div class="no-results">
                        <div class="no-results-icon">
                            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.35-4.35"></path>
                            </svg>
                        </div>
                        <h3>No conditions found</h3>
                        <p>We couldn't find any diseases matching your criteria. Try adjusting your search or selecting a different letter.</p>
                    </div>
                `;
            }
            return;
        }

        resultsGrid.innerHTML = filteredDiseases.map(disease => `
            <div class="disease-card" onclick="diseaseManager.openModal(${disease.id}, '${disease.letter}')">
                <div class="card-bg-decoration"></div>
                <div class="card-content">
                    <div class="card-top">
                        <div class="disease-icon">${disease.disease_name.charAt(0)}</div>
                        <span class="specialty-tag">Medical</span>
                    </div>
                    
                    <h3 class="disease-name">${disease.disease_name}</h3>
                    <p class="disease-description">${disease.description}</p>
                    
                    <div class="read-more">
                        Read Details 
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <polyline points="9,18 15,12 9,6"></polyline>
                        </svg>
                    </div>
                </div>
            </div>
        `).join('');
    }

    openModal(diseaseId, letter) {
        const disease = this.allDiseases.find(d => d.id === diseaseId && d.letter === letter);
        if (!disease) return;

        this.selectedDisease = disease;
        
        // Populate modal content
        document.getElementById('modalTitle').textContent = disease.disease_name;
        document.getElementById('modalDescription').textContent = disease.description;
        document.getElementById('modalSpecialtyMobile').textContent = 'Medical';
        document.getElementById('modalSpecialtyDesktop').textContent = 'Medical';
        document.getElementById('modalComplications').textContent = disease.complications;
        document.getElementById('modalCauses').textContent = disease.causes;
        document.getElementById('modalPrevention').textContent = disease.prevention;
        document.getElementById('modalTreatment').textContent = disease.treatment_action;

        // Populate symptoms list
        const symptomsList = document.getElementById('modalSymptoms');
        symptomsList.innerHTML = disease.symptoms.map(symptom => `<li>${symptom}</li>`).join('');

        // Show modal
        const modal = document.getElementById('diseaseModal');
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    closeModal() {
        const modal = document.getElementById('diseaseModal');
        modal.classList.remove('active');
        document.body.style.overflow = 'unset';
        this.selectedDisease = null;
    }
}

// Initialize Disease Manager
let diseaseManager;

document.addEventListener('DOMContentLoaded', () => {
    diseaseManager = new DiseaseManager();
});