import React from 'react';
import cl from './styles.module.css'; 

interface IActivity {
    date: string;
    steps: number;
    calories: number;
    distance: number;
}

interface IProps {
    activityData: IActivity[];
}

const ActivityLog: React.FC<IProps> = ({ activityData }) => {
    return (
        <div className={cl.activityLogContainer}>
            <h3>Activity History</h3>
            {activityData.length === 0 ? (
                <p>No activity recorded yet.</p>
            ) : (
                <table className={cl.activityLogTable}>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Steps</th>
                            <th>Calories</th>
                            <th>Distance (km)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {activityData.map((activity, index) => (
                            <tr key={index}>
                                <td>{activity.date}</td>
                                <td>{activity.steps}</td>
                                <td>{activity.calories}</td>
                                <td>{activity.distance}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default ActivityLog;