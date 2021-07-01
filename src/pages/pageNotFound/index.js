import React from 'react'
import { InputGroup, Container, Row, Col, Card, Button } from 'react-bootstrap'
import LoginComponent from '../../components/logincomponent'
import NavigationBar from '../../components/navbar'
import Footer from '../../components/footer';
import {FaMoneyBill, FaFire} from 'react-icons/fa'


const PageNotFound = () => {
    return (
        <div>
            <NavigationBar />       

            <Container className="d-flex justify-content-center align-items-center" style={{minHeight: "100vh"}}>
                <div className="w-100 backgroundCard notLoggedIn" style={{maxWidth:"600px"}}>
                    <p>Page Not Found</p>
                </div>
            </Container>

            <Footer /> 
        </div>
    )
}

export default PageNotFound
