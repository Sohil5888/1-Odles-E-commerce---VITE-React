import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const UserDetails = () => {
    const [userData, setUserData] = useState({})
    const { userID } = useParams()

    useEffect(() => {
        fetch('http://localhost:4500/user/' + userID).then((result) => {
            return result.json().then((resp) => {
                console.log(resp);
                setUserData(resp);
            })
        })
    }, [])


    return (
        <>
            <div className="container mx-auto">
                <h1 className='text-center text-3xl'>This is UserDetails page</h1>
                {
                    userData &&
                    <div>
                        <ul className='mt-9 text-2xl'>
                            <li >Id = {userData.id}</li>
                            <li >Name = {userData.name}</li>
                            <li >Email = {userData.email}</li>
                            <li >Password = {userData.password}</li>
                        </ul>
                    </div>

                }
            </div>
        </>
    );
}

export default UserDetails;