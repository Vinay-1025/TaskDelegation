import { Box, List, ListItemButton, ListItemText } from '@mui/material';
import { useState } from 'react';
import CreateUser from '../components/User/CreateUser.js';
import AllUsers from '../components/User/AllUsers.js';

const UserManagement = () => {
  const [selectedTab, setSelectedTab] = useState('create');

  return (
    <Box sx={{ display: 'flex', width: '100%', height: 'calc(100vh - 64px)' }}>
      {/* Left Sidebar (fixed) */}
      <Box
        sx={{
          position: 'fixed',
          top: 64,
          left: 64,
          bottom: 0,
          width: 260,        
          height: 'calc(100vh - 80px)',
          background: 'linear-gradient(120deg, #0d4c8bff, #274260ff)',
          color: '#fff',
          display: 'flex',
          flexDirection: 'column',
          borderRadius: '0px 20px 20px 0px',
          p: 2,
          mt: 1,
          overflowY: 'auto',
        }}
      >
        <List>
          {[
            { key: 'create', label: 'Create User' },
            { key: 'all', label: 'All Users' },
          ].map((item) => (
            <ListItemButton
              key={item.key}
              selected={selectedTab === item.key}
              onClick={() => setSelectedTab(item.key)}
              sx={{
                borderRadius: 2,
                mb: 1,
                bgcolor:
                  selectedTab === item.key
                    ? 'rgba(255, 255, 255, 0.15)'
                    : 'rgba(255, 255, 255, 0.05)',
                color: selectedTab === item.key ? '#fff' : '#ffffffb9',
                backdropFilter: 'blur(8px)',
                WebkitBackdropFilter: 'blur(8px)',
                '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.2)', transform: 'scale(1.02)' },
                transition: 'all 0.3s ease',
                fontWeight: selectedTab === item.key ? 'bold' : 400,
                px: 2,
                py: 1.5,
              }}
            >
              <ListItemText primary={item.label} primaryTypographyProps={{ fontSize: 16 }} />
            </ListItemButton>
          ))}
        </List>
      </Box>

      {/* Right Content */}
      <Box
        sx={{
          marginLeft: '320px', // fixed menu width + left sidebar spacing
          flexGrow: 1,
          height: 'calc(100vh - 75px)',
          overflowY: 'auto',
          padding: 2,
          mt: 9,
          boxSizing: 'border-box',
        }}
      >
        {selectedTab === 'create' && <CreateUser />}
        {selectedTab === 'all' && <AllUsers />}
      </Box>
    </Box>
  );
};

export default UserManagement;
