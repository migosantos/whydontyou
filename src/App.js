import React, {Component} from 'react';
import './App.css';
import {activityList} from './activityList';

class App extends Component {
    state = {
        randomActivity: null,
        inAbout: false
    }

    getRandomInt = (max) => {
        return Math.floor(Math.random() * Math.floor(max));
    }

    componentDidMount() {
        this.moreHandler();
    }

    moreHandler = () => {
        let max = activityList.length - 1;
        let randomInt = this.getRandomInt(max);
        const oldState = {...this.state};
        oldState.randomActivity = activityList[randomInt];
        this.setState(oldState);
    }

    aboutHandler = () => {
        this.setState({inAbout: true});
    }

    homeHandler = () => {
        this.setState({inAbout: false});
    }

    render() {
        let content = !this.state.inAbout ? this.getHomeContent() : this.getAboutContent();

        return (
            <div class="mainContainer">
                <div className="toolbar">
                    <a href="#" onClick={this.aboutHandler} className="item">About</a>
                    <div className="spacer"></div>
                </div>

                {content}
            </div>
        )
    };

    getHomeContent = () => {
        return (
            <div className="content">
                <div className="card-container">
                    <span className="bigText">{this.state.randomActivity} </span>
                </div>
                <div>
                    <button onClick={this.moreHandler} className="button-secondary">MORE</button>
                </div>
                <div className="footer">
                    Whatever you do, do it at home.
                    <br/>
                    #flattenthecurve
                </div>
            </div>
        );
    }

    getAboutContent = () => {
        return (
            <div className="content">
                <div className="card-container-2">
                    <div> Nowadays, social distancing is life. Here are some things you can do to keep yourself
                        occupied at home.
                    </div>
                    <br/>
                    <br/>
                    <div>
                        Suggestions? <a href="mailto:whydontyoutellus@gmail.com">whydontyoutellus@gmail.com</a>
                    </div>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <div>
                        <button onClick={this.homeHandler} className="button-secondary">HOME</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
