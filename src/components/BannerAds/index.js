import {React, useState, useEffect} from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { firebase, firestore } from '../config/fbConfig'
import {Link, useHistory} from 'react-router-dom';
import 'firebase/storage'

const BannerAds = () => {
    const storage = firebase.storage();
    const storageRef = storage.ref();

    const [fileURL, setFileURL] = useState(''); // Filename in BannerAds storage bucket
    const [link, setLink] = useState(''); // Where clicking the ad takes you
    const [fileName, setFileName] = useState('');

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        console.log("LinkUseEffect: ", link)
    }, [link]);

    useEffect(() => {
        const getFileUrl = storageRef.child(`BannerAds/${fileName}`).getDownloadURL().then(function(url){
            setFileURL(url)
        });
    }, [fileName]);


    async function fetchData(){
        await firestore.collection("BannerAds").get().then((querySnapshot) => {
            const size = querySnapshot.size;

            var index = Math.floor((Math.random() * size));

            querySnapshot.forEach((doc) => {
                
                if (doc.data().id == index){
                    console.log("ID: ", doc.id);
                    const getLink = doc.data().Link;
                    const getFileName = doc.data().FileName;

                    setFileName(getFileName);
                    setLink(getLink);
                }
            })
        });

        
    }

    return (
        <div >
            <Link to={{pathname: link}} target="_blank"> 
            <img
                alt=""
                src={fileURL}
                width="450"
                height="75"
                className="d-flex mr-0 ml-auto" 
            />
            </Link>
        </div>
    )

}

export default BannerAds
