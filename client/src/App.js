import React from 'react';
import './App.css';
import CopyUserForm from './components/Form';
import UserData from './components/Data';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            users: []
        };
    }
    render() {
        console.log(this.state);
        return (
            <div className="App">
                <header className="App-header">
                    <h1>Testing</h1>
                    <UserData />
                    <CopyUserForm />
                </header>
            </div>
        );
    }
}

export default App;
