import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Sidebar from './components/SideBar'


class App extends Component {
  render() {
    return (
      //<div className="App">
      <div class="container">
      <div class="row">
      <div class="col-md-12">
      <Navbar />
      </div>
      </div>
      <div class="row">
      <div class="col-md-1"></div>
      <div class="col-md-3">
      <Sidebar />
      </div>
      <div class="col-md-7">
      <h1>Content of page</h1>
      </div>
      </div>
      <div class="row">
      <div class="col-md-12">
      <Footer />
      </div>
      </div>
      </div>
      /*
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <h1>test</h1>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
      */
    );
  }
}

export default App;
