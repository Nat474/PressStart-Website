import React from 'react';

interface LoadingScreenProps {
  isLoading: boolean;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ isLoading }) => {
  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 bg-white z-[9999] flex items-center justify-center">
      <div className="flex flex-col items-center">
        <img
          src="/Logo Animation.gif"
          alt="Random Develop Loading Animation"
          className="w-32 h-32 sm:w-48 sm:h-48 object-contain"
        />
      </div>
    </div>
  );
};

export default LoadingScreen;