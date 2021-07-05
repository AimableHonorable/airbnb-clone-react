import { GoStar } from 'react-icons/go'
import { BsHeart } from 'react-icons/bs'

const Plan = ({plan}) => {
  return (
    <div className="card mb-3 rounded-5 mx-2" style={{style:"max-width: 540px;"}}>
      <div className="row g-0">
        <div className="col p-2 pr-0 h-20">
          <img src={plan.url} className="img-fluid rounded-5 border border-1 fit" alt="mark" />
        </div>
        <div className="col-md-7 py-3 fs-7">
          <div className="card-body">
            <small className="fs-7 my-1"><GoStar className='text-danger'/>{plan.rating} <span className="text-muted">(64) . {plan.place}</span></small>
            <p className="card-text my-1">{plan.description}</p>
            <p className="card-text my-1"><strong>From ${plan.price}</strong> / person</p>
            <button className="btn-outline  bg-white py-1">{plan.time}</button>
          </div>
          <div className="card-img-overlay">
            <h4 className="text-end"><i className="far fa-heart"></i></h4>
          </div>
        </div>
      </div>
      <div className="card-img-overlay text-end text-dark p-2">
        <h5 classname="text-white text-end"><BsHeart/></h5>
      </div>
    </div>
  )
}

export default Plan
