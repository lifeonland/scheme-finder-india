import React from 'react';
import { Landmark, Search } from 'lucide-react';

interface LogoProps {
  className?: string;
  iconSize?: number;
}

const Logo: React.FC<LogoProps> = ({ className = "w-10 h-10", iconSize = 20 }) => {
  return (
    <div className={`${className} bg-gradient-to-br from-indigo-500 to-violet-600 rounded-full flex items-center justify-center relative overflow-hidden shadow-lg shadow-indigo-500/20 border border-white/10`}>
      {/* Icon */}
      <div className="relative z-10 flex items-center justify-center text-white">
        <Landmark size={iconSize} />
      </div>
    </div>
  );
};

export default Logo;
