import React, { useState } from 'react';
import Instructions from '../components/Instructions';
import { Stack, Grid, Button, Typography } from '@mui/material';
import { Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import fetchActivity from './api/api';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

const url = 'https://www.boredapi.com/api/activity';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Home() {
  const [type, setType] = React.useState('');
  const [activity, setActivity] = React.useState(null);
  const [error, setError] = React.useState(null);

  const handleChange = (e) => {
    setError(null);
    setType(e.target.value);
  };

  const handleSubmit = () => {
    if (type === '') {
      setError('Choose a type of activity first!');
      console.log(error);
      return error;
    }
    fetchActivity(type)
      .then((activity) => {
        setActivity(activity.activity);
        console.log(activity);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <>
      <Stack spacing={2}>
        <Instructions />

        <Grid container spacing={2}>
          <Grid item xs={12}>
            <FormControl>
              <FormLabel id='demo-radio-buttons-group-label'>
                Type
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby='demo-radio-buttons-group-label'
                defaultValue='recreation'
                name='radio-buttons-group'
                value={type}
                onChange={handleChange}
              >
                <FormControlLabel
                  value='recreational'
                  control={<Radio />}
                  label='recreational'
                />
                <FormControlLabel
                  value='education'
                  control={<Radio />}
                  label='education'
                />
                <FormControlLabel
                  value='social'
                  control={<Radio />}
                  label='social'
                />
                <FormControlLabel
                  value='diy'
                  control={<Radio />}
                  label='diy'
                />
                <FormControlLabel
                  value='charity'
                  control={<Radio />}
                  label='charity'
                />
                <FormControlLabel
                  value='cooking'
                  control={<Radio />}
                  label='cooking'
                />
                <FormControlLabel
                  value='relaxation'
                  control={<Radio />}
                  label='relaxation'
                />
                <FormControlLabel
                  value='music'
                  control={<Radio />}
                  label='music'
                />
                <FormControlLabel
                  value='busywork'
                  control={<Radio />}
                  label='busywork'
                />
              </RadioGroup>
            </FormControl>
          </Grid>
        </Grid>
        <Button variant='outlined' onClick={handleSubmit}>
          Find Activity
        </Button>
        <Typography>Here's your activity:</Typography>
        <Typography>
          {activity ? (
            <p>{activity}</p>
          ) : (
            'Click the "Find Activity" button to see!'
          )}
          {error ? <p>{error}</p> : ''}
        </Typography>
      </Stack>
    </>
  );
}
