import React from 'react';
import { Box, Tooltip, Typography, Paper } from '@mui/material';
import { SiHtml5, SiCss3, SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiGithub, SiBootstrap, SiMui, SiFigma } from 'react-icons/si';

const iconStyle = {
  fontSize: '2rem',
};

const TechIcons = () => {
    const techItems = [
      { icon: <SiHtml5 style={{ ...iconStyle, color: '#E34F26' }} />, label: 'HTML5' },
      { icon: <SiCss3 style={{ ...iconStyle, color: '#1572B6' }} />, label: 'CSS3' },
      { icon: <SiJavascript style={{ ...iconStyle, color: '#F7DF1E' }} />, label: 'JavaScript' },
      { icon: <SiTypescript style={{ ...iconStyle, color: '#3178C6' }} />, label: 'TypeScript' },
      { icon: <SiReact style={{ ...iconStyle, color: '#61DAFB' }} />, label: 'React.js' },
      { icon: <SiNextdotjs style={{ ...iconStyle, color: '#000000' }} />, label: 'Next.js' },
      { icon: <SiGithub style={{ ...iconStyle, color: '#181717' }} />, label: 'GitHub' },
      { icon: <SiBootstrap style={{ ...iconStyle, color: '#7952B3' }} />, label: 'Bootstrap' },
      { icon: <SiMui style={{ ...iconStyle, color: '#007FFF' }} />, label: 'Material UI' },
      { icon: <SiFigma style={{ ...iconStyle, color: '#F24E1E' }} />, label: 'Figma' },
    ];
  
    return (
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: 2,
          mt: 4,
          px: 2,
          py: 2,
        }}
        style={{ backgroundColor: '#fbf2ff' }}
      >
        {techItems.map((item, index) => (
          <Paper
            key={index}
            elevation={3}
            sx={{
              width: '120px',
              height: '120px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px solid #ccc',
              borderRadius: '12px',
              textAlign: 'center',
              p: 2,
            }}
          >
            <Tooltip title={item.label}>
              <span>{item.icon}</span>
            </Tooltip>
            <Typography variant="body2" sx={{ mt: 1, fontWeight: 500 }}>
              {item.label}
            </Typography>
          </Paper>
        ))}
      </Box>
    );
  };
  
  export default TechIcons;