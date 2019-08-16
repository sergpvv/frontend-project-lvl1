import getRandom from '../utils';

import play from '..';

const ops = ['+', '-', '*'];

const [min, max] = [1, 100];

const calculate = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
};

const description = 'What is the result of the expression?';

const getQuestionAndRightAnswer = () => {
  const number1 = getRandom(max, min);
  const number2 = getRandom(max, min);
  const operation = ops[getRandom(ops.length)];
  const question = `${number1} ${operation} ${number2}`;
  const answer = String(calculate[operation](number1, number2));
  return [question, answer];
};

export default () => play(description, getQuestionAndRightAnswer);
