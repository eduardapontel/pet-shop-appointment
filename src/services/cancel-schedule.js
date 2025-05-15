import { apiConfig } from './api-config';
import { daySchedules } from '../modules/schedules/load';
export async function cancelSchedule({ id }) {
    try {
        await fetch(`${apiConfig.baseUrl}/schedules/${id}`, {
            method: 'DELETE',
        });
        console.log('Schedule canceled successfully!');
    } catch (error) {
        console.log(error);
        console.log('It was not possible to cancel the schedule');
    }
}
