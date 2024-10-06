import { useNavigate } from 'react-router-dom';
import { IDataPoint } from '../../interface';
import cl from './styles.module.css';
import { FaWalking, FaRoute, FaBurn } from 'react-icons/fa';

interface IHeroProps {
    latestData: IDataPoint;
}

const HeroSection = ({ latestData }: IHeroProps) => {
    const navigate = useNavigate();

    const handleViewStats = () => {
        navigate('/stats'); 
    };

    return (
        <div className={cl.hero}>
            <h1>Your Daily Overview</h1>
            <h3>Track your steps, distance, and calories burned today</h3>
            <div className={cl.stats}>
                <div className={cl.statItem}>
                    <FaWalking size={24} />
                    <h2>{latestData.steps}</h2>
                    <p>Steps</p>
                </div>
                <div className={cl.statItem}>
                    <FaRoute size={24} />
                    <h2>{latestData.distance} km</h2>
                    <p>Distance</p>
                </div>
                <div className={cl.statItem}>
                    <FaBurn size={24} />
                    <h2>{latestData.calories} kcal</h2>
                    <p>Calories</p>
                </div>
            </div>
            <button className={cl.ctaButton} onClick={handleViewStats}>
                View Full Stats
            </button>
        </div>
    );
};

export default HeroSection;