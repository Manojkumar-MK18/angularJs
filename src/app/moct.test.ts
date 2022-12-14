export interface TasksProsp {
    id: number
    text: string
    day: string
    remainder: boolean
}

export const Tasks: TasksProsp[] = [
    {
        id: 1,
        text: 'Doctor Appoinment',
        day: 'May 5th at 2.30pm',
        remainder: true,
    },
    {
        id: 2,
        text: 'School Metting',
        day: 'May 6th at 3.30pm',
        remainder: true,
    },
    {
        id: 3,
        text: 'Family Function',
        day: 'May 7th at 4.30pm',
        remainder: false,
    },
    {
        id: 4,
        text: 'Singing Concert',
        day: 'May 8th at 5.30pm',
        remainder: true,
    },
];

export default Tasks;
