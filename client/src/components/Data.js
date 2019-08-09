import React from 'react';
import axios from 'axios';

export default class UserData extends React.Component {
    state = {
        users: []
    }

    componentDidMount() {
        axios.get(`http://localhost:5000/api/restricted/data`)
            .then(res => {
                console.log(res)
            })
            .then(res => {
                const users = res.data;
                this.setState({ users });
            })
            .catch(err => console.log(err.response)
            )
    }

    render() {
        return (
            <ul>
                {this.state.users.map(user => <li>{user.name}</li>)}
            </ul>
        )
    }
}