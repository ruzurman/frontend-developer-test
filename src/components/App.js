import React, { useState, useCallback } from 'react';
import api from '../lib/api';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import { DataContainer } from './DataContainer/DataContainer';
import { TabPanel } from './TabPanel/TabPanel';

const fetchUsersData = async () => {
  const result = await api.getUsersDiff();

  return result;
};

const fetchProjectsData = async () => {
    const result = await api.getProjectsDiff();

    return result;
};

export const App = () => {
    const [currentTab, setCurrentTab] = useState(0);

    const switchTab = useCallback((event, newValue) => {
        setCurrentTab (newValue);
    }, []);

    return (
      <Container className="app" fixed>
        <Box data-testid="app-box" m={2}>
            <AppBar position="static">
                <Tabs value={currentTab} onChange={switchTab}>
                    <Tab label="Users" />
                    <Tab label="Projects" />
                </Tabs>
            </AppBar>
            <TabPanel activeTab={currentTab} index={0}>
                <DataContainer buttonTitle={"Get users"} fetchFunction={fetchUsersData} />
            </TabPanel>
            <TabPanel activeTab={currentTab} index={1}>
                <DataContainer buttonTitle={"Get projects"} fetchFunction={fetchProjectsData} />
            </TabPanel>
        </Box>
      </Container>
    )
};

export default App;
