const startButtonRef = document.querySelector('button[data-action=start]');
const stopButtonRef = document.querySelector('button[data-action=stop]');
const bodyRef = document.querySelector('body');
let timer = null;

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const bgcChanger = () => {
  bodyRef.bgColor = colors[randomIntegerFromInterval(0, colors.length - 1)];
};

startButtonRef.addEventListener('click', ({ target }) => {
  timer = setInterval(bgcChanger, 1000);
  target.disabled = true;
});

stopButtonRef.addEventListener('click', () => {
  bodyRef.bgColor = '';
  clearInterval(timer);
  startButtonRef.disabled = false;
});
