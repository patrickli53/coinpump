import React, { useState, Component, useEffect } from 'react'
import {auth, firestore, firebase} from '../config/fbConfig';
import Table from 'react-bootstrap/Table'
import Alert from 'react-bootstrap/Alert'
import Leaderboard from '../../components/leaderboard';
import Promoted from '../../components/promoted';
import {Tab, Tabs} from 'react-bootstrap'
import './styles.css'


const LeaderboardWithTabs = () => {
    const [key, setKey] = useState('weekly')
    const [searchText, setSearchText] = useState('')

    const handleSearch = (event) => {
        setSearchText(event.target.value)
    }

    return (
        <div>
            <input type="text" onChange={handleSearch} placeholder="Search Coin" />
            <Tabs
            id="leaderboardTabs"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            >
                <Tab eventKey="allTime" title="All-Time">
                    <Leaderboard sortMethod = "allTime" searchText = {searchText}/>
                </Tab>
                <Tab eventKey="weekly" title="Weekly">
                    <Leaderboard sortMethod = "weekly" searchText = {searchText}/>
                </Tab>
            </Tabs>

        </div>
    )
}

export default LeaderboardWithTabs
