import React, { useState } from 'react';
import { FaWalking, FaBurn, FaRoute } from 'react-icons/fa';
import cl from './styles.module.css';

interface GoalSettingsProps {
    stepGoal: number;
    calorieGoal: number;
    distanceGoal: number;
    setStepGoal: (value: number) => void;
    setCalorieGoal: (value: number) => void;
    setDistanceGoal: (value: number) => void;
}

const GoalSettings: React.FC<GoalSettingsProps> = ({
    stepGoal, calorieGoal, distanceGoal, setStepGoal, setCalorieGoal, setDistanceGoal
}) => {
    const [localStepGoal, setLocalStepGoal] = useState(stepGoal);
    const [localCalorieGoal, setLocalCalorieGoal] = useState(calorieGoal);
    const [localDistanceGoal, setLocalDistanceGoal] = useState(distanceGoal);

    const saveGoals = () => {
        setStepGoal(localStepGoal);
        setCalorieGoal(localCalorieGoal);
        setDistanceGoal(localDistanceGoal);
    };

    const saveButtonDisabled = (
        localStepGoal === stepGoal &&
        localCalorieGoal === calorieGoal &&
        localDistanceGoal === distanceGoal
    );

    return (
        <div className={cl.goalSettingContainer}>
            <h3>Set Your Daily Goals:</h3>
            <div className={cl.goalSetting}>
                <label>
                    <FaWalking className={cl.goalSettingIcon} />
                    Step Goal:
                    <input
                        type="number"
                        value={localStepGoal}
                        onChange={(e) => setLocalStepGoal(parseInt(e.target.value))}
                    />
                </label>
                <label>
                    <FaBurn className={cl.goalSettingIcon} />
                    Calorie Goal:
                    <input
                        type="number"
                        value={localCalorieGoal}
                        onChange={(e) => setLocalCalorieGoal(parseInt(e.target.value))}
                    />
                </label>
                <label>
                    <FaRoute className={cl.goalSettingIcon} />
                    Distance Goal (km):
                    <input
                        type="number"
                        value={localDistanceGoal}
                        onChange={(e) => setLocalDistanceGoal(parseFloat(e.target.value))}
                    />
                </label>
            </div>
            <div className={cl.buttonContainer}>
                <button
                    className={cl.ctaButton}
                    onClick={saveGoals}
                    disabled={saveButtonDisabled}
                >
                    Save Goals
                </button>
            </div>
        </div>
    );
};

export default GoalSettings;