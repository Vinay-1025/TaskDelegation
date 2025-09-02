import { Box, Button, Card, Grid, Typography } from "@mui/material";

const AllTeams = () => {
  const teams = [
    {
      id: 1,
      name: "Frontend Devs",
      description: "React & Angular specialists",
      members: ["John", "Jane", "Alex"],
    },
    {
      id: 2,
      name: "Backend Ninjas",
      description: "Node, Django, and Java experts",
      members: ["Ravi", "Anu"],
    },
  ];

  return (
    <Box sx={{ p: 3 }}>
      <Grid container spacing={3}>
        {teams.map((team) => (
          <Box
          key={team.id}
          sx={{
            width: {
              xs: '100%',       // Full width on extra small screens
              sm: '48%',         // Half width on small screens
              md: '31%',         // 3 columns on medium and up
            },
            marginBottom: 3,
          }}
        >
          <Card sx={{ p: 3, borderRadius: 2, boxShadow: 3 }}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              {team.name}
            </Typography>
        
            <Typography variant="body2" color="text.secondary" gutterBottom>
              {team.description}
            </Typography>
        
            <Typography variant="caption" color="primary">
              {team.members.length} members
            </Typography>
        
            <Box display="flex" justifyContent="flex-end" mt={2} gap={1}>
              <Button size="small" variant="outlined" color="primary">
                Edit
              </Button>
              <Button size="small" variant="outlined" color="error">
                Delete
              </Button>
            </Box>
          </Card>
        </Box>
        
        ))}
      </Grid>
    </Box>
  );
};

export default AllTeams;
