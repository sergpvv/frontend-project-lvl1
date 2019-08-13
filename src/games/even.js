import getRandom from '../getRandom';

import play from '..';

const [min, max] = [1, 100];

const even = {
  rules: 'Answer "yes" if number even otherwise answer "no".',
  getQuestionAndRightAnswer: () => {
    const question = getRandom(max, min);
    const answer = question % 2 ? 'no' : 'yes';
    return [question, answer];
  },
};

export default () => play(even);
