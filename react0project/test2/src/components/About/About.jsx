import React from 'react'
import './About.css'

export default function About({ aboutText }) {
  return (
    <div className='about'>
        <div className='container'>
          <p className='about__title'>{aboutText.title}</p>
          <img className='about__photo'></img>
          <p className='about__sth'>{aboutText.description}</p>
        </div>
    </div>
  )
}
