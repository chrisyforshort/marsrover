import React from "react";
import "./Filters.css";
import ReactMultiSelectCheckboxes from 'react-multiselect-checkboxes';

const Filters = props => 
    <div className="filters">          
        <p>Cameras <span className="solSpan">Sol</span></p>
        <div className="optionsDiv">
            <div className="dropdown">
                <button className="camerasBTN"><span id="camerasSelected">7</span> Selected<i class="fa fa-caret-down" /></button>
                <div className="dropdown-content">
                    <div>
                        <button className="dropDownBTN" id="selectAll">Select All</button>
                        <button className="dropDownBTN" id="clear">Clear</button>
                    </div>
                    <div>
                        <label className="container cameraLabel">
                            <input type="checkbox" className="checkBox"/>
                            <p>Front Hazard Avoidance Camera</p>
                        </label>
                    </div>
                    <div>
                        <label className="container cameraLabel">
                            <input type="checkbox" className="checkBox" checked="checked" />
                            <p>Navigation Camera</p>
                        </label>
                    </div>
                    <div>
                        <label className="container cameraLabel">
                            <input type="checkbox" className="checkBox" checked="checked" />
                            <p>Mast Camera</p>
                        </label>
                    </div>
                    <div>
                        <label className="container cameraLabel">
                            <input type="checkbox" className="checkBox" checked="checked" />
                            <p>Chemistry and Camera Complex</p>
                        </label>
                    </div>
                    <div>
                        <label className="container cameraLabel">
                            <input type="checkbox" className="checkBox" checked="checked" />
                            <p>Mars Hand Lens Imager</p>
                        </label>
                    </div>
                    <div>
                        <label className="container cameraLabel">
                            <input type="checkbox" className="checkBox" checked="checked" />
                            <p>Rear Hazard Avoidance Camera</p>
                        </label>
                    </div>
                </div>
            </div>
            <div>
                <label className="container">
                    <input className="solInput" type="number" placeholder="14" name="sol"/>
                </label>
            </div>
        </div>
    </div>;

export default Filters;