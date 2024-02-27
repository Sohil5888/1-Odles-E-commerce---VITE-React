import React, { useEffect, useState } from 'react';
import {
    MDBContainer,
    MDBInput,
    MDBCheckbox,
    MDBBtn,
    MDBIcon
}
    from 'mdb-react-ui-kit';
import { NavLink, useNavigate } from 'react-router-dom';


const UserLogin = () => {
    const [ userData, setUserData] = useState()
    const [ user, setUser] = useState('')
    const [ password, setPassword] = useState('')
    const navigate = useNavigate()

    const Login = () => {
        console.log("Login");
        fetch('http://localhost:45200/user?name=' + user).then((result) => {
            return result.json().then((resp) => {
                console.log(resp);
                if (resp[0]) {
                    sessionStorage.setItem("name", user)
                    sessionStorage.setItem("role", resp[0].role)
                    if (resp[0].role == 1) {
                        navigate('/login/Compo/LoginCompo/admin')
                    } else {
                        navigate('/about')
                    }
                }else{
                    alert('Invalid user !!!!')
                }
            })
        })
        setUser('')
        setPassword('')
        
    }

    // useEffect (() => {
    // }, [])
    return (
        <>
            <nav>
                <div className="conrtainer mx-auto">
                    {/* <h1 className='text-center text-2xl text-black bg-green-100'>This is Login Page</h1> */}
                </div>
            </nav>
            <MDBContainer className="p-3 my-5 d-flex flex-column w-50">

                <MDBInput value={user} onChange={(e) => setUser(e.target.value)} wrapperClass='mb-4' label='User' id='form1' type='text' />
                <MDBInput value={password} onChange={(e) => setPassword(e.target.value)} wrapperClass='mb-4' label='Password' id='form2' type='password' />



                <MDBBtn className="mb-4" onClick={Login}>Log In</MDBBtn>

                <div className="text-center">
                    <NavLink to='/login/Compo/LoginCompo/userregister'>
                        Register
                    </NavLink>
                </div>

            </MDBContainer>
        </>
    );
}

export default UserLogin;