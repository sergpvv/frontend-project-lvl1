import getRandom from '../getRandom';

import play from '..';

const [min, max] = [2, 3571];

const isPrime = (number) => {
  const iter = (divisor) => {
    if (divisor > number / 2) { return true; }
    if (number % divisor === 0) { return false; }
    return iter(divisor + 1);
  };
  return iter(2);
};

const prime = {
  rules: 'Answer "yes" if given number is prime. Otherwise answer "no".',
  getQuestionAndRightAnswer: () => {
    const number = getRandom(max, min);
    const question = String(number);
    const answer = isPrime(number) ? 'yes' : 'no';
    return [question, answer];
  },
};

export default () => play(prime);
