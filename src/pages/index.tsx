import { useRoutes } from 'react-router-dom';
import Index from '../widgets/Layout';
import Leaderboard from './Leaderboard';
import Settings from './Settings';
import NotFound from './NotFound';

function Routing() {
  const Routes = () =>
    useRoutes([
      {
        path: '/',
        element: <Index />,
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
