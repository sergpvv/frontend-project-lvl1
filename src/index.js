import readlineSync from 'readline-sync';

export default (game, roundsCount = 3) => {
  console.log('Welcome to the Brain Games!');
  console.log(game.rules);
  const username = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${username}!`);
  const playRound = (result, roundsRemains) => {
    if (roundsRemains === 0) { return result; }
    const [question, rightAnswer] = game.getQuestionAndRightAnswer();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === rightAnswer) {
      console.log('Correct!');
      return playRound(result, roundsRemains - 1);
    }
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\nLet's try again, ${username}!`);
    return playRound(false, roundsRemains - 1);
  };
  if (playRound(true, roundsCount)) {
    console.log(`Congratulations, ${username}!`);
  }
};
