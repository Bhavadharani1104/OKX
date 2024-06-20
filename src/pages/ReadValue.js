import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Table } from 'semantic-ui-react'

export default function Read() {
    const [APIData, setAPIData] = useState([]);
    useEffect(() => {
        axios.get(`https://666fc1bd0900b5f87248202e.mockapi.io/login`)
            .then((response) => {
                setAPIData(response.data);
            })
    }, [])

    const getData = () => {
        axios.get(`https://666fc1bd0900b5f87248202e.mockapi.io/login`)
            .then((getData) => {
                 setAPIData(getData.data);
             })
    }

    const setData = (data) => {
        let { id, email, password } = data;
        localStorage.setItem('ID', id);
        localStorage.setItem('Email', email);
        localStorage.setItem('Password', password);

    }

    const onDelete = (id) => {
        axios.delete(`https://666fc1bd0900b5f87248202e.mockapi.io/login/${id}`)
            .then(() => {
                getData();
            })
    }
    return (
        <div>
            <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Id</Table.HeaderCell>
                        <Table.HeaderCell>Email</Table.HeaderCell>
                        <Table.HeaderCell>Password</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {APIData.map((data) => {
                        return (
                            <Table.Row>
                                <Table.Cell>{data.id}</Table.Cell>
                                <Table.Cell>{data.email}</Table.Cell>
                                <Table.Cell>{data.password}</Table.Cell>
                                <Table.Cell><Link to="/update"><button onClick={() => setData(data)} width='200px'>Update</button></Link></Table.Cell>
                                <Table.Cell><button onClick={() => onDelete(data.id)} width='200px'>Delete</button></Table.Cell>
                            </Table.Row>
                        )
                    })}
                </Table.Body>
            </Table>

        </div>
    )
}