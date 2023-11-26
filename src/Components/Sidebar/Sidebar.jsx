import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Drawer, CssBaseline } from '@mui/material';
import Menu from '../../Menu';
import Routes from '../../Routes';

const AdminPanel = () => {
  return (
    <Router>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'stretch', minHeight: '100vh' }}>
        <CssBaseline />
        <AppBar position="fixed" sx={{ width: { sm: `calc(100% - ${240}px)` }, ml: { sm: `${240}px` } }}>
          <Toolbar>
            <Typography variant="h6" noWrap component="div">
              Admin Panel
            </Typography>
          </Toolbar>
        </AppBar>
        <div style={{ display: 'flex', flexGrow: 1 }}>
          <Drawer
            variant="permanent"
            sx={{
              width: 240,
              flexShrink: 0,
              [`& .MuiDrawer-paper`]: { width: 240, boxSizing: 'border-box' },
            }}
          >
            <Toolbar />
            <Menu />
          </Drawer>
          <main style={{ flexGrow: 1, padding: '24px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Routes />
           </main>

        </div>
      </div>
    </Router>
  );
};

export default AdminPanel;
