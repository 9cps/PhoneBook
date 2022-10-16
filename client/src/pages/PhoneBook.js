import React from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react';
import { FaEdit } from "react-icons/fa";
import { ImBin } from "react-icons/im";
import IconButton from '@mui/material/IconButton';
import { DataGrid } from '@mui/x-data-grid';
import AddFriends from './AddFriends';
import Box from '@mui/material/Box';
//import { useHistory } from 'react-router-dom'


function PhoneBook() {

    const style = {
        bgcolor: 'background.paper',
        height: 371,
        borderRadius: 1
        // border: '2px solid #000',
    };

    const [listFriends, setListFriends] = useState([]);
    //let history = useHistory();

    useEffect(() => {
        axios.get('http://localhost:3001/Friends').then((resp) => {
            const filter_obj = resp.data.filter(i => i.status_delete === false);
            console.log(filter_obj);
            setListFriends(filter_obj);
        });
    }, []);

    const getGender = (gender) => {
        return gender === 1 ? 'Male' : "Female";
    }

    const redirectToEdit = (id) => {
        window.location.href = `/EditFriends/${id}`;
    };

    const processDelete = (reqid) => {
        if (window.confirm('Delete this friend?')) {
            const value = {
                id: reqid,
                status_delete: true,
            }

            axios.put('http://localhost:3001/Friends/Delete', value).then((resp) => {
                console.log(value);
                //setOpenAlert(true);
                // setTimeout(() => {
                //     window.location.reload(false);
                // }, 5000)
            });
        }
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'first_name', headerName: 'First name', flex: 1 },
        { field: 'last_name', headerName: 'Last name', flex: 1 },
        { field: 'phone_number', headerName: 'Phone number', flex: 1 },
        { field: 'age', headerName: 'Age', type: 'number', width: 100 },
        {
            field: 'sex', headerName: 'Gender', flex: 1, valueGetter: (params) =>
                `${getGender(params.row.sex) || ''}`
        },
        { field: 'position', headerName: 'Position', flex: 1 },
        { field: 'status', headerName: 'Status', type: 'boolean', width: 100 },
        {
            field: 'action', headerName: 'Tools', flex: 1, type: 'boolean', renderCell: (params) => {
                const onClick = (e) => {
                    e.stopPropagation(); // don't select this row after clicking

                    return console.log(e);
                };

                return <><IconButton aria-label="edit" color='info' onClick={() => { redirectToEdit(params.row.id) }}>
                    <FaEdit />
                </IconButton>&nbsp;<IconButton aria-label="delete" color="error" onClick={() => { processDelete(params.row.id) }}>
                        <ImBin />
                    </IconButton></>
            }
        },
    ];

    return (
        <div className="box">
            <div className="App"><h1>Friends List</h1></div>
            <div className="jus-end"><AddFriends /></div>
            <div style={{ height: 400, width: '100%', color: 'white', bgcolor: 'background.paper' }}>
                <div style={{ display: 'flex', height: '100%', bgcolor: 'background.paper' }}>
                    <div style={{ flexGrow: 1, bgcolor: 'background.paper' }}>
                        <Box sx={style}>
                            <DataGrid
                                rows={listFriends}
                                columns={columns}
                                pageSize={5}
                                rowsPerPageOptions={[5]}
                            />
                        </Box>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PhoneBook