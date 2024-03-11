import React, { useEffect, useState } from 'react'
import { Button, Card, Checkbox, Label, TextInput } from 'flowbite-react';
import { NavLink, useNavigate } from 'react-router-dom';
import User from './User';

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate(false)

    useEffect(() => {
        sessionStorage.clear()
    }, [])

    const login = (event) => {
        event.preventDefault()
        fetch('http://localhost:5000/user?email=' + email && 'http://localhost:5000/user?password=' + password).then((result) => {
            return result.json().then((resp) => {
                console.log(resp);
                if (resp[0]) {
                    sessionStorage.setItem('email', email)
                    sessionStorage.setItem('role', resp[0].role)
                    if (resp[0].role == 1) {
                        navigate('/user')
                    } else {
                        navigate('/home')
                    }
                } else {
                    alert('Invalid username or password!')
                }
            })
        }).catch((error) => {
            console.log(error.msg);
        })
    }

    return (
        <div className="container mx-auto w-2/12 my-14">
            <Card className="max-w-sm">
                <form className="flex flex-col gap-4" onSubmit={login}>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="email1" value="Your email" />
                        </div>
                        <TextInput value={email} onChange={(e) => setEmail(e.target.value)} id="email1" type="email" placeholder="name@flowbite.com" required />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="password1" value="Your password" />
                        </div>
                        <TextInput value={password} onChange={(e) => setPassword(e.target.value)} id="password1" type="password" required />
                    </div>
                    <div className="flex items-center gap-2">
                        <Checkbox id="remember" />
                        <Label htmlFor="remember">Remember me</Label>
                    </div>
                    <Button type="submit">Login</Button>
                    <Button type="submit"><NavLink to='/newuser'>Register New User</NavLink></Button>
                </form>
            </Card>
        </div>
    )
}

export default Login