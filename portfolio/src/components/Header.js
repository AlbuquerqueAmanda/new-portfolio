import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { IconButton, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();

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

  return (
    <Container fluid className="pt-3">
      <Row className="align-items-center justify-content-between">
        <Col>
          <span style={{ fontWeight: 600, fontSize: '1.1rem' }}>
            <span style={{ color: '#aaa' }}>Amanda</span>
            <span style={{ color: '#000' }}>Albuquerque</span>
          </span>
        </Col>
        <Col className="text-end">
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
