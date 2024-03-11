import React, { useEffect, useState } from 'react'
import { Table } from 'flowbite-react';
import { useParams, NavLink } from 'react-router-dom';

const UserDetails = () => {
    const [data, setData] = useState({})
    const { id } = useParams()

    useEffect(() => {
        fetch('http://localhost:5000/user/' + id).then((result) => {
            return result.json().then((resp) => {
                console.log(resp);
                setData(resp)
            })
        }).catch((error) => {
            console.log(error.msg);
        })
    }, [])


    return (
        <div className="container">
            <div className="overflow-x-auto w-[50%] mx-auto my-10 text-left">
                <button className='bg-blue-400 px-8 py-3 '><NavLink to='/user'>All User</NavLink></button>
                <Table className='my-10 text-xl'>
                    <Table.Head>
                        <Table.HeadCell>Id</Table.HeadCell>
                        <Table.HeadCell>name</Table.HeadCell>
                        {/* <Table.HeadCell>Category</Table.HeadCell> */}
                        <Table.HeadCell>Email</Table.HeadCell>
                        <Table.HeadCell>Password</Table.HeadCell>
                        <Table.HeadCell>Action</Table.HeadCell>
                    </Table.Head>
                    {
                        data &&
                        // data.map((items) =>
                            <Table.Body className="divide-y">
                                <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white" key={data}>
                                        {data.id}
                                    </Table.Cell>
                                    <Table.Cell key={data.name}>{data.name}</Table.Cell>
                                    <Table.Cell key={data.email}>{data.email}</Table.Cell>
                                    <Table.Cell key={data.password}>{data.password}</Table.Cell>
                                    {/* <Table.Cell>
                                        <button className='px-4 py-2 mx-2 bg-green-400' onClick={() => EditUser(data.id)}>Edit</button>
                                        <button className='px-4 py-2 mx-2 bg-yellow-400' onClick={() => userDetail(data.id)}>Detail</button>
                                        <button className='px-4 py-2 mx-2 bg-red-400' onClick={() => deleteUser(data.id)}>Delete</button>
                                    </Table.Cell> */}


                                </Table.Row>

                            </Table.Body>
                        // )
                    }
                </Table>
            </div>
        </div>
    )
}

export default UserDetails