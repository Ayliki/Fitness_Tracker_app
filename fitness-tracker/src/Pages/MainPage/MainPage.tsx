import HeroSection from "../../Components/HeroSection/HeroSection";
import MotivationalQuote from "../../Components/MotivationalQuote/MotivationalQuote";
import { IDataPoint } from "../../interface";
import cl from './styles.module.css';

interface IProps {
    data: IDataPoint[];
    latestData: IDataPoint;
}

const MainPage = ({latestData }: IProps) => {
    return (
        <div className={cl.mainPage}>
            <HeroSection latestData={latestData} />
            <MotivationalQuote />
        </div>
    );
};

export default MainPage;