import Header from '../components/Header';
import NavSlide from '../components/NavSlide';
import Sellers from '../components/Sellers';
import Starting from '../components/Starting';
import Collections from '../components/Collections';
import Button from '../components/Button'

const Home = ({sellers, starting, collections}) => {

  return (
    <div>
      <Header></Header>
      <div className="container py-4">
        <NavSlide></NavSlide>
      </div>
      <hr />
      <div className="container">
        <h4 className="pt-4 fw-bold my-3">Celebrate Pride around the world</h4>
        <Sellers sellers={sellers}></Sellers>
        
        <h4 className="pt-4 fw-bold my-3">Starting in the next 6 hours</h4>
        <Starting starting={starting}></Starting>

        <h4 className="pt-4 fw-bold my-3">Best Sellers</h4>
        <Sellers sellers={sellers}></Sellers>

        <h4 className="pt-4 fw-bold my-3">New This Week</h4>
        <Collections collections={collections}></Collections>

        <h4 className="pt-4 fw-bold my-3">Best Groups</h4>
        <Sellers sellers={sellers}></Sellers>

        <Button></Button>

        
      </div>
    </div>
  )
}

export default Home
