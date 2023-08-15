import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const inputTime = document.querySelector('#datetime-picker');
const btn = document.querySelector('button[data-start]');
const elementsTimer = {
  days: document.querySelector('.value[data-days]'),
  hours: document.querySelector('.value[data-hours]'),
  minutes: document.querySelector('.value[data-minutes]'),
  seconds: document.querySelector('.value[data-seconds]'),
};

btn.disabled = true;
console.log(btn);
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
      alert('Please choose a date in the future');
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
console.log(options);

btn.addEventListener('click', onStart);

function onStart() {
  setInterval(() => {
    const currentTime = new Date().getTime();
    const diferenceTime = convertMs(selectdDate - currentTime);
    setTime(elementsTimer, diferenceTime);
  }, 1000);
}
function setTime(elTime, valueTime) {
  elTime.seconds.textContent = valueTime.seconds.toString().padStart(2, '0');
  elTime.minutes.textContent = valueTime.minutes.toString().padStart(2, '0');
  elTime.hours.textContent = valueTime.hours.toString().padStart(2, '0');
  elTime.days.textContent = valueTime.days.toString().padStart(2, '0');
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

// console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
// console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
// console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}
// console.log(options.onClose(1000));
