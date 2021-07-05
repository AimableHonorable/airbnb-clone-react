import { GoStar } from 'react-icons/go'
import { BsHeart } from 'react-icons/bs'

const Seller = ({seller}) => {
  return (
    <div>
      <div className="card border-0 mx-2">
        <div className="card-body p-0 vertical-card">
          <a href="show.html" target="blank">
            <img src={seller.url} className="cover-image rounded-5 border border-1" alt="aisha" />
          </a>
        </div>
        <div>
          <p className="fs-7 my-0"><GoStar className='text-danger'/>{seller.rating}<span className="text-secondary">(64) . {seller.place}</span></p>
          <p className="my-1">{seller.description}</p>
          <p className="my-1"><strong>From ${seller.price}</strong> / person</p>
        </div>
        <div className="card-img-overlay text-end text-white p-2">
          <h5 classname="text-white text-end"><BsHeart/></h5>
        </div>
      </div>
    </div>
  )
}

export default Seller
