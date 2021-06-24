import React, { useState } from 'react'
import { Card, Container, Row, Col, ButtonGroup, Button } from 'react-bootstrap'
import ReCAPTCHA from "react-google-recaptcha";
import Modal from 'react-bootstrap/Modal'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Popover from 'react-bootstrap/Popover'
import {auth, firestore, firebase} from '../config/fbConfig';
import {useAuth} from '../../contexts/AuthContext.js'
import './styles.css'

const CoinInfo = (props) => {
   const {Name, Logo, Description, Price, MarketCap, Website, Twitter, Telegram, Votes, WeeklyVotes, ContractAddress} = props.data;
   const date = props.data.Date;

   const launch = date && date.toDate().toDateString();
   const id = props.coinId;

   const userInformation = useAuth();

   const [totalVotes, setVotes] = useState(Votes)
   const [totalWeeklyVotes, setWeeklyVotes] = useState(WeeklyVotes)
   const [show, setShow] = useState(false)
   const [error, setError] = useState('') 
   const [showModal, setShowModal] = useState(false)
   const [userID, setUserID] = useState("")
   const [verified, setVerified] = useState(false)
   const handleClose = () => setShowModal(false)
   const handleShow = () => setShowModal(true)
   const recaptchaRef = React.createRef();
   const publicIp = require('public-ip')

   const notABot = event => {
    console.log("Updating verified for: ", userID)
    firestore.collection("IP").doc(userID).set({
        Verified: true
    }, {merge: true}
    );
    handleClose()
 }

   // Observes vote field for live update 
  const votesObserver = firestore.collection("Coins").doc(id).onSnapshot(docSnapshot => {
      setVotes(docSnapshot.data().Votes)
      setWeeklyVotes(docSnapshot.data().WeeklyVotes)
  }, err => {
      console.log('Observer error: ${err}');
  });

  const increment = firebase.firestore.FieldValue.increment(1);

  // Increments votes by 1 on server
  const incrementVotes = async() => {
      await firestore.collection("Coins").doc(id).update({
          Votes: increment,
          WeeklyVotes: increment
      }).catch((error) => {
          // The document probably doesn't exist.
          console.error("Error updating document: ", error);
      });
  }

  // Updates time when user voted on database
  const vote = async() => {
      // Checks if user is logged in

      var ip;

      if (userInformation.currentUser == null){
          try {
              ip = await publicIp.v6();
          }catch{
              ip = await publicIp.v4();
          }

          var userDoc;

          await firestore.collection("IP").where("IP", "==", ip).get().then((querySnapshot) => {
              querySnapshot.forEach((doc) => {
                  userDoc = doc;
                  setVerified(userDoc.data().Verified);
                  console.log("Setting verified to", userDoc.data().Verified)
              });    
          });

          if (userDoc){
              // Checks if user is verified
              if (userDoc.data().Verified == false){
                  // Put code for captcha here ****
                  handleShow();
                  return;
              }

              console.log("UserID being set to: ", userDoc.id)
              setUserID(userDoc.id);

              var lastVoteDate = userDoc.data().tokens.[id];

              // gets todays date
              var today = new Date();
              var dd = String(today.getDate()).padStart(2, '0');
              var mm = String(today.getMonth() + 1).padStart(2, '0'); 
              var yyyy = today.getFullYear();
              today = mm + '/' + dd + '/' + yyyy;
      
              if (lastVoteDate){
                  // Allow vote if user has not voted today
                  if (lastVoteDate != today){
                      await firestore.collection("IP").doc(userDoc.id).set({
                          // Edits last vote date
                          tokens: { [id]: today}
                      }, {merge: true}
                      );
                      setVotes(totalVotes+1);
                      setWeeklyVotes(totalWeeklyVotes+1);
                      incrementVotes()
                  }else{
                      setError("You can only vote once every 24 hours.")
                      setShow(true)
                  }
      
              }else{
                  // If user has not voted yet, create a new entry for the token
                  await firestore.collection("IP").doc(userDoc.id).set({
                      tokens: { [id]: today}
                  }, {merge: true}
                  );
      
                  setVotes(totalVotes+1);
                  setWeeklyVotes(totalWeeklyVotes+1);
                  incrementVotes();
              }
          
          }else{
              // Create doc
              console.log("User does not exist, creating");
              firestore.collection("IP").add({
                  IP: ip,
                  tokens: {},
                  Verified: false
              }).then(function(docRef){
                  setUserID(docRef.id)
              });

              handleShow();
          }

          return;
      }
      
      // Gets date of last from database
      const doc = await firestore.collection("users").doc(userInformation.currentUser.uid).get();
      
      const emailVerified = await userInformation.currentUser.emailVerified;

      // Checks if email is verified
      if (!(emailVerified)){
          setError("Your email must be verified to vote.");
          setShow(true);
          return;
      }

      if (!doc.data().tokens){
          // token map does not exist, create it
          await firestore.collection("users").doc(userInformation.currentUser.uid).set({
              // Edits last vote date
              tokens: {}
          }, {merge: true}
          );

          console.log("[ERROR]: User did not have tokens map in document, map created");
      }

      var lastVoteDate = doc.data().tokens.[id];
      console.log(lastVoteDate)

      // gets todays date
      var today = new Date();
      var dd = String(today.getDate()).padStart(2, '0');
      var mm = String(today.getMonth() + 1).padStart(2, '0'); 
      var yyyy = today.getFullYear();
      today = mm + '/' + dd + '/' + yyyy;

      // TODO: Check that tokens map exists in user document

      if (lastVoteDate){
          // Allow vote if user has not voted today
          if (lastVoteDate != today){
              await firestore.collection("users").doc(userInformation.currentUser.uid).set({
                  // Edits last vote date
                  tokens: { [id]: today}
              });
              setVotes(totalVotes+1);
              setWeeklyVotes(totalWeeklyVotes+1);
              incrementVotes()
          }else{
              setError("You can only vote once every 24 hours.")
              setShow(true)
          }

      }else{
          // If user has not voted yet, create a new entry for the token
          await firestore.collection("users").doc(userInformation.currentUser.uid).set({
              tokens: { [id]: today}
          }, {merge: true}
          );

          setVotes(totalVotes+1);
          setWeeklyVotes(totalWeeklyVotes+1);
          incrementVotes();
      }
  }

  const popover = (
      <Popover id="popover-basic">
        <Popover.Content>
          {error}
        </Popover.Content>
      </Popover>
    );
    
  const toggle = () => {
      setInterval(() => {
          setShow(false)
        }, 3000)   
  }


    
function returnChain(){
    if (BSC){
        return "BSC";
    }

    if (Ethereum){
        return "ETH";
    }
    if (Solana){
        return "SOL";
    }
}

return (
        <>
            <Container>
                <Row>
                    <Col lg='8'>
                        <Card className='mainCard'>
                            <Card.Header>
                            <span> 

                                <Card.Title className="header">                                
                                <img
                                    src={Logo}
                                    alt="token"
                                    width="100"
                                    className='coinLogo'
                                />{Name} 	• <span className='symbol'>${Symbol}</span></Card.Title>
                                <Card.Subtitle className='subTitle'>{returnChain()} {ContractAddress}</Card.Subtitle>
                               
                            </span>
        
                            </Card.Header>
                            <Card.Body className='desc'>
                                {Description}
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg='4'>
                        <Row>
                            <Card className='sidebox w-100'>
                                <Card.Body>
                                    <h2 className="">Price (USD)</h2>
                                    <h3> {Price}</h3>
                                    <h2 className="">Marketcap</h2>
                                    <h3> {MarketCap}</h3>
                                    <h2 className="">Launch Date</h2>
                                    <h3> {launch}</h3>
                                </Card.Body>
                            </Card>
                        </Row>
                        <Row className='mt-4'>
                            <Card className='sidebox w-100'>
                                <Card.Body>
                                    <ButtonGroup vertical className='w-100'>
                                        <Button className=' socialButton mb-3'><a target="_blank" href={`${Telegram}`}>Telegram</a></Button>
                                        <Button className=' socialButton mb-3'><a target="_blank" href={`${Twitter}`}>Twitter</a></Button>
                                        <Button className='socialButton mb-3' ><a target="_blank" href={`${Website}`}>Website</a></Button>
                                        
                                        <OverlayTrigger show={show} onToggle={toggle} overlay={popover}>
                                        <Button className='socialButton' onClick={()=> vote()}>Vote</Button>
                                        </OverlayTrigger>
                                    </ButtonGroup>
                                </Card.Body>
                            </Card>
                        </Row>
                    </Col>
                </Row>
                
            </Container>
           
        </>
    )
}

export default CoinInfo;
