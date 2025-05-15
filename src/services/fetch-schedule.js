import dayjs from 'dayjs';
import { apiConfig } from './api-config';

export async function fetchScheduleByDay({ date }) {
    try {
        const response = await fetch(`${apiConfig.baseUrl}/schedules`);
        const data = await response.json();
        const dailySchedules = data.filter((schedule) => dayjs(date).isSame(schedule.when, 'day'));
        return dailySchedules;
    } catch (error) {
        console.log(error);
        console.log('It was not possible to fetch the schedules of the selected day');
    }
}
