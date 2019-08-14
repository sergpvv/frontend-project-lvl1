import readlineSync from 'readline-sync';

const roundsCount = 3;

export default (description, getQuestionAndRightAnswer) => {
  console.log('Welcome to the Brain Games!');
  console.log(description);
  const username = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${username}!`);
  const playRound = (roundsRemains, allAnswersIsCorrect) => {
    if (roundsRemains === 0) { return allAnswersIsCorrect; }
    const [question, rightAnswer] = getQuestionAndRightAnswer();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    const answerIsCorrect = answer === rightAnswer;
    if (answerIsCorrect) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
      console.log(`Let's try again, ${username}!`);
    }
    return playRound(roundsRemains - 1, allAnswersIsCorrect && answerIsCorrect);
  };
  const wereAllAnswersCorrect = playRound(roundsCount, true);
  if (wereAllAnswersCorrect) {
    console.log(`Congratulations, ${username}!`);
  }
};
