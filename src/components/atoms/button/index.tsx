'use client';

import cn from 'classnames';
import Link from 'next/link';
import { FC, ReactNode, forwardRef } from 'react';

interface ButtonProps {
  text: string | ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  icon?: boolean;
  outlined?: boolean;
  transparent?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ text, onClick, outlined, disabled, className, transparent }, ref) => {
    return (
      <button
        ref={ref}
        onClick={onClick}
        className={cn(
          `font-bold py-2 px-4 rounded w-max bg-blue`,
          {
            'text-blue border border-blue bg-transparent hover:bg-lightBlue ':
              outlined,
          },
          { 'opacity-50 cursor-not-allowed': disabled },
          { 'bg-transparent text-blue hover:bg-lightBlue': transparent },

          className
        )}

        //   `${
        //   outlined
        //     ? 'bg-transparent hover:bg-blue text-blue hover:text-white hover:border-transparent'
        //     : 'bg-blue hover:bg-blue-700 text-white'
        // } ${
        //   disabled && 'opacity-50 cursor-not-allowed'
        // } ${transparent && "bg-transparent hover:bg-lightBlue"}
        // ${className} font-bold py-2 px-4 rounded w-max`}
      >
        {text}
      </button>
    );
  }
);
Button.displayName = 'Button';

export const LinkBtn: FC<ButtonProps & { href: string }> = ({ text, href }) => {
  return (
    <Link
      href={href}
      className={`text-blue text-lg hover:bg-lightBlue hover:rounded py-2 px-4`}
    >
      {text}
    </Link>
  );
};

export default Button;
