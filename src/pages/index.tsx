import { useRoutes } from 'react-router-dom';
import Leaderboard from './Leaderboard';
import Settings from './Settings';
import NotFound from './NotFound';
import Layout from '../widgets/Layout';

function Routing() {
  const Routes = () =>
    useRoutes([
      {
        path: '/',
        element: <Layout />,
        children: [
          {
            index: true,
            element: <Leaderboard />,
          },
          {
            path: 'settings',
            element: <Settings />,
          },
        ],
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ]);

  return <Routes />;
}

export default Routing;
