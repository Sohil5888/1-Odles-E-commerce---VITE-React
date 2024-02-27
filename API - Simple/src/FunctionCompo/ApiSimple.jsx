import React, { useEffect, useState } from 'react';

const ApiSimple = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [user, setUser] = useState([])

    function submit() {
        console.log({ name, email, password });
        const data = { name, email, password }

        fetch('http://localhost:3000/user', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })

    }
    useEffect(() => {
        fetch('http://localhost:3000/user').then((result) => {
            result.json().then((response) => {
                console.log(response);
                setUser(response);
            })
        })
    }, [])

    return (
        <>
            <table>
                <tbody className='text-2xl'>
                    <tr>
                        <td>Name</td>
                        <td><input type="text" name="" id="" value={name} onChange={(e) => setName(e.target.value)} /></td>
                    </tr>
                    <tr>
                        <td>Email</td>
                        <td><input type="email" name="" id="" value={email} onChange={(e) => setEmail(e.target.value)} /></td>
                    </tr>
                    <tr>
                        <td>Password</td>
                        <td><input type="password" name="" id="" value={password} onChange={(e) => setPassword(e.target.value)} /></td>
                    </tr>
                    <tr>
                        <td className='border bg-amber-200 text-black px-8 py-2 mt-10'>
                            <button onClick={submit}>Submit</button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div className='border mt-5 py-4'>
                <ul className='flex justify-center gap-32 text-2xl'>
                    <li>Name</li>
                    <li>Email</li>
                    <li>Password</li>
                </ul>
                {
                    user.map((items) =>
                        <ul className='flex justify-center gap-32 text-2xl'>
                            <li key={items.name}>{items.name}</li>
                            <li key={items.email}>{items.email}</li>
                            <li key={items.password}>{items.password}</li>
                        </ul>
                    )
                }
            </div>
        </>
    );
}

export default ApiSimple;