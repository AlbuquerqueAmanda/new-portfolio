import React from 'react';
import { Box, Typography } from '@mui/material';

const AboutSection = ({ title, subtitle, number, image, active }) => {
  return (
    <Box
      sx={{
        flex: 1,
        height: '100vh',
        backgroundColor: active ? '#f7f7f7' : '#fff',
        backgroundImage: image ? `url(${image})` : 'none',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        p: 3,
        borderRight: '1px solid #eee',
      }}
    >
      <Box>
        <Typography variant="h5" sx={{ fontWeight: 'bold', textTransform: 'uppercase' }}>
          {title}
        </Typography>
        <Typography variant="subtitle2" sx={{ mt: 1 }}>
          {subtitle}
        </Typography>
      </Box>
      <Typography
        variant="h2"
        sx={{
          fontSize: '8rem',
          fontWeight: 600,
          color: active ? '#000' : '#d32f2f',
          alignSelf: 'center',
        }}
      >
        {number}
      </Typography>
    </Box>
  );
};

export default AboutSection;
