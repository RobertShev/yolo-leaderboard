import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import useQuery from '../../shared/hooks/useQuery';
import useSocket from '../../shared/hooks/useSocket';
import { ScoreUser } from '../../entities/ScoreUser/model';
import store from '../../entities/ScoreUser/store';
import Loader from '../../shared/ui/Loader';
import LeaderboardTable from '../../widgets/LeaderboardTable';

const URL = 'ws://127.0.0.1:3050';

function Leaderboard() {
  const { getQueryParam } = useQuery();
  const [isConnected, message] = useSocket<ScoreUser>(URL);

  useEffect(() => {
    const queryLimit = getQueryParam('limit');
    if (queryLimit) store.updateLimit(Number(queryLimit));
  }, []);

  useEffect(() => {
    if (message) store.addScoreUser(message);
  }, [message]);

  if (!isConnected) return <Loader />;

  return (
    <LeaderboardTable
      users={store.scoreUsers}
      removeUser={store.removeScoreUser}
    />
  );
}

export default observer(Leaderboard);
