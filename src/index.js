import readlineSync from 'readline-sync';

export default (game, count = 3) => {
  console.log('Welcome to the Brain Games!');
  console.log(game.rules);
  const username = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${username}!`);
  const playRound = (result, remain) => {
    if (remain === 0) { return result; }
    const question = game.getQuestion();
    const rightAnswer = game.getRightAnswer(question);
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === rightAnswer) {
      console.log('Correct!');
      return playRound(result, remain - 1);
    }
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${username}!`);
    return playRound(false, remain - 1);
  };
  if (playRound(true, count)) {
    console.log(`Congratulations, ${username}!`);
  }
};
