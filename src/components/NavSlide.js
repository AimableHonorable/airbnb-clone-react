import Slider from "react-slick";

const NavSlide = () => {
  const settings = {
    dots: true,
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
        <a className="rounded-pill w-auto bg-white text-center border py-1 px-2 mx-1" href="">filters</a>
        <a className="rounded-pill w-auto bg-white text-center border py-1 px-2 mx-1" href="">Dates</a>
        <a className="rounded-pill w-auto bg-white text-center border py-1 px-2 mx-1" href="">Group size</a>
        <a className="rounded-pill w-auto bg-light text-center py-1 px-2 mx-1" href="">Family</a>
        <a className="rounded-pill w-auto bg-light text-center py-1 px-2 mx-1" href="">Animals</a>
        <a className="rounded-pill w-auto bg-light text-center py-1 px-2 mx-1" href="">writing</a>
        <a className="rounded-pill w-auto bg-light text-center py-1 px-2 mx-1" href="">Baking</a>
        <a className="rounded-pill w-auto bg-light text-center py-1 px-2 mx-1" href="">Cooking</a>
        <a className="rounded-pill w-auto bg-light text-center py-1 px-2 mx-1" href="">Dance</a>
        <a className="rounded-pill w-auto bg-light text-center py-1 px-2 mx-1" href="">Drinks</a>
        <a className="rounded-pill w-auto bg-light text-center py-1 px-2 mx-1" href="">Fitness</a>  
      </Slider>
    </div>
  )
}

export default NavSlide
