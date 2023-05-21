import React, { Component } from 'react'

export class NewItem extends Component {

  render() {
    let {title,description,imgurl,url,author,date} = this.props
    return (
      <div>
        
        <h2 className="container">{}</h2>
        <div className="card" style={{width: "18rem"}}>
                <img src={imgurl} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text"><small className="text-muted">Author:{author?author:"Unknown"}</small></p>
                    <p className="card-text"><small className="text-muted">Date:{new Date(date).toGMTString()}</small></p>
                    <a href={url} target= "_blank" className="btn btn-primary">Read more</a>
                </div>
                </div>
      </div>
    )
  }
}

export default NewItem
