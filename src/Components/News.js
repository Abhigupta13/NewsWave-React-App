import React, { useEffect,useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";



const News =(props)=> {
  const [articles, setArticles] = useState([])
  const [loading, setLoding] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)
 
  const capitalizeFirstLetter=(string)=>{
    return string.charAt(0).toUpperCase()+string.slice(1);
  }

  const updateNews=async()=>{
    props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setLoding(true);
    let data = await fetch(url);
    props.setProgress(40);
    let parseData = await data.json();
    props.setProgress(70);
    setArticles(parseData.articles);
    setTotalResults(parseData.totalResults);
    setLoding(false);
    props.setProgress(100);

  }
  useEffect(() => {
      document.title =`${capitalizeFirstLetter(props.category)} - NewsWave`
    updateNews();
    setPage(page+1);
    // eslint-disable-next-line
  }, [])
 
  // const handlePrevbtn = async() => {
  //   setPage(page-1);
  //   updateNews();
  // };
  // const handleNextbtn = async() => {
  //   setPage(page+1);
  //   updateNews();
  // };
  
  const fetchMoreData = async() => {
    setPage(page+1);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    let parseData = await data.json();
    setArticles(articles.concat(parseData.articles));
    setTotalResults(parseData.totalResults);

  };
    return (
      <>
        <h1 className="text-center" style={{marginTop: "70px"}}>NewsWave - Top <i>from</i> <u>{capitalizeFirstLetter(props.category)}</u>  Headlines</h1>
        {loading && <Spinner />}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          
          loader={<Spinner/>}
        >
          <div className="container">
        <div className="row justify-content-center mt-3">
          {articles.map((element) => {
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
News.defaultProps = {
  country: "in",
  pageSize: 8,
  category: "general",
  apiKey: "82ae958c9b30440092247a9cd93500b7",
};
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
  apiKey: PropTypes.string,
};
export default News
