import { Box, List, ListItemButton, ListItemText } from '@mui/material';
import { useState } from 'react';
import CreateTask from '../components/Tasks/CreateTask';
import AllTasks from '../components/Tasks/AllTasks';
import MyTasks from '../components/Tasks/MyTasks';

const Tasks = () => {
  const [selectedTab, setSelectedTab] = useState('mine');

  return (
    <Box sx={{ display: 'flex', width: '100%', height: '100%' }}>
      {/* Left Menu (fixed) */}
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
          mt: 1,
          // mb: 3,
          p: 2,
          overflowY: 'auto',
        }}
      >
        <List>
          {[
            { key: 'mine', label: 'My Tasks' },
            { key: 'create', label: 'Create Task' },
            { key: 'delegated', label: 'Delegated Tasks' },
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
          marginLeft: '320px', // fixed menu width + 64px left sidebar spacing
          padding: 2,
          flexGrow: 1,
          mt: 9,
          height: 'calc(100vh - 75px)',
          overflowY: 'auto',
          scrollbarWidth: 'none',
          boxSizing: 'border-box',
        }}
      >
        {selectedTab === 'create' && <CreateTask />}
        {selectedTab === 'delegated' && <AllTasks />}
        {selectedTab === 'mine' && <MyTasks />}
      </Box>
    </Box>
  );
};

export default Tasks;
