'use client'
import { Box,Menu as MenuMUI, Typography, IconButton, MenuItem } from '@mui/material'

import React, { FC, ReactNode } from 'react'
interface MenuProps {
  open: boolean,
   setOpen: (event: React.MouseEvent<HTMLElement>) => void,
  setClose: () => void,
  menuIcon: ReactNode,
  items: {link: string, text: string}[]
  anchorEl: null | HTMLElement;
  hideResponsive?: boolean;
}

const Menu:FC<MenuProps> = ({open, setOpen, setClose, menuIcon, items, anchorEl, hideResponsive}) => {
  return (
    <Box>
    <IconButton
    color="info"
      aria-controls="menu-appbar"
      aria-haspopup="true"
      onClick={setOpen}
     
className={hideResponsive?"visible flex md:invisible md:hidden": "visible flex"}
    >
    {menuIcon}
    </IconButton>
    <MenuMUI
      id="menu-appbar"
     anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}
      open={open}
      onClose={setClose}
className={hideResponsive?"visible flex md:invisible md:hidden": "visible block"}
    >
      {items.map(({link, text}) => (
        <MenuItem key={text+link} onClick={setClose}>
          <Typography textAlign="center">{text}</Typography>
        </MenuItem>
      ))}
    </MenuMUI>
  </Box>
  )
}

export default Menu