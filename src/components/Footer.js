import { ImFacebook } from 'react-icons/im'
import { RiGlobalLine, RiTwitterFill } from 'react-icons/ri'
import { BiDollar } from 'react-icons/bi'
import { ImInstagram } from 'react-icons/im'

const Footer = () => {
  return (
    <footer className="pt-4 bg-light border border-1 fs-7">
      <div className="container">
        <div className="row row-cols-1 row-cols-md-4 g-4">
          <div className="col">
            <strong className="space-1">ABOUT</strong>
              <li className="footer-nav-item mt-4">
                <a className="list" aria-current="page" href="#">How Airbnb works</a>
              </li>
              <li className="footer-nav-item">
                <a className="list" href="#">Newsroom</a>
              </li>
              <li className="footer-nav-item">
                <a className="list" href="#">Investors</a>
              </li>
              <li className="footer-nav-item">
                <a className="list" href="#">Airbnb Plus</a>
              </li>
              <li className="footer-nav-item">
                <a className="list" href="#">Airbnb Luxe</a>
              </li>
              <li className="footer-nav-item">
                <a className="list" href="#">HotelTonight</a>
              </li>
              <li className="footer-nav-item">
                <a className="list" href="#">Airbnb for Work</a>
              </li>
              <li className="footer-nav-item">
                <a className="list" href="#">Made possible by Hosts</a>
              </li>
              <li className="footer-nav-item">
                <a className="list" href="#">Careers</a>
              </li>
              <li className="footer-nav-item">
                <a className="list" href="#">Founders' Letter</a>
              </li>
          </div>
          <div className="col">
            <strong>COMMUNITY</strong>
            <li className="footer-nav-item mt-4">
              <a className="list" href="#">Diversity & Belonging</a>
            </li>
            <li className="footer-nav-item">
              <a className="list" href="#">Against Discrimination</a>
            </li>
            <li className="footer-nav-item">
              <a className="list" href="#">Accessibility</a>
            </li>
            <li className="footer-nav-item">
              <a className="list" href="#">Airbnb Associates</a>
            </li>
            <li className="footer-nav-item">
              <a className="list" href="#">Frontline Stays</a>
            </li>
            <li className="footer-nav-item">
              <a className="list" href="#">Guest Referrals</a>
            </li>
            <li className="footer-nav-item">
              <a className="list" href="#">Gift cards</a>
            </li>
            <li className="footer-nav-item">
              <a className="list" href="#">Airbnb.org</a>
            </li>
          </div>
          <div className="col">
            <strong>HOST</strong>
            <li className="footer-nav-item mt-4">
              <a className="list" href="#">Host your home</a>
            </li>
            <li className="footer-nav-item">
              <a className="list" href="#">Host an Online Experience</a>
            </li>
            <li className="footer-nav-item">
              <a className="list" href="#">Host an Experience</a>
            </li>
            <li className="footer-nav-item">
              <a className="list" href="#">Responsible hosting</a>
            </li>
            <li className="footer-nav-item">
              <a className="list" href="#">Resource Center</a>
            </li>
            <li className="footer-nav-item">
              <a className="list" href="#">Community Center</a>
            </li>
          </div>
          <div className="col">
            <strong>SUPPORT</strong>
            <li className="footer-nav-item mt-4">
              <a className="list" href="#">Our COVID-19 Response</a>
            </li>
            <li className="footer-nav-item">
              <a className="list" href="#">Help Center</a>
            </li>
            <li className="footer-nav-item">
              <a className="list" href="#">Cancellation options</a>
            </li>
            <li className="footer-nav-item">
              <a className="list" href="#">Neighborhood Support</a>
            </li>
            <li className="footer-nav-item">
              <a className="list" href="#">Trust & Safety</a>
            </li>
          </div>
        </div>
        <div className="row justify-content-between border-top">
            <div className="col py-2">
                <p>© Organisaztion | Powered by Aimable </p>
            </div>
            <div className="col-md-4 text-end d-flex">
              <a className="py-1 px-2 footer-link fs-7 text-decoration-underline fw-bold" href="" ><RiGlobalLine className="fs-5"/> English (US)</a>
              <a className="py-1 px-2 footer-link me-4 text-decoration-underline fw-bold" href="" ><BiDollar className="fs-5"/>USD</a>
              <a className="py-1 px-2 footer-link text-decoration-underline" href="" ><ImFacebook className="fs-6"/></a>
              <a className="py-1 px-2 footer-link text-decoration-underline" href="" ><RiTwitterFill className="fs-6"/></a>
              <a className="py-1 px-2 footer-link text-decoration-underline" href="" ><ImInstagram className="fs-6"/></a>
            </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
