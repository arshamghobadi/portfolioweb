import React from 'react';
import { Box, CircularProgress } from '@mui/material';
const Loading = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        alignContent: 'center',
        height: '800px',
      }}
    >
      <CircularProgress />
    </Box>
  );
};

export default Loading;
