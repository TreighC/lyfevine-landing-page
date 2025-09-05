import React from 'react';
import { MoveRight } from 'lucide-react';

const InteractiveAnimatedArrowIcon = ({
  size = 48,
  color = '#08a54f',
  className = ''
}) => {
  const colorValue = color === 'black' ? '#000000' : color === 'white' ? '#FFFFFF' : color;

  return (
    <div 
      className={`inline-flex items-center justify-center ${className}`}
      style={{ width: `${size}px`, height: `${size}px` }}
    >
      <MoveRight 
        size={size * 0.6}
        color={colorValue}
        className="animate-arrowFlow"
        style={{ 
          animationDuration: '1.2s',
          animationTimingFunction: 'ease-in-out'
        }}
      />
    </div>
  );
};

export default InteractiveAnimatedArrowIcon;
