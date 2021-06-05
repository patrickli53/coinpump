import React from 'react'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import './styles.css'


const Promoted = () => {
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
                    <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td> 
                        <Button className="voteButton">
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
                        <Button className="voteButton">
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
                        <Button className="voteButton">
                            1000 
                        </Button>
                    </td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}

export default Promoted
