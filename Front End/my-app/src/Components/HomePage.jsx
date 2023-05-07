import React from 'react'
import { SlideShow } from './HomePage/SlideshowButton/Slideshow'
import EachDiv from './HomePage/EachDiv/EachDiv'
import { DisOurFav } from './HomePage/DisOurFav/DisOurFav'

const HomePage = () => {
  return (
    <div>
      <SlideShow/>
      <EachDiv/>
      <DisOurFav/>
    </div>
  )
}

export default HomePage
