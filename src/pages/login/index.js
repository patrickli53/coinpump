import React from 'react'
import { Container } from 'react-bootstrap'
import LoginComponent from '../../components/logincomponent'
import NavigationBar from '../../components/navbar'
import Footer from '../../components/footer';

const Login = () => {
    return (
        <div>
            <NavigationBar />       
            <Container className="d-flex align-items-center justify-content-center" style={{minHeight: "100vh"}}>
                <div className="w-100" style={{maxWidth:"400px"}}>
                    <LoginComponent/>
                </div>
            </Container>   

            <Footer /> 
        </div>
    )
}

export default Login
