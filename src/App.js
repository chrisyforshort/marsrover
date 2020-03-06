import React , { Component, Fragment } from 'react';
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import './App.css';

function App() {
  return (
    <Fragment>
      <Title><h2>Curiosity Images</h2>
        <p>Launched: 2011-11-26 | Landed: 2012-08-06 | Max Sol: 2540</p>
      </Title>
    </Fragment>
  );
}

export default App;
