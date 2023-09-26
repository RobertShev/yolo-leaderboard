import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Link, useLocation } from 'react-router-dom';
import * as React from 'react';
import { useState } from 'react';
import { observer } from 'mobx-react-lite';
import index from '../../entities/ScoreUser/store';
import ERoutes from '../../shared/enums/ERoutes';

const generateLimitQueryUrl = (limit: number, route: ERoutes): string => {
  return limit !== 10 ? `${route}?limit=${limit}` : route.toString();
};

function TabsNavBar() {
  const location = useLocation();
  const [value, setValue] = useState(location.pathname as ERoutes);

  const handleChange = (_: React.SyntheticEvent, newValue: ERoutes) => {
    setValue(newValue);
  };

  return (
    <Tabs
      sx={{ borderBottom: 1, borderColor: 'divider' }}
      value={value}
      onChange={handleChange}
      aria-label="basic tabs example"
    >
      <Tab
        label="LEADERBOARD"
        component={Link}
        to={generateLimitQueryUrl(index.limit, ERoutes.Leaderboard)}
        value={ERoutes.Leaderboard}
      />
      <Tab
        label="SETTINGS"
        component={Link}
        to={generateLimitQueryUrl(index.limit, ERoutes.Settings)}
        value={ERoutes.Settings}
      />
    </Tabs>
  );
}

export default observer(TabsNavBar);
