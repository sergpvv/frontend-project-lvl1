import getRandom from '../utils';

import play from '..';

const ops = ['+', '-', '*'];

const [min, max] = [1, 100];

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

const description = 'What is the result of the expression?';

const getQuestionAndRightAnswer = () => {
  const number1 = getRandom(max, min);
  const number2 = getRandom(max, min);
  const operation = ops[getRandom(ops.length)];
  const question = `${number1} ${operation} ${number2}`;
  const answer = String(getAnswer(number1, number2, operation));
  return [question, answer];
};

export default () => play(description, getQuestionAndRightAnswer);
