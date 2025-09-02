import { useEffect, useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  MenuItem,
  DialogActions,
  Button,
  CircularProgress,
  Typography,
} from '@mui/material';
import axios from '../../api/axios';

interface User {
  _id: string;
  name: string;
  email: string;
  role: string;
}
const CreateTask = () => {
  const [open, setOpen] = useState(true);
  const [users, setUsers] = useState<User[]>([]);
  const [form, setForm] = useState({
    title: '',
    description: '',
    priority: 'medium',
    dueDate: '',
    assignedTo: '',
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState('');

  const token = localStorage.getItem('token');

  const handleClose = () => setOpen(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  

  const fetchUsers = async () => {
    try {
      const res = await axios.get('/api/users/', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUsers(res.data.users);
    } catch (err) {
      console.error('Failed to load users', err);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleSubmit = async () => {
    if (!form.title || !form.assignedTo || !form.dueDate) {
      return setStatus('Please fill all required fields.');
    }

    try {
      setLoading(true);
      await axios.post(
        '/api/tasks/create',
        {
          title: form.title,
          description: form.description,
          priority: form.priority,
          dueDate: form.dueDate,
          assignedTo: form.assignedTo,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setStatus('Task created successfully!');
      setForm({ title: '', description: '', priority: 'medium', dueDate: '', assignedTo: '' });
    } catch (err) {
      console.error(err);
      setStatus('Failed to create task');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
      <DialogTitle>Create a New Task</DialogTitle>

      <DialogContent sx={{ display: 'flex', flexDirection: 'column', gap: 4, mt: 2 }}>
        <TextField
          name="title"
          label="Task Title"
          value={form.title}
          onChange={handleChange}
          fullWidth
          required
        />
        <TextField
          name="description"
          label="Description"
          multiline
          rows={4}
          value={form.description}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          name="priority"
          select
          label="Priority"
          value={form.priority}
          onChange={handleChange}
          fullWidth
        >
          <MenuItem value="low">Low</MenuItem>
          <MenuItem value="medium">Medium</MenuItem>
          <MenuItem value="high">High</MenuItem>
        </TextField>
        <TextField
          name="dueDate"
          type="date"
          label="Due Date"
          InputLabelProps={{ shrink: true }}
          value={form.dueDate}
          onChange={handleChange}
          fullWidth
          required
        />
        <TextField
          name="assignedTo"
          select
          label="Assign To"
          value={form.assignedTo}
          onChange={handleChange}
          fullWidth
          required
        >
          {users.map((user) => (
            <MenuItem key={user._id} value={user._id}>
              {user.name} ({user.email})
            </MenuItem>
          ))}
        </TextField>

        {status && (
          <Typography color={status.includes('success') ? 'green' : 'error'}>
            {status}
          </Typography>
        )}
      </DialogContent>

      <DialogActions sx={{ mb: '20px' }}>
        <Button onClick={handleClose} color="secondary">
          Cancel
        </Button>
        <Button variant="contained" color="primary" onClick={handleSubmit} disabled={loading}>
          {loading ? <CircularProgress size={24} /> : 'Create Task'}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CreateTask;
