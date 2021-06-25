import React, {useEffect, useState} from 'react'
import { Container } from 'react-bootstrap';
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
    }, []);
    async function fetchData() {
            await firestore.collection("Coins").doc(`${coinId}`).get().then((doc) => {
                if (doc.exists) {
                    console.log("Document data:", doc.data());
                    setCoinInfo(doc.data())
                } else {
                    // doc.data() will be undefined in this case
                    console.log("No such document!");
                }
            })
        }
    return (
        <>
            <NavigationBar />
            <div style={{minHeight: "100vh"}}>
                <Container className="mt-5" >  
                    <CoinInfo data={coinInfo} coinId={coinId}/>
                    
                </Container>
                <div className='promoted'> 
                    <Leaderboard  promoted="True" searchText=''/>
                </div>
            </div>
            
           
            <Footer />
        </>
    )
}

export default CoinPage
 