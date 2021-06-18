import React from 'react'
import NavigationBar from '../../components/navbar'
import { InputGroup, Container, Row, Col, Card } from 'react-bootstrap'

const AddCoinSuccess = () => {
    return (
        <div>
            <NavigationBar/>

            <Container className="d-flex align-items-center justify-content-center" style={{minHeight: "20vh"}}>
                <Card>
                    <Card.Body>
                        <div>
                        <h2>Success!</h2>

                        <p>
                            Your coin has been submitted for review by admins.
                        </p>
                        </div>

                    </Card.Body>
                </ Card>
            </Container>
        </div>
       
    )
}

export default AddCoinSuccess
