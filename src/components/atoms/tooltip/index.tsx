'use client';

import React, { FC, ReactNode } from 'react';
interface TooltipProps {
  children: ReactNode;
  text: string;
}

const Tooltip: FC<TooltipProps> = ({ children, text }) => {
  return (
    <div className="group relative w-max flex justify-center align-middle">
      {children}
      <span className="pointer-events-none absolute -top-2 left-12 py-2 px-4 rounded-xl text-gray-500 bg-lightBlue w-max opacity-0 transition-opacity group-hover:opacity-100">
        {text}
      </span>
    </div>
  );
};

export default Tooltip;
