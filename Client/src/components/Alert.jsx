import React from "react";

const Alert = (props) => {
  if(props.alert===null){ 
    return <div style={{height:'50px'}}></div>;
  }
  const capitalize = (word) => {
    const Lower = word.toLowerCase();
    return Lower.charAt(0).toUpperCase() + Lower.slice(1);
  }

  return (
    <div style={{height:'50px'}}>
      <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{capitalize(props.alert.type)}</strong> {props.alert.msg}
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>
    </div>
  );
}

export default Alert;
