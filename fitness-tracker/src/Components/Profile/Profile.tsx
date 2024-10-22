import React, { useState } from 'react';
import { logIn, logOut } from '../../firebaseAuth'; 
import cl from './styles.module.css'; 
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../store/index';
import { login, logout } from '../../slices/userSlice';

const Profile = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate(); 

    const email = useSelector((state: AppState) => state.user.email);
    const isLoggedIn = useSelector((state: AppState) => state.user.isLoggedIn);

    const [userEmail, setUserEmail] = useState<string>(''); 
    const [password, setPassword] = useState<string>('');

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await logIn(userEmail, password);
            localStorage.setItem('isLoggedIn', 'true');
            dispatch(login(userEmail));
            alert('Logged in successfully');
            navigate('/'); 
        } catch (error) {
            alert('Failed to log in. Please check your credentials.');
        }
    };

    const handleLogout = async () => {
        await logOut();
        localStorage.removeItem('isLoggedIn');
        dispatch(logout())
        alert('Logged out successfully');
    };

    if (isLoggedIn) {
        return (
            <div className={cl.profileContainer}>
                <h2 className={cl.heading}>Welcome to Your Profile</h2>
                {userEmail && <p className={cl.userInfo}>Email: <strong>{email}</strong></p>}
                <button className={cl.ctaButton} onClick={handleLogout}>Logout</button>
            </div>
        );
    }

    return (
        <div className={cl.profileContainer}>
            <h2 className={cl.heading}>Login to Your Profile</h2>
            <form onSubmit={handleLogin} className={cl.form}>
                <div className={cl.formGroup}>
                    <label className={cl.label}>Email:</label>
                    <input
                        className={cl.input}
                        type="email"
                        value={userEmail}
                        onChange={(e) => setUserEmail(e.target.value)}
                        required
                    />
                </div>
                <div className={cl.formGroup}>
                    <label className={cl.label}>Password:</label>
                    <input
                        className={cl.input}
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className={cl.ctaButton}>Login</button>
            </form>

            <p>Don't have an account?</p>
            <button className={cl.ctaButton} onClick={() => navigate('/register')}>Sign Up</button>
        </div>
    );
};

export default Profile;