import getRandom from '../getRandom';

const [MIN, MAX] = [1, 100];

const getGcd = (a, b) => {
  const g = a % b;
  if (g === 0) return b;
  if (g === a) return getGcd(b, a);
  return getGcd(b, g);
};

export default {
  rules: 'Find the greatest common divisor of given numbers.',
  getQuestionAndRightAnswer: () => {
    const number1 = getRandom(MAX, MIN);
    const number2 = getRandom(MAX, MIN);
    const question = `${number1} ${number2}`;
    const answer = `${getGcd(number1, number2)}`;
    return [question, answer];
  },
};
