import React , { Component, Fragment } from 'react';
import Title from "./components/Title";
import Filters from "./components/Filters";
import Wrapper from "./components/Wrapper";
import CameraCards from "./components/CameraCards";
import './App.css';

function App() {
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

export default App;
