// Code MovieReviews Here
import React, { Component } from 'react';
import MovieReview from './MovieReview.js'

class MovieReviews extends Component {

  render() {
  return <div className="review-list">
    {this.props.data.map(element => (
      <MovieReview data={element}/>
    ))}
  </div>
  }
}
 
export default MovieReviews
