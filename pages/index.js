import * as React from 'react';
import Instructions from '../components/Instructions';
import {
  Card,
  Grid,
  Button,
  Typography,
  Container,
  CardActionArea,
  CardContent,
} from '@mui/material';
import fetchActivity from './api/api';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Box } from '@mui/system';
import { TypeSpecimen } from '@mui/icons-material';

const url = 'https://www.boredapi.com/api/activity';

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
      <Grid container spacing={2} paddingTop={2}>
        <Grid item>
          <Instructions />
        </Grid>

        <Grid item>
          <Card variant='outlined'>
            <CardContent>
              <FormControl>
                <FormLabel
                  id='demo-radio-buttons-group-label'
                  sx={{
                    mr: 2,
                    display: { xs: 'none', md: 'flex' },
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: 'inherit',
                    textDecoration: 'none',
                  }}
                >
                  Choose the Type
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
                    sx={{
                      mr: 2,
                      display: { xs: 'none', md: 'flex' },
                      fontFamily: 'monospace',
                      fontWeight: 700,
                      letterSpacing: '.3rem',
                      color: 'inherit',
                      textDecoration: 'none',
                    }}
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
            </CardContent>
          </Card>
        </Grid>

        <Grid item>
          <Box sx={{ minWidth: 275 }}>
            <Button variant='outlined' onClick={handleSubmit}>
              Find Activity
            </Button>
          </Box>
        </Grid>
        <Grid item>
          <Box sx={{ minWidth: 275 }}>
            <Card>
              <CardActionArea>
                <CardContent>
                  <Typography
                    gutterBottom
                    variant='h5'
                    component='div'
                  >
                    {activity ? (
                      <p>{activity}</p>
                    ) : (
                      'Click the "Find Activity" button to see!'
                    )}
                    {error ? <p>{error}</p> : ''}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
