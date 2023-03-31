import React from 'react'

function Alert(props) {
  return ( 
    <div style={{height: '55px'}}>
      {/* If props.alert is not null then we will execute the code after && */}
      {props.alert && <div className="alert alert-success alert-dismissible fade show" role="alert">
          <strong>{props.alert.type}</strong>: {props.alert.msg}
      </div>}
    </div>
  )
}

export default Alert