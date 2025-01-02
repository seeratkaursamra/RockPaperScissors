// Copyright © 2025 SeeratKaurSamra. All rights reserved.

// HTML elements
const playerScoreElement = document.getElementById('player-score');
const computerScoreElement = document.getElementById('computer-score');
const playerChoiceElement = document.getElementById('player-choice');
const computerChoiceElement = document.getElementById('computer-choice');
const resultElement = document.getElementById('result');
const subtleMessageElement = document.getElementById('subtle-message');
const buttons = document.querySelectorAll('#buttons button');

// Scores
let playerScore = 0;
let computerScore = 0;

// Function to launch confetti
function launchConfetti() {
  confetti({
    particleCount: 150,
    spread: 70,
    origin: { y: 0.6 },
    colors: ['#ff69b4', '#ffcccb', '#ffd700', '#add8e6', '#90ee90']
  });
}

// Get the computer's choice
function getComputerChoice() {
  const choices = ['Rock', 'Paper', 'Scissors'];
  return choices[Math.floor(Math.random() * 3)];
}

// Determine the winner
function determineWinner(player, computer) {
  if (player === computer) return 'Draw';
  if (
    (player === 'Rock' && computer === 'Scissors') ||
    (player === 'Paper' && computer === 'Rock') ||
    (player === 'Scissors' && computer === 'Paper')
  ) {
    playerScore++;
    return 'Player';
  }
  computerScore++;
  return 'Computer';
}

// Handle button clicks
function handleClick(event) {
  const playerChoice = event.target.textContent;
  const computerChoice = getComputerChoice();

  // Update choices
  playerChoiceElement.textContent = `Your Choice: ${playerChoice}`;
  computerChoiceElement.textContent = `Computer's Choice: ${computerChoice}`;

  // Determine winner
  const winner = determineWinner(playerChoice, computerChoice);
  if (winner === 'Draw') {
    resultElement.textContent = 'Result: It\'s a draw!';
    subtleMessageElement.textContent = '🤝 Keep going!';
  } else if (winner === 'Player') {
    resultElement.textContent = 'Result: You win!';
    subtleMessageElement.textContent = '🎉 Amazing! You won!';
    launchConfetti(); // Trigger confetti on a win
  } else {
    resultElement.textContent = 'Result: You lost!';
    subtleMessageElement.textContent = '💔 Better luck next time!';
  }

  // Update scores
  playerScoreElement.textContent = playerScore;
  computerScoreElement.textContent = computerScore;
}

// Add event listeners to buttons
buttons.forEach(button => button.addEventListener('click', handleClick));
