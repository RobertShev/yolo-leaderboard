import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import useQuery from '../../shared/hooks/useQuery';
import store from '../../entities/ScoreUser/store';
import Slider from '../../widgets/Slider';

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
