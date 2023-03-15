import React from 'react';
import './Portfolio.css'
import PortfolioItem from './PortfolioItem';

export default function Portfolio(props) {
  return (
    <div className='portfolio'>
        <div className='container'>
          {props.works.map(work => (
            <PortfolioItem key={work.id} work={work} />
          ))}
        </div>
    </div>
  )
}
