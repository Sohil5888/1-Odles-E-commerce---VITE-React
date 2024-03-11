import React, { useState } from 'react'
import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import { NavLink, useNavigate } from 'react-router-dom';


const NewUser = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate(false)
    const newUser = (event) => {
        event.preventDefault()
        let userData = { name, email, password, role : 2 }
        fetch('http://localhost:5000/user', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userData)
        }).then((result) => {
            return result.json().then((resp) => {
                console.log(resp);
            })
        }).catch((error) => {
            console.log(error.msg);
        })
        setName('')
        setEmail('')
        setPassword('')
        navigate('/user')
    }

    return (
        <>
            <div className="container mx-auto w-full my-14">
                <form className="flex max-w-md flex-col gap-4" onSubmit={newUser}>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="name1" value="Your name" />
                        </div>
                        <TextInput onChange={(e) => setName(e.target.value)} value={name} id="name1" type="text" placeholder="Your Name" required />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="email1" value="Your email" />
                        </div>
                        <TextInput onChange={(e) => setEmail(e.target.value)} value={email} id="email1" type="email" placeholder="name@flowbite.com" required />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label htmlFor="password1" value="Your password" />
                        </div>
                        <TextInput onChange={(e) => setPassword(e.target.value)} value={password} id="password1" type="password" required />
                    </div>
                    <div className="flex items-center gap-2">
                        <Checkbox id="remember" />
                        <Label htmlFor="remember">Remember me</Label>
                    </div>
                    {/* <input type="submit" value="Submit" /> */}
                    {/* <button></button> */}
                    <button type='submit'>Submit</button>

                </form>
            </div>
        </>
    )
}

export default NewUser