/**
 * v0 by Vercel.
 * @see https://v0.dev/t/1Ka3FO6qgjf
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 md:py-16 lg:py-20" id="footer">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div className="footer-contact">
            <h3 className="text-white text-2xl font-bold mb-4" translate="no">
              DLMS
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Department of Motor Traffic Rd, Boralesgamuwa
              <br />
              <strong>Phone:</strong>
              0112-123123{"\n                    "}
              <br />
              <strong>Email:</strong>{" "}
              <a className="text-gray-400 hover:text-gray-300" href="#">
                dlms2021@gmail.com
              </a>
            </p>
          </div>
          <div className="footer-links">
            <h4 className="text-white text-lg font-semibold mb-4">Useful Links</h4>
            <ul className="space-y-3">
              <li>
                <i className="bx bx-chevron-right" />{" "}
                <a className="text-gray-400 hover:text-gray-300 transition-colors" href="#">
                  Home
                </a>
              </li>
              <li>
                <i className="bx bx-chevron-right" />{" "}
                <a className="text-gray-400 hover:text-gray-300 transition-colors" href="#">
                  About us
                </a>
              </li>
              <li>
                <i className="bx bx-chevron-right" />{" "}
                <a className="text-gray-400 hover:text-gray-300 transition-colors" href="#">
                  Services
                </a>
              </li>
              <li>
                <i className="bx bx-chevron-right" />{" "}
                <a className="text-gray-400 hover:text-gray-300 transition-colors" href="#">
                  Terms of service
                </a>
              </li>
              <li>
                <i className="bx bx-chevron-right" />{" "}
                <a className="text-gray-400 hover:text-gray-300 transition-colors" href="#">
                  Privacy policy
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-links">
            <h4 className="text-white text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-3">
              <li>
                <i className="bx bx-chevron-right" />{" "}
                <a className="text-gray-400 hover:text-gray-300 transition-colors" href="#">
                  Driving License Application
                </a>
              </li>
              <li>
                <i className="bx bx-chevron-right" />{" "}
                <a className="text-gray-400 hover:text-gray-300 transition-colors" href="#">
                  Driving License Renewal
                </a>
              </li>
              <li>
                <i className="bx bx-chevron-right" />{" "}
                <a className="text-gray-400 hover:text-gray-300 transition-colors" href="#">
                  Driving License Replacement
                </a>
              </li>
              <li>
                <i className="bx bx-chevron-right" />{" "}
                <a className="text-gray-400 hover:text-gray-300 transition-colors" href="#">
                  Driving License Endorsement
                </a>
              </li>
              <li>
                <i className="bx bx-chevron-right" />{" "}
                <a className="text-gray-400 hover:text-gray-300 transition-colors" href="#">
                  Driving License Verification
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-links">
            <h4 className="text-white text-lg font-semibold mb-4">Our Social Networks</h4>
            <p className="text-gray-400 mb-4">
              Connect with us on our social media channels for the latest updates and information.
            </p>
            <div className="social-links flex gap-4">
              <a className="twitter text-gray-400 hover:text-gray-300 transition-colors" href="#">
                <i className="bx bxl-twitter" />
              </a>
              <a className="facebook text-gray-400 hover:text-gray-300 transition-colors" href="#">
                <i className="bx bxl-facebook" />
              </a>
              <a className="instagram text-gray-400 hover:text-gray-300 transition-colors" href="#">
                <i className="bx bxl-instagram" />
              </a>
              <a className="google-plus text-gray-400 hover:text-gray-300 transition-colors" href="#">
                <i className="bx bxl-skype" />
              </a>
              <a className="linkedin text-gray-400 hover:text-gray-300 transition-colors" href="#">
                <i className="bx bxl-linkedin" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 mt-8 border-t border-gray-800">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="copyright text-gray-400">
            © 2024
            <strong>
              <span className="text-white">Streamline Your Driving License Management</span>
            </strong>
            . All Rights Reserved{"\n              "}
          </div>
          <div className="credits text-gray-400 mt-4 md:mt-0">
            Designed by
            <a className="text-gray-400 hover:text-gray-300 transition-colors" href="#">
              BootstrapMade
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}