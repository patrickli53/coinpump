import { generateUserDocument, firebase, auth } from '../config/fbConfig'
import React, { useRef, useState } from "react"
import { Link, useHistory } from 'react-router-dom'
import { Form, Button, Card, Alert} from 'react-bootstrap';
import { useAuth } from '../../contexts/AuthContext.js'
import ReCAPTCHA from "react-google-recaptcha";


const SignUp = () => { 
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmationRef = useRef()
    const { signup } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()
    const [notBot, setNotBot] = useState(false)

    
    const recaptchaRef = React.createRef();
    
    const notABot = event => {
        setNotBot(true)
    }
    
    
    //  ReactDOM.render(
    //     <ReCAPTCHA
    //       sitekey="6LeB0i8bAAAAACKmpvuZYi9YBn41gd2nfJIUJJTx"
    //       onChange={setNotBot(true)}
    //     />,
    //     document.body
    //    );


    const verification = async () => {
        var user = firebase.auth().currentUser;
      
        user.sendEmailVerification().then(function(){
          
        }).catch(function(error){
          console.log(error)
        });
      }

    async function handleSubmit(e) {

        if(!notBot){
            setError("Please check CAPTCHA")
            return
        }

        e.preventDefault()
    
        if (passwordRef.current.value !== passwordConfirmationRef.current.value) {
          return setError("Passwords do not match")
        }
    
        try {
          setError("")
          setLoading(true)
          await signup(emailRef.current.value, passwordRef.current.value).then((credential) => {
              console.log('credential', credential);              
              const user = credential.user;
              verification() //sends the email verification
              generateUserDocument(user)
          })
          history.push("/verification")
        } catch {
          setError("Failed to create an account")
        }
   


        setLoading(false)
      }
    

    return (
        <>
            <Card>
                <Card.Body>
                    <h2 className="text-center mb-4"> Sign Up</h2>
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
                        <Form.Group id="passwordConfirmation">
                            <Form.Label>Password Confirmation</Form.Label>
                            <Form.Control type="password" ref={passwordConfirmationRef} required/>
                        </Form.Group>
                        
                            <ReCAPTCHA
                            ref={recaptchaRef}
                            sitekey="6LeB0i8bAAAAACKmpvuZYi9YBn41gd2nfJIUJJTx"
                            render="explicit"
                            onChange={notABot}
                            />
                        
                        <Button disabled={loading} className="w-100" type="submit"> Sign Up</Button>
                    </Form>
                </Card.Body>
            </Card>
            <div className="w-100 text-center mt-2">
                Already have an account? <Link to="/login">Log in!</Link>
            </div>
        </>
    )
}

export default SignUp
