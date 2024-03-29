import * as React from 'react';
import Instructions from '../../components/Instructions';
import {
  Card,
  Grid,
  Button,
  Typography,
  CardActionArea,
  CardContent,
} from '@mui/material';
import fetchActivity from '../api/api';
import Type from '../../components/Type';

const url = 'https://www.boredapi.com/api/activity';

export default function NotBored() {
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
    <div className='container display: grid gap-3'>
      <Instructions />
      <Type type={type} handleChange={handleChange} />
      <Card>
        <CardContent>
          <Button variant='outlined' onClick={handleSubmit}>
            Find Activity
          </Button>
        </CardContent>
      </Card>
      <Card>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant='body1' component='div'>
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
    </div>
  );
}
