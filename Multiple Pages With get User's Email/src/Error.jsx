import React from 'react'
import styled from 'styled-components'
import { Button } from './styles/button';
import { NavLink } from 'react-router-dom';

const Error = () => {
    return (
        <Wrapper>
            <img src="../assets/images/error.svg" alt="" />
            <NavLink to='/'>
                <Button className='btn'>Go back</Button>
            </NavLink>
        </Wrapper>
    )
}

const Wrapper = styled.section`
padding: 8rem 0;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

.btn{
    margin: 5rem auto;
}
`;


export default Error