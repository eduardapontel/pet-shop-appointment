import { daySchedules } from './load';
import { cancelSchedule } from '../../services/schedule-cancel';

const periods = document.querySelectorAll('.period');
const dateSearch = document.querySelector('#date-search').value;

periods.forEach((period) => {
    period.addEventListener('click', async (e) => {
        if (e.target.classList.contains('cancel-link')) {
            e.preventDefault();
            const item = e.target.closest('.client');
            const { id } = item.dataset;
            if (id) {
                console.log(id);
                
                const confirmation = confirm('Are you sure you want to cancel this schedule?');
                if (confirmation) {
                    await cancelSchedule({ id });
                    daySchedules(dateSearch);
                }
            }
        }
    });
});
