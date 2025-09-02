import FilterBar from './FilterBar'
import TaskCard from './TaskCard';
import  { useEffect, useState } from 'react';
import axios from '../../api/axios';
import { Box, CircularProgress, Typography } from '@mui/material';
import { Task } from '../../types/task';

const MyTasks = () => {
  const [taskList, setTaskList] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem('token');

  // This compound is delegated tasks assigned to the user

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const res = await axios.get('/api/tasks/my', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setTaskList(res.data.tasks || []);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, [token]);

  return (
    <Box>
      <FilterBar />

      {loading ? (
        <Box display="flex" justifyContent="center" mt={4}>
          <CircularProgress />
        </Box>
      ) : taskList.length === 0 ? (
        <Typography mt={4} textAlign="center">
          No tasks assigned to you.
        </Typography>
      ) : (
        taskList.map((task, index) => (
          <TaskCard
            key={index}
            title={task.title}
            assignee={task.assignedTo?.name || 'Unassigned'}
            status={task.status}
          />
        ))
      )}
    </Box>
  );
}

export default MyTasks
