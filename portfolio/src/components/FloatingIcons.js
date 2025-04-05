import React from 'react';
import { Box, IconButton } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ShareIcon from '@mui/icons-material/Share';
import LanguageIcon from '@mui/icons-material/Language';
import GitHubIcon from '@mui/icons-material/GitHub';
import SvgIcon from '@mui/material/SvgIcon';

const VercelIcon = (props) => (
  <SvgIcon {...props}>
    <path d="M12 2L24 22H0L12 2Z" />
  </SvgIcon>
);

const FloatingIcons = () => {
  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 20,
        right: 20,
        display: 'flex',
        flexDirection: 'column',
        gap: 1,
        zIndex: 9999,
      }}
    >
      <IconButton
        color="primary"
        aria-label="LinkedIn"
        onClick={() => window.open('https://www.linkedin.com/in/seu-perfil', '_blank')}
      >
        <LinkedInIcon />
      </IconButton>
      <IconButton
        color="primary"
        aria-label="GitHub"
        onClick={() => window.open('https://github.com/seu-usuario', '_blank')}
      >
        <GitHubIcon />
      </IconButton>
      <IconButton
        color="primary"
        aria-label="Vercel"
        onClick={() => window.open('https://vercel.com/seu-usuario', '_blank')}
      >
        <VercelIcon />
      </IconButton>
      <IconButton
        color="primary"
        aria-label="Compartilhar"
        onClick={() => console.log('compartilhar')}
      >
        <ShareIcon />
      </IconButton>
      <IconButton
        color="primary"
        aria-label="Mudar idioma"
        onClick={() => console.log('mudar idioma')}
      >
        <LanguageIcon />
      </IconButton>
    </Box>
  );
};

export default FloatingIcons;
