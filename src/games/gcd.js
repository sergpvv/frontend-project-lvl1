import getRandom from '../getRandom';

import play from '..';

const [min, max] = [1, 100];

const getGcd = (a, b) => {
  const c = a % b;
  if (c === 0) return b;
  if (c === a) return getGcd(b, a);
  return getGcd(b, c);
};

const gcd = {
  rules: 'Find the greatest common divisor of given numbers.',
  getQuestionAndRightAnswer: () => {
    const number1 = getRandom(max, min);
    const number2 = getRandom(max, min);
    const question = `${number1} ${number2}`;
    const answer = String(getGcd(number1, number2));
    return [question, answer];
  },
};

export default () => play(gcd);
