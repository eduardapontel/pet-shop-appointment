import dayjs from 'dayjs';
import { daySchedules } from './schedules/load';

const selectedDate = document.querySelector('#date-search');

document.addEventListener('DOMContentLoaded', () => {
    setTodayAsDefault();
    daySchedules(selectedDate.value);
});

selectedDate.addEventListener('change', () => {
    daySchedules(selectedDate.value);
});

function setTodayAsDefault() {
    const today = dayjs(new Date()).format('YYYY-MM-DD');
    selectedDate.value = today;
}
