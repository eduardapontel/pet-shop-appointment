import { daySchedules } from './load';
import { cancelSchedule } from '../../services/cancel-schedule';

const periods = document.querySelectorAll('.period');
const selectedDate = document.querySelector('#date-search');

periods.forEach((period) => {
    period.addEventListener('click', async (e) => {
        if (e.target.classList.contains('cancel-link')) {
            e.preventDefault();
            const item = e.target.closest('.client');
            const { id } = item.dataset;
            if (id) {
                const confirmation = confirm('Are you sure you want to cancel this schedule?');
                if (confirmation) {
                    await cancelSchedule({ id });
                    daySchedules(selectedDate.value);
                }
            }
        }
    });
});
