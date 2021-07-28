
import React, { useState, useEffect } from 'react';
import { Route, Link, useHistory } from 'react-router-dom';
import MalletDetails from './MalletDetails';
import MalletCard from './MalletCard';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

const MalletList = (props) => {
    const [malletData, setMalletData] = useState([])
    const history = useHistory();

    useEffect(() => {
        (async () => {
            const url='http://localhost:3000/mallets';
            const response = await fetch(url).then(response => response.json());
            console.log(response)
            setMalletData(response);
        })();
    }, [setMalletData]); 
        
    return (
        <Container>
            <h1>Our Favorites</h1>
                {!!malletData.length ? (
                    <>
                    <Route exact path='/mallets'>
                         <div className="card-grid">
                            {malletData.map((mallet, index) => (
                                <Link key={mallet.id} to={`/mallets/${mallet.id}`}>
                                    <MalletCard mallet={mallet} />
                                </Link>
                            ))}
                        </div>
                    </Route>

                    <Route path='/mallets/:id'>
                        <MalletDetails />
                        <Button type="button" onClick={() => history.goBack()}>Back</Button>
                    </Route>
                    </>
                    
            ) : (
                <p>Loading mallet list...</p>
            )}
            
        </Container>
    )
}

export default MalletList;