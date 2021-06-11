import React, { useState, Component, useEffect } from 'react'
import {auth, firestore, firebase} from '../config/fbConfig';
import Table from 'react-bootstrap/Table'
import './styles.css'
import LeaderboardRow from './LeaderboardRow';

const Leaderboard = () => {

    const [leaderboard, setLeaderboard] = useState([])

    useEffect(() => {
        fetchData();
    }, []);
    
    async function fetchData() {
        await firestore.collection("Coins").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                if (doc.data()){
                    let coinData = doc.data();
                    coinData.id = doc.id;
                    setLeaderboard(leaderboard => [...leaderboard, coinData]);
                    console.log(doc.id, " => ", doc.data());
                }
            });
            
        })
    }
    const sortByVotes = () => {
        const sorted = [...leaderboard].sort((a, b) => {
            return b.Votes - a.Votes;
          });
          console.log('srt')
        setLeaderboard(sorted)
    }
    const renderLeaderboardRows = () => {
        console.log(leaderboard)
        return leaderboard.map((doc, index)=>{
            return <LeaderboardRow sortByVotes={sortByVotes} id={doc.id} index={index} name={doc.Name} marketcap={doc.MarketCap} age={doc.Date.seconds} votes={doc.Votes} />
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
