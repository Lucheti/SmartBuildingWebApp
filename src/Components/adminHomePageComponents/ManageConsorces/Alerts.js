import React from 'react'
import Alert from '../../consortHomePageComponents/Alert'

export const Alerts = ({alerts}) => {

  return (
        <ul style={{padding: 0, width: '100%', margin: 0}}>
          {alerts.map((alert, i) => (
            <>
              <Alert key={i} alert={alert} style={{}}/>
              {i !== alerts.length -1 && <hr/>}
            </>
          ))}
        </ul>
  )
}
