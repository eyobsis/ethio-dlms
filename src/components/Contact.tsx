const Contact = () => {
    return (
      <section id="contact" className="contact">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Contact</h2>
            <h3><span>Contact Us</span></h3>
            <p>You can contact us for any query from following resources.</p>
          </div>
  
          <div className="row" data-aos="fade-up" data-aos-delay="100">
            <div className="col-lg-6">
              <div className="info-box mb-4">
                <i className="bx bx-map"></i>
                <h3>Our Address</h3>
                <p>Department of Motor Traffic Rd, Boralesgamuwa</p>
              </div>
            </div>
  
            <div className="col-lg-3 col-md-6">
              <div className="info-box  mb-4">
                <i className="bx bx-envelope"></i>
                <h3>Email Us</h3>
                <p>dlms2021@gmail.com</p>
              </div>
            </div>
  
            <div className="col-lg-3 col-md-6">
              <div className="info-box  mb-4">
                <i className="bx bx-phone-call"></i>
                <h3>Call Us</h3>
                <p>0112-123123</p>
              </div>
            </div>
  
          </div>
  
          <div className="row" data-aos="fade-up" data-aos-delay="100">
  
            <div className="col-lg-6 ">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.519665018833!2d79.90867251477239!3d6.828117695065153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25aa4550576d7%3A0x3438a763270e489a!2sDepartment%20of%20Motor%20Traffic%20Rd%2C%20Boralesgamuwa!5e0!3m2!1sen!2slk!4v1620285042844!5m2!1sen!2slk"
                width="100%"
                height="384px"
                style={{ border: 0 }}
            
              ></iframe>
            </div>
  
            <div className="col-lg-6">
              <form action="forms/contact.php" method="post" role="form" className="php-email-form">
                <p>
                  if you have any quires send us your message. Reply will be sent to the email address
                  entered.
                </p>
                <div className="form-row">
                  <div className="col form-group">
                    <input
                      type="text"
                      name="name"
                  className="form-control"
                  id="name"
                  placeholder="Your Name"
                  data-rule="minlen:4"
                  data-msg="Please enter at least 4 chars"
                />
                <div className="validate"></div>
              </div>
              <div className="col form-group">
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  id="email"
                  placeholder="Your Email"
                  data-rule="email"
                  data-msg="Please enter a valid email"
                />
                <div className="validate"></div>
              </div>
            </div>
            <div className="form-group">
              <textarea
                className="form-control"
                name="message"
                rows={5}
                data-rule="required"
                data-msg="Please write something for us"
                placeholder="Message"
              ></textarea>
              <div className="validate"></div>
            </div>
            <div className="mb-3">
              <div className="loading">Loading</div>
              <div className="error-message"></div>
              <div className="sent-message">Your message has been sent. Thank you!</div>
            </div>
            <div className="text-center">
              <button type="submit">Send Message</button>
            </div>
          </form>
        </div>
  
      </div>
  
    </div>
  </section>
  );
  };
  
  export default Contact;