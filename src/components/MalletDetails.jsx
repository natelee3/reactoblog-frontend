import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const MalletDetails = (props) => {
    const { id } = useParams();
    const [mallet, setMallet] = useState({})

    useEffect(() => {
        (async () => {
            const url=`http://localhost:3000/mallets/${id}`;
            const response = await fetch(url).then(response => response.json());
            setMallet(response[0]);
        })();
    }, [setMallet, id]);

    return (
        <>
            {!!mallet ? (
                 <Card className="card" border="secondary" style={{ width: '100%'}}>
                    <Row>
                        <Col m={6}>
                            <Card.Img className='detail-img' variant="top" src={mallet.img} />
                        </Col>
                        <Col md={6}>
                            <Card.Body className="pt-3 px-1">
                                <Card.Title className="pt-5">{mallet.brand_name} {mallet.name}</Card.Title>
                                <Card.Text>
                                    <p>Instrument: {mallet.for}</p>
                                    <p>Shaft material: {mallet.shaft}</p>
                                    <p>MSRP: ${mallet.msrp}</p>
                                </Card.Text>
                            </Card.Body>
                        </Col>
                    </Row>
                 </Card>


                ) : (
                <p>Mallet not found...</p>
            ) } 
        </>
    )
}

export default MalletDetails;