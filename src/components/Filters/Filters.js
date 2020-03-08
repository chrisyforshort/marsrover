import React from "react";
import "./Filters.css";

const Filters = props => 
    <div className="filters">          
        <p>Cameras <span>Sol</span></p>
        {props.children}
    </div>;

export default Filters;