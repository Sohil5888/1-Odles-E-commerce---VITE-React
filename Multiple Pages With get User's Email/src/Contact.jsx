import React from 'react'
import styled from 'styled-components'

const Contact = () => {
  return (
    <Wrapper>
      <h2 className='common-heading'>Feel Free To Contact US</h2>

      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.940018295916!2d72.50498477889369!3d23.025974465917283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e85e8e67b814b%3A0x368371cbdd7f80ff!2sDSP%20Schedio%20Architect%20%26%20Interior%20Designer%20-%20Best%20Interior%20designer%20in%20Ahmedabad!5e0!3m2!1sen!2sin!4v1708924897593!5m2!1sen!2sin" width="100%" height="250" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

      <div className="container">
        <div className="contact-form">
          <form action="https://formspree.io/f/xoqgwdez" method="post" className='contact-inputs'>
            <input type="text" name="username" id="" placeholder='username' autoComplete='off' required />
            <input type="email" name="email" id="" placeholder='Email' autoComplete='off' required />
            <textarea name="message" id="" cols="30" rows="10" autoComplete='off' required></textarea>
            <input type="submit" value="Send" />
          </form>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
padding: 9rem 0 5rem 0;

.container {
  margin-top: 6rem;
  text-align: center;

  .contact-form {
    max-width: 50rem;
    margin: auto;

    .contact-inputs {
      display: flex;
      flex-direction: column;
      gap: 3rem;

      input[type="submit"] {
        cursor: pointer;
        transition: all 0.2s;

        &:hover {
          background-color: ${({ theme }) => theme.colors.white};
          border: 1px solid ${({ theme }) => theme.colors.btn};
          color: ${({ theme }) => theme.colors.btn};
          transform: scale(0.9);
        }
      }
    }
  }
}
`;

export default Contact