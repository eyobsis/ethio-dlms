
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
import PageNotFound from "./components/Pages/PageNotFound";

import RenewLicense from "./components/Pages/RegisterForRenewal";
import RegisterForNewLicense from "./components/Pages/RegisterForNewLicense";
import LicenseRenwalSteps from "./components/Pages/LicenseRenewalSteps";
import RegisterVehicle from "./components/Pages/RegisterVehicle";
import BookLessons from "./components/Pages/BookLessons";
import FileList from "./components/Admin/FileList";
import ApproveReject from "./components/Admin/ApproveReject";
import ApplicationStatus from "./components/UserDashboard/ApplicationStatus";

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

        <Route path="/register-for-renewal" element={<RenewLicense />} />
        <Route
          path="/register-for-new-license"
          element={<RegisterForNewLicense />}
        />
        <Route path="/register-vehicle" element={<RegisterVehicle />} />
        <Route path="/book-lessons" element={<BookLessons />} />

        <Route path="*" element={<PageNotFound />} />
        <Route path="/admin/file-list" element={<FileList />} />
        <Route path="/license-renewal-steps" element={<LicenseRenwalSteps />} />
        <Route path="/admin/applications" element={<ApproveReject />} />
        <Route path="/application-status" element={<ApplicationStatus />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
