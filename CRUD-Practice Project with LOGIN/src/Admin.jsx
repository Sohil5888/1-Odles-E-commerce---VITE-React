import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Admin = () => {
    const navigate = useNavigate(false)
    useEffect(() => {
        let email = sessionStorage.getItem('email')
        let role = sessionStorage.getItem('role')
        if (email === '' || email === null || role != 1) {
            navigate('/login')
        }
    })


  return (
    <div>Welcome 
        Admin</div>
  )
}

export default Admin