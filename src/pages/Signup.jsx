import React from 'react'
import styled from 'styled-components'
import Background from '../components/Background'
import Header from '../components/Header'

function Signup () {
    return (
   
        <Container>
          <Background/>
          <div className="content">
           <Header/>
           
           <div className="body flex column a-center j-center">
            <div className="text flex column">
                <h1>Unlimited Movies, TV shows and more..</h1>
                <h4>Watch anywhere. Cancel anytime</h4>
                <h6>Ready to watch? Enter your mail to create or start membership</h6>
            </div>
    
            <div className="form">
                <input type="email" placeholder='Email address' name='email' />
                <input type="password" placeholder='password' name='password' />
    
                <button>Get Started</button>
            </div>
            <button>Login</button>
           </div>
          </div>
        </Container>
        
      )
}

export default Signup

const Container = styled.div`
position: relative;

.content{
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.5);
    height: 100vh;
    width: 100vw;
    display: grid;
    grid-template-rows: 15vh 85vh;
}
`;