'use client';
import { Typography } from '@mui/material';
import Image from "next/image"
import { FC } from 'react';

import logo_icon from "@/assets/icons/logos/logo-icon-blue.png"
interface LogoProps {}

const Logo: FC<LogoProps> = () => {
  return (
    <Typography
    component="button"
        >
     <Image src={logo_icon} alt="logo join code" height={46}/>
    </Typography>
  );
};

export default Logo;
