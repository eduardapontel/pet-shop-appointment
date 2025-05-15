import { apiConfig } from './api-config.js';

const modalWrapper = document.querySelector('#modal-wrapper');

export async function newSchedule({ id, clientName, petName, phone, description, when }) {
    try {
        await fetch(`${apiConfig.baseUrl}/schedules`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id, clientName, petName, phone, description, when }),
        });
        console.log('Scheduled successfully!');
        modalWrapper.style.display = 'none';
    } catch (error) {
        console.log(error);
        console.log('Could not be scheduled! Try again later.');
    }
}
