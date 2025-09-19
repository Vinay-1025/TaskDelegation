import { useState } from "react";
import { TextField, MenuItem } from "@mui/material";

const CreateTeams = () => {
  const [teamName, setTeamName] = useState("");
  const [description, setDescription] = useState("");
  const [teamLead, setTeamLead] = useState("");
  const [members, setMembers] = useState<string[]>([]);
  const [creationDate, setCreationDate] = useState("");

  const handleSubmit = () => {
    // handle form submission here
    console.log({ teamName, description, teamLead, members, creationDate });
    // reset form
    setTeamName("");
    setDescription("");
    setTeamLead("");
    setMembers([]);
    setCreationDate("");
  };

  return (
    <div className="row g-3">
      <h2 style={{color: '#0D4C8B'}}>Create New Team</h2>

      {/* Team Name */}
      <div className="col-md-4">
        <TextField
          label="Team Name"
          value={teamName}
          onChange={(e) => setTeamName(e.target.value)}
          fullWidth
        />
      </div>

      {/* Team Lead */}
      <div className="col-md-4">
        <TextField
          select
          label="Team Lead"
          value={teamLead}
          onChange={(e) => setTeamLead(e.target.value)}
          fullWidth
        >
          <MenuItem value="john">John Doe</MenuItem>
          <MenuItem value="jane">Jane Smith</MenuItem>
          <MenuItem value="ravi">Ravi Kumar</MenuItem>
        </TextField>
      </div>

       <div className="col-md-4">
        <TextField
          type="date"
          label="Creation Date"
          InputLabelProps={{ shrink: true }}
          value={creationDate}
          onChange={(e) => setCreationDate(e.target.value)}
          fullWidth
        />
      </div>

      {/* Description */}
      <div className="col-md-12">
        <TextField
          label="Description"
          multiline
          rows={3}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          fullWidth
        />
      </div>

      {/* Team Members Multi-select */}
      <div className="col-md-12">
        <TextField
          select
          label="Team Members"
          value={members}
          onChange={(e) =>
            setMembers(
              typeof e.target.value === "string"
                ? e.target.value.split(",")
                : e.target.value
            )
          }
          SelectProps={{ multiple: true }}
          fullWidth
        >
          <MenuItem value="john">John Doe</MenuItem>
          <MenuItem value="jane">Jane Smith</MenuItem>
          <MenuItem value="ravi">Ravi Kumar</MenuItem>
          <MenuItem value="anu">Anu Priya</MenuItem>
        </TextField>
      </div>     
      
      <hr/>
      {/* Submit Button */}
      <div className="d-flex justify-content-end">
        
        <button className="button-common" onClick={handleSubmit}>
          Create Team
        </button>
      </div>
    </div>
  );
};

export default CreateTeams;
