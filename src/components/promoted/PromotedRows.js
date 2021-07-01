import React, { useEffect, useState } from 'react'
import './styles.css'
import Button from 'react-bootstrap/Button'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Popover from 'react-bootstrap/Popover'
import {auth, firestore, firebase} from '../config/fbConfig';
import {useAuth} from '../../contexts/AuthContext.js'
import { useHistory } from 'react-router-dom'

const PromotedRow = ({id, name, age, marketcap, votes, weeklyVotes, index}) => {
    const userInformation = useAuth();

    const [totalVotes, setVotes] = useState(votes)
    const [totalWeeklyVotes, setWeeklyVotes] = useState(weeklyVotes)
    const [show, setShow] = useState(false)
    const [error, setError] = useState('') 

    // Observes vote field for live update 
    const votesObserver = firestore.collection("Coins").doc(id).onSnapshot(docSnapshot => {
        setVotes(docSnapshot.data().Votes)
    }, err => {
        
    });
        
    const increment = firebase.firestore.FieldValue.increment(1);
    
    useEffect(() =>{
        
    }, [totalVotes])


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
        if (userInformation.currentUser == null){
            setError("You must be logged in to vote.")
            setShow(true)
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
            incrementVotes()
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

    return (
        <>
        <tr>
            <td onClick={()=> handleRowClick()}>{index+1}</td>
            <td onClick={()=> handleRowClick()}>{name}</td>
            <td onClick={()=> handleRowClick()}>{marketcap}</td>
            <td onClick={()=> handleRowClick()}> {age} days</td>
            <td> 
            <OverlayTrigger show={show} onToggle={toggle} overlay={popover}>
                <Button onClick={() => {vote();}} className="voteButton">
                    {totalVotes}
                </Button>
            </OverlayTrigger>
            </td>
        </tr>
    </>
    )
}

export default PromotedRow
 