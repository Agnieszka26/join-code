'use client';
import { Button } from '@mui/material';
import { useRouter } from 'next/navigation';
import { FC } from 'react';
interface NavbarBtnProps {
  text: string;
  link: string;
}

const NavbarBtn: FC<NavbarBtnProps> = ({ text, link }) => {
  const router = useRouter();
  return (
    <Button
      variant="text"
      color="info"
      className="lowercase"
      onClick={() => router.push(link)}
    >
      {text}
    </Button>
  );
};

export default NavbarBtn;
