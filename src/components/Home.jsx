import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            malletsData: [],
            isLoggedIn: props.isLoggedIn
        }
    }

    render() {
        return (
            <div className='full-height'>
                {this.state.isLoggedIn ? (
                    <h1>You are logged in!</h1>
                ) : (
                    <h1>Welcome to Good Mallets</h1>
                )}
                <div>
                    <img src="/freer-mallets.jpg" />
                </div>
                <Link to='/mallets'>
                    <Button type="button">See Favorites</Button>
                </Link>
            </div>
        )
    }
}

export default Home;