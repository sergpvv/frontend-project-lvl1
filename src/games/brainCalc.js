import getRandom from '../getRandom';

const OPS = ['+', '-', '*'];
const [MIN, MAX] = [1, 99];

export default {
  rules: 'What is the result of the expression?',
  getQuestionAndRightAnswer: () => {
    const number1 = getRandom(MAX, MIN);
    const number2 = getRandom(MAX, MIN);
    const operation = OPS[getRandom(OPS.length)];
    const question = `${number1} ${operation} ${number2}`;
    const answer = `${eval(question)}`;
    return [question, answer];
  },
};
