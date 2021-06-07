import React from 'react'
import { Container } from 'react-bootstrap'
import LoginComponent from '../../components/logincomponent'
import NavigationBar from '../../components/navbar'

const Login = () => {
    return (
        <div>
            <NavigationBar />       
            <Container className="d-flex align-items-center justify-content-center" style={{minHeight: "100vh"}}>
                <div className="w-100" style={{maxWidth:"400px"}}>
                    <LoginComponent/>
                </div>
            </Container>     
        </div>
    )
}

export default Login
