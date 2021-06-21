import React, { useRef, useState } from 'react'
import { Form, Button, Card, Alert } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext'

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
                <Card>
                    <Card.Body>
                        <h2 className="text-center mb-4"> Log In</h2>
                        {error && <Alert variant="danger">{error}</Alert>}
                        <Form onSubmit={resetThePassword}>
                            <Form.Group id="email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" ref={emailRef} required/>

                            </Form.Group>
                            <Button disabled={loading} className="w-100" type="submit"> ResetPassword</Button>
                        </Form>
                    </Card.Body>
                </Card>
                
                
            </>
        )
    } else {
        return (
            <>
                <Card>
                    <Card.Body>
                        <h2 className="text-center mb-4"> Log In</h2>
                        {error && <Alert variant="danger">{error}</Alert>}
                        <Form onSubmit={resetThePassword}>
                            <Form.Label>Please Check Inbox</Form.Label>
                            <Button disabled={loading} className="w-100" type="submit"> Resend </Button>
                        </Form>
                    </Card.Body>
                </Card>
                
                
            </>
        )
    }
        
}


export default ResetPassword;