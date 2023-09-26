import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import LeaderboardTable from '../../../../../yolo-frontend-task/src/widgets/LeaderboardTable';

import store from '../../../../../yolo-frontend-task/src/entities/ScoreUser/store';
import Loader from '../../../../../yolo-frontend-task/src/shared/ui/Loader';
import useQuery from '../../../../../yolo-frontend-task/src/shared/hooks/useQuery.tsx';
import { ScoreUser } from '../../../../../yolo-frontend-task/src/entities/ScoreUser/model';
import useSocket from '../../../../../yolo-frontend-task/src/shared/hooks/useSocket.tsx';

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
