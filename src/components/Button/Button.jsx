import React from 'react';
import styles from './Button.module.css';
import Feedback from '../Feedback/Feedback';
import { useState } from 'react';

const Button = ({ children }) => {
  const [showFeedback, setShowFeedback] = useState(false);

  const handleButtonClick = () => {
      setShowFeedback(true);
  };
  return (
    <div>
    <button className={styles.button} onClick={handleButtonClick}>
      { children }
    </button>
    {showFeedback && <Feedback />}
    </div>
  );
};

export default Button;