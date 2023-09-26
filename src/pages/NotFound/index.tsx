import { Box, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        minHeight: '100vh',
        gap: '1.5em',
      }}
    >
      <Typography variant="h1" style={{ color: 'black' }}>
        404
      </Typography>
      <Typography variant="h6" style={{ color: 'black' }}>
        The page you’re looking for doesn’t exist.
      </Typography>
      <Button component={Link} to="/">
        Back Home
      </Button>
    </Box>
  );
}

export default NotFound;
