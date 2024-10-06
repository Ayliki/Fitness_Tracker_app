import { Link } from "react-router-dom"
import cl from './styles.module.css'


const Navbar = () => {
    return (
        <nav className={cl.nav}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/stats">Dashboard</Link></li>
            <li><Link to="/activity-log">Activity Log</Link></li>
            <li><Link to="/profile">Profile</Link></li>
        </nav>
    )
}

export default Navbar