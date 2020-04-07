import React, { useState, useEffect } from 'react';

import axios from 'axios';

import CircularProgress from '@material-ui/core/CircularProgress';
import ArrowDownward from '@material-ui/icons/ArrowDownward';

// core components
import DataTable from 'react-data-table-component';

const columns = [
    {
        name: 'State',
        selector: 'state',
        sortable: true,
    },
    {
        name: 'Total Rotis Donated',
        selector: 'donated',
        sortable: true,
    },
    {
        name: 'Active Doners',
        selector: 'doners',
        sortable: true,
    },
    {
        name: 'People Feeded',
        selector: 'donees',
        sortable: true,
    },
];
const customStyles = {    
    headCells: {
        style: {
            background: '#e91e63',
            color: '#ffffff !important',
            fontWeight: '800',
            fontSize: '0.9em',
            '&:hover,&:focus,&:active': {
                color: '#ffffff',
              },
        },
    },
};

const sortIcon = <ArrowDownward />;
const Circular = () => (
    <div style={{ padding: '24px' }}>
        <CircularProgress size={75} />
    </div>
);

export default function StatsTable(props) {

    const [data, setData] = useState([]);
    const [fetched, setFetched] = useState(false);

    useEffect(() => {
        if (fetched === false) {
            getData();
        }
    }, [fetched]);

    const getData = async () => {
        try {
            const [response] = await Promise.all([
                axios.get('http://www.mocky.io/v2/5e85f477300000ca1497b6c5'),
            ]);
            setData(response.data.data);
            setFetched(true);
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <DataTable
            sortIcon={sortIcon}
            title="Donation By States"
            columns={columns}
            data={data}
            progressPending={!fetched}
            progressComponent={<Circular />}
            customStyles={customStyles}
            fixedHeader
            highlightOnHover
            pointerOnHover
        />);
}
