import dayjs from 'dayjs';

const morning = document.querySelector('#morning .clients');
const afternoon = document.querySelector('#afternoon .clients');
const night = document.querySelector('#night .clients');

export function showSchedules({ dailySchedules }) {
    try {
        morning.innerHTML = '';
        afternoon.innerHTML = '';
        night.innerHTML = '';

        dailySchedules.forEach((schedule) => {
            const scheduleTime = dayjs(schedule.when).format('HH:mm');
            const period = getPeriod(scheduleTime);

            const clientDiv = document.createElement('div');
            clientDiv.classList.add('client');

            clientDiv.innerHTML = `
                <div class="schedule-info">
                    <p class="hour">${scheduleTime}</p>
                    <div class="names">
                        <strong>${schedule.petName}</strong>
                        <span>/ ${schedule.clientName}</span>
                    </div>
                </div>
                <span class="description">${schedule.description}</span>
                <a class="cancel-link" href="#">Remover agendamento</a>
            `;
            clientDiv.dataset.id = schedule.id;

            period.appendChild(clientDiv);
        });
    } catch (error) {
        console.log('Could not display the schedules.');
        console.log(error);
    }
}

function getPeriod(time) {
    if (time >= '09:00' && time <= '12:00') {
        return morning;
    } else if (time >= '13:00' && time <= '18:00') {
        return afternoon;
    } else if (time >= '19:00' && time <= '21:00') {
        return night;
    }
}
