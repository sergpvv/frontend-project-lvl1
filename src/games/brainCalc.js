import getRandom from '../getRandom';

const OPS = ['+', '-', '*'];
const [MIN, MAX] = [1, 99];

export default {
  rules: 'What is the result of the expression?',
  getQuestion: () => `${getRandom(MAX, MIN)} ${OPS[getRandom(OPS.length)]} ${getRandom(MAX, MIN)}`,
  getRightAnswer: (question) => `${eval(question)}`,
};
