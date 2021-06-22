// This will only run in a browser about:blank >> devTools (F12)
// because prompt() is not part of JS but a method for "Window" which is not defined in Node.js

function getUserChoice(userInput){
    userInput = userInput.toLowerCase();
    console.log('You chose: ' + userInput);
    if(userInput == 'bear'|| userInput == 'human'|| userInput == 'gun'){
        return userInput;
    } else {
        alert('please enter a valid choice: bear, human or gun');
    }
}

var choices = ['bear', 'human', 'gun']
function getComputerChoice(){
    computerInput = Math.floor(Math.random() * choices.length);
    console.log('The computer chose: '+choices[computerInput]);
    return choices[computerInput];
}

function getResult(userInput, computerChoice){
    var userChoice = getUserChoice(userInput);
    var computerChoice = getComputerChoice();
    if (userChoice == computerChoice)
        console.log('It is a draw');
    else if (userChoice == 'bear') {
        if (computerChoice == 'human')
                console.log('user wins ' + userChoice + ' VS ' + computerChoice);
        else if (computerChoice == 'gun')
                console.log('computer wins ' + userChoice + ' VS ' + computerChoice);
    }
    else if (userChoice == 'human') {
        if (computerChoice == 'bear')
                console.log('computer wins ' + userChoice + ' VS ' + computerChoice);
        else if (computerChoice == 'gun')
                console.log('user wins ' + userChoice + ' VS ' + computerChoice);
    }
    else
      if (computerChoice == 'bear')
            console.log('user wins ' + userChoice + ' VS ' + computerChoice);
      else if (computerChoice == 'human')
            console.log('computer wins ' + userChoice + ' VS ' + computerChoice);
}

var finalChoice = prompt('select');
getResult(finalChoice);
