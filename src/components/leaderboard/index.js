import React, { useState, Component, useEffect } from 'react'
import {auth, firestore, firebase} from '../config/fbConfig';
import Table from 'react-bootstrap/Table'
import Alert from 'react-bootstrap/Alert'

import './styles.css'
import LeaderboardRow from './LeaderboardRow';
import { Button } from 'react-bootstrap';

const Leaderboard = ({sortMethod, promoted, searchText}) => {
    const [leaderboard, setLeaderboard] = useState([])
    const [loadAll, setLoadAll] = useState(false)
    useEffect(() => {
        fetchData();
    }, []);
    useEffect(() => {
        if(searchText != ""){
            setLoadAll(true)
        }
    }, [searchText]);
    
    async function fetchData() {
        console.log(promoted)
        if (promoted == "true" || promoted == "True"){
            await firestore.collection("Coins").orderBy("Votes", "desc").get().then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    if (doc.data().Promoted == true && doc.data().Approved == true){
                        let coinData = doc.data();
                        coinData.id = doc.id;
                        setLeaderboard(leaderboard => [...leaderboard, coinData]);
                    }
                });
            })

            return;
        }

        console.log(sortMethod)
        if (sortMethod == "weekly"){
            await firestore.collection("Coins").orderBy("WeeklyVotes", "desc").get().then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    if (doc.data().Promoted == false && doc.data().Approved == true){
                        let coinData = doc.data();
                        coinData.id = doc.id;
                        setLeaderboard(leaderboard => [...leaderboard, coinData]);

                    }
                });
            })
        }else{
            // Defaults to sort by all time
            await firestore.collection("Coins").orderBy("Votes", "desc").get().then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    if (doc.data().Promoted == false && doc.data().Approved == true){
                        let coinData = doc.data();
                        coinData.id = doc.id;
                        setLeaderboard(leaderboard => [...leaderboard, coinData]);
                    }
                });
            })
        }
    }


    const renderLeaderboardRows = () => {
        if(searchText == "" || !loadAll){
            return leaderboard.slice(0,20).map((doc, index)=>{
                // Adds coin only if its approved by admin
                    return (
                        <LeaderboardRow 
                            doc={doc}
                            index={index} 
                            sortMethod={sortMethod}
                        />
                    )
            })
        }
        else{
            return leaderboard.filter(r=>{
                if(!searchText.trim()){
                    return true
                }
                
                return r.Name.toLowerCase().includes(searchText.toLowerCase())
                
            }).map((doc, index)=>{
                // Adds coin only if its approved by admin
                    return (
                        
                        // <LeaderboardRow 
                        //     alert={alert} 
                        //     id={doc.id} 
                        //     index={index} 
                        //     name={doc.Name} 
                        //     marketcap={doc.MarketCap} 
                        //     age={((Date.now() - doc.Date.toDate())/(1000*24*60*60)).toFixed(0)} 
                        //     votes={doc.Votes}  weeklyVotes={doc.WeeklyVotes}
                        //     logo = {doc.Logo}
                        //     contractAddress = {doc.ContractAddress}
                        // />
    
                        <LeaderboardRow 
                            doc={doc}
                            index={index} 
                            sortMethod={sortMethod}
                        />
                    )
            })
        }
    }

    const renderLoadButton = () => {
        if (!promoted && !loadAll){
            return <Button onClick={()=>setLoadAll(true)}>Load all coins</Button>
        }
        else if(promoted){
            
        }
        else{
            return "All coins loaded."
        }
    }
    return (
        <div>   
            <Table striped borderless hover>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Logo</th>   
                    <th>Name</th>
                    <th>Chain</th>
                    <th>Market Cap</th>
                    <th>Age</th>
                    <th>Chart</th>
                    <th>Votes</th>
                    </tr>
                </thead>
                <tbody>
                    {renderLeaderboardRows()}
                </tbody>
            </Table>
            <div>
                {renderLoadButton()}
            </div>
        </div>
    )
}

export default Leaderboard
