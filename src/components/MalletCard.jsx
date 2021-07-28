import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

const MalletCard = (props) => {
    const { mallet } = props;

    return (
            <Card className="card mallet-card" border="secondary" style={{ width: '18rem'}}>
            <Card.Img className='card-img' variant="top" src={mallet.img} />
            <Card.Body className="cardbody">
                <Card.Title>{mallet.brand_name} {mallet.name}</Card.Title>
                <Card.Text>
                    <p>Instrument: {mallet.for}</p>
                    <p>Shaft material: {mallet.shaft}</p>
                    <p>MSRP: ${mallet.msrp}</p>
                </Card.Text>
            </Card.Body>
            </Card>
    )
}

export default MalletCard;

