import React, { Component } from 'react'

export class NewsItem extends Component {

    render() {
        let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
        return (
            <div className='my-3'>
                <div className="card" >
                    <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{left:'90%',zIndex:'1'}}>{source}
                    </span>
                    <img src={!imageUrl ? "https://i.ytimg.com/vi/CY9yqDKV7a0/maxres2.jpg?sqp=-oaymwEoCIAKENAF8quKqQMcGADwAQH4AbYIgAKAD4oCDAgAEAEYViBdKGUwDw==&rs=AOn4CLDoMDAW6_GupxfzvlQf2wpNb-4EDA" : imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <p className='card-text'><small className='text-muted'>By {!author ? "Unknown" : author} on {new Date(date).toDateString()}</small></p>
                        <a href={newsUrl} target='_blank' rel="noreferrer" className="btn btn-sm btn-dark">Read More..</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem