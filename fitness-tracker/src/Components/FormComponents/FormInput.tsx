import React from 'react';
import cl from './styles.module.css';

interface IFormInputProps {
  label: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormInput: React.FC<IFormInputProps> = ({ label, type, value, onChange }) => {
  return (
    <div className={cl.formGroup}>
      <label className={cl.label}>{label}:</label>
      <input
        className={cl.input}
        type={type}
        value={value}
        onChange={onChange}
        required
      />
    </div>
  );
};

export default FormInput;