import { Box, List, ListItemButton, ListItemText } from "@mui/material";
import { useState } from "react";
import MyTasks from "../components/Tasks/MyTasks";
import CreateTeams from "../components/Teams/CreateTeams";
import AllTeams from "../components/Teams/AllTeams";

const Teams = () => {
  const [selectedTab, setSelectedTab] = useState("all");

  return (
    <Box sx={{ display: "flex", width: "100%", height: "calc(100vh - 64px)" }}>
      {/* Left Menu (fixed) */}
      <Box
        sx={{
          position: "fixed",
          top: 64, // below header
          left: 64, // assuming main sidebar width
          bottom: 0,
          height: 'calc(100vh - 80px)',
          width: 260,
          background: 'linear-gradient(120deg, #0d4c8bff, #274260ff)',
          color: "#fff",
          display: "flex",
          flexDirection: "column",
          borderRadius: "0px 20px 20px 0px",
          p: 2,
          mt: 1,
          overflowY: "auto",
        }}
      >
        <List>
          {[
            { key: "all", label: "All Teams" },
            { key: "mine", label: "My Teams" },
            { key: "create", label: "Create Team" },
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
                    ? "rgba(255, 255, 255, 0.15)"
                    : "rgba(255, 255, 255, 0.05)",
                color: selectedTab === item.key ? "#fff" : "#ffffffb9",
                backdropFilter: "blur(8px)",
                WebkitBackdropFilter: "blur(8px)",
                "&:hover": { bgcolor: "rgba(255, 255, 255, 0.2)", transform: "scale(1.02)" },
                transition: "all 0.3s ease",
                fontWeight: selectedTab === item.key ? "bold" : 400,
                px: 2,
                py: 1.5,
              }}
            >
              <ListItemText primary={item.label} />
            </ListItemButton>
          ))}
        </List>
      </Box>

      {/* Right Content */}
      <Box
        sx={{
          marginLeft: "320px", // fixed menu width + 64px spacing
          mt: 9,
          flexGrow: 1,
          height: "calc(100vh - 75px)",
          overflowY: "auto",
          padding: 2,
          boxSizing: "border-box",
        }}
      >
        {selectedTab === "create" && <CreateTeams />}
        {selectedTab === "all" && <AllTeams />}
        {selectedTab === "mine" && <MyTasks />}
      </Box>
    </Box>
  );
};

export default Teams;
