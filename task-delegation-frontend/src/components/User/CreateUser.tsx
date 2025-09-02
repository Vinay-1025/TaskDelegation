import { Box, Button, TextField, MenuItem, Typography } from '@mui/material';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import axios from '../../api/axios';
import { AxiosError } from 'axios';


const CreateUser = () => {
  const token = localStorage.getItem('token');

  return (
    <Box sx={{ maxWidth: 500, margin: 'auto' }}>
      <Typography variant="h5" mb={2} fontWeight="bold">
        Create New User
      </Typography>

      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
          role: 'user',
        }}
        validationSchema={Yup.object({
          name: Yup.string().required('Name is required'),
          email: Yup.string().email('Invalid email').required('Email is required'),
          password: Yup.string().min(6, 'Min 6 characters').required('Password is required'),
          role: Yup.string().oneOf(['user', 'admin'], 'Invalid role'),
        })}
        onSubmit={async (values, { setSubmitting, resetForm, setStatus }) => {
          try {
            const res = await axios.post(
              '/api/users/create',
              values,
              {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              }
            );
            console.log('User created:', res.data); 

            setStatus({ success: 'User created successfully!' });
            resetForm();
          } catch (err) {
            const error = err as AxiosError<{ message: string }>;
            setStatus({ error: error.response?.data?.message || 'Failed to create user' });
          } finally {
            setSubmitting(false);
          }
        }}
      >
        {({ isSubmitting, errors, touched, status, handleChange, values }) => (
          <Form>
            <TextField
              fullWidth
              label="Name"
              name="name"
              margin="normal"
              value={values.name}
              onChange={handleChange}
              error={touched.name && Boolean(errors.name)}
              helperText={touched.name && errors.name}
            />

            <TextField
              fullWidth
              label="Email"
              name="email"
              type="email"
              margin="normal"
              value={values.email}
              onChange={handleChange}
              error={touched.email && Boolean(errors.email)}
              helperText={touched.email && errors.email}
            />

            <TextField
              fullWidth
              label="Password"
              name="password"
              type="password"
              margin="normal"
              value={values.password}
              onChange={handleChange}
              error={touched.password && Boolean(errors.password)}
              helperText={touched.password && errors.password}
            />

            <TextField
              select
              fullWidth
              label="Role"
              name="role"
              margin="normal"
              value={values.role}
              onChange={handleChange}
              error={touched.role && Boolean(errors.role)}
              helperText={touched.role && errors.role}
            >
              <MenuItem value="user">User</MenuItem>
              <MenuItem value="admin">Admin</MenuItem>
            </TextField>

            {status?.error && (
              <Typography color="error" mt={1}>
                {status.error}
              </Typography>
            )}
            {status?.success && (
              <Typography color="green" mt={1}>
                {status.success}
              </Typography>
            )}

            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{ mt: 2 }}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Creating...' : 'Create User'}
            </Button>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default CreateUser;
