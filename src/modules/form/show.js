import dayjs from 'dayjs';
import { selectedSearchDate } from '../page-load';

const newAppointmentButton = document.querySelector('#new-appointment-button');
const modalWrapper = document.querySelector('#modal-wrapper');
const formContainer = document.querySelector('#form-container');
const closeIcon = document.querySelector('#close-icon');
const selectedDate = document.querySelector('#input-date');
const today = dayjs(new Date()).format('YYYY-MM-DD');

newAppointmentButton.addEventListener('click', () => {
    modalWrapper.style.display = 'block';
    selectedDate.value = selectedSearchDate.value;
    selectedDate.min = today;
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