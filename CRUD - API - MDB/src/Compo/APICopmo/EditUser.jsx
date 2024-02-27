import React, { useState, useEffect } from 'react';
import {
    MDBContainer,
    MDBInput,
    MDBCheckbox,
    MDBBtn,
    MDBIcon
}
    from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router';
import { useParams } from 'react-router';

const EditUser = () => {
    const [id, setId] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate(false)
    const { userID } = useParams()

    useEffect(() => {
        fetch('http://localhost:2000/user/' + userID).then((result) => {
            return result.json().then((resp) => {
                console.log(resp);
                // setUserData(resp);
                setId(resp.id);
                setName(resp.name);
                setEmail(resp.email);
                setPassword(resp.password);
            }).catch((error) => {
                console.log(error.msg);
            })
        })
    }, [])

    const Submit = (event) => {
        event.preventDefault();
        const data = { id, name, email, password }
        fetch('http://localhost:2000/user/' + userID, {
            method: "PUT",
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
            <div className="container mx-auto">
                <h1 className='text-2xl text-center pt-[50px]'>This is User Data Page</h1>
                {/* <button className='border-2 border-black mx-auto px-5 my-3 py-3 uppercase text-2xl bg-violet-100'>
                    <NavLink to='/api/Compo/APICopmo/newuser'>Add New User</NavLink>
                </button> */}
                <MDBContainer className="p-3 my-5 d-flex flex-column w-50">
                    
                    <form action="" method="post" onSubmit={Submit}>
                        <MDBInput value={id} onChange={(e) => setId(e.target.value)} disabled wrapperClass='mb-4' label='Id' id='form1' type='text' />
                        <MDBInput value={name} onChange={(e) => setName(e.target.value)} wrapperClass='mb-4' label='Name' id='form2' type='text' />
                        <MDBInput value={email} onChange={(e) => setEmail(e.target.value)} wrapperClass='mb-4' label='Email' id='form3' type='email' />
                        <MDBInput value={password} onChange={(e) => setPassword(e.target.value)} wrapperClass='mb-4' label='Password' id='form4' type='password' />
                        <MDBInput wrapperClass='mb-4' label='Edit Data' id='form5' type='submit' value='Edit Data' />
                    </form>
                </MDBContainer>
            </div>
        </>
    );
}

export default EditUser;