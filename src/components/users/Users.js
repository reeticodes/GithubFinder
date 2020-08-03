import React from 'react';
import Useritem from './Useritem';
import Spinner from '../layout/Spinner';
import GithubContext from '../../context/github/githubContext'
import { useContext } from 'react';


  const Users = ()=> {
    const githubContext = useContext(GithubContext);
    const {loading,users}= githubContext;
    if(loading)
    return <Spinner/>
    else
    return (
      <div style={userStyle}>
        {users.map((user)=>(
          <Useritem key={user.id} user={user}>
          </Useritem>
        ))}
      </div>
    );
  }

const userStyle ={
  display:'grid',
  gridTemplateColumns:'repeat(3,1fr)',
  gridGap:'1rem'
}

export default Users
