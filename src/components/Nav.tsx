import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { navigationRoutes } from 'app';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export const Nav = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  return (
    <>
      <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 3 }}>
        {navigationRoutes.map((route) => (
          <NavLink
            key={route.name}
            to={route.slug}
            style={{ textDecoration: 'none' }}
          >
            <Button
              key={route.name}
              color="secondary"
              sx={{ display: 'block' }}
            >
              {route.name}
            </Button>
          </NavLink>
        ))}
      </Box>
      <Box sx={{ display: { xs: 'flex', md: 'none' }, gap: 3 }}>
        <IconButton
          size="large"
          aria-label="menu button"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          color="secondary"
          onClick={handleOpenNavMenu}
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
          sx={{
            display: { xs: 'block', md: 'none' },
          }}
        >
          {navigationRoutes.map((route) => (
            <NavLink
              key={route.name}
              to={route.slug}
              style={{ textDecoration: 'none' }}
            >
              <MenuItem sx={{ padding: '1rem', color: 'secondary.main' }}>
                {route.name}
              </MenuItem>
            </NavLink>
          ))}
        </Menu>
      </Box>
    </>
  );
};
