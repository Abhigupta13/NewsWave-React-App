import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {
  render() {
    return (
        <div className="container">
            <h2>NewsWave - Top Headlines</h2>
      <div className="row justify-content-center mt-3">
       <div className="col-lg-4 col-md-6 my-2"><NewsItem imageUrl="https://cdn4.buysellads.net/uu/1/127419/1670532337-Stock2.jpg" title="myTitle" description="myDec" /></div>
       <div className="col-lg-4 col-md-6 my-2"><NewsItem imageUrl="" title="myTitle" description="myDec" /></div>
       <div className="col-lg-4 col-md-6 my-2"><NewsItem imageUrl="" title="myTitle" description="myDec" /></div>
       <div className="col-lg-4 col-md-6 my-2"><NewsItem imageUrl="" title="myTitle" description="myDec" /></div>
       <div className="col-lg-4 col-md-6 my-2"><NewsItem imageUrl="" title="myTitle" description="myDec" /></div>
       <div className="col-lg-4 col-md-6 my-2"><NewsItem imageUrl="" title="myTitle" description="myDec" /></div>
    


      </div>
      </div>
    )
  }
}
