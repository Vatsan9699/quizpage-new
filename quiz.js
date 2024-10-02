var container = document.getElementById('container');
var question = document.getElementById('question');
var option1 = document.getElementById('option1');
var option2 = document.getElementById('option2');
var option3 = document.getElementById('option3');
var option4 = document.getElementById('option4');
var result = document.getElementById('result');
var nextButton = document.getElementById('nextQuestion'); 
var restartButton = document.getElementById('restartButton'); // Ensure this button exists in your HTML

var currentQuestion = 0;
var score = 0;
var totalQuestions = questions.length;

function loadQuestion(index) {
    var data = questions[index];
    question.textContent = (index + 1) + '. ' + data.question;
    option1.textContent = data.options[0];
    option2.textContent = data.options[1];
    option3.textContent = data.options[2];
    option4.textContent = data.options[3];

    // Uncheck the selected option (if any)
    var selectedOption = document.querySelector('#container input[type=radio]:checked');
    if (selectedOption) {
        selectedOption.checked = false;
    }
}

function loadNextQuestion() {
    var selectedOption = document.querySelector('#container input[type=radio]:checked');
    
    if (!selectedOption) {
        alert('Please select an option!');
        return;
    }

    // Check if the selected option is correct
    if (questions[currentQuestion].answer == selectedOption.value) {
        score += 10; // Increment score for correct answer
    }

    // Move to the next question
    currentQuestion++;

    // Check if there are more questions
    if (currentQuestion === totalQuestions) {
        // Hide quiz and show results
        container.style.display = 'none';
        result.style.display = '';
        document.getElementById('score').textContent = 'Your Score: ' + score;
        restartButton.style.display = ''; // Show the restart button
        nextButton.style.display = 'none'; // Hide next button
    } else {
        // Update button text if it's the last question
        if (currentQuestion === totalQuestions - 1) {
            nextButton.textContent = 'Finish'; // Change button text to Finish
        }
        loadQuestion(currentQuestion); // Load the next question
    }
}

function restartGame() {
    score = 0; // Reset score
    currentQuestion = 0; // Reset question index
    container.style.display = ''; // Show quiz container
    result.style.display = 'none'; // Hide results
    restartButton.style.display = 'none'; // Hide restart button
    nextButton.style.display = ''; // Show next button
    loadQuestion(currentQuestion); // Load the first question
}

// Load the first question when the page loads
loadQuestion(currentQuestion);
