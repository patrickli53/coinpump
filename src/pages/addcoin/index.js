import React,{useState} from 'react'
import NavigationBar from '../../components/navbar'
import './styles.css'
import Form from 'react-bootstrap/Form'
import ReactDatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
import { InputGroup } from 'react-bootstrap'

const AddCoin = () => {
    const [date, setDate] = useState(new Date());

    function onChange(date) {
        setDate(date);
    }

    return (
        <div className="mainDiv">
            <NavigationBar />
            <div>
                <Form>
                    <Form.Group controlId="name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control as="textarea" rows={1} />
                    </Form.Group>
                    <Form.Group controlId="symbol">
                        <Form.Label>Symbol</Form.Label>
                        <Form.Control as="textarea" rows={1} />
                    </Form.Group>
                    <Form.Group controlId="description">
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                    <Form.Group controlId="logo">
                        <Form.Label>Logo</Form.Label>
                        <Form.Control as="textarea" rows={1} />
                    </Form.Group>
                    <Form.Group controlId="price">
                        <Form.Label>Price</Form.Label>
                        <Form.Control as="textarea" rows={1} />
                    </Form.Group>
                    <Form.Group controlId="marketcap">
                        <Form.Label>Market Cap</Form.Label>
                        <Form.Control as="textarea" rows={1} />
                    </Form.Group>
                    <Form.Group controlId="launchdate">
                        <Form.Label>Launch Date</Form.Label>
                        <InputGroup>
                            <ReactDatePicker selected={date} onChange={onChange}/>
                        </InputGroup>
                    </Form.Group>
                    <Form.Group controlId="bsc">
                        <Form.Label>Binance Smart Chain</Form.Label>
                        <Form.Control as="textarea" rows={1} />
                    </Form.Group>
                    <Form.Group controlId="eth">
                        <Form.Label>Ethereum</Form.Label>
                        <Form.Control as="textarea" rows={1} />
                    </Form.Group>
                    <Form.Group controlId="solana">
                        <Form.Label>Solana</Form.Label>
                        <Form.Control as="textarea" rows={1} />
                    </Form.Group>
                    <Form.Group controlId="website">
                        <Form.Label>Website</Form.Label>
                        <Form.Control as="textarea" rows={1} />
                    </Form.Group>
                    <Form.Group controlId="telegram">
                        <Form.Label>Telegram</Form.Label>
                        <Form.Control as="textarea" rows={1} />
                    </Form.Group>
                    <Form.Group controlId="twitter">
                        <Form.Label>Twitter</Form.Label>
                        <Form.Control as="textarea" rows={1} />
                    </Form.Group>
                    <Form.Group controlId="promotion">
                        <Form.Check type="checkbox" label="Promoted Section" />
                    </Form.Group>
                </Form>
            </div>
        </div>
    )
}

export default AddCoin
