import cl from './styles.module.css'

interface IProps {
    label: string,
    value: number,
    max: number,
}

const ProgressBar = ({ label, value, max }: IProps) => {
    const percentage = Math.min((value / max) * 100, 100);
    let progressColor;

    if (value >= max) {
        progressColor = '#4caf50';
    } else if (percentage >= 50) {
        progressColor = '#ff9800';
    } else {
        progressColor = '#f44336';
    }

    return (
        <div className={cl.progressBarContainer}>
            <p>{label}: {value}/{max}</p>
            <div className={cl.progressBar}>
                <div
                    className={cl.progress}
                    style={{ width: `${percentage}%`, backgroundColor: progressColor }}
                ></div>
            </div>
            <div className={cl.labelPlaceholder}>
                {value > max ? <span className={cl.exceededLabel}>Goal Exceeded!</span> : null}
            </div>
        </div>
    )
}

export default ProgressBar