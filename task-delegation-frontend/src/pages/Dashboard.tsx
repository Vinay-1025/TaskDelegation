import { Box, Button, Card, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import AssignmentIcon from "@mui/icons-material/Assignment";

// import Sidebar from '../components/Sidebar'; // Include if you're using it

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <Box
    sx={{
      pl: "80px",
      pt: "80px",
      boxSizing: "border-box",
      backgroundColor: "#f5f5f5",
      width: "100%",
      // minHeight: "100vh",
    }}
  >
    <Typography variant="h5" mb={3} fontWeight="bold">
      Dashboard Overview
    </Typography>

    {/* 👇 Flex container for cards */}
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        // gap: 3,
        alignItems: "stretch", // ensures consistent height if needed
      }}
    >
     <Box
          // key={index}
          sx={{
            // width: {
            //   xs: "100%",   // 1 card per row on mobile
            //   sm: "48%",    // 2 per row on small screens
            //   md: "31.5%",  // 3 per row on medium
            //   lg: "23%",    // 4 per row on large
            // },
            flexGrow: 1,
          }}
        >
          <Card
            onClick={() => navigate("/tasks")}
            sx={{
              p: 3,
              display: "flex",
              flexDirection: "column",
              // justifyContent: "space-between",
              // alignItems: "center",
              cursor: "pointer",
              transition: "all 0.3s ease",
              borderRadius: 3,
              width:"300px",
              height: 250,
              "&:hover": {
                transform: "scale(1.05)",
                boxShadow: 6,
              },
            }}
          >
            <Box textAlign="center">
              <AssignmentIcon  color="primary" />
              <Typography variant="h6" mt={2} fontWeight="bold">
                Tasks
              </Typography>
              <Typography variant="body2" mt={1} color="text.secondary">
                Manage daily assignments and task flow easily
              </Typography>
            </Box>
            <Button variant="contained" sx={{ mt: 2, width: "100%" }}>
              Go to Tasks
            </Button>
          </Card>
        </Box>
 
    </Box>
  </Box>


  );
};

export default Dashboard;
