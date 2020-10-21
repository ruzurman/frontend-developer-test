import React, { useCallback, useEffect, useState } from 'react';

import { DataContainerPresenter } from './DataContainer-Presenter';

export const DataContainer = ({ fetchFunction, buttonTitle }) => {
    const [loading, setLoading] = useState(false);
    const [errorState, setErrorState] = useState(false);
    const [tableData, setTableData] = useState([]);

    const doFetchData = useCallback( () => {
        setLoading(true);
        setErrorState(false);

        fetchFunction().then((data) => {
            setTableData(tableData.concat(data.data));
            setLoading(false);
        }).catch(() => {
            setErrorState(true);
            setLoading(false);
        });
    }, [tableData]);

    useEffect(() => {
        doFetchData();
    }, []);

    return <DataContainerPresenter
        doFetchData={doFetchData}
        loading={loading}
        buttonTitle={buttonTitle}
        errorState={errorState}
        tableData={tableData}
    />
};
