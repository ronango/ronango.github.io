import React from 'react';

export default function PortfolioItem({ work }) {
  return (
    <div className='potfolio-item'>
        <a href={work.link} className='portfolio-item__title link'>{work.title}</a>
        <p className='portfolio-item__description'>{work.description}</p>
    </div>
  )
}
