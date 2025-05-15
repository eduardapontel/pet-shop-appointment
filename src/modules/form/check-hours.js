import dayjs from 'dayjs';
import { fetchScheduleByDay } from '../../services/fetch-schedule';

const inputTime = document.getElementById('input-time');
const availabilityError = document.querySelector('#availability-error');

function timeToMinutes(time) {
    const [hours, minutes] = time.split(':').map(Number);
    return hours * 60 + minutes;
}

function minutesToTime(minutes) {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${String(hours).padStart(2, '0')}:${String(mins).padStart(2, '0')}`;
}

export async function getAvailableTimes(input, date) {
    const minTime = input.min;
    const maxTime = input.max;
    const step = parseInt(input.step, 10);

    const availableTimes = [];
    let currentTime = timeToMinutes(minTime);
    const maxMinutes = timeToMinutes(maxTime);

    while (currentTime <= maxMinutes) {
        availableTimes.push(minutesToTime(currentTime));
        currentTime += step / 60;
    }

    const dailySchedules = await fetchScheduleByDay({ date });
    const unavailableHours = dailySchedules.map((schedule) =>
        dayjs(schedule.when).format('HH:mm')
    );

    const isToday = dayjs(date).isSame(dayjs(), 'day');
    const now = dayjs();

    return availableTimes.filter((time) => {
        if (unavailableHours.includes(time)) return false;
        if (isToday) {
            const [h, m] = time.split(':').map(Number);
            const slotTime = dayjs(date).hour(h).minute(m);
            return slotTime.isAfter(now);
        }
        return true;
    });
}

function generateOpeningSlots(times) {
    return times.map((hour) => {
        const [h, m] = hour.split(':').map(Number);
        const dateTime = dayjs(inputTime).hour(h).minute(m).second(0);
        const isHourPast = dateTime.isBefore(dayjs());
        return { hour, available: !isHourPast };
    });
}

function handleTimeSelection(opening) {
    return function () {
        
        const selectedTime = inputTime.value;
        const isAvailable = opening.some(
            ({ hour, available }) => hour === selectedTime && available
        );

        availabilityError.style.display = isAvailable ? 'none' : 'block';
        
    };
}

export async function updateAvailability(date) {
    const availableTimes = await getAvailableTimes(inputTime, date);
    const openingSlots = generateOpeningSlots(availableTimes, date);

    if (availableTimes.length === 0) {
        availabilityError.textContent = 'There are no more time slots available for this day. Please choose another date.';
        availabilityError.style.display = 'block';
        inputTime.value = '';
        inputTime.disabled = true;
        
        return;
    }
    
    availabilityError.style.display = 'none';
    inputTime.disabled = false;
    inputTime.value = availableTimes[0];

    inputTime.onchange = null;
    inputTime.addEventListener('change', handleTimeSelection(openingSlots));
}
