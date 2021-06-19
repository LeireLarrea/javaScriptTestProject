function getUserChoice(userInput){
    userInput = userInput.toLowerCase();
    console.log('the user input is ' + userInput);
    if(userInput == 'bear'|| userInput == 'human'|| userInput == 'gun'){
        return userInput;
    } else {
        alert('please enter a valid choice: bear, human or gun');
    }
}

var choices = ['bear', 'human', 'gun']
function getComputerChoice(){
    computerInput = Math.floor(Math.random() * choices.length);
    console.log('computer choose '+choices[computerInput]);
    return choices[computerInput];
}

function getResult(userInput, computerChoice){
    var userChoice = getUserChoice(userInput);
    var computerChoice = getComputerChoice();
    if (userChoice == 'bear'){
        if (computerChoice == 'human')
                console.log('user wins ' + userChoice + ' VS ' + computerChoice);
         else if (computerChoice == 'gun')
                console.log('computer wins ' + userChoice + ' VS ' + computerChoice);
         else     
                console.log('It is a draw');
    }
    if (userChoice == 'human'){
        if (computerChoice == 'bear')
                console.log('computer wins ' + userChoice + ' VS ' + computerChoice);
        else if (computerChoice == 'gun')
                console.log('user wins ' + userChoice + ' VS ' + computerChoice);
        else     
                console.log('It is a draw');
    }
    
    if (userChoice == 'gun'){
      if (computerChoice == 'bear')
            console.log('user wins ' + userChoice + ' VS ' + computerChoice);
      else if (computerChoice == 'human')
            console.log('computer wins ' + userChoice + ' VS ' + computerChoice);
      else     
                console.log('It is a draw');
    }
}

var finalChoice = prompt('select');
getResult(finalChoice);
