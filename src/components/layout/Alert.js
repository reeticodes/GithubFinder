import React, { useContext } from 'react';
import AlertContext from '../../context/Alert/AlertContext'

  const Alert = () => {
    const alertContext = useContext(AlertContext)
    const { alert } = alertContext;
  return (
    alert!==null && (
      <div className={`alert alert-${alert.type}`} >
        <i className="fa fa-info-circle" style={{backgroundColor:'white'}} /> {alert.msg}
      </div>
    )
  );
};
export default Alert;
// 