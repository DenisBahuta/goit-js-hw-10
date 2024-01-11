import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose: function (selectedDates) {
    let userSelectedDate = selectedDates[0];
    const currentDate = new Date();
    if (userSelectedDate <= currentDate) {
      window.alert('Please choose a date in the future');
      document.querySelector('button[data-start]').disabled = true;
    } else {
      document.querySelector('button[data-start]').disabled = false;
    }
  },
};

const dateTimePicker = flatpickr('#datetime-picker', options);

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

console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}

document
  .querySelector('button[data-start]')
  .addEventListener('click', function () {
    let userSelectedDate = dateTimePicker.selectedDates[0];
    const countdownInterval = setInterval(function () {
      const currentTime = new Date().getTime();
      const diffTime = userSelectedDate.getTime() - currentTime;

      if (diffTime < 0) {
        clearInterval(countdownInterval);
        document.querySelector('button[data-start]').disabled = true;
        return;
      }

      const { days, hours, minutes, seconds } = convertMs(diffTime);
      document.querySelector('[data-days]').textContent = days
        .toString()
        .padStart(2, '0');
      document.querySelector('[data-hours]').textContent = hours
        .toString()
        .padStart(2, '0');
      document.querySelector('[data-minutes]').textContent = minutes
        .toString()
        .padStart(2, '0');
      document.querySelector('[data-seconds]').textContent = seconds
        .toString()
        .padStart(2, '0');
    }, 1000);
  });
