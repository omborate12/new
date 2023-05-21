import React, { Component } from 'react'
import NewItem from './NewItem'
import Spinner from './Spineer';
import PropTypes from 'prop-types';


export class News extends Component {
    // let {pageSize} = this.props
    static defaultProps = {
      country: 'in',
      category: 'general'
    }

    // static PropTypes = {
    //   country: PropTypes.string,
    //   category: PropTypes.string
    // }
        
    constructor(){
        super();
        console.log('New Item');
        this.state ={
        articles: [],
        page:1
        }
      }
        async componentDidMount(){
            console.log('componentDidMount');
            const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=da04c6e03ad74679ab7598cd3ce1dc17&page=1&${this.props.pageSize}`
            let data = await fetch(url);
            let new_data = await data.json();
            console.log(new_data);
            this.setState({articles: new_data.articles});
        }

        prevClick= async()=>
        {
          
          
            console.log("previous")
            const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=da04c6e03ad74679ab7598cd3ce1dc17&page=${this.state.page-1}&${this.props.pageSize}`;
            let data = await fetch(url);
            let new_data = await data.json();
            console.log(new_data);  
            this.setState(
              {articles: new_data.articles,
               page: this.state.page -1
              });
        
      }

        nextClick= async()=>
        {
          console.log("next")
          console.log("previous")
            const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&apiKey=da04c6e03ad74679ab7598cd3ce1dc17&page=${this.state.page+1}&${this.props.pageSize}`;
            let data = await fetch(url);
            let new_data = await data.json();
            console.log(new_data);
            this.setState(
              {articles: new_data.articles,
               page: this.state.page +1
              });
        }
      
  render() {
    return (
      <div>
        <div className="container my-3">
        <h1 className='text-center ' style={{marginTop:'90px'}}>Daily News - get fresh update</h1>
        {/* <Spinner/> */}
        <div className="row my-4">
            {this.state.articles.map((element)=>{
            return <div className="col-md-4 my-3" key={element.url}>
                     <NewItem title={element.title} description ={element.description} imgurl ={element.urlToImage} url ={element.url} author={element.author} date={element.publishedAt}/>
                   </div>
            })}
             </div>
        </div>
      <div className="container d-flex justify-content-between">
      <button type="button" class="btn btn-secondary " onClick={this.prevClick}> &larr; Prvious</button>
      <button  type="button" class="btn btn-secondary " onClick={this.nextClick}>Next &rarr;</button>
      </div>

      </div> 
    )
  }
}

export default News
