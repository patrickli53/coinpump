import React, { useEffect, useState } from 'react'
import './styles.css'
import Button from 'react-bootstrap/Button'
import {auth, firestore, firebase} from '../config/fbConfig';

const LeaderboardRow = ({sortByVotes, id, name, age, marketcap, votes,index}) => {
    const [totalVotes, setVotes] = useState(votes)
    useEffect(() =>{
        updateVotes();
    }, [totalVotes])

    const updateVotes = async() => {
        await firestore.collection("Coins").doc(id).update({
            Votes: totalVotes
        }).then(()=>{
            console.log("Votes: ", totalVotes);
        }).catch((error) => {
            // The document probably doesn't exist.
            console.error("Error updating document: ", error);
        });
        
    }
    return (
             <tr>
                <td>{index+1}</td>
                <td>{name}</td>
                <td>{marketcap}</td>
                <td> {age}                </td>
                <td> 
                    <Button onClick={() => {setVotes(totalVotes+1); sortByVotes();}} className="voteButton">
                        {totalVotes}
                    </Button>
                </td>
            </tr>
    )
}

export default LeaderboardRow
 