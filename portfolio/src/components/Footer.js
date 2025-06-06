import React, { useState } from 'react';
import { Box, Link as MuiLink, Typography, IconButton, Menu, MenuItem } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import DownloadIcon from '@mui/icons-material/Download';
import LanguageIcon from '@mui/icons-material/Language';
import { useLanguage } from '../context/LanguageContext'; 

const Footer = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const { language, setLanguage } = useLanguage();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (lang) => {
    setAnchorEl(null);
    if (lang) {
      setLanguage(lang);
    }
  };

  const getCvFileName = () => {
    switch (language) {
      case 'pt':
        return '/docs/DEV_FRONTEND_AMANDA_ALBUQUERQUE_BR.pdf';
      case 'it':
        return '/docs/DEV_FRONTEND_AMANDA_ALBUQUERQUE_IT.pdf';
      case 'en':
      default:
        return '/docs/DEV_FRONTEND_AMANDA_ALBUQUERQUE_ENG.pdf';
    }
  };

  return (
    <Box
      component="footer"
      sx={{
        width: '100%',
        py: 4,
        mb: 2,
        px: 3,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 4,
        flexWrap: 'wrap',
        mt: 'auto',
      }}
    >
      <MuiLink
        component="a"
        href="https://www.linkedin.com/in/amanda-albuquerque-58b489261/"
        target="_blank"
        underline="none"
        sx={{ display: 'flex', alignItems: 'center', color: '#554865', gap: 1 }}
      >
        <LinkedInIcon />
        <Typography variant="body2">LinkedIn</Typography>
      </MuiLink>

      <MuiLink
        component="a"
        href="https://github.com/AlbuquerqueAmanda"
        target="_blank"
        underline="none"
        sx={{ display: 'flex', alignItems: 'center', color: '#554865', gap: 1 }}
      >
        <GitHubIcon />
        <Typography variant="body2">GitHub</Typography>
      </MuiLink>

      <MuiLink
        component="a"
        href={getCvFileName()}
        download
        underline="none"
        sx={{ display: 'flex', alignItems: 'center', color: '#554865', gap: 1 }}
      >
        <DownloadIcon />
        <Typography variant="body2">CV</Typography>
      </MuiLink>

      <Box>
        <IconButton
          onClick={handleClick}
          aria-controls={open ? 'language-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          sx={{ display: 'flex', alignItems: 'center', color: '#554865', gap: 1 }}
        >
          <LanguageIcon />
          <Typography variant="body2">Language</Typography>
        </IconButton>
        <Menu
          id="language-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={() => handleClose()}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
        >
          <MenuItem onClick={() => handleClose('pt')}>Portuguese 🇧🇷</MenuItem>
          <MenuItem onClick={() => handleClose('en')}>English 🇺🇸</MenuItem>
          <MenuItem onClick={() => handleClose('it')}>Italian 🇮🇹</MenuItem>
        </Menu>
      </Box>
    </Box>
  );
};

export default Footer;
