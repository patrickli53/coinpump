import React from 'react'
import { Container } from 'react-bootstrap'
import NavigationBar from '../../components/navbar'
import SignUp from '../../components/signup'
import Footer from '../../components/footer';

const SignUpPage = () => {
    return (
        <div>
            <NavigationBar />       
            <Container className="d-flex align-items-center justify-content-center" style={{minHeight: "100vh"}}>
                <div className="w-100" style={{maxWidth:"400px"}}>
                    <SignUp/>
                </div>
            </Container>

            <Footer />     
        </div>
    )
}

export default SignUpPage
