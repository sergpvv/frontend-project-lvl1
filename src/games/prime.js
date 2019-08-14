import getRandom from '../utils';

import play from '..';

const [min, max] = [-100, 1000];

const isPrime = (number) => {
  if (number < 2) { return false; }
  const iter = (divisor) => {
    if (divisor > number / 2) { return true; }
    if (number % divisor === 0) { return false; }
    return iter(divisor + 1);
  };
  return iter(2);
};

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const getQuestionAndRightAnswer = () => {
  const number = getRandom(max, min);
  const question = String(number);
  const answer = isPrime(number) ? 'yes' : 'no';
  return [question, answer];
};

export default () => play(description, getQuestionAndRightAnswer);
