
import { Route, Routes } from "react-router-dom";

import Home from "./components/Pages/Home";
import About from "./components/Pages/About";
import Services from "./components/Pages/Services";
import Testimonials from "./components/Pages/Testimonials";
import Contact from "./components/Pages/Contact";
import Footer from "./components/Pages/Footer";
import Navbar from "./components/Pages/Navbar";
import Hero from "./components/Pages/Hero";
import Signup from "./components/Pages/Signup";
import Login from "./components/Pages/Login";
import SelectOptions from "./components/Pages/SelectOptions";
import Dashboard from "./components/Admin/Dashboard";
import UserDashboard from "./components/UserDashboard/UserDashboard";
import FileUpload from "./components/FileUpload/FileUpload";
import PageNotFound from "./components/Pages/PageNotFound";

import RenewLicense from "./components/Pages/RenewLicense";
import RegisterForNewLicense from "./components/Pages/RegisterForNewLicense";
import RegisterVehicle from "./components/Pages/RegisterVehicle";
import BookLessons from "./components/Pages/BookLessons";

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

        <Route path="/renew-license" element={<RenewLicense />} />
        <Route
          path="/register-for-new-license"
          element={<RegisterForNewLicense />}
        />
        <Route path="/register-vehicle" element={<RegisterVehicle />} />
        <Route path="/book-lessons" element={<BookLessons />} />
        <Route path="/file-upload" element={<FileUpload />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
