
const About = () => {
  return (
    <section id="about" className="about section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>About</h2>
          <h3>Find Out More <span>About Us</span></h3>
          <p>
            Driving License Management System is designed for the use of Department of Motor Traffic
            Sri Lanka to automate the process of issuing driving license and to facilitate the flow of
            information within the department.
          </p>
        </div>

        <div className="row">
          <div className="col-lg-6" data-aos="zoom-out" data-aos-delay="100">
            <img src="assets/img/license.jpg" className="img-fluid" alt="" />
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0 content d-flex flex-column justify-content-center" data-aos="fade-up" data-aos-delay="100">
            <p className="font-italic">
              We make the basic operations of issuing driving license more efficient, provide fast
              response to users and store and retrieve information accurately. Our main objectives
              are,
            </p>
            <ul>
              <li>
                <i className="bx bx-id-card"></i>
                <div>
                  <h5>Ease up the Licensing Process</h5>
                  <p>Your license process will be easier than manual process.</p>
                </div>
              </li>
              <li>
                <i className="bx bx-time"></i>
                <div>
                  <h5>Reduce Time Wastage</h5>
                  <p>We guarantee that you won't waste your time as manual system.</p>
                </div>
              </li>
              <li>
                <i className="bx bx-money"></i>
                <div>
                  <h5>Reduce Operational Cost</h5>
                  <p>Your transport costs to visit RMV will be saved.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;