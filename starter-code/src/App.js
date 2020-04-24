import React from 'react';
/// import logo from './logo.svg';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import countries from './countries.json';
import CountryList from './components/CountryList';
import CountryDetails from './components/CountryDetails';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="row">
        <div className="col-5" style={{maxHeight: '90vh', overflow: 'scroll'}}>
          <div className="list-group">
            <CountryList countries={countries}/>
          </div>
        </div>
        <div className="col-7">
          <Switch>
          <Route exact path='/countries/:countryCode' render={props => <CountryDetails {...props} countries={countries}/>}/>
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
