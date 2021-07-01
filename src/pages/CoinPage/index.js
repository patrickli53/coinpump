import React, {useEffect, useState} from 'react'
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CoinInfo from '../../components/CoinInfo';
import {auth, firestore, firebase} from '../../components/config/fbConfig';
import Footer from '../../components/footer';
import Leaderboard from '../../components/leaderboard';
import NavigationBar from '../../components/navbar';
import './styles.css';

const CoinPage = ({match, location}) => {
    const {params: {coinId} } = match
    const [coinInfo, setCoinInfo] = useState({})
    
    useEffect(() => {
        fetchData();
    }, [coinId]);
    async function fetchData() {
            await firestore.collection("Coins").doc(`${coinId}`).get().then((doc) => {
                if (doc.exists) {
                    
                    setCoinInfo(doc.data())
                } else {
                    // doc.data() will be undefined in this case
                    
                }
            })
        }
    return (
        <>
            <NavigationBar />
            <div className="mt-5 infoContainer" style={{minHeight: "100vh"}}>
                <CoinInfo data={coinInfo} coinId={coinId}/>
                <h2 className='promotedTitle'>Promoted<Link className='promoteLink' to="/promote">Want your coin here?</Link></h2>
                <div className='promoted'> 
                    <Leaderboard  promoted="True" searchText=''/>
                </div>
            </div>
            
           
            <Footer />
        </>
    )
}

export default CoinPage
 