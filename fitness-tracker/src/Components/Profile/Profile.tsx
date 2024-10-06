import React, { useState, useEffect } from 'react';
import { logIn, logOut } from '../../firebaseAuth'; 
import cl from './styles.module.css'; 
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebaseConfig'; // Import Firebase auth to get user details

const Profile = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(() => {
        return localStorage.getItem('isLoggedIn') === 'true';
    });
    const [userEmail, setUserEmail] = useState<string | null>(null); // To display the user's email after login

    const navigate = useNavigate(); 

    // Fetch user email if logged in
    useEffect(() => {
        if (isLoggedIn && auth.currentUser) {
            setUserEmail(auth.currentUser.email ?? null); // Ensure email is either a string or null
        }
    }, [isLoggedIn]);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await logIn(email, password);
            localStorage.setItem('isLoggedIn', 'true');
            setIsLoggedIn(true);
            setUserEmail(auth.currentUser?.email ?? null); // Set the email or null if undefined
            alert('Logged in successfully');
            navigate('/'); 
        } catch (error) {
            alert('Failed to log in. Please check your credentials.');
        }
    };

    const handleLogout = async () => {
        await logOut();
        localStorage.removeItem('isLoggedIn');
        setIsLoggedIn(false);
        setUserEmail(null);
        alert('Logged out successfully');
    };

    if (isLoggedIn) {
        return (
            <div className={cl.profileContainer}>
                <h2 className={cl.heading}>Welcome to Your Profile</h2>
                {userEmail && <p className={cl.userInfo}>Email: <strong>{userEmail}</strong></p>}
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
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
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