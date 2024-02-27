import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Admin = () => {
    const navigate = useNavigate(false)
    useEffect(() => {
        let email = sessionStorage.getItem('email')
        let role = sessionStorage.getItem('role')
        if (email === '' || email === null || role != 1) {
            console.log('called');
            navigate('/login')
        }
    })
    return ( 
        <>
            <section>
                <div className="container mx-auto">
                    <h1 className='text-center text-3xl'>Admin Page</h1>
                </div>
            </section>
        </>
     );
}
 
export default Admin;