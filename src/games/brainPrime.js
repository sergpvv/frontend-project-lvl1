import getRandom from '../getRandom';

const [MIN, MAX] = [2, 3571];

const getAnswer = (number) => {
  const isPrime = (divisor) => {
    if (divisor > number / 2) { return 'yes'; }
    if (number % divisor === 0) { return 'no'; }
    return isPrime(divisor + 1);
  };
  return isPrime(2);
};

export default {
  rules: 'Answer "yes" if given number is prime. Otherwise answer "no".',
  getQuestionAndRightAnswer: () => {
    const number = getRandom(MAX, MIN);
    const question = `${number}`;
    const answer = getAnswer(number);
    return [question, answer];
  },
};
