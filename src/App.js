import {Component} from 'react'
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import PalettePage from './pages/PalettePage';
import CreationsPage from './pages/CreationsPage'
import AccountAccess from './pages/AccountAccess';
import Nav from './Nav';

export default class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <Nav />
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/creations" component={CreationsPage} />
        <Route exact path="/palette" component={PalettePage} />
        <Route exact path="/accountaccess" render={() => <AccountAccess />} />
      </BrowserRouter>
    )
  }
}