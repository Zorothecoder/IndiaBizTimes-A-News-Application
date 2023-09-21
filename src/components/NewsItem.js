// News item component deatils inside layout
import React from 'react'

const NewsItem = (props) => {
    let { title, description, imageUrl, newsUrl, author, date, source } = props;
    return (
        <div className='my-3'>
            <div className="card" >
                <div className='d-flex justify-content-end position-absolute end-0'>
                    <span className=" badge rounded-pill bg-danger">
                        {source}
                    </span>
                </div>
                <img src={!imageUrl ? "https://guwahatiplus.com/public/web/images/default-news.png" : imageUrl} className="card-img-top" alt="..." />
                <div className={`card-body bg-${props.mode}`}>
                    <h5 className={`card-title text-${props.mode==='light'?'dark':'light'}`}>{title}...</h5>
                    <p className={`card-text text-${props.mode==='light'?'dark':'light'}`}>{description}</p>
                    <p className="card-text"><small className={`text-${props.mode==='light'?'dark':'light'}`}>By {!author ? "unknown" : author} on {new Date(date).toGMTString()}</small></p>
                    <a href={newsUrl} className={`btn btn-sn btn-dark bg-${props.mode === 'light' ? 'dark' : 'light'}  text-${props.mode}`}>Read More</a>

                </div>
            </div>
        </div>
    )

}

export default NewsItem
