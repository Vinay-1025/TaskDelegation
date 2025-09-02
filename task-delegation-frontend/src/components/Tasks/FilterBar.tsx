import { Box, TextField, MenuItem, IconButton } from "@mui/material";
import TodayIcon from "@mui/icons-material/Today";
import CalendarViewWeekIcon from "@mui/icons-material/CalendarViewWeek";
import StarIcon from "@mui/icons-material/Star";
import RepeatIcon from "@mui/icons-material/Repeat";

const FilterBar = () => {
  return (
    <Box
      display="flex"
      flexWrap="wrap"
      gap={2}
      alignItems="center"
      justifyContent="flex-start"
      sx={{
        mb: 3,
        backgroundColor: "#fff",
        p: 2,
        borderRadius: 2,
        boxShadow: 2,
      }}
    >
      <TextField
        label="Date"
        type="date"
        InputLabelProps={{ shrink: true }}
        InputProps={{
          startAdornment: (
            <IconButton>
              <TodayIcon />
            </IconButton>
          ),
        }}
      />

      <TextField
        label="Time Frame"
        select
        defaultValue="thisWeek"
        InputProps={{
          startAdornment: (
            <IconButton>
              <CalendarViewWeekIcon />
            </IconButton>
          ),
        }}
        sx={{ minWidth: 150 }}
      >
        <MenuItem value="today">Today</MenuItem>
        <MenuItem value="thisWeek">This Week</MenuItem>
        <MenuItem value="thisMonth">This Month</MenuItem>
      </TextField>

      <TextField
        label="Priority"
        select
        defaultValue=""
        InputProps={{
          startAdornment: (
            <IconButton>
              <StarIcon />
            </IconButton>
          ),
        }}
        sx={{ minWidth: 150 }}
      >
        <MenuItem value="">All</MenuItem>
        <MenuItem value="low">Low</MenuItem>
        <MenuItem value="medium">Medium</MenuItem>
        <MenuItem value="high">High</MenuItem>
      </TextField>

      <TextField
        label="Frequency"
        select
        defaultValue=""
        InputProps={{
          startAdornment: (
            <IconButton>
              <RepeatIcon />
            </IconButton>
          ),
        }}
        sx={{ minWidth: 150 }}
      >
        <MenuItem value="">All</MenuItem>
        <MenuItem value="daily">Daily</MenuItem>
        <MenuItem value="weekly">Weekly</MenuItem>
        <MenuItem value="monthly">Monthly</MenuItem>
      </TextField>
    </Box>
  );
};

export default FilterBar;
