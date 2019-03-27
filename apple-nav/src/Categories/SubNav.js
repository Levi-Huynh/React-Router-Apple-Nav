import React from 'react';
import { Route } from 'react-router-dom';
import { NavLink} from 'react-router-dom'


export default props => {

  let id = props.match.params.id;

  let nav= props.apple.find( apple => apple.id === Number(id) );

    const returnHome = () => {
      props.history.push("/")
    }

    return (
        <div className="App">
        <div className='navbar'>
        
          <p>{nav.name}</p>
          {nav.img}
             

         
        </div>
      </div>
    )
  }