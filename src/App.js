import './App.css';

import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import LoadingBar from 'react-top-loading-bar'
import ProgressBar from "react-scroll-progress-bar"; 
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

export default class App extends Component {
  pageSize =9;
  country ='in'
  apiKey =process.env.REACT_APP_NEWS_API

  state={
    progress : 0
  }
  setProgress=(progress)=>{
    this.setState({
      progress: progress
    })
  }
  render() {
    
    return (
      <>
      <Router>
        <LoadingBar
        color='#f11946'
        height={3}
        progress={this.state.progress}
        
      />
    <Navbar/>
    <ProgressBar bgcolor="#0000ff"/>
    <Routes>
 <Route exact path="/*" element={<News setProgress={this.setProgress} pageSize={this.pageSize} category={'general'} country={this.country} apiKey={this.apiKey}/>}/>
 <Route exact path="/business" element={<News setProgress={this.setProgress} pageSize={this.pageSize} category={'business'} country={this.country} apiKey={this.apiKey}/>}/>
 <Route exact path="/entertainment" element={<News setProgress={this.setProgress} pageSize={this.pageSize} category={'entertainment'} country={this.country} apiKey={this.apiKey}/>}/>
 <Route exact path="/general" element={<News setProgress={this.setProgress} pageSize={this.pageSize} category={'general'} country={this.country} apiKey={this.apiKey}/>}/>
 <Route exact path="/health" element={<News setProgress={this.setProgress} pageSize={this.pageSize} category={'health'} country={this.country} apiKey={this.apiKey}/>}/>
 <Route exact path="/science" element={<News setProgress={this.setProgress} pageSize={this.pageSize} category={'science'} country={this.country} apiKey={this.apiKey}/>}/>
 <Route exact path="/sports" element={<News setProgress={this.setProgress} pageSize={this.pageSize} category={'sports'} country={this.country} apiKey={this.apiKey}/>}/>
 <Route exact path="/technology" element={<News setProgress={this.setProgress} pageSize={this.pageSize} category={'technology'} country={this.country} apiKey={this.apiKey}/>}/>
 </Routes>

      </Router>
    
      </>
    )
  }
}
