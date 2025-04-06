import React from 'react';
import { Box, Typography } from '@mui/material';

const AboutSection = ({ title, subtitle, number, isExpanded, onClick, content }) => {
  return (
    <Box
      onClick={onClick}
      sx={{
        width: '100%',
        height: isExpanded ? 'auto' : '20vh',
        overflow: 'hidden',
        backgroundColor: isExpanded ? '#f7f7f7' : '#fff',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: 3,
        borderBottom: '1px solid #eee',
        cursor: 'pointer',
        transition: 'all 0.4s ease-in-out',
      }}
    >
      {/* Titolo e sottotitolo */}
      <Box>
        <Typography
          variant="h5"
          sx={{ fontWeight: 'bold', textTransform: 'uppercase' }}
          style={{ color: '#554865' }}
        >
          {title}
        </Typography>
        <Typography variant="subtitle2" sx={{ mt: 1 }}>
          {subtitle}
        </Typography>

      {/* Contenuto extra visibile solo quando aperto */}
      {isExpanded && (
      <Box sx={{ mt: 2 }}>
        {typeof content === 'string' ? (
        <Typography variant="body1" sx={{ whiteSpace: 'pre-line' }}>
          {content}
        </Typography>
      ) : (
        content
      )}
      </Box>
    )}

      </Box>
    </Box>
  );
};

export default AboutSection;
