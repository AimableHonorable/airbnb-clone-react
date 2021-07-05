import Main from '../components/Main';
import OnlineExp from '../components/OnlineExp';
import Reviews from '../components/Reviews';
import Sellers from '../components/Sellers';
import ShowHeader from '../components/ShowHeader';
import ShowImageCard from '../components/ShowImageCard';

const Show = ({sellers, dates, reviews}) => {
  return (
    <div className="container mb-5">
      <ShowHeader/>
      <ShowImageCard/>
      <Main dates={dates} />
      <OnlineExp/>
      <Reviews reviews={reviews} />

      <div >
        <h4 className="fw-bold my-4">More online experiences</h4>
        <Sellers sellers={sellers}></Sellers>
      </div>
      <div className="row pt-5">
        <div className="col-md-4">
          <a href="/show" className="decoration-none"><button className="form-control border-dark py-3 px-4">Show all online experiences</button></a>
        </div>
      </div>
      
    </div>
  )
}

export default Show
