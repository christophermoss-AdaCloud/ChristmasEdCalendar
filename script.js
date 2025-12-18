// Quiz questions and answers for each day - Christmas Around the World Challenge
const dailyContent = {
    1: {
        title: "🌍 Japan",
        question: "Which famous fast-food restaurant is so popular for Christmas dinner that people order their fried chicken weeks in advance?",
        answer: "KFC"
    },
    2: {
        title: "🌍 Germany",
        question: "What is the name of the scary, goat-like monster who follows St. Nicholas to punish naughty children?",
        answer: "Krampus"
    },
    3: {
        title: "🌍 Mexico",
        question: "In the city of Oaxaca, people celebrate a festival by carving elaborate scenes out of which red-and-white vegetable?",
        answer: "Radishes"
    },
    4: {
        title: "🌍 Norway",
        question: "On Christmas Eve, why do people hide all the brooms in their house? (Hint: It involves witches!)",
        answer: "To stop witches from stealing them"
    },
    5: {
        title: "🌍 Australia",
        question: "Since Christmas happens in the middle of a hot summer, what outdoor location is the most popular place for a family lunch?",
        answer: "The Beach"
    },
    6: {
        title: "🌍 Ukraine",
        question: "Instead of standard tinsel, many people decorate their trees with decorations that look like spider webs for good luck. True or False?",
        answer: "True"
    },
    7: {
        title: "🌍 Italy",
        question: "Who is the friendly 'Christmas Witch' who flies on a broomstick and delivers candy to children in January?",
        answer: "La Befana"
    },
    8: {
        title: "🌍 Sweden",
        question: "In the town of Gävle, the locals build a giant version of what animal made out of straw every year?",
        answer: "A Goat"
    },
    9: {
        title: "🌍 Philippines",
        question: "What is a Parol—the most popular decoration in the country? (Hint: It's a shape you see in the sky)",
        answer: "A Star-shaped lantern"
    },
    10: {
        title: "🌍 The Netherlands",
        question: "Instead of a sleigh pulled by reindeer, Sinterklaas (Santa) arrives in the country on what kind of boat?",
        answer: "A Steamboat"
    },
    11: {
        title: "🌍 Spain",
        question: "In the region of Catalonia, children hit a 'Christmas Log' with sticks to make it 'poop' out what kind of treats?",
        answer: "Candy/Sweets"
    },
    12: {
        title: "🌍 France",
        question: "What is the name of the delicious sponge cake that is decorated to look like a real wooden log?",
        answer: "Bûche de Noël (Yule Log)"
    },
    13: {
        title: "🌍 United Kingdom",
        question: "What shiny object is often hidden inside a Christmas pudding to bring luck to the person who finds it?",
        answer: "A Silver Coin"
    },
    14: {
        title: "🌍 Iceland",
        question: "How many 'Yule Lads' (mischievous Santa-like characters) visit children in the days leading up to Christmas?",
        answer: "13"
    },
    15: {
        title: "🌍 USA (Arizona/New Mexico)",
        question: "What are the paper bags filled with sand and a candle called that light up the sidewalks on Christmas Eve?",
        answer: "Luminarias"
    },
    16: {
        title: "🌍 Poland",
        question: "Families wait for the 'First Star' to appear in the sky before they start their 12-course Christmas Eve dinner. True or False?",
        answer: "True"
    },
    17: {
        title: "🌍 Venezuela",
        question: "In the city of Caracas, many people travel to early morning church services using what fun, wheeled footwear?",
        answer: "Roller Skates"
    },
    18: {
        title: "🌍 Finland",
        question: "Almost every family in this country visits what hot, steamy room on Christmas Eve to relax?",
        answer: "A Sauna"
    },
    19: {
        title: "🌍 Greenland",
        question: "One traditional holiday 'treat' is Mattak. Is this made from whale skin or frozen chocolate?",
        answer: "Whale skin"
    },
    20: {
        title: "🌍 Greece",
        question: "Before Christmas trees became popular, what did Greek people traditionally decorate with lights instead?",
        answer: "Boats"
    },
    21: {
        title: "🌍 Ireland",
        question: "On 'Women's Christmas' (January 6th), the men stay home to do all the chores while the women do what?",
        answer: "Go out and celebrate/relax"
    },
    22: {
        title: "🌍 Canada",
        question: "What is the special postal code (using letters and numbers) that children use to mail letters to Santa at the North Pole?",
        answer: "H0H 0H0"
    },
    23: {
        title: "🌍 Ethiopia",
        question: "Because they follow a different calendar, do they celebrate Christmas on December 25th or January 7th?",
        answer: "January 7th"
    },
    24: {
        title: "🌍 Wales",
        question: "A strange tradition called the Mari Lwyd involves someone carrying around a pole with the real skull of what animal on it?",
        answer: "A Horse"
    }
};

// Initialize calendar
function initializeCalendar() {
    const calendarGrid = document.getElementById('calendar');
    const currentDate = new Date();
    const currentDay = currentDate.getDate();
    const currentMonth = currentDate.getMonth(); // 0-indexed, December = 11
    
    // For testing purposes, you can unlock all doors by uncommenting the line below
    // const currentDay = 25;
    
    for (let day = 1; day <= 24; day++) {
        const door = createDoor(day, currentDay, currentMonth);
        calendarGrid.appendChild(door);
    }
}

// Create individual calendar door
function createDoor(day, currentDay, currentMonth) {
    const door = document.createElement('div');
    door.className = 'calendar-door';
    
    // Check if door should be unlocked
    // Door is unlocked if: it's December AND the day has arrived (or passed)
    const isUnlocked = currentMonth === 11 && day <= currentDay;
    
    // Check if door has been opened (stored in localStorage)
    const isOpened = localStorage.getItem(`day-${day}-opened`) === 'true';
    
    if (!isUnlocked) {
        door.classList.add('locked');
    }
    
    if (isOpened) {
        door.classList.add('opened');
    }
    
    // Door number
    const doorNumber = document.createElement('div');
    doorNumber.className = 'door-number';
    doorNumber.textContent = day;
    door.appendChild(doorNumber);
    
    // Door icon
    const doorIcon = document.createElement('div');
    doorIcon.className = 'door-icon';
    doorIcon.textContent = isOpened ? '✓' : '🎁';
    door.appendChild(doorIcon);
    
    // Status indicator
    const statusIcon = document.createElement('div');
    statusIcon.className = 'door-status';
    if (!isUnlocked) {
        statusIcon.textContent = '🔒';
    } else if (isOpened) {
        statusIcon.textContent = '✨';
    } else {
        statusIcon.textContent = '🔓';
    }
    door.appendChild(statusIcon);
    
    // Add click event
    if (isUnlocked) {
        door.addEventListener('click', () => openDoor(day, door));
    } else {
        door.addEventListener('click', () => {
            alert(`This door will unlock on December ${day}! Come back then to discover what's inside. 🎄`);
        });
    }
    
    return door;
}

// Open door and show quiz
function openDoor(day, doorElement) {
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body');
    
    // Get quiz content for the day
    const quiz = dailyContent[day];
    
    if (quiz) {
        modalTitle.textContent = `Day ${day}: ${quiz.title}`;
        
        // Create quiz interface
        modalBody.innerHTML = `
            <div class="quiz-container">
                <h3 class="quiz-question">${quiz.question}</h3>
                <div class="quiz-input-section">
                    <input type="text" id="quiz-answer" class="quiz-input" placeholder="Type your answer here..." autocomplete="off">
                    <button id="submit-answer" class="quiz-button">Submit Answer</button>
                </div>
                <div id="quiz-result" class="quiz-result"></div>
            </div>
        `;
        
        // Show modal
        modal.style.display = 'block';
        
        // Focus on input
        setTimeout(() => {
            document.getElementById('quiz-answer').focus();
        }, 100);
        
        // Handle answer submission
        const submitBtn = document.getElementById('submit-answer');
        const answerInput = document.getElementById('quiz-answer');
        const resultDiv = document.getElementById('quiz-result');
        
        const checkAnswer = () => {
            const userAnswer = answerInput.value.trim();
            
            if (!userAnswer) {
                resultDiv.innerHTML = '<p class="quiz-feedback">Please enter an answer!</p>';
                return;
            }
            
            // Check if answer is correct (case-insensitive, flexible matching)
            const correctAnswer = quiz.answer.toLowerCase();
            const userAnswerLower = userAnswer.toLowerCase();
            
            // Check for exact match or close match
            let isCorrect = false;
            
            // Direct match
            if (userAnswerLower === correctAnswer) {
                isCorrect = true;
            }
            // Check if user answer contains the correct answer or vice versa
            else if (correctAnswer.includes(userAnswerLower) || userAnswerLower.includes(correctAnswer)) {
                isCorrect = true;
            }
            // For specific answers, check variations
            else if (correctAnswer.includes('true') && userAnswerLower.includes('true')) {
                isCorrect = true;
            }
            else if (correctAnswer.includes('false') && userAnswerLower.includes('false')) {
                isCorrect = true;
            }
            // Check for common variations
            else if (correctAnswer.includes('goat') && userAnswerLower.includes('goat')) {
                isCorrect = true;
            }
            else if (correctAnswer.includes('beach') && userAnswerLower.includes('beach')) {
                isCorrect = true;
            }
            
            if (isCorrect) {
                // Correct answer - show elf and celebration
                resultDiv.innerHTML = `
                    <div class="quiz-success">
                        <h3>🎉 Correct! 🎉</h3>
                        <div class="elf-container">
                            <div class="elf-image">🧝</div>
                        </div>
                        <p class="correct-answer">Great job! The answer is: <strong>${quiz.answer}</strong></p>
                    </div>
                `;
                
                // Mark door as opened
                localStorage.setItem(`day-${day}-opened`, 'true');
                doorElement.classList.add('opened');
                
                // Update door icon
                const doorIcon = doorElement.querySelector('.door-icon');
                doorIcon.textContent = '✓';
                
                const statusIcon = doorElement.querySelector('.door-status');
                statusIcon.textContent = '✨';
                
                // Disable input and button
                answerInput.disabled = true;
                submitBtn.disabled = true;
            } else {
                // Wrong answer - give another try
                resultDiv.innerHTML = `
                    <div class="quiz-wrong">
                        <p class="quiz-feedback">❌ Not quite! Try again!</p>
                        <p class="hint">Hint: ${quiz.question.includes('True or False') ? 'Answer with True or False' : 'Think carefully about the question...'}</p>
                    </div>
                `;
                answerInput.value = '';
                answerInput.focus();
            }
        };
        
        // Submit on button click
        submitBtn.addEventListener('click', checkAnswer);
        
        // Submit on Enter key
        answerInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                checkAnswer();
            }
        });
    }
}

// Close modal
function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    initializeCalendar();
    
    // Close modal when clicking X
    const closeBtn = document.querySelector('.close');
    closeBtn.addEventListener('click', closeModal);
    
    // Close modal when clicking outside
    const modal = document.getElementById('modal');
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            closeModal();
        }
    });
});
