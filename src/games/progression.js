import getRandom from '../utils';

import play from '..';

const [min, max, length] = [1, 15, 10];

const description = 'What number is missing in the progression?';

const getQuestionAndRightAnswer = () => {
  const begin = getRandom(max, min);
  const step = getRandom(max, min);
  const answerPosition = getRandom(length);
  const getValue = (first, position) => first + position * step;
  const question = (new Array(length))
    .fill(begin, 0, length)
    .map(getValue)
    .fill('..', answerPosition, answerPosition + 1)
    .join(' ');
  const answer = String(getValue(begin, answerPosition));
  return [question, answer];
};

export default () => play(description, getQuestionAndRightAnswer);
