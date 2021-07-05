import { AiOutlineGift } from 'react-icons/ai'
import { FiShare } from 'react-icons/fi'
import { BsHeart } from 'react-icons/bs'
import { BsFillStarFill } from 'react-icons/bs'
import { RiComputerLine } from 'react-icons/ri'

const ShowHeader = () => {
  return (
    <div className="pt-4 container-fluid">
      <small><a href="/show" className="text-dark text-decoration-underline">All online experiences</a></small>
    
      <div className="mt-4">
        <p className="fs-8 fw-black"><RiComputerLine className="fs-6 mb-1 " /> ONLINE EXPERIENCE</p>
        <h4 className="fw-bold pb-2">History & Culture of Transwoman-Thailand</h4>
        <div className="row">
          <div className="col-md-9">
            <p className="fs-7 my-0">
              <BsFillStarFill className="mb-1 text-danger fs-6 me-1"/> 
              <strong>4.93</strong> <span className="me-2">(69)</span> . <a href="/show" className="text-dark fw-bold text-decoration-underline ms-2"> Keth Watthana, Thailand</a>
              . Part of <a href="/show" className="text-dark fw-bold text-decoration-underline">Airbnb Online Experiences</a>
            </p>
          </div>
          <div className="col">
            <p>
              <a href="/show" className="text-dark mx-2 fw-bold"><AiOutlineGift className="mb-1"/> Gift</a>
              <a href="/show" className="text-dark mx-2 fw-bold"><FiShare className="mb-1"/> Share</a>
              <a href="/show" className="text-dark mx-2 fw-bold"><BsHeart className="mb-1"/> Save</a>
            </p>
          </div>
        </div> 
      </div>
    </div>
  )
}

export default ShowHeader
