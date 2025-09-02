import * as Yup from "yup";

import { Box, Button, TextField, Typography, Paper } from "@mui/material";
import logo from "../assets/accelyzei-logo.png";
import { motion } from "framer-motion";
import GoogleIcon from "../assets/google-original.svg";
import GitIcon from "../assets/github-original.svg";
import { Formik } from "formik";
import { useNavigate } from "react-router-dom";
import { AxiosError } from "axios";
import axios from "../api/axios";
import { useState } from "react";

const LoginSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Password too short")
    .required("Password is required"),
});
const LoginPage = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background:
          "radial-gradient(circle at center, #2a5298 0%, #1e3c72 100%)",

        p: 2,
        boxSizing: "border-box",
      }}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <Paper
          elevation={6}
          sx={{
            p: 5, // increased padding inside the paper
            // width: "100%",
            maxWidth: 430, // slightly wider
            borderRadius: 3,
            boxShadow: "0 8px 16px rgba(0,0,0,0.1)",
          }}
        >
          <Box display="flex" justifyContent="center" mb={2}>
            <img src={logo} alt="Company Logo" style={{ height: 60 }} />
          </Box>

          {/* Animated Welcome */}
          <Box textAlign="center" mb={4}>
            {/* Animated waving emoji */}

            {/* Gradient animated text */}
            <Box sx={{ display: "flex", gap: 2, justifyContent: "center" }}>
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                <Typography
                  variant="h4"
                  fontWeight="bold"
                  sx={{
                    background: "linear-gradient(90deg, #1e3c72, #2a5298)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    fontFamily: "'Inter', sans-serif",
                  }}
                >
                  Welcome Back
                </Typography>
              </motion.div>
              <motion.span
                initial={{ rotate: 0 }}
                animate={{ rotate: [0, 20, 0] }}
                transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
                style={{
                  display: "inline-block",
                  fontSize: "2rem",
                  marginBottom: 8,
                }}
              >
                👋
              </motion.span>
            </Box>
          </Box>

          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={LoginSchema}
            onSubmit={async (values, { setSubmitting, setErrors }) => {
              setLoading(true);
              try {
                const response = await axios.post("/api/auth/login", {
                  email: values.email,
                  password: values.password,
                });

                const token = response.data.token;
                localStorage.setItem("token", token);
                navigate("/dashboard");
              } catch (error) {
                const err = error as AxiosError;

                if (err.response && err.response.data) {
                  const message =
                    (err.response.data as any).message || "Login failed";
                  setErrors({ password: message });
                } else {
                  setErrors({ password: "Something went wrong. Try again." });
                }
              } finally {
                setLoading(false);
                setSubmitting(false);
              }
            }}
          >
            {({ handleChange, handleSubmit, values, errors, touched }) => (
              <form onSubmit={handleSubmit}>
                <Box display="flex" flexDirection="column" gap={3}>
                  <TextField
                    label="Email Address"
                    name="email"
                    variant="outlined"
                    type="email"
                    fullWidth
                    value={values.email}
                    onChange={handleChange}
                    error={touched.email && Boolean(errors.email)}
                    helperText={touched.email && errors.email}
                  />

                  <TextField
                    label="Password"
                    name="password"
                    variant="outlined"
                    type="password"
                    fullWidth
                    value={values.password}
                    onChange={handleChange}
                    error={touched.password && Boolean(errors.password)}
                    helperText={touched.password && errors.password}
                  />

                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    type="submit"
                    disabled={loading}
                    sx={{
                      textTransform: "none",
                      fontWeight: "bold",
                      borderRadius: 2,
                      py: 1.5,
                    }}
                  >
                    {loading ? "Signing In..." : "Sign In"}
                  </Button>
                  <Box display="flex" justifyContent="center" gap={2}>
                    <Button
                      fullWidth
                      variant="outlined"
                      startIcon={<img src={GoogleIcon} height="20" />}
                    >
                      Sign in with Google
                    </Button>
                    <Button
                      fullWidth
                      variant="outlined"
                      startIcon={<img src={GitIcon} height="20" />}
                    >
                      Sign in with Git
                    </Button>
                  </Box>

                  <Typography
                    variant="body2"
                    textAlign="center"
                    mt={1}
                    color="text.secondary"
                  >
                    Forgot your password?
                  </Typography>
                </Box>
              </form>
            )}
          </Formik>
        </Paper>
      </motion.div>
    </Box>
  );
};

export default LoginPage;
