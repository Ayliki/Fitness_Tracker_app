import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import cl from './styles.module.css';
import ErrorMessage from '../FormComponents/ErrorMessage';
import FormInput from '../FormComponents/FormInput';
import PasswordInput from '../FormComponents/PasswordInput';
import { signUp } from '../../firebaseAuth';

const SignUpForm: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const handleSignUp = async (e: React.FormEvent) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setErrorMessage('Passwords do not match');
            return;
        }

        try {
            await signUp(email, password);
            alert('Registered successfully');
            navigate('/profile');
        } catch (error) {
            setErrorMessage('Failed to register. Please try again.');
        }
    };

    return (
        <div className={cl.container}>
            <h2 className={cl.heading}>Sign Up</h2>
            <form onSubmit={handleSignUp} className={cl.form}>
                <FormInput label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <PasswordInput label="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <PasswordInput label="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />

                <ErrorMessage message={errorMessage} />

                <button type="submit" className={cl.ctaButton}>Sign Up</button>
            </form>

            <p className={cl.signUpText}>Already have an account?</p>
            <button className={cl.ctaButton} onClick={() => navigate('/login')}>Go to Login</button>
        </div>
    );
};

export default SignUpForm;