import React from "react";

const Alert = (props) => {
    return (
        <div>
            <div className="alert alert-primary alert-dismissible" role="alert" style={{textAlign:"center"}}>
                {props.message}
            </div>
        </div>
    );
};

export default Alert;
