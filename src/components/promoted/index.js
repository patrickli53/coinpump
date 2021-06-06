import React, { useState, Component, useEffect } from 'react'
import Coin from './coin'
import {auth, firestore, firebase} from '../config/fbConfig';
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import './styles.css'


const Promoted = () => {

    const [promotedCoin, setPromotedCoin] = useState([])

    useEffect( () => {
        
        let temp = [];
        
        async function fetchData() {
            await firestore.collection("Coins").get().then(function(querySnapshot) {
                querySnapshot.forEach(function(doc) {
                    // doc.data() is never undefined for query doc snapshots
                    console.log(doc.data());
                    temp.push(doc.data());
                });
            })
        }
        fetchData();

        setPromotedCoin(temp);
        console.log(temp);

      }, []);






    return (
        <div>
            <h2>
                Promoted Coins
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
                {promotedCoin.map(coins => 
                    <Coin name={coins.Name} marketCap={coins.MarketCap} age={coins.Date} />
                    )}
                </tbody>
            </Table>
        </div>
    )
}

export default Promoted
