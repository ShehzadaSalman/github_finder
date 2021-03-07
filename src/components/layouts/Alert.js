import React, {useContext} from 'react'
import AlertContext from '../../context/alert/alertContext'

export const Alert = () => {
    const alertContext = useContext(AlertContext)
    const {alert} = alertContext;
    return (
    alert ? (
        <div className={`alert alert-${alert.type}`}>
       <i className="fas fa-info-circle mr-2" />
          {alert.msg}
        </div>
    )
    :
    ''
    )
}
 