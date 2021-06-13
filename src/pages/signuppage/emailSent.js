import React from 'react'
import { Container } from 'react-bootstrap'
import NavigationBar from '../../components/navbar'
import SignUp from '../../components/signup'

const emailSent = () => {
    return (
        <div>
            <h>Check inbox for email sent</h>
            <p>if you havent recieved the email click button:</p>
            <button>Resend Email</button>
        </div>
    )
}

export default emailSent