import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Link, useLocation } from 'react-router-dom';
import * as React from 'react';
import { useState } from 'react';
import { observer } from 'mobx-react-lite';
import index from '../../entities/ScoreUser/store';
import ERoutes from '../../shared/enums/ERoutes';
import { NavBarLink } from './type';

const generateLimitQueryUrl = (limit: number, route: ERoutes): string => {
  return limit !== 10 ? `${route}?limit=${limit}` : route.toString();
};

const Links: NavBarLink[] = [
  {
    label: 'LEADERBOARD',
    route: ERoutes.Leaderboard,
  },
  {
    label: 'SETTINGS',
    route: ERoutes.Settings,
  },
];

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
      {Links.map((link) => (
        <Tab
          key={link.label}
          label={link.label}
          component={Link}
          to={generateLimitQueryUrl(index.limit, link.route)}
          value={link.route}
        />
      ))}
    </Tabs>
  );
}

export default observer(TabsNavBar);
