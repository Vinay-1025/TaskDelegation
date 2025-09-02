import React, { useEffect, useState } from 'react';
import FilterBar from './FilterBar';
import TaskCard from './TaskCard';
import axios from '../../api/axios';
import { Box, CircularProgress, Typography } from '@mui/material';
interface Task {
  _id: string;
  title: string;
  description?: string;
  status: 'pending' | 'in-progress' | 'completed';
  dueDate?: string;
  assignedTo?: {
    _id: string;
    name: string;
    email: string;
  } | null;
}

const AllTasks: React.FC = () => {
  const [taskList, setTaskList] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const res = await axios.get('/tasks/mine', {
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
        taskList.map((task) => (
          <TaskCard
            key={task._id}
            title={task.title}
            assignee={task.assignedTo?.name || 'Unassigned'}
            status={task.status}
          />
        ))
      )}
    </Box>
  );
};

export default AllTasks;
