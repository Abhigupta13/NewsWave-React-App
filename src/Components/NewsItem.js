import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    let {title,description,imageUrl,newsUrl,date,auther,source} = this.props;
    return (
      <div className="my-3">
        <div className="card">
          <div className="container">
          <span className="pbadge rounded-pill d-flex bg-danger position-absolute px-1" style={{justifyContent:'flex-end', right: '0'}}>{ source }<span className="visually-hidden">unread messages</span>
  </span>
          </div>
          <img src={imageUrl} className="card-img-top" alt="loading" />
          <div className="card-body">
          <p className="card-text"><small className="text-muted">by <b>{!auther?'unknown':auther}</b>  on {new Date(date).toGMTString()}</small></p>
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}...</p>

            <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-dark">
               Read More...
            </a>
          </div>
        </div>
      </div>
    );
  }
}
