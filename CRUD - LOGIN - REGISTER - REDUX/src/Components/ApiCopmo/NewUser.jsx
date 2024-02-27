import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const NewUSer = () => {
    const [id, setId] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate(false)



    const Submit = (event) => {
        event.preventDefault()
        let data1 = { id, name, email, password }
        fetch('http://localhost:4500/user', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data1)
        }).then((result) => {
            return result.json().then((resp) => {
                console.log(resp);
            }).catch((error) => {
                console.log(error.msg);
            })
        })
        setId('')
        setName('')
        setEmail('')
        setPassword('')
        navigate('/api/Components/ApiCopmo/userdata')
    }
return (
    <>
        <div className="container mx-auto ">
            <h1 className='text-center text-3xl mb-10'>This is NewUser page</h1>
            <form action="" method="post" onSubmit={Submit} >
                <input onChange={(e) => setId(e.target.value)} value={id} disabled placeholder='id' className='border-red-100 border-2 rounded-lg items-center my-3 w-3/6 px-3 py-2' type="text" name="" />
                <br />
                <input onChange={(e) => setName(e.target.value)} value={name} placeholder='name' className='border-red-100 border-2 rounded-lg items-center my-3 w-3/6 px-3 py-2' type="text" name="" />
                <br />
                <input onChange={(e) => setEmail(e.target.value)} value={email} placeholder='email' className='border-red-100 border-2 rounded-lg items-center my-3 w-3/6 px-3 py-2' type="email" name="" />
                <br />
                <input onChange={(e) => setPassword(e.target.value)} value={password} placeholder='password' className='border-red-100 border-2 rounded-lg items-center my-3 w-3/6 px-3 py-2' type="password" name="" />
                <br />
                <input type="submit" value="Submit" className='border-red-100 border-2 rounded-lg items-center my-3 w-3/6 px-3 cursor-pointer' />
            </form>
        </div>
    </>
);
}

export default NewUSer;