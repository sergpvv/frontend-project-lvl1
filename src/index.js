import readlineSync from 'readline-sync';

const greetUser = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no".');
  const username = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${username}!`);
  return username;
};

const playEven = (count = 3, min = 1, max = 100) => {
  const right = { 0: 'yes', 1: 'no' };
  const playRound = (result, remain) => {
    if (remain === 0) { return result; }
    const number = Math.floor(Math.random() * (max - min)) + min;
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ');
    const rightAnswer = right[number % 2];
    if (answer === rightAnswer) {
      console.log('Correct!');
      return playRound(result, remain - 1);
    }
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, Bill!`);
    return playRound(false, remain - 1);
  };

  const username = greetUser();
  if (playRound(true, count)) {
    console.log(`Congratulations, ${username}!`);
  }
};

export default playEven;
