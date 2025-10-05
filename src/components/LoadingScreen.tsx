import React from 'react';

interface LoadingScreenProps {
  isLoading: boolean;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ isLoading }) => {
  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 bg-black z-[9999] flex items-center justify-center">
      <style>{`
        @keyframes bop {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.15);
          }
        }
        .bop-animation {
          animation: bop 1.5s ease-in-out infinite;
        }
      `}</style>
      <div className="flex items-center justify-center">
        <img
          src="/favicon.svg"
          alt="PressStart Loading"
          className="w-32 h-32 sm:w-48 sm:h-48 object-contain bop-animation"
        />
      </div>
    </div>
  );
};

export default LoadingScreen;