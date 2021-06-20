import React, { useState } from 'react'
import { Card, Container } from 'react-bootstrap'

const CoinInfo = (props) => {
   const {Name} = props.data;
    return (
        <>
           <Card>
                <Card.Body>
                    <h2 className="">{Name}</h2>
                </Card.Body>
            </Card>
        </>
    )
}

export default CoinInfo;
