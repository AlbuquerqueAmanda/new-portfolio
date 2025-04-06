import React from 'react';
import { Box, Link, Typography } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import DownloadIcon from '@mui/icons-material/Download';

const Footer = () => {
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
      <Link
        href="https://www.linkedin.com/in/amanda-albuquerque-58b489261/"
        target="_blank"
        underline="none"
        sx={{ display: 'flex', alignItems: 'center', color: '#554865', gap: 1 }}
      >
        <LinkedInIcon />
        <Typography variant="body2">LinkedIn</Typography>
      </Link>

      <Link
        href="https://github.com/AlbuquerqueAmanda"
        target="_blank"
        underline="none"
        sx={{ display: 'flex', alignItems: 'center', color: '#554865', gap: 1 }}
      >
        <GitHubIcon />
        <Typography variant="body2">GitHub</Typography>
      </Link>

      <Link
        href="/docs/CV-ITA-AMANDA.pdf"
        download="CV_AmandaAlbuquerque.pdf"
        underline="none"
        sx={{ display: 'flex', alignItems: 'center', color: '#554865', gap: 1 }}
      >
        <DownloadIcon />
        <Typography variant="body2">CV</Typography>
      </Link>
    </Box>
  );
};

export default Footer;
