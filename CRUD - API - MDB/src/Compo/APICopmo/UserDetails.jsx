import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';

const UserDetails = () => {
    const [userData, setUserData] = useState({})
    const { userID } = useParams()

    useEffect(() => {
        fetch('http://localhost:2000/user/' + userID).then((result) => {
            return result.json().then((resp) => {
                console.log(resp);
                setUserData(resp);
            }).catch((error) => {
                console.log(error.msg);
            })
        })
    }, [])

    return (
        <>
            <div className="container mx-auto">
                <h1 className='text-2xl text-center pt-[50px]'>This is User Details Page</h1>
                {/* <button className='border-2 border-black mx-auto px-5 my-3 py-3 uppercase text-2xl bg-violet-100'>
                    <NavLink to='/api/Compo/APICopmo/newuser'>Add New User</NavLink>
                </button> */}
                {
                    userData &&
                    <div className='text-lg text-center'>
                        <ul>
                            <li>Id = {userData.id}</li>
                            <li>Name = {userData.name}</li>
                            <li>Email = {userData.email}</li>
                            <li>Password = {userData.password}</li>
                        </ul>
                    </div>
                }
            </div>
        </>
    );
}

export default UserDetails;