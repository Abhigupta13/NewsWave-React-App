import React, { Component } from "react";

export default class extends Component {
  render() {
    let {title,description,imageUrl,newsUrl,date,auther,source} = this.props;
    return (
      <div className="my-3">
        <div className="card">
          <img src={imageUrl} className="card-img-top" alt="loading" />
          <div className="card-body">
          <p class="card-text"><small className="text-muted">by <b>{!auther?'unknown':auther}</b>  on {new Date(date).toGMTString()}</small></p>
            <h5 className="card-title">{title} <span class="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left : '90%' ,zIndex: '1'}}>{source}<span class="visually-hidden">unread messages</span>
  </span></h5>
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
