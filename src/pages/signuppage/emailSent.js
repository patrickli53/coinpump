import React from 'react'
import { generateUserDocument, firebase, auth } from '../../components/config/fbConfig'
import { useAuth } from '../../contexts/AuthContext.js'
import NavigationBar from '../../components/navbar'
import Footer from '../../components/footer';

const emailSent = () => {

    const verification = async () => {
        var user = firebase.auth().currentUser;
      
        user.sendEmailVerification().then(function(){
          window.alert("email sent successfully")
        }).catch(function(error){
          window.alert(error)
        });
      }


    return (
        <div>
            <NavigationBar/>
            <h>Please check inbox.</h>
            <button onClick={verification}>Resend</button>
        </div>
    )
}

export default emailSent