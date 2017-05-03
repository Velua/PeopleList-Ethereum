import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Web3 from 'web3';

const ETHEREUM_CLIENT = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'))
const peopleContractAbi = null;
const peopleAddress = null;

class App extends Component {
  render() {
    console.log(ETHEREUM_CLIENT);
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>People List Ethereum</h2>
        </div>
        <p className="App-intro">
          Read and write your name to the blockchain!
        </p>
        <div className="people-table">
          <table>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Address</th>
            </tr>
            <tr>
              <td>Goes here</td>
              <td>Goes here</td>
              <td>Goes here</td>
            </tr>
          </table>
        </div>
      </div>
    );
  }
}

export default App;
