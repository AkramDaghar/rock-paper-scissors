
let pc;
let pcMove;
let result;
let show = true;
let playerMove;

pc = Math.floor(Math.random() * (4 - 1) + 1); // 4 excluded
pcMove = pc == 1 ? 'Rock' : pc == 2 ? 'Paper' : pc == 3 && ('Scissors'); 
playerMove = prompt('What are you going to play?')

switch (playerMove) {
	case pcMove:
  	result = 'Draw🤗';
    break;
  case 'Rock':
    result = pcMove == 'Paper' ? 'You lost😥' : pcMove == 'Scissors' && 'You won😁';
    break;  
  case 'Paper':
  	result = pcMove == 'Rock' ? 'You won😁' : pcMove = 'Scissors' && 'You lost😥';
    break;
  case 'Scissors':
  	result = pcMove == 'Rock' ? 'You lost😥' : pcMove = 'Paper' && 'You won😁';
    break;
  default:
  	alert('Enter a valid choice');
    show = false;
    break;
}

if (show == true) {
	alert('\n\nYou Played ' + playerMove)
	alert('\n\nYour opponent played ' + pcMove)
  alert('\n\n' + result)
}

