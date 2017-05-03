import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Web3 from 'web3';

var ETHEREUM_CLIENT = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'))
var peopleContractAbi = [{"constant":false,"inputs":[],"name":"getPeople","outputs":[{"name":"","type":"bytes32[]"},{"name":"","type":"bytes32[]"},{"name":"","type":"uint256[]"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_firstName","type":"bytes32"},{"name":"_lastName","type":"bytes32"},{"name":"_age","type":"uint256"}],"name":"addPerson","outputs":[{"name":"success","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"people","outputs":[{"name":"firstName","type":"bytes32"},{"name":"lastName","type":"bytes32"},{"name":"age","type":"uint256"}],"payable":false,"type":"function"}]
var peopleContractAddress = '0xbbb3503da6c970fabf5db03cd6793f36e644f111';

var peopleContract = ETHEREUM_CLIENT.eth.contract(peopleContractAbi).at(peopleContractAddress)


class App extends Component {

  componentWillMount(){
    console.log(peopleContract.getPeople.call())
  }

  render() {


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
