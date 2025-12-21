import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faGlobe, faBuilding } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faInstagram, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white text-gray-700 py-12">
      <div className="container mx-auto px-0 grid grid-cols-1 md:grid-cols-4 gap-10"
      >
        <div>
          <img src="/logo.avif" alt="" />
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">LERNING MATERIALS</h3>
          <ul className="space-y-2">
            <li><a href="https://www.geeksforgeeks.org/" className="hover:text-blue-600">Geeks For Geeks</a></li>
            <li><a href="https://www.javatpoint.com/" className="hover:text-blue-600">Javat Point</a></li>
            <li><a href="https://www.w3schools.com/" className="hover:text-blue-600">W3 Schools</a></li>
            <li><a href="https://www.tutorialspoint.com/index.htm" className="hover:text-blue-600">Tutorials Point</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4">HIRING TACTICS</h3>
          <ul className="space-y-2">
            <li><Link to="#" className="hover:text-blue-600">Home</Link></li>
            <li><Link to="/jobs" className="hover:text-blue-600">Jobs</Link></li>
            <li><Link to="/browse" className="hover:text-blue-600">Browse</Link></li>
            <li><Link to="/login" className="hover:text-blue-600">Login</Link></li>
            <li><Link to="/signup" className="hover:text-blue-600">Signup</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-4">GET IN TOUCH</h3>
          <ul className="space-y-3">
            <li className="flex items-center gap-2">
              <FontAwesomeIcon icon={faEnvelope} className="text-blue-600" />
              <span>E-MAIL : salimptu01@gmail.com</span>
            </li>
            <li className="flex items-center gap-2">
              <FontAwesomeIcon icon={faPhone} className="text-blue-600" />
              <span>WHATS-APP : +91 8873136656</span>
            </li>
            <li className="flex items-center gap-2">
              <FontAwesomeIcon icon={faBuilding} className="text-blue-600" />
              <span>CONTACT NO. : +91 8873136656</span>
            </li>
            <li className="flex gap-4 mt-4">
              <a href="https://www.facebook.com/Iamsalimansari" className="text-blue-600 hover:text-blue-700">
                <FontAwesomeIcon icon={faFacebookF} size="lg" />
              </a>
              <a href="https://x.com/imsalimansari" className="text-blue-400 hover:text-blue-500">
                <FontAwesomeIcon icon={faTwitter} size="lg" />
              </a>
              <a href="https://www.instagram.com/imsalimansari/" className="text-pink-600 hover:text-pink-700">
                <FontAwesomeIcon icon={faInstagram} size="lg" />
              </a>
              <a href="https://www.linkedin.com/in/imsalimansari/" className="text-blue-700 hover:text-blue-800">
                <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
              </a>
            </li>
          </ul>
        </div>
      </div><br />
      <div className="mb-4 md:mb-0 bg-slate-600 text-white text-center">
            <p>© 2024 Hiring Tactics. All rights reserved. | Design & Developed by Hiring Tactics</p>
          </div>
          
    </footer>
  );
};

export default Footer;