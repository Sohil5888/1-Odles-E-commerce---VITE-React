import React, { useEffect, useState } from 'react';
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import { NavLink, useNavigate } from 'react-router-dom';



export default function UserData() {
    const [userData, setUserData] = useState(null)
    const navigate = useNavigate(false)

    const Details = (id) => {
        navigate('/api/Compo/APICopmo/userdetails/' + id)
    }

    const Edit = (id) => {
        navigate('/api/Compo/APICopmo/edituser/' + id)
    }

    useEffect(() => {
        fetch('http://localhost:2000/user').then((result) => {
            return result.json().then((resp) => {
                console.log(resp);
                setUserData(resp)
            }).catch((error) => {
                console.log(error.msg);
            })
        })
    }, [])

    return (
        <>
            <div className="container mx-auto">
                <h1 className='text-2xl text-center pt-[50px]'>This is User Data Page</h1>
                <button className='border-2 border-black mx-auto px-5 my-3 py-3 uppercase text-2xl bg-violet-100'>
                    <NavLink to='/api/Compo/APICopmo/newuser'>Add New User</NavLink>
                </button>
            </div>
            <MDBTable align='middle'>
                <MDBTableHead>
                    <tr>
                        {/* <th scope='col'>userId</th>
                        <th scope='col'>ID</th>
                        <th scope='col'>title</th> */}
                        {/* <th scope='col'>Actions</th> */}
                        <th scope='col'>Name</th>
                        <th scope='col'>Email</th>
                        <th scope='col'>Password</th>
                        <th scope='col'>Actions</th>
                    </tr>
                </MDBTableHead>
                <MDBTableBody>
                    {
                        userData && userData.map((item) =>
                            <tr>
                                <td>{item.Name}</td>
                                <td>{item.Email}</td>
                                <td>{item.Password}</td>
                                <td className=''>
                                    <button className='uppercase text-lg border-2 border-black mx-2 px-3' onClick={() => Edit(item.id)}>Edit</button>
                                    <button className='uppercase text-lg border-2 border-black mx-2 px-3'>Delete</button>
                                    <button className='uppercase text-lg border-2 border-black mx-2 px-3' onClick={() => Details(item.id)}>Details</button>
                                </td>
                            </tr>
                        )
                    }


                </MDBTableBody>
            </MDBTable>
        </>
    );
}
