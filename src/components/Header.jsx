import React from 'react'
import styled from 'styled-components'
import logo from '../assets/logo.png'
import {useNavigate} from 'react-router-dom'

const Header = (props) => {

    const navigate = useNavigate();

  return (
    <Container>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>

      <button onClick={() => navigate(props.login ? "/login" : "/signup") }> {props.login ? "Log In" : "Sign In"} </button>      
    </Container>
  )
}

export default Header

const Container = styled.div`
.logo img{
    height: 5rem;
}

button{
    padding: 0.5rem 1rem;
    background-color: rgb(95, 0,0);
    border: none;
    cursor: pointer;
    color: white;
    border-radius: 0.2rem;
    font-weight: bolder;
    font-size: 1.05rem;
}
`;