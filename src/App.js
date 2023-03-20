import './App.css';

import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

export default class App extends Component {
  pageSize =9;
  country ='in'
  apiKey ='2fcb4cc6c1f04d81bca7edcadd2c27fe'
  render() {
    
    return (
      <>
      <Router>
    <Navbar/>
    <Routes>
 <Route exact path="/*" element={<News pageSize={this.pageSize} category={'general'} country={this.country} apiKey={this.apiKey}/>}/>
 <Route exact path="/business" element={<News pageSize={this.pageSize} category={'business'} country={this.country} apiKey={this.apiKey}/>}/>
 <Route exact path="/entertainment" element={<News pageSize={this.pageSize} category={'entertainment'} country={this.country} apiKey={this.apiKey}/>}/>
 <Route exact path="/general" element={<News pageSize={this.pageSize} category={'general'} country={this.country} apiKey={this.apiKey}/>}/>
 <Route exact path="/health" element={<News pageSize={this.pageSize} category={'health'} country={this.country} apiKey={this.apiKey}/>}/>
 <Route exact path="/science" element={<News pageSize={this.pageSize} category={'science'} country={this.country} apiKey={this.apiKey}/>}/>
 <Route exact path="/sports" element={<News pageSize={this.pageSize} category={'sports'} country={this.country} apiKey={this.apiKey}/>}/>
 <Route exact path="/technology" element={<News pageSize={this.pageSize} category={'technology'} country={this.country} apiKey={this.apiKey}/>}/>
 </Routes>

      </Router>
    
      </>
    )
  }
}
