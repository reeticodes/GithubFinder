import React, { useState, useContext } from 'react';
import GithubContext from '../../context/github/githubContext'
import AlertContext from '../../context/Alert/AlertContext'

  const Search =()=> {

    const githubContext = useContext(GithubContext);
    const alertContext = useContext(AlertContext)
    const [text,setText]= useState(' ');
    const onChange =(e)=>{
      setText( e.target.value)
    }
    const onSubmit=(e)=>{
      e.preventDefault();
      if(text===' ')
      {
        console.log("ALERT");
          alertContext.setAlert('Please enter something','light');
        
      }
      else
      {
        githubContext.searchUsers(text);
        setText( " " );
      }
      
    }
    return (
      <div>
        <form className="form" onSubmit={onSubmit} >
          <input type="text" name="text"
            placeholder="Search users..."   
          value={text}
          onChange={onChange}
          
          />
          <input type="submit" value="Search" className="btn btn-light btn-block" />
        </form>
        {
        githubContext.users.length>0 && (<button className="btn btn-light btn-block" 
        style={{backgroundColor:'#C0C0C0	'}}
        onClick={githubContext.clearUsers}>
          Clear
        </button>)
        }
        
      </div>
    );
  
}


export default Search
