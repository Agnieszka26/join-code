'use client';

import { FC, ReactNode, useRef } from 'react';
import { useOnClickOutside } from 'usehooks-ts';
import Button from '../button';
interface MenuProps {
  id: string;
  open: boolean;
  onOpen: () => void;
  children: ReactNode;
  hideOnScreens?: boolean;
  icon: ReactNode;
  onClose: () => void;
}
interface MenuItemProps {
  onClick?: () => void;
  children: ReactNode;
}

export const Menu: FC<MenuProps> = ({
  id,
  open,
  icon,
  onOpen,
  onClose,
  children,
  hideOnScreens,
}) => {
  const ref = useRef(null);
  useOnClickOutside(ref, onClose);
  return (
    <div className={`relative`}>
      <Button
        transparent
        ref={ref}
        text={icon}
        onClick={onOpen}
        className={`${
          hideOnScreens
            ? 'visible block md:invisible md:hidden'
            : 'visible block'
        }`}
      />

      <ul
        ref={ref}
        className={`absolute w-fit border-none overflow-hidden shadow-md rounded-2xl`}
        id={id}
        onClick={onClose}
      >
        {open && children}
      </ul>
    </div>
  );
};
export const MenuItem: FC<MenuItemProps> = ({ onClick, children }) => {
  return (
    <li
      onClick={onClick}
      className={`cursor-pointer px-12 py-4 bg-white  hover:bg-lightBlue`}
    >
      {children}
    </li>
  );
};
