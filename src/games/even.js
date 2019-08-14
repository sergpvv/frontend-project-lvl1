import getRandom from '../utils';

import play from '..';

const [min, max] = [1, 100];

const description = 'Answer "yes" if number even otherwise answer "no".';

const getQuestionAndRightAnswer = () => {
  const question = getRandom(max, min);
  const answer = question % 2 ? 'no' : 'yes';
  return [question, answer];
};

export default () => play(description, getQuestionAndRightAnswer);
