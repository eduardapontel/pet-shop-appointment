import dayjs from 'dayjs';
import { daySchedules } from './schedules/load';

export const selectedSearchDate = document.querySelector('#date-search');

document.addEventListener('DOMContentLoaded', () => {
    setTodayAsDefault();
    daySchedules(selectedSearchDate.value);
});

selectedSearchDate.addEventListener('change', () => {
    daySchedules(selectedSearchDate.value);
});

function setTodayAsDefault() {
    const today = dayjs(new Date()).format('YYYY-MM-DD');
    selectedSearchDate.value = today;
}
