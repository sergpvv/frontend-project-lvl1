import getRandom from '../getRandom';

const [MIN, MAX] = [1, 100];

export default {
  rules: 'Answer "yes" if number even otherwise answer "no".',
  getQuestionAndRightAnswer: () => {
    const question = getRandom(MAX, MIN);
    const answer = question % 2 ? 'no' : 'yes';
    return [question, answer];
  },
};
