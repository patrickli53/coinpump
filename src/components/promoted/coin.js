import React from 'react'
import Button from 'react-bootstrap/Button'


const coin = (prop) => {
    return (
        <tr>
                    <td>1</td>
                    <td>{prop.name}</td>
                    <td>{prop.marketCap}</td>
                    <td>{prop.age}</td>
                    </tr>
    )
}

export default coin