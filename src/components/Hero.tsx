import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section id="hero" className="d-flex align-items-center">
      <div className="container" data-aos="zoom-out" data-aos-delay="100">
        <h1>Welcome to <span>DLMS</span></h1>
        <h2>
          DLMS - Driving License Management System 

          incorporated with 

          Department of Motor Traffic 

          Sri Lanka
        </h2>
        <div className="d-flex">
          <Link to="/about" className="btn-get-started scrollto">
            Get Started
          </Link>
          <a
            href="https://www.youtube.com/watch?v=jDDaplaOz7Q"
            className="venobox btn-watch-video"
            data-vbtype="video"
            data-autoplay="true"
          >
            See User Manual <i className="icofont-play-alt-2"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;