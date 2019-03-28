import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import { Route } from 'react-router-dom'

export default props => {
 


    return (
    
        <div className="navbar">
        <NavLink exact  activeClassName="activeNavButton" to={`/`}><i class="fab fa-apple"></i></NavLink>
        {props.apple.map(nav => {

     
        return (
         
          <div >
         
            <NavLink exact  activeClassName="activeNavButton" to={`/${nav.name}`}> {nav.name}</NavLink>
           
              </div>
            
        )
      })}
          <NavLink exact  activeClassName="activeNavButton" to={`/`}>Support</NavLink>
          <NavLink exact  activeClassName="activeNavButton" to={`/`}><i class="fas fa-search"></i></NavLink>
          <NavLink exact  activeClassName="activeNavButton" to={`/`}><i class="fas fa-shopping-bag"></i></NavLink>
     </div>
     
    )
  }
  

  // <NavLink exact activeClassName="activeNavButton" to={`/${nav.id}`}> <i class="fab fa-apple"></i> </NavLink>
  //             <NavLink activeClassName="activeNavButton" to={`/${nav.id}`}> Mac</NavLink>
  //             <NavLink exact activeClassName="activeNavButton" to={`/${nav.id}`}>iPad</NavLink>
  //             <NavLink exact activeClassName="activeNavButton" to={`/${nav.id}`}>iPhone</NavLink>
  //             <NavLink exact activeClassName="activeNavButton" to={`/${nav.id}`}>Watch</NavLink>
  //             <NavLink exact activeClassName="activeNavButton" to={`/${nav.id}`}>TV</NavLink>
  //             <NavLink exact activeClassName="activeNavButton" to={`/${nav.id}`}>Music</NavLink>
  //             <NavLink exact activeClassName="activeNavButton" to={`/${nav.id}`}>Support</NavLink>
  //             <NavLink exact activeClassName="activeNavButton" to={`/${nav.id}`}><i class="fas fa-search"></i></NavLink>
  //             <NavLink exact activeClassName="activeNavButton" to={`/${nav.id}`}><i class="fas fa-shopping-bag"></i></NavLink>