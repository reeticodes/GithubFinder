import React, { Fragment, useEffect , useContext} from 'react'
import Spinner from '../layout/Spinner'
import {Link} from 'react-router-dom'
import Repos from '../Repos/Repos'
import Githubcontext from '../../context/github/githubContext'


const User = ({match})=> {
  const githubContext = useContext(Githubcontext);
  const {user, loading, getUser, repos, getUserRepos}= githubContext;
  
    const {name,
      avatar_url,
      location,
      bio,
      blog,
      login,
      html_url,
      company,
      followers,
      following,
      public_repos,
      public_gists,
      hireable
    } = user;
    useEffect(() => {
      console.log('in user.js useEffect!!!')
      getUser(match.params.login);
      getUserRepos(match.params.login);
      // eslint-disable-next-line
    }, []);
    

    if(loading) return <Spinner/>
    return (
      <div style={{color:'white'}}>
        <Link to='/' className='btn btn-light'>
          Back To Search
        </Link>
        Hireable:{' '}
        {hireable ? <i className="fa fa-check text-success" /> : <i className="fa fa-times-circle text-danger" />}
        <div className="card grid-2" style={{ backgroundColor:'#dc3545'}}>
          <div className="all-center" >
            <img src={avatar_url}  className="round-img" style={{width:'150px'}} alt=""/>
            <h1>{name}</h1>
            <p>{location} </p>
          </div>
          <div>
            {bio&&<Fragment>
              <h3>Bio</h3>
            <p>{bio}</p>
              </Fragment>}
              <a href= {html_url}  
              className="btn btn-light my-1" >Visit Github Profile</a>
              <ul>
                <li>
                  {login&& <Fragment>
                    <strong>Username: </strong>{login}
                    </Fragment>}
                </li>
              <li>
                {company && <Fragment>
                  <strong>Company: </strong>{company}
                </Fragment>}
              </li>
              <li>
                {blog && <Fragment>
                  <strong>Website: </strong>{blog}
                </Fragment>}
              </li>
              </ul>
          </div>
          <div className="card text-center">
                <div className="badge badge-primary">Followers:{followers}</div>
            <div className="badge badge-success">Following:{following}</div>
            <div className="badge badge-danger" style={{ backgroundColor: 'black' }} >Public Repos:{public_repos}</div>
            <div className="badge badge-light">Public Gists:{public_gists}</div>
          </div>
        </div>
        <Repos repos={repos} />
      </div> 
    );
  }


export default User
