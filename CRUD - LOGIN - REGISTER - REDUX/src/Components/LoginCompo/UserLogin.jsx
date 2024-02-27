import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';

const UserLogin = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate(false)
    useEffect(() => {
        sessionStorage.clear()
    })

    const Login = (event) => {
        event.preventDefault()
        fetch('http://localhost:4500/user?email=' + email).then((result) => {
            return result.json().then((resp) => {
                console.log(resp);
                if (resp[0]) {
                    sessionStorage.setItem('email', email)
                    sessionStorage.setItem('role', resp[0].role)
                    if (resp[0].role == 1) {
                        navigate('/admin')
                    }
                    else {
                        navigate('/')
                    }
                }
                else(
                    alert('Invalid User !!!')
                )
            })
        })

    }


    return (
        <>
            <div className="container mx-auto">
                <h1 className='text-center text-3xl mb-10'>This is User Login Page</h1>
                <div>
                    <form action="" method="post" onSubmit={Login}>
                        <input value={email} onChange={(e) => setEmail(e.target.value)} className='border-red-100 border-2 rounded-lg items-center my-3 w-3/6 px-3 py-2' type="email" name=""  placeholder='Email' />
                        <br />
                        <input value={password} onChange={(e) => setPassword(e.target.value)} className='border-red-100 border-2 rounded-lg items-center my-3 w-3/6 px-3 py-2' type="password" name=""  placeholder='password' />
                        <br />
                        <input type="submit" value='Login' name=""  className='border-red-100 border-2 rounded-lg items-center my-3 w-3/6 px-3 py-2' />
                    </form>
                    <button className='border-red-100 border-2 rounded-lg items-center my-3 w-3/6 px-3 py-2'>
                        <NavLink to='/login/Components/LoginCompo/userregister'>
                            Register
                        </NavLink>
                    </button>
                </div>
            </div>
        </>
    );
}

export default UserLogin;