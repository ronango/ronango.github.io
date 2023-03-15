import React from 'react';
import Review from './Review';
import './Reviews.css';

export default function Reviews(props) {
  return (
    <div className='reviews'>
        <div className='container'>
          {props.reviews.map(review => (
            <Review key={review.id} review={review}/>
          ))}
        </div>
    </div>
  )
}
