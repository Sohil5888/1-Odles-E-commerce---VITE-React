import React, { useState } from 'react';
import {
    MDBContainer,
    MDBInput,
    MDBCheckbox,
    MDBBtn,
    MDBIcon
}
    from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router';
import {v4 as uuid} from 'uuid';

let _id = uuid();

const NewUser = () => {
    const [id, setId] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate(false)

    

    const Submit = (event) => {
        event.preventDefault();
        const data = { id, name, email, password }
        const data2 = {id}
        fetch('http://localhost:2000/user', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }).then((result) => {
            return result.json().then((resp) => {
                console.log(resp);
                navigate('/api/Compo/APICopmo/userdata')
            })
        })
    }

    return (
        <>
            <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
                
                <form action="" method="post" onSubmit={Submit}>
                    <MDBInput value={id} onChange={(e) => setId(e.target.value)} disabled wrapperClass='mb-4' label='Id' id='form1' type='text' />
                    <MDBInput value={name} onChange={(e) => setName(e.target.value)} wrapperClass='mb-4' label='Name' id='form2' type='text' />
                    <MDBInput value={email} onChange={(e) => setEmail(e.target.value)} wrapperClass='mb-4' label='Email' id='form3' type='email' />
                    <MDBInput value={password} onChange={(e) => setPassword(e.target.value)} wrapperClass='mb-4' label='Password' id='form4' type='password' />
                    <MDBInput wrapperClass='mb-4' label='Submit' id='form5' type='submit' />
                </form>
            </MDBContainer>
        </>
    );
}

export default NewUser;



