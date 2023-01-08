import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import SEO from '../components/seo';

export default function About() {
  return (
    <>
      <SEO pageTitle='About' />
      <Box sx={{ margin: '20px' }}>
        <Typography>Hi my name is Ian!</Typography>
      </Box>
    </>
  );
}
