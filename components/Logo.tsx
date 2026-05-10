import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "w-8 h-8" }) => {
  return (
    <div className={`${className} bg-[var(--brand-blue)] rounded flex items-center justify-center relative`}>
      {/* Abstract shield/guide shape */}
      <div className="w-5 h-5 border-2 border-white rounded-t-full rounded-b-sm flex items-center justify-center">
        <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
      </div>
    </div>
  );
};

export default Logo;
