// This will only run in a browser about:blank >> devTools (F12)
// because prompt() is not part of JS but a method for "Window" which is not defined in Node.js


var userName = prompt('What is your name?');
if (userName) {
    console.log('Hello, ' + userName + '.');
  } else {
   console.log('Hello!');
  } 

  var userQuestion = prompt('Please ask a question:)');
  console.log('You asked: ' + userQuestion);

  var randomNumber = Math.floor(Math.random() * 8);
  var eightBall = '';
  switch (randomNumber){
    case 0:
      eightBall = 'Better not tell you now.';
      break;
    case 1:
      eightBall = 'Concentrate and ask again.';
      break;
    case 2:
      eightBall = 'Reply hazy try again';
      break;
    case 3:
      eightBall = 'Cannot predict now';
      break;
    case 4:
      eightBall = 'Dont count on it';
      break;
    case 5:
      eightBall = 'My reply is no';
      break;
    case 6:
      eightBall = 'Outlook not so good';
      break;
    case 7:
      eightBall = 'Signs point to yes';
      break;
  }

  console.log('The eight ball says: ' + eightBall);
