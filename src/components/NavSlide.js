import Slider from "react-slick";
import NavButton from "./NavButton";

const NavSlide = ({navbuttons}) => {
  const settings = {
    dots: false,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 10,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3 ,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div>
      <Slider {...settings}>
        {navbuttons.map((navbutton) => (
          <NavButton key="id" navbutton={navbutton} />
        ))}
      </Slider>
    </div>
  )
}

export default NavSlide
