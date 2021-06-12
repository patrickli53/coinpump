import React, { useEffect, useState } from 'react'
import './styles.css'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'
import {auth, firestore, firebase} from '../config/fbConfig';
import {useAuth} from '../../contexts/AuthContext.js'

const LeaderboardRow = ({sortByVotes, id, name, age, marketcap, votes,index}) => {
    const userInformation = useAuth();

    const [totalVotes, setVotes] = useState(votes)
    useEffect(() =>{
        updateVotes();
    }, [totalVotes])

    const updateVotes = async() => {
        await firestore.collection("Coins").doc(id).update({
            Votes: totalVotes
        }).catch((error) => {
            // The document probably doesn't exist.
            console.error("Error updating document: ", error);
        });
    }

    // Updates time when user voted on database
    const vote = async() => {
        // Checks if user is logged in
        if (userInformation.currentUser == null){
            console.log("You must be logged in to vote")
            return;
        }

        // Gets date of last from database
        const info = firestore.collection("users").doc(userInformation.currentUser.uid);
        const doc = await info.get();
        var lastVoteDate = doc.data().tokens.[id];

        // gets todays date
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); 
        var yyyy = today.getFullYear();
        today = mm + '/' + dd + '/' + yyyy;

        if (doc != null){ // Need to check if tokens.id exists here *************
            // Save lastVoteDate as Date variable to allow for date math
            // lastVoteDate = new Date(doc.data().tokens.[id]);
        }else{
            // First time user has voted for token
            await firestore.collection("users").doc(userInformation.currentUser.uid).set({
                tokens: { [id]: today}
            });
        }

        if (lastVoteDate){
            // Allow vote if user has not voted today
            if (lastVoteDate != today){
                await firestore.collection("users").doc(userInformation.currentUser.uid).set({
                    // Edits last vote date
                    tokens: { [id]: today}
                });
                setVotes(totalVotes+1);
            }else{
                console.log("You can only vote once every 24 hours");
            }

        }else{
            // If user has not voted yet, create a new entry for the token
            await firestore.collection("users").doc(userInformation.currentUser.uid).set({
                tokens: { [id]: today}
            }, {merge: true}
            );

            setVotes(totalVotes+1);
        }
    }

    return (
             <tr>
                <td>{index+1}</td>
                <td>{name}</td>
                <td>{marketcap}</td>
                <td> {age}                </td>
                <td> 
                    <Button onClick={() => { vote();}} className="voteButton">
                        {totalVotes}
                    </Button>
                </td>
            </tr>
    )
}

export default LeaderboardRow
 