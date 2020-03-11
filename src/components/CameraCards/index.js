import React from "react";
import "./CameraCards.css";

export default class CameraCards extends React.Component {
    state = {
        id: null,
        fullName: null,
        samplePhoto: null
    };

    async componentDidMount() {
        const url= "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=14&api_key=s4qQyX357rGwDgAa0XiIn7SArZdcbdJ3KviG9reH"
        const response = await fetch(url);
        const data = await response.json();
        this.setState({id: data.photos[0].id});
        this.setState({fullName: data.photos[0].camera.full_name});
        this.setState({samplePhoto: data.photos[0].img_src});
        console.log(data.photos[0].camera.img_src)
      }

      render() {
          return (
            <div className="cards">
            <div className="card-container">
                <h3>{this.state.fullName}</h3>
                <p>Photos: </p>
                <p>Sample photo:</p>
                <div className="imageDiv">
                    <img className =  "cardPhoto" src={this.state.samplePhoto} alt={this.state.id} />
                </div>
            </div>
        </div>
          );
      }

}