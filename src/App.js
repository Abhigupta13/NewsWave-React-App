import './App.css';

import React, {useState } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import LoadingBar from 'react-top-loading-bar'
import ProgressBar from "react-scroll-progress-bar"; 
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

const App =()=>{
  let pageSize =9;
  let country ='in'
  let apiKey =process.env.REACT_APP_NEWS_API
const [progress, setProgress] = useState(0)
  
    return (
      <>
      <Router>
        <LoadingBar
        color='#f11946'
        height={3}
        progress={progress}
        
      />
       <ProgressBar bgcolor="#0000ff"/>
       <Navbar/>
    
   
    <Routes>
 <Route exact path="/*" element={<News setProgress={setProgress} pageSize={pageSize} category={'general'} country={country} apiKey={apiKey}/>}/>
 <Route exact path="/business" element={<News setProgress={setProgress} pageSize={pageSize} category={'business'} country={country} apiKey={apiKey}/>}/>
 <Route exact path="/entertainment" element={<News setProgress={setProgress} pageSize={pageSize} category={'entertainment'} country={country} apiKey={apiKey}/>}/>
 <Route exact path="/general" element={<News setProgress={setProgress} pageSize={pageSize} category={'general'} country={country} apiKey={apiKey}/>}/>
 <Route exact path="/health" element={<News setProgress={setProgress} pageSize={pageSize} category={'health'} country={country} apiKey={apiKey}/>}/>
 <Route exact path="/science" element={<News setProgress={setProgress} pageSize={pageSize} category={'science'} country={country} apiKey={apiKey}/>}/>
 <Route exact path="/sports" element={<News setProgress={setProgress} pageSize={pageSize} category={'sports'} country={country} apiKey={apiKey}/>}/>
 <Route exact path="/technology" element={<News setProgress={setProgress} pageSize={pageSize} category={'technology'} country={country} apiKey={apiKey}/>}/>
 </Routes>

      </Router>
    
      </>
    )
  }

export default App;
