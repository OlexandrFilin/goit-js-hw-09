import Notiflix from 'notiflix';
const form = document.querySelector('.form');
const btn = document.querySelector('button');

form.addEventListener('submit', onClick);
function onClick(e) {
  e.preventDefault();
  for (let i = 1; i <= form.amount.value; i += 1) {
    const delayFirst = Number(form.delay.value);
    const delay = delayFirst + Number(form.step.value) * (i - 1);
    createPromise(i, delay);
  }
}

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  const promice = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve('Fulfilled promisek');
      } else {
        reject('Rejected promise');
      }
    }, delay);
  });

  promice
    .then(() => {
      Notiflix.Notify.init({
        info: {
          background: '#219721',
        },
      });

      Notiflix.Notify.info(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(() => {
      Notiflix.Notify.init({
        info: {
          background: '#e02525',
        },
      });
      Notiflix.Notify.info(`❌ Rejected promise ${position} in ${delay}ms`);
    });
}
