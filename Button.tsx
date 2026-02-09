
import React from 'react';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'accent';
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  onClick, 
  className = '',
  size = 'md'
}) => {
  const baseStyles = "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const sizeStyles = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const variants = {
    primary: "bg-primary text-white hover:bg-primary-dark focus:ring-primary",
    secondary: "border-2 border-primary text-primary hover:bg-primary-light focus:ring-primary",
    accent: "bg-burnt text-white hover:bg-burnt-dark focus:ring-burnt",
  };

  return (
    <button 
      onClick={onClick}
      className={`${baseStyles} ${sizeStyles[size]} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
