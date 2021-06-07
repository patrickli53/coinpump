import React from 'react'
import './styles.css'
import Button from 'react-bootstrap/Button'

const PromotedRow = ({name, age, marketcap, votes,index}) => {
    console.log(index, "key")
    return (
             <tr>
                <td>{index+1}</td>
                <td>{name}</td>
                <td>{marketcap}</td>
                <td> {age}                </td>
                <td> 
                    <Button className="voteButton">
                        {votes}
                    </Button>
                </td>
            </tr>
    )
}

export default PromotedRow
 