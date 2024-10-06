import { useState } from "react";
import Dashboard from "../../Components/Dashboard/Dashboard";
import GoalSettings from "../../Components/GoalSetting/GoalSetting";
import ProgressBar from "../../Components/ProgressBar/ProgressBar";
import { IDataPoint } from "../../interface";
import cl from './styles.module.css'

interface IProps {
  data: IDataPoint[];
  latestData: IDataPoint;
}

const StatsPage = ({ data, latestData }: IProps) => {
  const [stepGoal, setStepGoal] = useState(10000);
  const [calorieGoal, setCalorieGoal] = useState(500);
  const [distanceGoal, setDistanceGoal] = useState(10);

  return (
    <div className={cl.statsPage}>
      <div className={cl.dashboardContainer}>
        <Dashboard data={data} />
      </div>

      <div className={cl.goalsAndProgress}>
        <div className={cl.goalSettingsContainer}>
          <GoalSettings
            stepGoal={stepGoal}
            calorieGoal={calorieGoal}
            distanceGoal={distanceGoal}
            setStepGoal={setStepGoal}
            setCalorieGoal={setCalorieGoal}
            setDistanceGoal={setDistanceGoal}
          />
        </div>

        <div className={cl.progressBarsContainer}>
          <ProgressBar label="Steps" value={latestData.steps} max={stepGoal} />
          <ProgressBar label="Calories" value={latestData.calories} max={calorieGoal} />
          <ProgressBar label="Distance (km)" value={latestData.distance} max={distanceGoal} />
        </div>
      </div>
    </div>
  );
};

export default StatsPage;