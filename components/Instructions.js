import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const card = (
  <React.Fragment>
    <CardContent
      sx={{
        fontFamily: 'monospace',
        fontWeight: 700,
        letterSpacing: '.3rem',
        color: 'inherit',
        textDecoration: 'none',
      }}
      maxWidth='25%'
    >
      <Typography variant='body1'>
        1. Select the type of activity
      </Typography>
      <Typography variant='body1'>2. Click Find Activity</Typography>
    </CardContent>
  </React.Fragment>
);

export default function Instructions() {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant='outlined'>{card}</Card>
    </Box>
  );
}
