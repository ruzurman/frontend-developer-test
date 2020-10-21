import React from 'react';
import Box from '@material-ui/core/Box';
import { red } from '@material-ui/core/colors';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';

import { DataTable } from '../DataTable/DataTable';

import './DataContainer.css';

export const DataContainerPresenter = ({tableData, errorState, loading, buttonTitle, doFetchData}) => {
    return (
        <div className="DataContainer">
            { tableData && <DataTable tableData={tableData} className="DataContainer-Table" /> }
            <div className="DataContainer-Utility">
                { errorState && <Box color={red} className="DataContainer-Error">We had problems fetching your data. Please try again.</Box> }
                {
                    loading ? <CircularProgress className="DataContainer-Progress" /> : <Button className="DataContainer-Button" variant="contained" color="primary" onClick={doFetchData}>
                        {buttonTitle}
                    </Button>
                }
            </div>
        </div>
    );
};
