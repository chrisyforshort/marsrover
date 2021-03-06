import React , { Component, Fragment } from 'react';
import Loading from "./components/Loading";
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
    fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=14&api_key=s4qQyX357rGwDgAa0XiIn7SArZdcbdJ3KviG9reH')
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
      return <Wrapper><Loading/></Wrapper>;
    } else
    {
      return (
        <Fragment>
        <Title />
        <Filters />
        <Wrapper>
          <CameraCards></CameraCards>
        </Wrapper>
      </Fragment>
      )
    }
  }

};

export default App;
