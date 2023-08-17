import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
//import { Notify } from 'notiflix/build/notiflix-notify-aio';
import Notiflix from 'notiflix';
const inputTime = document.querySelector('#datetime-picker');
const btn = document.querySelector('button[data-start]');
let idTimer;
const elementsTimer = {
  days: document.querySelector('.value[data-days]'),
  hours: document.querySelector('.value[data-hours]'),
  minutes: document.querySelector('.value[data-minutes]'),
  seconds: document.querySelector('.value[data-seconds]'),
};

btn.disabled = true;
const currentDate = new Date();
let selectdDate = 0;
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    //console.log(selectedDates[0]);
    if (currentDate >= selectedDates[0]) {
      //alert('Please choose a date in the future');
      Notiflix.Notify.info('Please choose a date in the future');
      return null;
    }
    btn.disabled = false;
    selectdDate = selectedDates[0].getTime();
    const diference = selectdDate - currentDate.getTime();
    const diferenceTime = convertMs(diference);
    setTime(elementsTimer, diferenceTime);
  },
};

const fp = flatpickr('#datetime-picker', options);

btn.addEventListener('click', onStart);

function onStart() {
  idTimer = setInterval(() => {
    const currentTime = new Date().getTime();
    const diferenceTime = convertMs(selectdDate - currentTime);
    if (selectdDate - currentTime <= 0) {
      clearInterval(idTimer);
      return;
    }
    setTime(elementsTimer, diferenceTime);
  }, 1000);
}
function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}
function setTime({ seconds, minutes, hours, days }, valueTime) {
  seconds.textContent = addLeadingZero(valueTime.seconds);
  minutes.textContent = addLeadingZero(valueTime.minutes);
  hours.textContent = addLeadingZero(valueTime.hours);
  days.textContent = addLeadingZero(valueTime.days);
}
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
Notiflix.Notify.init({
  info: {
    background: '#f00',
  },
});

//Notiflix.Notify.info('Cogito ergo sum');
// Notiflix.Notify.success('Click Me', function cb() {
//   // callback
// });

// // e.g. Message with the new options
// Notiflix.Notify.success('Click Me', {
//   timeout: 6000,
// });
