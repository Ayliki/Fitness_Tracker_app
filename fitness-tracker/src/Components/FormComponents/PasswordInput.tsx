import React from 'react';
import cl from './styles.module.css';

interface IPasswordInputProps {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const PasswordInput: React.FC<IPasswordInputProps> = ({ label, value, onChange }) => {
  return (
    <div className={cl.formGroup}>
      <label className={cl.label}>{label}:</label>
      <input
        className={cl.input}
        type="password"
        value={value}
        onChange={onChange}
        required
      />
    </div>
  );
};

export default PasswordInput;