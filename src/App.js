
import './App.css';
import './index.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { useState } from 'react';

import Navbar from './components/Navbar';
import Header from './components/Header';
import NavSlide from './components/NavSlide';
import Sellers from './components/Sellers';
import Starting from './components/Starting';
import Collections from './components/Collections';
import Button from './components/Button';
import Footer from './components/Footer';

function App() {
  // hard-coded data for seller cards... on behalf of the API
  const [sellers] = useState([
    {
      id: 1,
      url: "https://a0.muscache.com/im/pictures/lombard/MtTemplate-1690313-media_library/original/8677ba38-0763-4fdc-8295-7ad1fd8f6a47.jpeg?im_w=320",
      rating: 4.93,
      place: "Unite States",
      description: "LGBTQ History With Drag Performances",
      price: 25
    },
    {
      id: 2,
      url: "https://a0.muscache.com/im/pictures/lombard/MtTemplate-1672375-media_library/original/005d594f-530f-47f8-a1d6-07c872ae434d.jpeg?im_w=320",
      rating: 4.93,
      place: "Unite States",
      description: "Pride Dance Class w/ Drag Choreographer",
      price: 15
    },
    {
      id: 3,
      url: "https://a0.muscache.com/im/pictures/lombard/MtTemplate-1654628-media_library/original/3efd6dce-02ab-4eb4-b050-5204c8c77a9b.jpeg?im_w=320",
      rating: 4.93,
      place: "Thailand",
      description: "History & Culture of Transwoman-Thailand",
      price: 10
    },
    {
      id: 4,
      url: "https://a0.muscache.com/im/pictures/lombard/MtTemplate-1751542-active_media/original/b8ca54d6-f975-4a35-9e67-305ae88ac05c.jpg?im_w=320",
      rating: 4.93,
      place: "Unite States",
      description: "Boozy Drag Queen Bingo",
      price: 30
    },
    {
      id: 5,
      url: "https://a0.muscache.com/im/pictures/lombard/MtTemplate-1755197-media_library/original/47aaef1c-fd83-44ee-a6d7-fbb0a696974c.jpeg?im_w=320",
      rating: 5.0,
      place: "Great Britain",
      description: "Super strengths with a Gold medal couple",
      price: 42
    },
    {
      id: 6,
      url: "https://a0.muscache.com/im/pictures/lombard/MtTemplate-1677269-poster/original/ceeb0fd6-5d5b-41ca-b4a0-9e90f1d8a7d5.jpeg?im_w=320",
      rating: 5.0,
      place: "Spain",
      description: "Madrid LGBTQ Pride Drag Party",
      price: 25
    },
    {
      id: 7,
      url: "https://a0.muscache.com/im/pictures/lombard/MtTemplate-1677269-media_library/original/f0cdf8b7-dd6e-4377-af3f-c77e25a92f3d.jpeg?im_w=320",
      rating: 5.0,
      place: "Spain",
      description: "Madrid LGBTQ Pride Drag Party",
      price: 25
    },
    {
      id: 8,
      url: "https://a0.muscache.com/im/pictures/lombard/MtTemplate-1690313-media_library/original/8677ba38-0763-4fdc-8295-7ad1fd8f6a47.jpeg?im_w=320",
      rating: 4.93,
      place: "Unite States",
      description: "Super strengths with a Gold medal couple",
      price: 25
    }
  ])

  // hard coded data for experiences to be sold in few hours
  const [starting] = useState([
    {
      id: 1,
      url: "https://a0.muscache.com/im/pictures/lombard/MtTemplate-1661135-poster/original/027394e3-d502-4cb8-9f7f-9a88f41551ba.jpeg?im_w=320",
      rating: 4.93,
      place: "Mexico",
      description: "Make Mexican Street Tacos with a Pro Chef",
      price: 25,
      time: "11:30 PM"
    },
    {
      id: 2,
      url: "https://a0.muscache.com/im/pictures/lombard/MtTemplate-1756283-media_library/original/56caa3e0-5c63-4716-b84b-5813945a6845.jpeg?im_w=320",
      rating: 4.93,
      place: "Russia",
      description: "Super strengths with a Gold medal couple",
      price: 25,
      time: "09:00 PM"
    },
    {
      id: 3,
      url: "https://a0.muscache.com/im/pictures/lombard/MtTemplate-1690313-media_library/original/8677ba38-0763-4fdc-8295-7ad1fd8f6a47.jpeg?im_w=320",
      rating: 4.93,
      place: "Unite States",
      description: "Super strengths with a Gold medal couple",
      price: 25,
      time: "10:20 PM"
    },
    {
      id: 4,
      url: "https://a0.muscache.com/im/pictures/lombard/MtTemplate-1756283-media_library/original/5437b0ee-493b-4ece-a764-1f51eecea7a3.jpeg?im_w=240",
      rating: 4.93,
      place: "Unite States",
      description: "Super strengths with a Gold medal couple",
      price: 25,
      time: "09:45 PM"
    }
  ])
   
  // collection data
  const [collections] = useState([
    {
      id:1,
      caption: "Tour before you travel",
      url: "https://a0.muscache.com/im/pictures/91780510-ca64-4fc4-a7e6-be7c8f7129d5.jpg?im_w=1200"
    },
    {
      id:1,
      caption: "Great for team building",
      url: "https://a0.muscache.com/im/pictures/c629937c-5cfb-4380-a8f5-5ec81c86e5fc.jpg?im_w=1200"
    },
    {
      id:1,
      caption: "Give an untraditionale gift",
      url: "https://a0.muscache.com/im/pictures/f0347659-eb6f-42f9-8c37-124154ec8609.jpg?im_w=1200"
    },
    {
      id:1,
      caption: "Learn the secrets of successful hosting",
      url: "https://a0.muscache.com/im/pictures/f44b56d9-c12e-425d-998a-6e9fc9f5d557.jpg?im_w=1200"
    }
  ])

  return (
    <div className="App">
      <Navbar></Navbar>
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
      <Footer></Footer>
    </div>
  );
}

export default App;
