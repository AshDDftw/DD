import React, { useState, useEffect } from 'react';
import './BouncingBall.css';

const BouncingBall = ({ onFinish }) => {
  const [showAnimation, setShowAnimation] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAnimation(false);
      onFinish(); // Call the onFinish callback when animation finishes
    }, 2000); // 2 seconds for each bounce (total 4 seconds)

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className={showAnimation ? 'loader' : 'hide'}>
      <div className="ball"></div>
    </div>
  );
};

export default BouncingBall;
