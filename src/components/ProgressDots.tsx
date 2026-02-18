import React from "react";

interface ProgressDotsProps {
  current: number;
  total: number;
}

const ProgressDots: React.FC<ProgressDotsProps> = ({ current, total }) => {
  return (
    <div className="flex items-center justify-center gap-2 py-4">
      {Array.from({ length: total }).map((_, i) => (
        <div
          key={i}
          className={`rounded-full transition-all duration-300 ${
            i < current
              ? "w-6 h-2 bg-primary"
              : i === current
              ? "w-4 h-4 bg-primary shadow-soft"
              : "w-2 h-2 bg-border"
          }`}
        />
      ))}
    </div>
  );
};

export default ProgressDots;
