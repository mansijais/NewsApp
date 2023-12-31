import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
export class News extends Component {
    static defaultProps = {
        country: 'in',
        pageSize: 8,
        category: 'general'
    }
    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    }
    capitalizeFirstLetter=(string)=>{
        return string.charAt(0).toUpperCase()+string.slice(1);
    }
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
        document.title=`NewsApp-${this.capitalizeFirstLetter(this.props.category)}`
    }
    async updateNews() {
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=678d119590ab408b8db8eb0d02a0c11b&page=${this.state.page}&pagesize=${this.props.pageSize}`;
        // let url = "https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=678d119590ab408b8db8eb0d02a0c11b&page=1"
        this.setState({ loading: true })
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData)
        this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false })

    }

    async componentDidMount() {
        // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=678d119590ab408b8db8eb0d02a0c11b&page=1&pagesize=${this.props.pageSize}`;
        // // let url = "https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=678d119590ab408b8db8eb0d02a0c11b&page=1"
        // this.setState({ loading: true })
        // let data = await fetch(url);
        // let parsedData = await data.json()
        // console.log(parsedData)
        // this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults, loading: false })
        this.updateNews();
    }

    handlePrevButton = async () => {
        console.log("Prev  button is clicked")
        // let url = ` https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=678d119590ab408b8db8eb0d02a0c11b&page=${this.state.page - 1}&pagesize=${this.props.pageSize}`
        // this.setState({ loading: true })
        // let data = await fetch(url);
        // let parsedData = await data.json()
        // console.log(parsedData)
        // this.setState({ articles: parsedData.articles })

        // this.setState({
        //     page: this.state.page - 1,
        //     articles: parsedData.articles,
        //     loading: false
        // })
        this.setState({
            page: this.state.page -1
        })
        this.updateNews();
    }

    handleNextButton = async () => {
        // if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))) {
        //     console.log("Next button is clicked");
        //     let url = ` https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=678d119590ab408b8db8eb0d02a0c11b&page=${this.state.page + 1}&pagesize=${this.props.pageSize}`
        //     this.setState({ loading: true })
        //     // let url = ` https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=678d119590ab408b8db8eb0d02a0c11b&page=${this.state.page + 1}&pagesize=${this.props.pageSize}`
        //     let data = await fetch(url);
        //     let parsedData = await data.json()
        //     this.setState({ loading: false })
        //     this.setState({ articles: parsedData.articles })

        //     this.setState({
        //         page: this.state.page + 1,
        //         articles: parsedData.articles,
        //         loading: false
        //     })
        // }
        this.setState({
            page: this.state.page + 1
        })
        this.updateNews();
    }
    render() {
        return (
            <div className='container my-3'>
                <h1 className='text-center' style={{ margin: '35px 0px' }}>NewsApp-Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h1>
                {this.state.loading && <Spinner />}
                <div className="row">
                    {!this.state.loading && this.state.articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />

                        </div>
                    })}
                </div>
                <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-dark mx-2" onClick={this.handlePrevButton}>&larr; Prev</button>
                    <button type="button" disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} className="btn btn-dark" onClick={this.handleNextButton}>Next &rarr;</button>
                </div>
            </div>
        )
    }
}

export default News