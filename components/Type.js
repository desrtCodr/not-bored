import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { Card, CardContent } from '@mui/material';

const types = [
  'education',
  'recreation',
  'social',
  'diy',
  'charity',
  'cooking',
  'relaxation',
  'music',
  'busywork',
];

export default function Type({ type, handleChange }) {
  return (
    <Card variant='outlined'>
      <CardContent>
        <FormControl>
          <FormLabel
            id='demo-radio-buttons-group-label'
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              // fontFamily: 'monospace',
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
            {types.map((type) => {
              return (
                <FormControlLabel
                  value={type}
                  control={<Radio />}
                  label={type}
                />
              );
            })}
          </RadioGroup>
        </FormControl>
      </CardContent>
    </Card>
  );
}
