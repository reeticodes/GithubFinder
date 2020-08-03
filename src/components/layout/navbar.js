import React  from 'react';
import {Link} from 'react-router-dom'

 const navbar =(props)=> {
 
    return (
      <nav className="navbar bg-primary">
        
        <h1 style={{backgroundColor:'#dc3545'}}>
          <i style={{backgroundColor:'#dc3545'}} className={props.icon} />{props.title}
        </h1>
        <ul>
          <li>
            <Link style={{borderRadius: '6px'}} to="/">Home</Link>
          </li>
          <li>
            <Link style={{borderRadius: '6px'}} to="/about">About</Link>
          </li>
        </ul>
      </nav> 
    )
  
}


export default navbar
