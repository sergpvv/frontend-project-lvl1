import getRandom from '../getRandom';

const [MIN, MAX] = [1, 99];

export default {
  rules: 'Answer "yes" if number even otherwise answer "no".',
  getQuestion: () => getRandom(MAX, MIN),
  getRightAnswer: (question) => (question % 2 ? 'no' : 'yes'),
};
