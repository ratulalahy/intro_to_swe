// Interactive functionality for the course website

// Enhanced dropdown functionality
document.addEventListener('DOMContentLoaded', function() {
    // Initialize Font Awesome icons
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
    document.head.appendChild(link);

    // Add interactive icons to sections
    addInteractiveIcons();
    
    // Initialize tabs
    initializeTabs();
    
    // Add smooth scrolling
    addSmoothScrolling();
    
    // Add progress indicators
    addProgressIndicators();
});

function addInteractiveIcons() {
    // Replace text-based headers with icon classes
    const iconMappings = [
        { text: '**Learning Objectives**', icon: 'icon-learning' },
        { text: '**Let\'s Code Together!**', icon: 'icon-code' },
        { text: '**Pro Tip**', icon: 'icon-tip' },
        { text: '**Interactive Quiz**', icon: 'icon-quiz' },
        { text: '**Hands-On Exercise**', icon: 'icon-exercise' },
        { text: '**Advanced GitHub Features**', icon: 'icon-advanced' },
        { text: '**Practice Challenges**', icon: 'icon-practice' },
        { text: '**Key Takeaways**', icon: 'icon-key' },
        { text: '**Homework Preview**', icon: 'icon-homework' }
    ];

    iconMappings.forEach(mapping => {
        const elements = document.querySelectorAll(`h1, h2, h3, h4, h5, h6, .admonition-title`);
        elements.forEach(el => {
            if (el.textContent.includes(mapping.text.replace(/\*\*/g, ''))) {
                el.classList.add(mapping.icon);
            }
        });
    });
}

function initializeTabs() {
    // Enhanced tab functionality with smooth transitions
    const tabContainers = document.querySelectorAll('.tab-container');
    
    tabContainers.forEach(container => {
        const buttons = container.querySelectorAll('.tab-button');
        const contents = container.querySelectorAll('.tab-content');
        
        buttons.forEach((button, index) => {
            button.addEventListener('click', () => {
                // Remove active class from all buttons and contents
                buttons.forEach(btn => btn.classList.remove('active'));
                contents.forEach(content => content.classList.remove('active'));
                
                // Add active class to clicked button and corresponding content
                button.classList.add('active');
                if (contents[index]) {
                    contents[index].classList.add('active');
                }
            });
        });
    });
}

function addSmoothScrolling() {
    // Add smooth scrolling for anchor links
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
}

function addProgressIndicators() {
    // Add reading progress indicator
    const progressBar = document.createElement('div');
    progressBar.className = 'reading-progress';
    progressBar.innerHTML = '<div class="progress-fill"></div>';
    document.body.appendChild(progressBar);
    
    const progressFill = progressBar.querySelector('.progress-fill');
    
    window.addEventListener('scroll', () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        progressFill.style.width = scrolled + '%';
    });
}

// Interactive quiz functionality
function createInteractiveQuiz() {
    const quizzes = document.querySelectorAll('.quiz-container');
    
    quizzes.forEach(quiz => {
        const questions = quiz.querySelectorAll('.quiz-question');
        let currentQuestion = 0;
        let score = 0;
        
        function showQuestion(index) {
            questions.forEach((q, i) => {
                q.style.display = i === index ? 'block' : 'none';
            });
        }
        
        function nextQuestion() {
            currentQuestion++;
            if (currentQuestion < questions.length) {
                showQuestion(currentQuestion);
            } else {
                showResults();
            }
        }
        
        function showResults() {
            const resultsDiv = document.createElement('div');
            resultsDiv.className = 'quiz-results';
            resultsDiv.innerHTML = `
                <h3><i class="fas fa-trophy"></i> Quiz Complete!</h3>
                <p>Your score: ${score}/${questions.length}</p>
                <button onclick="location.reload()" class="restart-button">
                    <i class="fas fa-redo"></i> Try Again
                </button>
            `;
            quiz.appendChild(resultsDiv);
        }
        
        // Initialize quiz
        if (questions.length > 0) {
            showQuestion(0);
        }
    });
}

// Code copy functionality
function addCodeCopyButtons() {
    const codeBlocks = document.querySelectorAll('.highlight');
    
    codeBlocks.forEach(block => {
        const copyButton = document.createElement('button');
        copyButton.className = 'copy-code-btn';
        copyButton.innerHTML = '<i class="fas fa-copy"></i>';
        copyButton.title = 'Copy code';
        
        copyButton.addEventListener('click', async () => {
            const code = block.querySelector('code');
            if (code) {
                try {
                    await navigator.clipboard.writeText(code.textContent);
                    copyButton.innerHTML = '<i class="fas fa-check"></i>';
                    copyButton.style.background = '#10b981';
                    setTimeout(() => {
                        copyButton.innerHTML = '<i class="fas fa-copy"></i>';
                        copyButton.style.background = '';
                    }, 2000);
                } catch (err) {
                    console.error('Failed to copy code:', err);
                }
            }
        });
        
        block.style.position = 'relative';
        block.appendChild(copyButton);
    });
}

// Initialize interactive features when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    createInteractiveQuiz();
    addCodeCopyButtons();
});

// Dark mode toggle
function addDarkModeToggle() {
    const toggle = document.createElement('button');
    toggle.className = 'dark-mode-toggle';
    toggle.innerHTML = '<i class="fas fa-moon"></i>';
    toggle.title = 'Toggle dark mode';
    
    toggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const isDark = document.body.classList.contains('dark-mode');
        toggle.innerHTML = isDark ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
        localStorage.setItem('darkMode', isDark);
    });
    
    // Check for saved dark mode preference
    if (localStorage.getItem('darkMode') === 'true') {
        document.body.classList.add('dark-mode');
        toggle.innerHTML = '<i class="fas fa-sun"></i>';
    }
    
    document.body.appendChild(toggle);
}

// Initialize all features
document.addEventListener('DOMContentLoaded', addDarkModeToggle);
