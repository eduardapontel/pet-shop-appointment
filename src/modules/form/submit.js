import dayjs from 'dayjs';
import { newSchedule } from '../../services/new-schedule.js';
import { daySchedules } from '../schedules/load.js';
import { getAvailableTimes } from './check-hours.js';
import { updateAvailability } from './check-hours.js';

const form = document.querySelector('form');
const clientNameInput = document.querySelector('#client-name');
const petNameInput = document.querySelector('#pet-name');
const phoneInput = document.querySelector('#phone');
const descriptionTextarea = document.querySelector('#description');
const dateInput = document.querySelector('#input-date');
const timeInput = document.querySelector('#input-time');
const dateSearchInput = document.querySelector('#date-search');

form.onsubmit = async function (e) {
    e.preventDefault();
    try {
        const clientName = clientNameInput.value.trim();
        const petName = petNameInput.value.trim();
        const phone = phoneInput.value.trim();
        const description = descriptionTextarea.value.trim();
        const timeSelected = timeInput.value;
        const date = dateInput.value;

        const availableTimes = await getAvailableTimes(timeInput, date);

        if (!availableTimes.includes(timeSelected)) {
            console.log('This time slot is no longer available. Please select another one.');
            return;
        }

        const [hour] = timeSelected.split(':');
        const when = dayjs(date).add(hour, 'hour');
        const id = String(new Date().getTime());

        await newSchedule({
            id,
            clientName,
            petName,
            phone,
            description,
            when,
        });

        await daySchedules(date);

        if (dateSearchInput) {
            dateSearchInput.value = date;
        }

        form.reset();
        dateInput.value = date;

        await updateAvailability(date);
    } catch (error) {
        console.log('Could not be scheduled!');
        console.log(error);
    }
};

if (dateInput.value) {
    updateAvailability(dateInput.value);
}

dateInput.addEventListener('change', async function () {
    const selectedDate = dateInput.value;
    if (selectedDate) {
        await updateAvailability(selectedDate);
    }
});
