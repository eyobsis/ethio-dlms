
import { Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Signup from "./components/Signup";
import Login from "./components/Login";
import SelectOptions from "./components/SelectOptions";
import Dashboard from "./components/Admin/Dashboard";
import UserDashboard from "./components/UserDashboard/UserDashboard";
import FileUpload from "./components/FileUpload/FileUpload";


import RenewLicense from "./components/RenewLicense";
import RegisterForNewLicense from "./components/RegisterForNewLicense";
import RegisterVehicle from "./components/RegisterVehicle";
import BookLessons from "./components/BookLessons";



function App() {



  return (

    <>
      <Navbar />
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Services />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Hero" element={<Hero />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/services" element={<SelectOptions />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/user/dashboard" element={<UserDashboard />} />

        <Route path="/renew-license" element={<RenewLicense/>} />
        <Route path="/register-for-new-license" element={<RegisterForNewLicense/>} />
        <Route path="/register-vehicle" element={<RegisterVehicle/>} />
        <Route path="/book-lessons" element={<BookLessons />} />
        <Route path="/file-upload" element={<FileUpload />} />
        





      </Routes>
      <Footer />

    </>



  );
}

export default App;
