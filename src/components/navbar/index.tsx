'use client';

import { pages, settings } from '@/helpers/constants';
import Link from 'next/link';
import { FC, useState } from 'react';
import { PiUserThin, PiListLight, PiFileCodeLight } from 'react-icons/pi';
import { BaseText, Button, LinkBtn, Menu, MenuItem, Tooltip } from '../atoms';

const Navbar: FC = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const [openUser, setOpenUser] = useState<boolean>(false);
  const [user, setUser] = useState<boolean>(true);
  return (
    <div className="flex w-full justify-center align-middle px-36 py-4 border-b border-b-blue">
      <div className="container">
        <nav className="flex w-full md:w-auto justify-between md:align-middle">
          <Tooltip text={'join code'}>
            <Button transparent text={<PiFileCodeLight size={40} />} />
          </Tooltip>
          <div className="invisible hidden md:visible md:flex md:w-full md:justify-center">
            {pages.map(({ text, link }) => (
              <LinkBtn key={text + link} text={text} href={link} />
            ))}
          </div>
          <Menu
            hideOnScreens
            open={openMenu}
            onOpen={() => setOpenMenu(true)}
            icon={<PiListLight size={40} className="text-blue " />}
            id={'#hamburgerMenu'}
            onClose={() => setOpenMenu(false)}
          >
            {pages.map(({ link, text }) => {
              return (
                <MenuItem key={link + text}>
                  <Link href={link}>
                    <BaseText text={text} />
                  </Link>
                </MenuItem>
              );
            })}
          </Menu>
          {user ? (
            <Menu
              open={openUser}
              onOpen={() => setOpenUser(true)}
              icon={<PiUserThin size={40} className="text-zinc-500 " />}
              id={'#userMenu'}
              onClose={() => setOpenUser(false)}
            >
              {settings.map(({ link, text }) => {
                return (
                  <MenuItem key={link + text}>
                    <Link href={link}>
                      <BaseText text={text} />
                    </Link>
                  </MenuItem>
                );
              })}
            </Menu>
          ) : (
            <div className={'flex gap-2 justify-between align-middle'}>
              <Button text={'Zaloguj się'} outlined />
              <Button
                text={'Zarejestruj się'}
                className="text-white  hover:bg-darkerBlue"
              />
            </div>
          )}
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
