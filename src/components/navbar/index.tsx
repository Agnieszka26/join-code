'use client';
import { pages, settings } from '@/helpers/constants';
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Box, Avatar, Container, Toolbar } from '@mui/material';
import React, { FC, useState } from 'react';
import Menu from '../menu';
import Logo from '../logo';
import NavbarBtn from '../navbarBtn';
interface NavbarProps {}

const Navbar: FC<NavbarProps> = () => {
  const [openMenu, setOpenMenu] = useState<null | HTMLElement>(null);
  const [openUser, setOpenUser] = useState<null | HTMLElement>(null);

  return (
    <AppBar position="fixed" className="bg-[#444444]">
      <Container>
        <Toolbar className="flex justify-between align-middle">
          <Logo />
          <Box className="invisible hidden md:visible md:flex w-full justify-center">
            {pages.map(({text, link})=> <NavbarBtn key={text+link} text={text} link={link} /> )}
          </Box>
          <Menu
            hideResponsive
            open={Boolean(openMenu)}
            setOpen={(event: React.MouseEvent<HTMLElement>) =>
              setOpenMenu(event.currentTarget)
            }
            setClose={() => setOpenMenu(null)}
            menuIcon={<MenuIcon />}
            items={pages}
            anchorEl={openMenu}
          />

          <Menu
            open={Boolean(openUser)}
            setOpen={(event: React.MouseEvent<HTMLElement>) =>
              setOpenUser(event.currentTarget)
            }
            setClose={() => setOpenUser(null)}
            menuIcon={<Avatar color='primary' alt="Remy Sharp" />}
            items={settings}
            anchorEl={openUser}
          />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
