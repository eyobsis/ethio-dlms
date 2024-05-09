import { useEffect } from'react';
import { BrowserRouter, Route,Routes} from'react-router-dom';


import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Signup from './components/Signup';
import SelectOptions from './components/SelectOptions'

function App() {


  /* const [totalUsers, setTotalUsers] = useState(0);
  const [totalAdmin, setTotalAdmin] = useState(0);
  const [totalLearners, setTotalLearners] = useState(0); */

  useEffect(() => {
   /*  fetch('http://localhost:5000/api/users')
      .then((res) => res.json())
      .then((data) => {
        setTotalUsers(data.totalUsers);
      });

    fetch('http://localhost:5000/api/admins')
      .then((res) => res.json())
      .then((data) => {
        setTotalAdmin(data.totalAdmin);
      });

    fetch('http://localhost:5000/api/learners')
      .then((res) => res.json())
      .then((data) => {
        setTotalLearners(data.totalLearners);
      }); */
  }, []);
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Hero" element={<Hero />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;