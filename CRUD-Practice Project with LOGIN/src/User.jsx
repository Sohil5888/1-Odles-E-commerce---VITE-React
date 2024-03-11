import React, { useEffect, useState } from 'react'
import { Table } from 'flowbite-react';
import { NavLink, useNavigate } from 'react-router-dom';

const User = () => {
    const [data, setData] = useState([])
    const navigate = useNavigate(false)

    const EditUser = (id) => {
        navigate('/edituser/' + id)
    }

    const userDetail = (id) => {
        navigate('/userdetails/' + id)
    }

    const deleteUser = (id) => {
        if (window.confirm('Do you want to delete it!')) {
            fetch('http://localhost:5000/user/' + id, {
                method: "DELETE"
            }).then((result) => {
                alert('removed successfully')
                window.location.reload()
            }).catch((error) => {
                console.log(error.msg);
            })
        }
    }

    useEffect(() => {
        fetch('http://localhost:5000/user').then((result) => {
            return result.json().then((resp) => {
                console.log(resp);
                setData(resp)
            })
        }).catch((error) => {
            console.log(error.msg);
        })
    }, [])


    return (
        <>
            <div className="container">
                <div className="overflow-x-auto w-[50%] mx-auto my-10 text-left">
                    <button className='bg-blue-400 px-8 py-3 '><NavLink to='/newuser'>Add New User / Register user</NavLink></button>
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
                            
                            data.map((items) =>
                                <Table.Body className="divide-y">
                                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                        <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white" key={items}>
                                            {items.id}
                                        </Table.Cell>
                                        <Table.Cell key={items.name}>{items.name}</Table.Cell>
                                        <Table.Cell key={items.email}>{items.email}</Table.Cell>
                                        <Table.Cell key={items.password}>{items.password}</Table.Cell>
                                        <Table.Cell>
                                            <button className='px-4 py-2 mx-2 bg-green-400' onClick={() => EditUser(items.id)}>Edit</button>
                                            <button className='px-4 py-2 mx-2 bg-yellow-400' onClick={() => userDetail(items.id)}>Detail</button>
                                            <button className='px-4 py-2 mx-2 bg-red-400' onClick={() => deleteUser(items.id)}>Delete</button>
                                        </Table.Cell>


                                    </Table.Row>

                                </Table.Body>
                            )
                        }
                    </Table>
                </div>
            </div>
        </>
    )
}

export default User