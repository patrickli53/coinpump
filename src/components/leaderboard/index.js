import React from 'react'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import './styles.css'


const Leaderboard = () => {
    return (
        <div>
            <h2>
                Leaderboard
            </h2>
            <Tabs className="leadertabs" defaultActiveKey="today" id="uncontrolled-tab-example">
                <Tab className='leadertab' eventKey="today" title="Today">
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
                        <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td> 
                            <Button className="">
                                1000 
                            </Button>
                        </td>
                        </tr>
                        <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        <td> 
                            <Button className="">
                                1000 
                            </Button>
                        </td>
                        </tr>
                        <tr>
                        <td>3</td>
                        <td>Larry the Bird</td>
                        <td>the Bird</td>
                        <td> 
                            @twitter
                        </td>
                        <td> 
                            <Button className="">
                                1000 
                            </Button>
                        </td>
                        </tr>
                    </tbody>
                </Table>
                </Tab>
                <Tab className='leadertab' eventKey="alltime" title="All Time">
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
                            <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td> 
                                <Button className="">
                                    1000 
                                </Button>
                            </td>
                            </tr>
                            <tr>
                            <td>2</td>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                            <td> 
                                <Button className="">
                                    1000 
                                </Button>
                            </td>
                            </tr>
                            <tr>
                            <td>3</td>
                            <td>Larry the Bird</td>
                            <td>the Bird</td>
                            <td> 
                                @twitter
                            </td>
                            <td> 
                                <Button className="">
                                    1000 
                                </Button>
                            </td>
                            </tr>
                        </tbody>
                    </Table>
                </Tab>
            </Tabs>
        </div>
    )
}

export default Leaderboard
