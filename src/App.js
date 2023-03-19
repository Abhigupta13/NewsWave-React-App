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
  render() {
    
    return (
      <>
      <Router>
    <Navbar/>
    <Routes>
 <Route exact path="/*" element={<News pageSize={6} category={'business'} country={'in'} apiKey={'82ae958c9b30440092247a9cd93500b7'}/>}/>
 <Route exact path="/business" element={<News pageSize={6} category={'business'} country={'in'} apiKey={'82ae958c9b30440092247a9cd93500b7'}/>}/>
 <Route exact path="/entertainment" element={<News pageSize={6} category={'entertainment'} country={'in'} apiKey={'82ae958c9b30440092247a9cd93500b7'}/>}/>
 <Route exact path="/general" element={<News pageSize={6} category={'general'} country={'in'} apiKey={'82ae958c9b30440092247a9cd93500b7'}/>}/>
 <Route exact path="/health" element={<News pageSize={6} category={'health'} country={'in'} apiKey={'82ae958c9b30440092247a9cd93500b7'}/>}/>
 <Route exact path="/science" element={<News pageSize={6} category={'science'} country={'in'} apiKey={'82ae958c9b30440092247a9cd93500b7'}/>}/>
 <Route exact path="/sports" element={<News pageSize={6} category={'sports'} country={'in'} apiKey={'82ae958c9b30440092247a9cd93500b7'}/>}/>
 <Route exact path="/technology" element={<News pageSize={6} category={'technology'} country={'in'} apiKey={'82ae958c9b30440092247a9cd93500b7'}/>}/>
 </Routes>

      </Router>
    
      </>
    )
  }
}
