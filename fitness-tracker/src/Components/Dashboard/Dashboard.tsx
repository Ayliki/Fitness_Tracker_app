import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, Title, Tooltip, Legend, BarElement } from 'chart.js';
import { IDataPoint } from '../../interface';
import cl from './styles.module.css';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

interface IProps {
    data: IDataPoint[];
}

const Dashboard = ({ data }: IProps) => {
    const stepsData = {
        labels: data.map((point) => point.date),
        datasets: [
            {
                label: 'Steps',
                data: data.map((point) => point.steps),
                backgroundColor: '#8884d8',
            },
        ],
    };

    const caloriesData = {
        labels: data.map((point) => point.date),
        datasets: [
            {
                label: 'Calories',
                data: data.map((point) => point.calories),
                backgroundColor: '#82ca9d',
            },
        ],
    };

    const distanceData = {
        labels: data.map((point) => point.date),
        datasets: [
            {
                label: 'Distance (km)',
                data: data.map((point) => point.distance),
                backgroundColor: '#ffbb33',
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
            },
            title: {
                display: true,
                text: 'Daily Fitness Overview',
            },
        },
    };

    return (
        <div className={cl.dashboard}>
            <div className={cl.dashboardChart}>
                <h2>Steps</h2>
                <Bar data={stepsData} options={options} />
            </div>

            <div className={cl.dashboardChart}>
                <h2>Calories</h2>
                <Bar data={caloriesData} options={options} />
            </div>

            <div className={cl.dashboardChart}>
                <h2>Distance</h2>
                <Bar data={distanceData} options={options} />
            </div>
        </div>
    );
};

export default Dashboard;