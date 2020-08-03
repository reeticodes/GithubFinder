import React, {useReducer} from 'react';
import axios from 'axios';
import GithubContext from './githubContext';
import GithubReducer from './GithubReducer';
import {
      SEARCH_USERS ,
      GET_USER,
      CLEAR_USERS,
      SET_LOADING,
      GET_REPOS,
      SET_ALERT,
      REMOVE_ALERT
} from '../types'

let githubClientId;
let githubClientSecret;

if(process.env.NODE_ENV!=='production')
{
  githubClientId=process.env.REACT_APP_GITHUB_CLIENT_ID;
  githubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
}
else{
  githubClientId = process.env.GITHUB_CLIENT_ID;
  githubClientSecret = process.env.GITHUB_CLIENT_SECRET;
}

const GithubState = props =>{
  const initialState ={
    users:[],
    user: {},
    repos :[],
    loading : false,
  }
  
  const [state,dispatch] = useReducer(GithubReducer,initialState);

  //Search Users
  const searchUsers = async (text) => {
    setloading();

    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${githubClientId}&client_secret=${githubClientSecret}`);

  
    dispatch({
      type: SEARCH_USERS,
      payload : res.data.items
    })

  };
  //Get User
  const getUser = async (username) => {
    setloading();
    const res = await axios.get(`https://api.github.com/users/${username}?client_id=${githubClientId}&client_secret=${githubClientSecret}`);
    dispatch({
      type : GET_USER,
      payload: res.data
    })
  }
 //Clear Users
  const clearUsers = () => dispatch({type : CLEAR_USERS})
 //set loading 
  const setloading = ()=> dispatch({ type: SET_LOADING })
  //get repos
  const getUserRepos = async (username) => {
    
    setloading();
    
    const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    
    dispatch({
      type: GET_REPOS,
      payload: res.data
    });
    console.log("IN GET REPO")
  };

return <GithubContext.Provider
  value={{
    users: state.users,
    user: state.user,
    repos: state.repos,
    loading: state.loading,
    searchUsers,
    clearUsers,
    getUser,
    getUserRepos
  }}>
          
          {props.children}
        </GithubContext.Provider>
}


export default GithubState;