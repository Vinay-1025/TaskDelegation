import { Box, IconButton, useTheme } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { useNavigate } from 'react-router-dom';
import PeopleIcon from '@mui/icons-material/People';
import PersonIcon from '@mui/icons-material/Person';



const Sidebar = () => {
    const theme = useTheme();
    const navigate = useNavigate();


  return (
    <Box
  sx={{
    position: 'fixed',
    top: `${theme.mixins.toolbar.minHeight}px`, // below the header
    bottom: 0,
    left: 0,
    width: '64px',
    bgcolor: '#1976d2',
    display: 'flex',
    flexDirection: 'column',
    pt: theme.mixins.toolbar.minHeight,
    alignItems: 'center',
    py: 2,
  }}
>
{/* Top icons */}
<Box sx={{ marginTop: '10px' }} display="flex" flexDirection="column" alignItems="center" gap={3}>
  <IconButton title="Dashboard" sx={{ color: '#fff' }} onClick={() => navigate('/dashboard')}>
    <DashboardIcon />
  </IconButton>

  <IconButton title="Tasks" sx={{ color: '#fff' }} onClick={() => navigate('/dashboard/tasks')}>
    <AssignmentIcon />
  </IconButton>

  <IconButton title="Teams" sx={{ color: '#fff' }} onClick={() => navigate('/dashboard/teams')}>
    <PeopleIcon />
  </IconButton>

  <IconButton title="Users" sx={{ color: '#fff' }} onClick={() => navigate('/dashboard/users')}>
    <PersonIcon />
  </IconButton>
</Box>


  {/* Bottom icon (like Logout) */}

</Box>

  );
};

export default Sidebar;
