import React, {useEffect, useState} from 'react'
import {auth, firestore, firebase} from '../../components/config/fbConfig';

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
        <p>
          <strong>Match Props: </strong>
          <code>{JSON.stringify(match, null, 2)}</code>
        </p>
        <p>
          <strong>Location Props: </strong>
          <code>{JSON.stringify(location, null, 2)}</code>
        </p>
        <p>
          <strong>Coin Info: </strong>
          <code>{JSON.stringify(coinInfo)}</code>
        </p>
      </>
    )
}

export default CoinPage
 