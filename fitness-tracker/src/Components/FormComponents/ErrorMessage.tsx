import React from 'react';
import cl from './styles.module.css';

interface IErrorMessageProps {
  message: string;
}

const ErrorMessage: React.FC<IErrorMessageProps> = ({ message }) => {
  return message ? <p className={cl.errorMessage}>{message}</p> : null;
};

export default ErrorMessage;