import React, { useState, Component, useEffect } from 'react'
import {auth, firestore, firebase} from '../config/fbConfig';
import Table from 'react-bootstrap/Table'
import Alert from 'react-bootstrap/Alert'

import './styles.css'
import LeaderboardRow from './LeaderboardRow';

const Leaderboard = () => {

    const [leaderboard, setLeaderboard] = useState([])
    useEffect(() => {
        fetchData();
    }, []);
    
    async function fetchData() {
        await firestore.collection("Coins").orderBy("Votes", "desc").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                if (doc.data().Promoted == false){
                    let coinData = doc.data();
                    coinData.id = doc.id;
                    setLeaderboard(leaderboard => [...leaderboard, coinData]);

                }
            });
            
        })
    }
    const renderLeaderboardRows = () => {
        return leaderboard.map((doc, index)=>{
            console.log(doc.Votes + " " + doc.Name);
            return <LeaderboardRow alert={alert} id={doc.id} index={index} name={doc.Name} marketcap={doc.MarketCap} age={doc.Date.seconds} votes={doc.Votes} />
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
