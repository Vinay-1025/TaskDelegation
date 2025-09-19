import { useEffect, useState } from 'react';
import {
  TextField,
  MenuItem,
  Button,
  CircularProgress,
  Typography,
} from '@mui/material';
import axios from '../../api/axios';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import { color } from 'framer-motion';

interface User {
  _id: string;
  name: string;
  email: string;
  role: string;
}

const CreateTask = () => {
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const fetchUsers = async () => {
    try {
      const res = await axios.get('/api/users/', {
        headers: { Authorization: `Bearer ${token}` },
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
        { ...form },
        { headers: { Authorization: `Bearer ${token}` } }
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
    <div className="container-fluid">
      <h2 style={{color: '#0d4c8b'}}>Create New Task</h2>
      <div className="row g-3">
        <div className="col-md-8">
          <TextField
            name="title"
            label="Task Title"
            value={form.title}
            onChange={handleChange}
            fullWidth
            required
          />
        </div>

        <div className="col-md-4">
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
        </div>

        <div className="col-md-12">
          <TextField
            name="description"
            label="Description"
            multiline
            rows={4}
            value={form.description}
            onChange={handleChange}
            fullWidth
          />
        </div>

        <div className="col-md-4">
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
        </div>

        <div className="col-md-8">
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
        </div>

        <div className="col-md-12">
          {status && (
            <Typography color={status.includes('success') ? 'green' : 'error'}>
              {status}
            </Typography>
          )}
        </div>

        <hr/>

        <div className="d-flex justify-content-end">
          <button
            className='button-common'
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? <CircularProgress size={24} /> : 'Create Task'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateTask;
