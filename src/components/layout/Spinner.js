import React,{Fragment} from 'react'
import spinner from './25.gif'

export const Spinner = () => 
  
    <div>
      <Fragment>
        <img src={spinner} alt="Loading" style={{width:'200px',margin:'auto',display:'block'}} />
      </Fragment>
    </div>
  
export default Spinner;
