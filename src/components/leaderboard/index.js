import React, { useState, Component, useEffect } from 'react'
import {auth, firestore, firebase} from '../config/fbConfig';
import Table from 'react-bootstrap/Table'
import './styles.css'
import PromotedRow from '../promoted/PromotedRows.js';

const Leaderboard = () => {

    const [leaderboard, setLeaderboard] = useState([])

    useEffect(() => {
        fetchData();
    }, []);
    
    async function fetchData() {
        await firestore.collection("Coins").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                if (doc.data().Promoted == false){
                    setLeaderboard(leaderboard => [...leaderboard, doc.data()]);
                    console.log(doc.id, " => ", doc.data());
                }
            });
        })
    }

    const renderLeaderboardRows = () => {
        console.log(leaderboard)
        return leaderboard.map((doc, index)=>{
            return <PromotedRow index={index} name={doc.Name} marketcap={doc.MarketCap} age={doc.Date.seconds} votes={doc.Votes} />
        })
    }

    return (
        <div>
            <h2>
                Leaderboard
            </h2>
            <Table borderless hover>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Market Cap</th>
                    <th>Age</th>
                    <th>Votes</th>
                    </tr>
                </thead>
                <tbody>
                    {renderLeaderboardRows()}
                </tbody>
            </Table>
        </div>
    )
}

export default Leaderboard
