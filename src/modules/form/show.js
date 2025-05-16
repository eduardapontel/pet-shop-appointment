import dayjs from 'dayjs';
import { updateAvailability } from './check-hours.js';

const newAppointmentButton = document.querySelector('#new-appointment-button');
const modalWrapper = document.querySelector('#modal-wrapper');
const formContainer = document.querySelector('#form-container');
const closeIcon = document.querySelector('#close-icon');
const selectedDate = document.querySelector('#input-date');
const today = dayjs(new Date()).format('YYYY-MM-DD');
const selectedSearchDate = document.querySelector('#date-search');

newAppointmentButton.addEventListener('click', async () => {
    modalWrapper.style.display = 'block';

    const currentDate = selectedSearchDate.value || dayjs().format('YYYY-MM-DD');
    selectedDate.value = currentDate;
    selectedDate.min = today;

    await updateAvailability(currentDate);
});

document.addEventListener('click', (event) => {
    if (
        modalWrapper.style.display === 'block' &&
        !formContainer.contains(event.target) &&
        event.target !== newAppointmentButton
    ) {
        modalWrapper.style.display = 'none';
    }
});

closeIcon.addEventListener('click', () => {
    modalWrapper.style.display = 'none';
});
