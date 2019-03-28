import React, { Component } from 'react';
import { Route } from 'react-router-dom'

import AppleData from '../src/AppleData';
import NavBar from '../src/Categories/NavBar';
import home from '../src/Categories/home';
import SubNav from '../src/Categories/SubNav';
import logo from './logo.svg';
import './App.css';
import SupportPage from './Categories/SupportPage';

class App extends Component {
 constructor(){
   super()
   this.state={
     apple: AppleData,
     showMenu: true,
     shopping: true
   }
   console.log(this.state.apple);
 }

 menuShowToggle = () => {
  this.setState({showMenu: !this.state.showMenu})
}

shoppingToggle = () => {
  this.setState({shopping: !this.state.shopping})
}

  render() {

    return (
      <div className="App">
        <Route path="/" render={ props => <NavBar apple={this.state.apple} {...props} shopToggle={this.shoppingToggle.bind(this)} 
        toggleMenu={this.menuShowToggle.bind(this)} menu={this.state.showMenu} shop={this.state.shopping}/>}/>
        <Route exact path="/:name" render={ props => <SubNav apple={this.state.apple} {...props}/>}/>
        <Route path="/" component={home}/>
        

      </div>
    );
  }
}

export default App;
