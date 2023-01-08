import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from 'next/link';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar sx={{ color: 'silver' }}>
          <Typography sx={{ flexGrow: 1, margin: '10px' }}>
            <Link href='/' className='nav-link'>
              ianmitchard.com
            </Link>
          </Typography>
          <Typography>
            <Link href='/about' className='nav-link'>
              About
            </Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
