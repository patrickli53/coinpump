import React, { useRef, useState } from 'react'
import { Form, Button, Card, Alert } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext'

const ResetPasswordComponent = () => {
    const emailRef = useRef()
    
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const { resetPassword} = useAuth()
    const history = useHistory()

    async function resetThePassword(e) {
        e.preventDefault()
    
        try {
          setError("")
          setLoading(true)
          await resetPassword(emailRef.current.value).then(()=>{
            history.push("/verification2")
          })
          
        } catch {
          setError("Failed to reset password")
        }
       
        setLoading(false)
      }


    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4"> Type Email to reset Password</h2>
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
            
        </>
    )
}


export default ResetPasswordComponent;