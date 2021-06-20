// import React from 'react'
// import { generateUserDocument, firebase, auth } from '../../components/config/fbConfig'
// import { useAuth } from '../../contexts/AuthContext.js'
// import NavigationBar from '../../components/navbar'


// const emailSentTwo = () => {

//   async function resetThePassword(e) {
//     e.preventDefault()
//     var user = firebase.auth().currentUser;

//     try {
//       setError("")
//       setLoading(true)
//       await resetPassword(emailRef.current.value)
//     } catch {
//       setError("Failed to reset password")
//     }

//     setLoading(false)
//   }


//     return (
//         <div>
//             <NavigationBar/>
//             <h>Please check inbox.</h>
//             <button onClick={resetThePassword}>Resend</button>
//         </div>
//     )
// }

// export default emailSentTwo