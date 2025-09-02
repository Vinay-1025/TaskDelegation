import { Card, Typography, Box, Chip, IconButton } from "@mui/material";
import DoneIcon from '@mui/icons-material/Done';
import DeleteIcon from '@mui/icons-material/Delete';
import LoopIcon from '@mui/icons-material/Loop';

const TaskCard = ({ title, assignee, status }: { title: string; assignee: string; status: string }) => {
  return (
    <Card
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        p: 2,
        mb: 2,
        boxShadow: 2,
        borderRadius: 2,
      }}
    >
      {/* Left side */}
      <Box>
        <Typography variant="h6" fontWeight="bold">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Assigned to: {assignee}
        </Typography>
      </Box>

      {/* Right side buttons */}
      <Box display="flex" gap={1} alignItems="center">
        {status === "inprogress" && (
          <Chip
            icon={<LoopIcon />}
            label="In Progress"
            color="info"
            variant="outlined"
            sx={{ fontWeight: "bold" }}
          />
        )}
        {status === "completed" && (
          <Chip
            icon={<DoneIcon />}
            label="Completed"
            color="success"
            variant="outlined"
            sx={{ fontWeight: "bold" }}
          />
        )}
        <IconButton color="error" title="Delete Task">
          <DeleteIcon />
        </IconButton>
      </Box>
    </Card>
  );
};

export default TaskCard;