import React from 'react';

interface AnimatedArrowProps {
  size?: number;
  color?: string;
  direction?: 'left' | 'right';
  className?: string;
}

const AnimatedArrow: React.FC<AnimatedArrowProps> = ({ 
  size = 24, 
  color = 'white', 
  direction = 'right',
  className = ''
}) => {
  return (
    <div 
      className={`inline-flex items-center justify-center ${className}`}
      style={{ width: `${size}px`, height: `${size}px` }}
    >
      <div className="relative">
        {/* Animated line */}
        <div 
          className={`absolute top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-transparent via-current to-transparent animate-pulse`}
          style={{
            width: `${size * 0.8}px`,
            height: '2px',
            background: `linear-gradient(to right, transparent, ${color}, transparent)`,
            animation: 'arrowFlow 2s ease-in-out infinite'
          }}
        />
        
        {/* Arrow head */}
        <div 
          className="absolute top-1/2 transform -translate-y-1/2"
          style={{
            right: direction === 'right' ? '0px' : 'auto',
            left: direction === 'left' ? '0px' : 'auto',
            width: '0',
            height: '0',
            borderTop: `4px solid transparent`,
            borderBottom: `4px solid transparent`,
            borderLeft: direction === 'right' ? `6px solid ${color}` : 'none',
            borderRight: direction === 'left' ? `6px solid ${color}` : 'none',
            animation: 'arrowBounce 2s ease-in-out infinite'
          }}
        />
      </div>
      
      <style jsx>{`
        @keyframes arrowFlow {
          0%, 100% { 
            opacity: 0.4;
            transform: translateY(-50%) scaleX(0.8);
          }
          50% { 
            opacity: 1;
            transform: translateY(-50%) scaleX(1.2);
          }
        }
        
        @keyframes arrowBounce {
          0%, 100% { 
            transform: translateY(-50%) translateX(0);
          }
          50% { 
            transform: translateY(-50%) translateX(${direction === 'right' ? '4px' : '-4px'});
          }
        }
      `}</style>
    </div>
  );
};

export default AnimatedArrow;
