import React, { useRef, useState } from 'react'
import { Form, Button, Card, Alert } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext'
import { firebase, auth, google, generateUserDocument } from '../config/fbConfig'
import './styles.css'
const LoginComponent = () => {
    const emailRef = useRef()
    const passwordRef = useRef()
    const { login } = useAuth()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function trySignInWithGoogle(){
        try {
            setError("")
            setLoading(true)
            await auth.signInWithPopup(google).then((credential) => {              
                const user = credential.user;
                
                generateUserDocument(user)
                 
            })
            history.push("/")
          } catch {
            setError("Failed to create an account")
          }
      };


    


    async function handleSubmit(e) {
        e.preventDefault()
    
        try {
          setError("")
          setLoading(true)
          await login(emailRef.current.value, passwordRef.current.value)
          history.push("/")
        } catch {
          setError("Failed to log in")
        }
    
        setLoading(false)
      }


    return (
        <>
            <Card className="loginBody">
                <Card.Body>
                    <h2 className="text-center mb-4"> Log In</h2>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailRef} required/>

                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" ref={passwordRef} required/>
                        </Form.Group>
                        <Button disabled={loading} className="w-100" type="submit"> Log In</Button>
                    </Form>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2 signup">
                Don't have an account? <Link to='/signup'>Sign up!</Link>
            </div>
            <Link className="text-center d-block forgotPw" to='/resetPassword'>Forgot Password</Link>
            <Button disabled={loading} className="w-100" onClick={trySignInWithGoogle}> Sign in with Google</Button>
        </>
    )
}

export default LoginComponent;
