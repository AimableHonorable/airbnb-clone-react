import Slider from  'react-slick'
import React from 'react'
import Collection from './Collection'

const Collections = ({collections}) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }
  return (
    <Slider {...settings}>
      {collections.map((collection) => (
        <Collection key="id" collection={collection}></Collection>
      ))}
      
    </Slider>
  )
}

export default Collections
