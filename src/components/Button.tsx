import { motion } from 'framer-motion';
import React from 'react';

interface ButtonProps {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, onClick }) => {
  const variants = {
    primary: { scale: 1.1, transition: { duration: 0.2 } },
    secondary: { scale: 1.05, transition: { duration: 0.2 } },
  };

  return (
    <motion.button
      onClick={onClick}
      initial={{ scale: 1 }}
      whileHover={variants[variant]}
      whileTap={{ scale: 0.95 }}
      className={`button ${variant}`}
    >
      {children}
    </motion.button>
  );
};

export default Button;