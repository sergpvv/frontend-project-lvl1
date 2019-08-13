import getRandom from '../getRandom';

import play from '..';

const [min, max, length] = [1, 15, 10];

const progression = {
  rules: 'What number is missing in the progression?',
  getQuestionAndRightAnswer: () => {
    const begin = getRandom(max, min);
    const step = getRandom(max, min);
    const answerPosition = getRandom(length);
    const getValue = (first, position) => String(first + position * step);
    const question = [].fill(begin, 0, length)
      .map(getValue).fill('..', answerPosition, answerPosition).join(' ');
    const answer = getValue(begin, answerPosition);
    return [question, answer];
  },
};

export default () => play(progression);
