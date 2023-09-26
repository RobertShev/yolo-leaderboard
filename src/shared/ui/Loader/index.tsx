import { Box, CircularProgress } from '@mui/material';

function Loader() {
  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        p: '4em 2em',
        justifyContent: 'center',
      }}
    >
      <CircularProgress size={80} />
    </Box>
  );
}

export default Loader;
