export const openingHours = [
    '9:00',
    '10:00',
    '11:00',
    '12:00',
    '13:00',
    '14:00',
    '15:00',
    '16:00',
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
];

const inputTime = document.getElementById('input-time');

inputTime.min = openingHours[0];
inputTime.max = openingHours[openingHours.length - 1];
