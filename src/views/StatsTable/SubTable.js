import React, { useState, useEffect } from 'react';
import axios from 'axios';

import ArrowDownward from '@material-ui/icons/ArrowDownward';
import CircularProgress from '@material-ui/core/CircularProgress';

// core components
import DataTable from 'react-data-table-component';


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
const columns = [
    {
        name: 'City',
        selector: 'city',
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
export default function SubTable(props) {

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
                axios.get('http://www.mocky.io/v2/5e919e233300009200e9cf81'),
            ]);
            setData(response.data.data);
            console.log(response.data.data);
            setFetched(true);
        } catch (err) {
            console.log(err);
        }
    };
    
    return (
        <DataTable
            sortIcon={sortIcon}
            column={columns}
            data={data}
            customStyles={customStyles}
            highlightOnHover
            pointerOnHover
            progressPending={!fetched}
            progressComponent={<Circular />}
        />);
}
