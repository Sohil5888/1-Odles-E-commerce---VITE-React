import React, { useEffect, useState } from 'react';

const Api = () => {

    const [user , setUser] = useState([])
    
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos").then((result) => {
            result.json().then((resp) => {
            console.log(resp);
            setUser(resp)
            })
        })
    },[])
    return (
        <>
            <h1>API</h1>
            <table border="1" width="70%" align='center'>
                <tr>
                    <td>userId</td>
                    <td>id</td>
                    <td>title</td>
                    <td>completed</td>
                </tr>
                {
                    user.map((item) =>
                    <tr>
                        <td>{item.userId}</td>
                        <td>{item.id}</td>
                        <td>{item.title}</td>
                        <td>{item.completed}</td>
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
        </>

    );
}

export default Api;