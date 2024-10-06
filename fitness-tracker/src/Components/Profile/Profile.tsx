import React, { useState } from 'react';
import { logIn, logOut } from '../../firebaseAuth'; 
import cl from './styles.module.css'; 
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(() => {
      return localStorage.getItem('isLoggedIn') === 'true';
    });

    const navigate = useNavigate(); 

    const handleLogin = async (e: React.FormEvent) => {
      e.preventDefault();
      try {
        await logIn(email, password);
        localStorage.setItem('isLoggedIn', 'true');
        setIsLoggedIn(true);
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
      alert('Logged out successfully');
    };

    if (isLoggedIn) {
      return (
        <div className={cl.container}>
          <h2 className={cl.heading}>Welcome to Your Profile</h2>
          <button className={cl.ctaButton} onClick={handleLogout}>Logout</button>
        </div>
      );
    }

    return (
      <div className={cl.container}>
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