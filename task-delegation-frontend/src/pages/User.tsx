import { Box, Grid, List, ListItemButton, ListItemText } from '@mui/material';
import { useState } from 'react';
import CreateUser from '../components/User/CreateUser.js';
import AllUsers from '../components/User/AllUsers.js';

const UserManagement = () => {
  const [selectedTab, setSelectedTab] = useState('create');
  return (
    <>
    <Box
      sx={{
        pl: '64px',
        pt: '64px',
        overflow: 'auto',
        width: '100%',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Grid container sx={{ minHeight: 'calc(100vh - 64px)', width: '100%' }}>
        {/* Sidebar */}
        <Box
          sx={{
            background: 'linear-gradient(135deg, #1565c0, #1976d2)',
            padding: 2,
            display: 'flex',
            flexDirection: 'column',
            width: { xs: '100%', sm: '300px' },
            color: '#fff',
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
                  color: '#ffffff',
                  backdropFilter: 'blur(8px)',
                  '&:hover': {
                    bgcolor: 'rgba(255, 255, 255, 0.2)',
                    transform: 'scale(1.02)',
                  },
                  transition: 'all 0.3s ease',
                  fontWeight: selectedTab === item.key ? 'bold' : 400,
                  px: 2,
                  py: 1.5,
                }}
              >
                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{ fontSize: 16 }}
                />
              </ListItemButton>
            ))}
          </List>
        </Box>

        {/* Content */}
        <Box
          sx={{
            padding: 2,
            flexGrow: 1,
            width: { xs: '100%', sm: 'calc(100% - 300px)' },
            boxSizing: 'border-box',
          }}
        >
          {selectedTab === 'create' && <CreateUser />}
          {selectedTab === 'all' && <AllUsers />}
        </Box>
      </Grid>
    </Box>
    </>
  );
};

export default UserManagement;
