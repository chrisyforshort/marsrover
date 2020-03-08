import React , { Component, Fragment } from 'react';
import Title from "./components/Title";
import Filters from "./components/Filters";
import Wrapper from "./components/Wrapper";
import CameraCards from "./components/CameraCards";
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    }
  }

  componentDidMount() {
    fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=s4qQyX357rGwDgAa0XiIn7SArZdcbdJ3KviG9reH')
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json,
        })
      });
  }

  render() {
    var { isLoaded, items } = this.state;
    if (!isLoaded) {
      return <div>Loading...</div>;
    } else
    {
      return (
        <Fragment>
        <Title>
          <h2>Curiosity Images</h2>
          <p>Launched: 2011-11-26 | Landed: 2012-08-06 | Max Sol: 2540</p>
        </Title>
        <Filters>
          <p>Cameras <span>Sol</span></p>
        </Filters>
        <Wrapper>
          <CameraCards></CameraCards>
        </Wrapper>
      </Fragment>
      )
    }
  }

};

export default App;
