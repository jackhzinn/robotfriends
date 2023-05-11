import React from "react";

import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import './App.css';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchField: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({robots: users}));
    }

    onSearchChange = (event) => {
        this.setState({searchField: event.target.value});
    }
    render () {
        const filteredRobots = this.state.robots.filter(robots => {
            return robots.name.toLowerCase().includes(this.state.searchField.toLowerCase())
        });
        if (this.state.robots.length) {
            return (
                <React.StrictMode>
                    <div className="tc">
                        <h1 className="f1 light-green">RoboFriends</h1>
                        <SearchBox searchChange={this.onSearchChange}/>
                        <Scroll>
                            <CardList robots={filteredRobots} />
                        </Scroll>
                    </div>
                </React.StrictMode>
            )
        } else {
            return (
                <React.StrictMode>
                    <h1>Loading...</h1>
                </React.StrictMode>
            )
        }
    }
}

export default App;