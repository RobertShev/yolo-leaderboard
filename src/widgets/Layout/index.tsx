import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import TabsNavBar from '../TabsNavBar';

function Layout() {
  return (
    <Box sx={{ maxWidth: '50em', margin: 'auto' }}>
      <TabsNavBar />
      <Box sx={{ p: '2em 1.5em 0' }}>
        <Outlet />
      </Box>
    </Box>
  );
}

export default Layout;
