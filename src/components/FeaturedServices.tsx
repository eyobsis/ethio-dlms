
import { Link } from'react-router-dom';

const FeaturedServices = () => {
  return (
    <section id="featured-services" className="featured-services">
      <div className="container" data-aos="fade-up">
        <div className="row">
          <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <Link to="/user-register">
              <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
                <div className="icon">
                  <i className="bx bxs-user-plus"></i>
                </div>
                <h4 className="title">Create New Account</h4>
                <p className="description">
                  Not yet Registered? Create a new account to register for a new license or Renew
                  your license
                </p>
              </div>
            </Link>
          </div>

          <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <Link to="/user-login">
              <div className="icon-box" data-aos="fade-up" data-aos-delay="200">
                <div className="icon">
                  <i className="bx bxs-user-check"></i>
                </div>
                <h4 className="title">User Log In</h4>
                <p className="description">Already has an account? Click Log in to log into your account</p>
              </div>
            </Link>
          </div>

          <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <Link to="/admin-login">
              <div className="icon-box" data-aos="fade-up" data-aos-delay="300">
                <div className="icon">
                  <i className="bx bxs-user-detail"></i>
                </div>
                <h4 className="title">Admin Log In</h4>
                <p className="description">Log in as an administrator</p>
              </div>
            </Link>
          </div>

          <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <Link to="/learners-login">
              <div className="icon-box" data-aos="fade-up" data-aos-delay="400">
                <div className="icon">
                  <i className="bx bxs-car"></i>
                </div>
                <h4 className="title">Learners Log In</h4>
                <p className="description">Log in as a driving school (learners)</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;