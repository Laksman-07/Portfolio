import { FC } from "react";
import "../styles/footer.css";
import { faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Footer : FC = () =>(
    <div className="footer bg-gray-800 py-4">
    <div className="footer-links flex justify-center items-center space-x-6">
     <a href='https://github.com/Laksman-07/Portfolio' target="_blank" rel="noopener noreferrer"> <FontAwesomeIcon icon={faGithub} className="footer-link text-white hover:text-gray-400" /></a>
     <a href='https://linkedin.com/in/laksman-s'target="_blank" rel="noopener noreferrer"> <FontAwesomeIcon icon={faLinkedin} className="footer-link text-white hover:text-gray-400" /></a>
     <a href='https://instagram.com/laksman._.07' target="_blank" rel="noopener noreferrer"> <FontAwesomeIcon icon={faInstagram} className="footer-link text-white hover:text-gray-400" /></a>
    </div>
  </div>
)
export default Footer;
