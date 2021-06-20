import React, {useEffect, useState} from 'react'
import { Container } from 'react-bootstrap';
import CoinInfo from '../../components/CoinInfo';
import {auth, firestore, firebase} from '../../components/config/fbConfig';
import NavigationBar from '../../components/navbar';
import Promoted from '../../components/promoted';

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
            <Container className="mt-5" style={{minHeight: "100vh"}}>  
                <div className="w-100" style={{maxWidth:"400px"}}>
                    <CoinInfo data={coinInfo} />
                </div>
            </Container>
            <Promoted />
        </>
    )
}

export default CoinPage
 