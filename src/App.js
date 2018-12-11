import React, {Component} from 'react';
import Header from './components/Header/Header';
import Picture from './components/Picture/Picture';

class App extends Component {
    state = {
        currentScore: 0,
        highScore: 0
    }

    setCurrentScore = (score) => {
        console.log(score);
        this.setState({currentScore: score})
    }

    setHighScore = (score) => {
        console.log(score);
        this.setState({highScore: score})
    }

    render() {
        return (
            <div>
                <Header
                    currentScore={this.state.currentScore}
                    highScore={this.state.highScore}/>
                <h4>Click as many pictures as you can without repeating!</h4>
                <div class='container'>
                    <Picture
                        setCurrentScore={this.setCurrentScore}
                        setHighScore={this.setHighScore}/>
                </div>

            </div>
        );
    }
}

export default App;
