import { createTheme } from '@mui/material/styles';

const theme = createTheme(
  {
    typography: {
      fontFamily: [
        'Inconsolata',
        'Arial'
      ].join(','),
    },
  },
);

export default theme;