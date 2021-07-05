
import './App.css';
import './index.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Home></Home>  
      <Footer></Footer>
    </div>
  );
}

export default App;
