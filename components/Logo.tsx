import React from 'react';
import { Landmark, Search } from 'lucide-react';

interface LogoProps {
  className?: string;
  iconSize?: number;
}

const Logo: React.FC<LogoProps> = ({ className = "w-10 h-10", iconSize = 20 }) => {
  return (
    <div className={`${className} bg-premium-gradient rounded-xl flex items-center justify-center relative overflow-hidden group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-premium-primary/20`}>
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-white rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-premium-accent rounded-full blur-xl animate-pulse delay-700"></div>
      </div>
      
      {/* Icon Composition */}
      <div className="relative z-10 flex items-center justify-center">
        <Landmark 
          size={iconSize} 
          className="text-white absolute transition-all duration-500 group-hover:opacity-0 group-hover:scale-50" 
        />
        <Search 
          size={iconSize} 
          className="text-white opacity-0 scale-50 transition-all duration-500 group-hover:opacity-100 group-hover:scale-100" 
        />
      </div>

      {/* Indian Tricolor Accent (Subtle) */}
      <div className="absolute bottom-0 left-0 right-0 h-1 flex">
        <div className="flex-1 bg-[#FF9933]"></div>
        <div className="flex-1 bg-white"></div>
        <div className="flex-1 bg-[#138808]"></div>
      </div>
    </div>
  );
};

export default Logo;
