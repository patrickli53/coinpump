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

    return (
        <div>
            <h2>Leaderboard</h2>
            <Tabs
            id="leaderboardTabs"
            activeKey={key}
            onSelect={(k) => setKey(k)}
            >
                <Tab eventKey="allTime" title="All-Time">
                    <Leaderboard sortMethod = "allTime"/>
                </Tab>
                <Tab eventKey="weekly" title="Weekly">
                    <Leaderboard sortMethod = "weekly"/>
                </Tab>
            </Tabs>

        </div>
    )
}

export default LeaderboardWithTabs
