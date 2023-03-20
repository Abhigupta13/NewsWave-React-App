import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

export default class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 8,
    category: "general",
    apiKey: "82ae958c9b30440092247a9cd93500b7",
  };
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
    apiKey: PropTypes.string,
  };

  constructor() {
    super();
    console.log("this is a constructer from news component");
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }

  async updateNews(){
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      articles: parseData.articles,
      totalResults: parseData.totalResults,
      loading: false,
    });
  }
  
  async componentDidMount(){
    this.updateNews();
    console.log(this.state.page);
  }
  handlePrevbtn = async() => {
    this.setState({page: this.state.page - 1});
    this.updateNews();
  };
  handleNextbtn = async() => {
    this.setState({page: this.state.page + 1});
    this.updateNews();
  };
  render() {
    return (
      <div className="container">
        <h1 className="text-center my-2">NewsWave - Top Headlines</h1>
        {this.state.loading && <Spinner />}
        <div className="row justify-content-center mt-3">
          {!this.state.loading &&
            this.state.articles &&
            this.state.articles.map((element) => {
              return (
                <div className="col-lg-4 col-md-6 my-2" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title: ""}
                    description={
                      element.description
                        ? element.description
                        : ""
                    }
                    imageUrl={
                      element.urlToImage
                        ? element.urlToImage
                        : "https://www.shutterstock.com/image-vector/vector-progress-loading-bar-icon-260nw-1705895869.jpg"
                    }
                    newsUrl={element.url} date={element.publishedAt} auther={element.author} source={element.source.name}
                  />
                 
                </div>
              );
            })}
        </div>
        <div className="container d-flex justify-content-between">
          <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevbtn}>&larr; Previous</button>
          <button
            disabled={
              this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)
            }
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextbtn}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}
