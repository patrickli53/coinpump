import React, { useState, Component, useEffect } from 'react'
import {auth, firestore, firebase} from '../config/fbConfig';
import Table from 'react-bootstrap/Table'
import './styles.css'
import PromotedRow from './PromotedRows';


const Promoted = () => {

    const [promotedCoins, setPromotedCoins] = useState([])
    
    useEffect(() => {
        fetchData();
    }, []);
    
    async function fetchData() {
        await firestore.collection("Coins").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                if (doc.data().Promoted == true){
                    let coinData = doc.data();
                    coinData.id = doc.id;
                    setPromotedCoins(promotedCoins => [...promotedCoins, coinData]);
                    console.log(doc.id, " => promo", doc.data());
                }
            });
        })
    }

    const renderPromoRows = () => {
        console.log(promotedCoins)
        return promotedCoins.map((doc, index)=>{
            return <PromotedRow id={doc.id} index={index} name={doc.Name} marketcap={doc.MarketCap} age={doc.Date.seconds} votes={doc.Votes} />
        })
    }
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
                    {renderPromoRows()}
                </tbody>
            </Table>
        </div>
    )
}

export default Promoted
