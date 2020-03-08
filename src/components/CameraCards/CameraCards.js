import React from "react";
import "./CameraCards.css";

const CameraCards = props => (
    <div className="cards">
        <div className="card-container">
            <h3></h3>
            <p>Photos: </p>
            <p>Sample photo:</p>
            <img alt={props} src={props} />
        </div>
    </div>
);

export default CameraCards;