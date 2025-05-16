import dayjs from 'dayjs';
import { daySchedules } from './schedules/load';
import { updateAvailability } from './form/check-hours';

const selectedSearchDate = document.querySelector('#date-search');
const selectedDate = document.querySelector('#input-date');


document.addEventListener('DOMContentLoaded', () => {
    setTodayAsDefault();
    daySchedules(selectedSearchDate.value);
});

selectedSearchDate.addEventListener('change', async () => {
    if (selectedDate) {
        selectedDate.value = selectedSearchDate.value;
        selectedDate.min = selectedSearchDate.value;
    }

    await updateAvailability(selectedSearchDate.value);

    daySchedules(selectedSearchDate.value);
});

function setTodayAsDefault() {
    const today = dayjs(new Date()).format('YYYY-MM-DD');
    selectedSearchDate.value = today;
}
