import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const card = (
  <React.Fragment>
    <CardContent>
      <Typography variant='h5' component='div'>
        The app that helps you find something to do
      </Typography>
      <Typography variant='body1'>
        1. Select the type of activity.
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
