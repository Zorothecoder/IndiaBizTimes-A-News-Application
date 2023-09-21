import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [totalResults, setTotalResults] = useState(0)

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const updateNews = async () => {
        props.setProgress(10);
        const url = `https://gnews.io/api/v4/top-headlines?country=${props.country}&category=${props.category}&apikey=78dac8543e695f5987ce037893e7ef43`
        setLoading(true)
        let data = await fetch(url);
        props.setProgress(30);
        let parsedData = await data.json()
        props.setProgress(70);
        setArticles(parsedData.articles)
        setTotalResults(parsedData.totalArticles)
        setLoading(false)
        props.setProgress(100);
    }

    useEffect(() => {
        document.title = `${capitalizeFirstLetter(props.category)} - IndiaBizTimes`;
        updateNews();
    }, [])

    const fetchMoreData = async () => {
        const url = `https://gnews.io/api/v4/top-headlines?country=${props.country}&category=${props.category}&apikey=78dac8543e695f5987ce037893e7ef43`
        let data = await fetch(url);
        let parsedData = await data.json()
        setArticles(articles.concat(parsedData.articles))
        setTotalResults(parsedData.totalArticles)
    };

    return (
        <>
            <h1 className={`text-center text-${props.mode==='light'?'dark':'light'}`} style={{ marginTop: '90px' }}> IndiaBizTimes- Top {capitalizeFirstLetter(props.category)} Headlines</h1>
            {loading && <Spinner />}
            {console.log(articles.length)}
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<Spinner />}
            >
                <div className="container">

                    <div className="row">
                        {articles.map((element) => {
                            return <div className="col-md-4" key={element.url}>
                                <NewsItem mode={props.mode} title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.image} newsUrl={element.url} author={element.source.name} date={element.publishedAt} source={element.source.name} />
                            </div>
                        })}
                    </div>
                </div>
            </InfiniteScroll>
        </>
    )

}


News.defaultProps = {
    country: 'in',
    // pageSize: 6,
    category: 'general',
}

News.propTypes = {
    country: PropTypes.string,
    // pageSize: PropTypes.number,
    category: PropTypes.string,
}

export default News