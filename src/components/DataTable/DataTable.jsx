import React, {useCallback, useMemo, useState} from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';

import { useSortOrder } from './DataTable.hooks/useSortOrder';
import { prepareData } from '../../utils/prepareData';

import './DataTable.css';

const orders = {
    '-1': 'asc',
    '1': 'desc',
};

export const DataTable = ({ tableData = [] }) => {
    const { sortOrder, changeSortOrder } = useSortOrder();
    const printableData = prepareData(tableData, sortOrder);
    const cols = Object.keys(printableData[0] || {});

    return (<TableContainer className={'DataTable'}>
        <Table>
            <TableHead>
                <TableRow>
                    {
                        cols.map((col) => <TableCell key={col}>
                            { col === 'Date' ? <TableSortLabel
                                active
                                direction={orders[sortOrder]}
                                onClick={changeSortOrder}
                            >
                                {col}
                            </TableSortLabel> : col}
                        </TableCell>)
                    }
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    printableData.map(row => (
                        <TableRow
                            key={row.Date}>
                            {
                                cols.map((col) => <TableCell key={`${col}_${row.Date}`}>{row[col].toString()}</TableCell>)
                            }
                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>
    </TableContainer>);
};
