import getRandom from '../getRandom';

const [MIN, MAX, LENGTH] = [1, 12, 10];

const generateProgression = (begin, step, len, answerIndex) => {
  let question = '';
  let answer;
  for (let i = 0; i < len; i += 1) {
    const current = begin + i * step;
    if (i === answerIndex) {
      answer = `${current}`;
      question = `${question} .. `;
    } else {
      question = `${question} ${current} `;
    }
  }
  return [question, answer];
};

export default {
  rules: 'What number is missing in the progression?',
  getQuestionAndRightAnswer: () => {
    const begin = getRandom(MAX, MIN);
    const step = getRandom(MAX, MIN);
    const hidden = getRandom(LENGTH);
    return generateProgression(begin, step, LENGTH, hidden);
  },
};
