import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import Slider from '../../../../../yolo-frontend-task/src/widgets/Slider';
import store from '../../../../../yolo-frontend-task/src/entities/ScoreUser/store';
import useQuery from '../../../../../yolo-frontend-task/src/shared/hooks/useQuery.tsx';

function Settings() {
  const { setQueryParam, clearQueryParam, getQueryParam } = useQuery();

  useEffect(() => {
    const queryLimit = getQueryParam('limit');
    if (queryLimit) store.updateLimit(Number(queryLimit));
  }, []);

  const handleSearchValue = (value: number) => {
    if (value === 10) clearQueryParam();
    if (value !== 10) setQueryParam('limit', value.toString());
    store.updateLimit(value);
  };

  return (
    <Slider value={store.limit} title="Limit" setValue={handleSearchValue} />
  );
}

export default observer(Settings);
