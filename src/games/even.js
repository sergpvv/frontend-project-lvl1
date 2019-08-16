import getRandom from '../utils';

import play from '..';

const [min, max] = [1, 100];

const description = 'Answer "yes" if number even otherwise answer "no".';

const isEven = (value) => value % 2 === 0;

const getQuestionAndRightAnswer = () => {
  const question = getRandom(max, min);
  const answer = isEven(question) ? 'yes' : 'no';
  return [question, answer];
};

export default () => play(description, getQuestionAndRightAnswer);
