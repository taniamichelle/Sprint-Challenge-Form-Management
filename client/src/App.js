import React from 'react';
import './App.css';
import CopyUserForm from './components/Form';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            foods: []
        };
    }
    componentDidMount() {
        this.getFood();
    }
    // changeFoodName = ({ foodName }) => {
    //     this.setState({ foodName });
    // }
    getFood = () => {
        fetch(`http://localhost:5000/api/restricted/data`)
            .then(res => res.json())
            .then(data => this.setState({ foods: data }))
    }
    //only runs on re-renders, not on initial render
    // componentDidUpdate() {
    //     //need conditional statement to prevent an infinite loop of fetching data
    //     if (this.prevState.foodName !== this.state.foodName) {
    //         this.getFood();
    //     }
    // }
    // addFood = item => {
    //     this.setState({
    //         foods: [...this.state.foods, {
    //             name: name,
    //             id: Date.now(),
    //             course: course
    //         }]
    //     });
    // };
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1>Testing</h1>
                    < CopyUserForm />
                    <FoodData foods={this.state.foods} />
                </header>
            </div>
        );
    }
}
function FoodData(props) {
    return (
        <div>
            {props.foods.map(food => <li>{food.name}</li>)}
        </div>
    );
}
export default App;
