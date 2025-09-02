import { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  MenuItem,
} from "@mui/material";

const CreateTeams = () => {
  const [open, setOpen] = useState(true); // auto open when this tab is selected
  const [members, setMembers] = useState<string[]>([]);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
  <DialogTitle>Create a New Team</DialogTitle>
  <DialogContent sx={{ display: "flex", flexDirection: "column", gap: 3, mt: 2 }}>
    {/* Team Name */}
    <TextField sx={{
        mt:"20px"
    }} label="Team Name" fullWidth />

    {/* Description */}
    <TextField label="Description" multiline rows={3} fullWidth />

    {/* Team Lead */}
    <TextField select label="Team Lead" fullWidth>
      <MenuItem value="john">John Doe</MenuItem>
      <MenuItem value="jane">Jane Smith</MenuItem>
      <MenuItem value="ravi">Ravi Kumar</MenuItem>
    </TextField>

    {/* Members Multi-select */}
    <TextField
  select
  label="Team Members"
  value={members}
  onChange={(e) => setMembers(typeof e.target.value === 'string' ? e.target.value.split(',') : e.target.value)}
  SelectProps={{ multiple: true }}
  fullWidth
>
  <MenuItem value="john">John Doe</MenuItem>
  <MenuItem value="jane">Jane Smith</MenuItem>
  <MenuItem value="ravi">Ravi Kumar</MenuItem>
  <MenuItem value="anu">Anu Priya</MenuItem>
</TextField>


    {/* Optional: Creation Date */}
    <TextField
      type="date"
      label="Creation Date"
      InputLabelProps={{ shrink: true }}
      fullWidth
    />
  </DialogContent>

  <DialogActions sx={{ mb: 2 }}>
    <Button onClick={handleClose} color="secondary">Cancel</Button>
    <Button variant="contained" color="primary">Create Team</Button>
  </DialogActions>
</Dialog>

  );
};

export default CreateTeams;
