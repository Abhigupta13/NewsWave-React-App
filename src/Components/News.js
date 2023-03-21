import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";


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
  capitalizeFirstLetter=(string)=>{
    return string.charAt(0).toUpperCase()+string.slice(1);
  }

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0
    };
    document.title =`${this.capitalizeFirstLetter(this.props.category)} - NewsWave`
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
    }
  handlePrevbtn = async() => {
    this.setState({page: this.state.page - 1});
    this.updateNews();
  };
  handleNextbtn = async() => {
    this.setState({page: this.state.page + 1});
    this.updateNews();
  };
  fetchMoreData = async() => {
    this.setState({page: this.state.page + 1})
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parseData.articles),
      totalResults: parseData.totalResults
    });

  };

topFunction=()=> {
  
}
  render() {
    return (
      <>
        <h1 className="text-center my-2">NewsWave - Top <i>from</i> <u>{this.capitalizeFirstLetter(this.props.category)}</u>  Headlines</h1>
        {this.state.loading && <Spinner />}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length <= this.state.totalResults}
          
          loader={<Spinner/>}
        >
          <div className="container">
        <div className="row justify-content-center mt-3">
          {this.state.articles.map((element) => {
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
                        : "https://media1.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif"
                    }
                    newsUrl={element.url} date={element.publishedAt} auther={element.author} source={element.source.name}
                  />
                 
                </div>
              );
            })}
        </div>
        </div>
        </InfiniteScroll>
        {/* <div className="container">
          <button className="Top">
        <a href="#Top">jump to top</a>

          </button>
        </div> */}
      </>
    );
  }
}
