import getRandom from '../getRandom';

const OPS = ['+', '-', '*'];
const [MIN, MAX] = [1, 99];

const getAnswer = (a, b, o) => {
  switch (o) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    default:
      return null;
  }
};

export default {
  rules: 'What is the result of the expression?',
  getQuestionAndRightAnswer: () => {
    const number1 = getRandom(MAX, MIN);
    const number2 = getRandom(MAX, MIN);
    const operation = OPS[getRandom(OPS.length)];
    const question = `${number1} ${operation} ${number2}`;
    const answer = `${getAnswer(number1, number2, operation)}`;
    return [question, answer];
  },
};
