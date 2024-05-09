

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials">
      <div className="container" data-aos="zoom-in">
        <div className="section-title">
          <h2>Some Learners Services Registered</h2>
        </div>

        <div className="owl-carousel testimonials-carousel">
          <div className="testimonial-item">
            <img src="assets/img/bimal_learners.png" className="testimonial-img" alt="" />
            <h3>Bimal Learners</h3>
            <h4>Head Office - Katuwawala</h4>
            <p>
              <i className="bx bxs-quote-alt-left quote-icon-left"></i>
              Branches: Maharagama, Nugegoda, Katubedda, Kottawa, Moratuwa, Thibirigasyaya.
              <i className="bx bxs-quote-alt-right quote-icon-right"></i>
            </p>
          </div>

          <div className="testimonial-item">
            <img src="assets/img/daya_learners.png" className="testimonial-img" alt="" />
            <h3>Daya Learners</h3>
            <h4>Head Office - Colombo 04</h4>
            <p>
              <i className="bx bxs-quote-alt-left quote-icon-left"></i>
              Branches: Rathmalana, Battaramulla
              <i className="bx bxs-quote-alt-right quote-icon-right"></i>
            </p>
          </div>

          <div className="testimonial-item">
            <img src="assets/img/perera_learners.jpg" className="testimonial-img" alt="" />
            <h3>Perera Learners</h3>
            <h4>Head Office - Nugegoda</h4>
            <p>
              <i className="bx bxs-quote-alt-left quote-icon-left"></i>
              Branches: Rathmalana, Battaramulla, Moratuwa, Panadura, Colombo 4, Maharagama
              <i className="bx bxs-quote-alt-right quote-icon-right"></i>
            </p>
          </div>

          <div className="testimonial-item">
            <img src="assets/img/manore_learners.jpg" className="testimonial-img" alt="" />
            <h3>Manore Learners</h3>
            <h4>Head Office - Wellawatta</h4>
            <p>
              <i className="bx bxs-quote-alt-left quote-icon-left"></i>
              Branches: Gampaha, Yakkala, Maharagama, Kaluthara
              <i className="bx bxs-quote-alt-right quote-icon-right"></i>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;