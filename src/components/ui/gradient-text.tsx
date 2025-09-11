import React, { ReactNode } from 'react';

interface GradientTextProps {
  children: ReactNode;
  className?: string;
  colors?: string[];
  animationSpeed?: number;
  showBorder?: boolean;
}

export default function GradientText({
  children,
  className = '',
  colors = ['#ffaa40', '#9c40ff', '#ffaa40'],
  animationSpeed = 8,
  showBorder = false
}: GradientTextProps) {
  const gradientStyle = {
    backgroundImage: `linear-gradient(to right, ${colors.join(', ')})`,
    animationDuration: `${animationSpeed}s`
  };

  return (
    <div
      className={`relative mx-auto flex max-w-fit flex-row items-center justify-center font-bold backdrop-blur transition-shadow duration-500 overflow-hidden cursor-pointer ${showBorder ? 'p-3' : ''} ${className}`}
      style={{
        borderRadius: '2rem'
      }}
    >
      {showBorder && (
        <div
          className="absolute inset-0 bg-cover z-0 pointer-events-none animate-gradient"
          style={{
            ...gradientStyle,
            backgroundSize: '300% 100%',
            borderRadius: '2rem'
          }}
        >
          <div
            className="absolute inset-0 bg-white z-[-1]"
            style={{
              width: 'calc(100% - 6px)',
              height: 'calc(100% - 6px)',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
              borderRadius: 'calc(2rem - 3px)'
            }}
          ></div>
        </div>
      )}
      <div
        className="inline-block relative text-transparent bg-cover animate-gradient"
        style={{
          ...gradientStyle,
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          backgroundSize: '300% 100%',
          zIndex: 2
        }}
      >
        {children}
      </div>
    </div>
  );
}
