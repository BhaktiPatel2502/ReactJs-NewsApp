import React, { Component } from 'react'
//import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default class NewsItem extends Component {
    render() {
        let { title, description, imageurl, newsUrl, author, date, source } = this.props;
        return (
            <div className='my-3'>
                <Card>
                    <div style={{display: 'flex', justifyContent: 'flex-end', position: 'absolute',right: '0'}}>
                    <span class="badge rounded-pill bg-danger">
                        {source}
                    </span>
                    </div>
                    
                    <Card.Img variant="top" src={!imageurl ? "https://c.ndtvimg.com/2022-03/v7sphf98_jacqueline-fernandez-saari-looks_625x300_21_March_22.jpg" : imageurl} />
                    <Card.Body>
                        <h4 className='card-title'>{title}...
                        </h4>
                        <p className='card-text'>{description}...</p>
                        <p className='card-text'><small className='text-danger'>By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>

                        <a href={newsUrl} target='blank' className='btn btn-sm btn-dark'>Read more</a>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}
