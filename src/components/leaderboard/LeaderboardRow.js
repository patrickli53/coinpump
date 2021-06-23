import React, { useEffect, useState } from 'react'
import './styles.css'
import Button from 'react-bootstrap/Button'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Popover from 'react-bootstrap/Popover'
import {auth, firestore, firebase} from '../config/fbConfig';
import {useAuth} from '../../contexts/AuthContext.js'
import { Link, useHistory } from 'react-router-dom'
import ReCAPTCHA from "react-google-recaptcha";
import Modal from 'react-bootstrap/Modal'
import {AiOutlineLineChart} from 'react-icons/ai'
// Inputs:
// doc - doc of token
// index - tokens number on list
// sortMethod - Stores which type of votes leaderboard is sorted by

const LeaderboardRow = ({ doc, index, sortMethod }) => {
    // Gets values from doc
    const id = doc.id;
    const name = doc.Name;
    const marketcap = doc.MarketCap;
    const votes = doc.Votes;
    const weeklyVotes = doc.WeeklyVotes;
    const logo = doc.Logo;
    const age = ((Date.now() - doc.Date.toDate())/(1000*24*60*60)).toFixed(0);
    const contractAddress = doc.ContractAddress;
    const userInformation = useAuth();
  
    const [totalVotes, setVotes] = useState(votes)
    const [totalWeeklyVotes, setWeeklyVotes] = useState(weeklyVotes)
    const [show, setShow] = useState(false)
    const [error, setError] = useState('') 
    const [showModal, setShowModal] = useState(false)
    const [userID, setUserID] = useState("")
    const [verified, setVerified] = useState(false)
    const handleClose = () => setShowModal(false)
    const handleShow = () => setShowModal(true)
    const recaptchaRef = React.createRef();

    const notABot = event => {
        console.log("Updating verified for: ", userID)
        firestore.collection("IP").doc(userID).set({
            Verified: true
        }, {merge: true}
        );
        handleClose()
     }

    const publicIp = require('public-ip')

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
    const history = useHistory();
    const handleRowClick=() => {
        history.push(`/coin/${id}`)
    }

    function returnChain(){
        if (doc.BSC){
            return "BSC";
        }

        if (doc.Ethereum){
            return "ETH";
        }
        if (doc.Solana){
            return "SOL";
        }
    }

    function returnVotes(){
        if (sortMethod == "weekly"){
            return totalWeeklyVotes;
        }else{
            return totalVotes;
        }
    }

    return (
        <>
        <Modal show={showModal} onHide={handleClose}> 
        <Modal.Header closeButton>
          <Modal.Title>Please fill the Captcha</Modal.Title>
        </Modal.Header>
        <ReCAPTCHA
            ref={recaptchaRef}
            sitekey="6LeB0i8bAAAAACKmpvuZYi9YBn41gd2nfJIUJJTx"
            render="explicit"
            onChange={notABot}
            />    
        </Modal>

            <tr>

                <td onClick={()=> handleRowClick()}>{index+1}</td>
                <td onClick={()=> handleRowClick()}>
                    <img
                    src={logo}
                    alt="token"
                    className="tokenLogo"
                    />
                </td>
                <td onClick={()=> handleRowClick()}>{name}</td>
                <td onClick={()=> handleRowClick()} >{returnChain()}</td>
                <td onClick={()=> handleRowClick()}>{marketcap}</td>
                <td onClick={()=> handleRowClick()}> {age} days</td>
                <td onClick={()=> handleRowClick()}><a target='_blank' href={"https://poocoin.app/tokens/" + contractAddress}><AiOutlineLineChart /></a></td>
                <td> 
                <OverlayTrigger show={show} onToggle={toggle} overlay={popover}>
                    <Button onClick={() => {vote();}} className="voteButton">
                        {returnVotes()}
                    </Button>
                </OverlayTrigger>
                </td>
                
            </tr>
        </>
    )
}

export default LeaderboardRow
 