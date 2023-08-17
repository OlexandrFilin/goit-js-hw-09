import Notiflix from 'notiflix';
const form = document.querySelector('.form');
const btn = document.querySelector('button');

function getSettingPromiseDefault() {
  form.delay.value = 1000;
  form.step.value = 500;
  form.amount.value = 1;
}
getSettingPromiseDefault();
form.addEventListener('submit', onClick);
function onClick(e) {
  e.preventDefault();
  for (let i = 0; i < form.amount.value; i += 1) {
    const position = i;
    const delayFirst = Number(form.delay.value);
    const delay = delayFirst + Number(form.step.value) * i;
    const step = createPromise(Number(form.step.value) * i, delayFirst)
      .then(() => {
        Notiflix.Notify.init({
          info: {
            background: '#219721',
          },
        });

        Notiflix.Notify.info(
          `✅ Fulfilled promise ${position + 1} in ${delay}ms`
        );
      })
      .catch(() => {
        Notiflix.Notify.init({
          info: {
            background: '#e02525',
          },
        });
        Notiflix.Notify.info(
          `❌ Rejected promise ${position + 1} in ${delay}ms`
        );
      });
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
    }, delay + position);
  });
  return promice;
}
