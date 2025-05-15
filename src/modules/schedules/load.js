import { fetchScheduleByDay } from '../../services/fetch-schedule';
import { showSchedules } from './show';
export async function daySchedules(date) {
    const dailySchedules = await fetchScheduleByDay({ date });
    showSchedules({ dailySchedules });
}
