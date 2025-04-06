import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { IconButton, Menu, MenuItem, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate, useLocation } from 'react-router-dom';

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();
  const location = useLocation();

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleNavigate = (route) => {
    navigate(route);
    handleClose();
  };

  const isHome = location.pathname === '/';

  return (
    <Container fluid className="pt-3">
      <Row className="align-items-center justify-content-between">
        <Col>
          <span style={{ fontWeight: 600, fontSize: '1.1rem' }}>
            <span style={{ color: '#554865' }}>Amanda</span>
            <span style={{ color: '#a2a5d4' }}>Albuquerque</span>
          </span>
        </Col>
        <Col className="text-end d-flex justify-content-end align-items-center gap-2">
          {!isHome && (
            <Button
              variant="outlined"
              size="small"
              onClick={() => navigate('/')}
              sx={{
                fontSize: '0.75rem',
                textTransform: 'none',
                borderRadius: '8px',
                color: '#000',
                borderColor: '#000',
                '&:hover': {
                  borderColor: '#555',
                  backgroundColor: '#f0f0f0',
                },
              }}
            >
              Home
            </Button>
          )}
          <IconButton onClick={handleMenuClick}>
            <MenuIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
          >
            <MenuItem onClick={() => handleNavigate('/about')}>About</MenuItem>
            <MenuItem onClick={() => handleNavigate('/skills')}>Skills</MenuItem>
            <MenuItem onClick={() => handleNavigate('/projects')}>Projects</MenuItem>
          </Menu>
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
