import Slider from 'react-slick'
import Plan from './Plan'

const Starting = ({starting}) => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
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
      {starting.map((plan) => (
        <Plan key="id" plan={plan}></Plan>
      ))}
      
    </Slider>
  )
}

export default Starting
