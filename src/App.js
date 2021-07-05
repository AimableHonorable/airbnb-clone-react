import { useState } from 'react';
import './App.css';
import './index.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Show from './pages/Show';

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
      id:2,
      caption: "Great for team building",
      url: "https://a0.muscache.com/im/pictures/c629937c-5cfb-4380-a8f5-5ec81c86e5fc.jpg?im_w=1200"
    },
    {
      id:3,
      caption: "Give an untraditionale gift",
      url: "https://a0.muscache.com/im/pictures/f0347659-eb6f-42f9-8c37-124154ec8609.jpg?im_w=1200"
    },
    {
      id:4,
      caption: "Learn the secrets of successful hosting",
      url: "https://a0.muscache.com/im/pictures/f44b56d9-c12e-425d-998a-6e9fc9f5d557.jpg?im_w=1200"
    }
  ])

  // Available dates
  const [dates] = useState([
    {
      id:1,
      from: "10:00 AM",
      to: "12:00 AM",
      timezone: "CAT",
      price: 12,
      day: "Mon, Jul 5"
    },
    {
      id:1,
      from: "09:00 AM",
      to: "11:00 AM",
      timezone: "CAT",
      price: 12,
      day: "Tue, Jul 6"
    },
    {
      id:1,
      from: "12:00 PM",
      to: "02:00 PM",
      timezone: "CAT",
      price: 12,
      day: "Thur, Jul 8"
    },
    {
      id:1,
      from: "10:00 AM",
      to: "12:00 AM",
      timezone: "CAT",
      price: 12,
      day: "Wed, Jul 7"
    }
  ])

  // Reviews
  const [reviews] = useState([
    {
      id: 1,
      name: "Larisa",
      image_url: "https://a0.muscache.com/im/pictures/user/acd269db-919c-46ac-a6c2-70bf98882508.jpg?im_w=240",
      date: "March 2021",
      content: "Petz & Jah are amazing! Such warms souls. Really the transgender culture in Thailand is seriously fascinating and they break it down for you in such an easy way to grasp. The fact that they give so much time to questions is invaluable. Broke stereotypes for sure and I honestly know I will be doing this tour again. And then maybe again."
    },
    {
      id: 2,
      image_url: "https://a0.muscache.com/im/pictures/user/ebc6e734-51a9-44d5-afea-d3bd66290ef5.jpg?im_w=240",
      name: "Alyssa",
      date: "March 2021",
      content: "Pets and his co-host, Khun Jah, were excellent hosts! I had an excellent time learning about the transgender history and culture in Thailand. If you want a fun and insightful experience, I highly recommend giving this Airbnb online experience a try. Thank Petz and Jah!"
    },
    {
      id: 3,
      image_url: "https://a0.muscache.com/im/pictures/user/3a89575e-fc92-42f4-84ef-9c61a21c199d.jpg?im_w=240",
      name: "Alice",
      date: "February 2021",
      content: "Petz and his co-host, Khun Jah, offer an incredible experience. It was insightful, fun, friendly, well-structured, and very unique. It's unlikely you'll get the same kind of experience or knowledge anywhere else. If you're considering doing this experience, do it now!"
    },
    {
      id: 4,
      image_url: "https://a0.muscache.com/im/pictures/user/702f9fc4-32b5-4ca2-8e17-6f6c01a27aae.jpg?im_w=240",
      name: "Sean",
      date: "December 2020",
      content: "This waas a really wonderful time learning about Thai culture and society and how trans people and performers are a part of thailand."
    },
    {
      id: 5,
      image_url: "https://a0.muscache.com/im/pictures/user/fafa5ef0-dfbb-4404-af56-2b833b714947.jpg?im_w=240",
      name: "Marcella",
      date: "December 2020",
      content: "Petz was really engaging and friendly. It is interesting to know the trans-woman culture in Thailand and listen to the story, especially I hadn't had any chance to encounter any trans-woman before."
    },
    {
      id: 6,
      image_url: "https://a0.muscache.com/im/pictures/user/01709fe2-b3eb-4fd9-b6dd-ea58fd71f549.jpg?im_w=240",
      name: "Jessica",
      date: "October 2020",
      content: "Petz is a fabulous host who shed's light on a fascinating subject, and being able to have an open conversation with a trans-woman was a wonderfully unique opportunity. Learning about the transgender experience in Thailand was eye-opening in a very positive way. It was truly wonderful to hear about the culture of acceptance that has evolved over the last 20 years. It is my hope that this mindset will spread across the rest of of the world"
    }
  ])

  return (
    <Router>
      <div className="App">
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/">
            <Home sellers={sellers} starting={starting} collections={collections}></Home>  
          </Route>
          <Route path="/show">
            <Show sellers={sellers} dates={dates} reviews={reviews} />
          </Route>
        </Switch>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
