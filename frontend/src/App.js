import React, { useState } from 'react';
import BouncingBall from './LoadingPage.js/BouncingBall';

const App = () => {
  const [loading, setLoading] = useState(true);

  const handleAnimationFinish = () => {
    setLoading(false);
  };

  return (
    <div className="App">
      {loading ? (
        <BouncingBall onFinish={handleAnimationFinish} />
      ) : (
        <h1>login/register PAGE</h1>
      )}
    </div>
  );
};

export default App;
