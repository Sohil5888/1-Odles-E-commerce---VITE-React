import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const UserData = () => {
    const [userData, setUserData] = useState(null)
    const navigate = useNavigate(false)

    const Details = (id) => {
        // console.log('Details');
        navigate('/api/Components/ApiCopmo/userdetails/' + id)
    }
    const Edit = (id) => {
        // console.log('Details');
        navigate('/api/Components/ApiCopmo/edituser/' + id)
    }

    const Delete = (id) => {
        if (window.confirm('Do you really want to delete ??')) {
            fetch('http://localhost:4500/user/' + id ,{
                method : "DELETE"
            }).then((result) => {
                alert ('Removed Sussessfully !!!!')
                window.location.reload();
            }).catch((error) => {
                console.log(error.msg);
            })
        }
    }

    // const Delete = (id) => {
    //     if (window.confirm('DO you really want to delete?')) {
    //         fetch('http://localhost:5000/user/' + id ,{
    //             method : 'DELETE'
    //         }).then((result) => {
    //             alert('Removed Seccesfully!!')
    //             window.location.reload();
    //         }).catch((error) => {
    //             console.log(error.msg);
    //         })
    //     }
    // }

    useEffect(() => {
        fetch('http://localhost:4500/user').then((result) => {
            return result.json().then((resp) => {
                console.log(resp);
                setUserData(resp);
            })
        })
    }, [])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users').then((resp) => {
            console.log(resp.data);
        })
    })

    return (
        <>
            <div className="container mx-auto" >
                <h1 className='text-center text-3xl'>This is UserData page</h1>
                <button className='text-3xl px-12 py-6 bg-yellow-50 border-2 border-black'>
                    <NavLink to='/api/Components/ApiCopmo/newuser'>Add New User</NavLink>
                </button>
                <div>
                    <ul className='flex justify-between mt-9 uppercase text-2xl'>
                        {/* <li>ID</li> */}
                        <li >name</li>
                        <li >email</li>
                        <li >password</li>
                        <li >Action</li>
                    </ul>
                </div>
                {
                    userData && userData.map((item) =>
                        <div>
                            <ul className='flex justify-between mt-9 text-2xl'>
                                {/* <li>{item.ID}</li> */}
                                <li key={item.name}>{item.name}</li>
                                <li key={item.email}>{item.email}</li>
                                <li key={item.password}>{item.password}</li>
                                <li>
                                    <button className='px-3 mx-2 border py-1' onClick={() => Edit(item.id)}>Edit</button>
                                    <button className='px-3 mx-2 border py-1' onClick={() => Delete(item.id)}>Delete</button>
                                    <button className='px-3 mx-2 border py-1' onClick={() => Details(item.id)}>Details</button>
                                </li>
                            </ul>
                        </div>
                    )
                }

            </div>
        </>
    );
}

export default UserData;