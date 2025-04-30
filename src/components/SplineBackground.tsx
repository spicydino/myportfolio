import React from 'react';
import Spline from '@splinetool/react-spline';

const SplineBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10">
      <Spline 
        scene="https://prod.spline.design/ePGYh-YWVZt7NVDI/scene.splinecode"
        className="w-full h-full opacity-50"
      />
      {/* Gradient overlay to ensure text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-300/80 to-dark-300/40" />
    </div>
  );
};

export default SplineBackground;