import React from 'react'

export default function Review({ review }) {
  return (
    <div className='review-item'>
        <a href={review.link} className='review-item__title link'>{review.title}</a>
        <p className='review-item__text'>{review.text}</p>
    </div>
  )
}
