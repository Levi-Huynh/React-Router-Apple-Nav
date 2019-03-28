import React from 'react';
import { Route } from 'react-router-dom';
import { NavLink} from 'react-router-dom'


export default props => {

  let name = props.match.params.name;

  let nav= props.apple.find( apple => apple.name === name);

    const returnHome = () => {
      props.history.push("/")
    }

    return (
        <div className="App">
        <div className='navbar'>
        
          
          {nav.img}
             
      
         
        </div>

        <div>
          <h1>Hello. This is the Apple {nav.name}.</h1>
          </div>
      </div>
    )
  }