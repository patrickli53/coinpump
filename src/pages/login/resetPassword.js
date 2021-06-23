import React, { useRef, useState } from 'react'
import { Form, Button, Card, Alert, Container } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import Footer from '../../components/footer';
import NavigationBar from '../../components/navbar';
import { useAuth } from '../../contexts/AuthContext'
import './styles.css'
const ResetPassword = () => {
    const emailRef = useRef()
    
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const { resetPassword} = useAuth()
    const [ click, setClick ] = useState(true)
    

    async function resetThePassword(e) {
        e.preventDefault()
    
        try {
          setError("")
          setLoading(true)
          await resetPassword(emailRef.current.value)
        } catch {
          setError("Failed to reset password")
        }
        setClick(false)
        setLoading(false)
    }


    if(click){
        return (
            <> 
                <NavigationBar />
                <Container className="d-flex align-items-center justify-content-center" style={{minHeight: "100vh"}}>
                    <div className="w-100" style={{maxWidth:"600px"}}>
                        <Card className='reset'>
                            <Card.Body>
                                <h2 className="text-center mb-4"> Log In</h2>
                                {error && <Alert variant="danger">{error}</Alert>}
                                <Form onSubmit={resetThePassword}>
                                    <Form.Group id="email">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control type="email" ref={emailRef} required/>

                                    </Form.Group>
                                    <Button disabled={loading} className="w-100" type="submit"> Reset Password</Button>
                                </Form>
                            </Card.Body>
                        </Card>
                    </div>
                </Container>   
               <Footer/>
            </>
        )
    } else {
        return (
            <>
                <NavigationBar />
                <Container className="d-flex align-items-center justify-content-center" style={{minHeight: "100vh"}}>
                    <div className="w-100" style={{maxWidth:"600px"}}>
                    <Card className='reset'>
                        <Card.Body>
                            <h2 className="text-center mb-4"> Log In</h2>
                            {error && <Alert variant="danger">{error}</Alert>}
                            <Form onSubmit={resetThePassword}>
                                <Form.Label>Please Check Inbox</Form.Label>
                                <Button disabled={loading} className="w-100" type="submit"> Resend </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                    </div>
                </Container>   
                <Footer/>
            </>
        )
    }
        
}


export default ResetPassword;