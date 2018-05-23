import React, {Component} from 'react';
import pr_logo from './pr-logo.png';
import rsx_logo from './logo.svg';
import github_logo from './GitHub-Mark-Light-64px.png';
import './scss/colors.css';
import './App.css';

import OrganizationList from './components/Organizations';
import RepositoriesSelected from './components/RepositoriesSelected';

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={github_logo} className="GitHub-logo" alt="logo"/>
                    <img src={pr_logo} className="PR-logo" alt="logo"/>
                    <img src={rsx_logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <RepositoriesSelected/>
                <OrganizationList/>
            </div>
        );
    }
}

export default App;
