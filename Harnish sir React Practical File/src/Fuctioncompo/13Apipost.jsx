import React, { useState , useEffect } from 'react';
import { json } from 'react-router-dom';

const Apipost = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [user , setUser] = useState([])

    function savedata() {
        // console.log(name , email, password);
        // console.log({ name, email, password });
        let data = { name, email, password }

        fetch("http://localhost:5000/user", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        }).then((result) => {
            console.log(result);
            result.json().then((resp) => {
                console.log(resp);
            })
        })
    }

    useEffect(() => {
        fetch("http://localhost:5000/user").then((result) => {
            result.json().then((resp) => {
            console.log(resp);
            setUser(resp)
            })
        })
    },[])
    return (
        <>
            <h1>Api post </h1>
            <table width="50%" align='center'>
                <tr>
                    <td>
                        username
                    </td>
                    <td>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='enter-your-name' />
                    </td>
                </tr>
                <tr>
                    <td>
                        email
                    </td>
                    <td>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='enter-your-email' />
                    </td>
                </tr>
                <tr>
                    <td>password</td>
                    <td><input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder='enter-your-password' /> </td>
                </tr>
                <tr>
                    <td><button onClick={savedata}>submit</button></td>
                </tr>

            </table>
            <br />
            <br />
            <br />
            <table border="1" width="70%" align='center'>
                <tr>
                    <td>name</td>
                    <td>email</td>
                    <td>password</td>
                    {/* <td>completed</td> */}
                </tr>
                {
                    user.map((item) =>
                        <tr>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.password}</td>
                            {/* <td>{item.completed}</td> */}
                        </tr>
                    )
                }
            </table>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
        </>
    );

}

export default Apipost;