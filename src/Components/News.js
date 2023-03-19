import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import loading from './loading.gif'

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

  async componentDidMount() {
    console.log("cdm");
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=1&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      articles: parseData.articles,
      totalResults: parseData.totalResults,
      loading: false,
    });
  }
  handlePrevbtn = async () => {
    console.log("previous");
    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${
      this.state.page - 1
    }&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      articles: parseData.articles,
      page: this.state.page - 1,
      loading: false,
    });
  };
  handleNextbtn = async () => {
    console.log("Next");
    let url = `https://newsapi.org/v2/top-headlines?country=${
      this.props.country
    }&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${
      this.state.page + 1
    }&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      articles: parseData.articles,
      page: this.state.page + 1,
      loading: false,
    });
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
                    title={element.title ? element.title.slice(0, 45) : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 90)
                        : ""
                    }
                    imageUrl={
                      element.urlToImage
                        ? element.urlToImage
                        : "https://www.shutterstock.com/image-vector/vector-progress-loading-bar-icon-260nw-1705895869.jpg"
                    }
                    newsUrl={element.url}
                  />
                </div>
              );
            })}
          {/* <div className="col-lg-4 col-md-6 my-2"><NewsItem imageUrl="" title="myTitle" description="myDec" /></div>
       <div className="col-lg-4 col-md-6 my-2"><NewsItem imageUrl="" title="myTitle" description="myDec" /></div>
       <div className="col-lg-4 col-md-6 my-2"><NewsItem imageUrl="" title="myTitle" description="myDec" /></div>
       <div className="col-lg-4 col-md-6 my-2"><NewsItem imageUrl="" title="myTitle" description="myDec" /></div>
       <div className="col-lg-4 col-md-6 my-2"><NewsItem imageUrl="" title="myTitle" description="myDec" /></div> */}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handlePrevbtn}
          >
            &larr; Previous
          </button>
          <button
            disabled={
              this.state.page + 1 > Math.ceil(this.state.totalResults / 9)
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
