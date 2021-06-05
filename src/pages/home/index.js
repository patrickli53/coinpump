import React from 'react'
import Leaderboard from '../../components/leaderboard';
import NavigationBar from '../../components/navbar';
import Promoted from '../../components/promoted';
import './styles.css';

const Home = () => {
    return (
        <div className='homeBackground'>
            <NavigationBar />
            <div className="promotedTable">
                <Promoted />
            </div>
            <div className="promotedTable">
                <Leaderboard />
            </div>
            
        </div>
    )
}

export default Home
