// Simplified interactive functionality for MyST compatibility

document.addEventListener('DOMContentLoaded', function() {
    console.log('Interactive features loading...');
    
    // Add basic interactivity
    addBasicStyling();
    addSmoothScrolling();
    addCodeCopyButtons();
    
    console.log('Interactive features loaded successfully!');
});

function addBasicStyling() {
    // Add custom classes to elements for better styling
    const admonitions = document.querySelectorAll('.admonition');
    admonitions.forEach(admonition => {
        admonition.style.transition = 'all 0.3s ease';
    });
    
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.style.transition = 'all 0.3s ease';
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-4px)';
            this.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.15)';
        });
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
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

function addCodeCopyButtons() {
    // Add copy buttons to code blocks
    const codeBlocks = document.querySelectorAll('pre');
    
    codeBlocks.forEach(block => {
        const copyButton = document.createElement('button');
        copyButton.innerHTML = 'Copy';
        copyButton.style.cssText = `
            position: absolute;
            top: 10px;
            right: 10px;
            background: #6366f1;
            color: white;
            border: none;
            border-radius: 4px;
            padding: 6px 12px;
            cursor: pointer;
            font-size: 12px;
            transition: all 0.3s ease;
            z-index: 10;
        `;
        
        copyButton.addEventListener('click', async () => {
            const code = block.querySelector('code');
            if (code) {
                try {
                    await navigator.clipboard.writeText(code.textContent);
                    copyButton.innerHTML = 'Copied!';
                    copyButton.style.background = '#10b981';
                    setTimeout(() => {
                        copyButton.innerHTML = 'Copy';
                        copyButton.style.background = '#6366f1';
                    }, 2000);
                } catch (err) {
                    console.error('Failed to copy code:', err);
                    copyButton.innerHTML = 'Error';
                    setTimeout(() => {
                        copyButton.innerHTML = 'Copy';
                    }, 2000);
                }
            }
        });
        
        copyButton.addEventListener('mouseenter', function() {
            this.style.background = '#4f46e5';
        });
        
        copyButton.addEventListener('mouseleave', function() {
            this.style.background = '#6366f1';
        });
        
        block.style.position = 'relative';
        block.appendChild(copyButton);
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
