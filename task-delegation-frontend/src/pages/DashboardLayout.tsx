// components/DashboardLayout.tsx
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';

const DashboardLayout = () => {
  return (
    <>
      <Header />
      <Sidebar />
      <Box 
      sx={{
        // py: 12,
        minHeight: '100vh',
        backgroundColor: '#f5f5f5',
        overflow: 'auto'
      }}>
        <Outlet /> 
      </Box>
    </>
  );
};

export default DashboardLayout;
