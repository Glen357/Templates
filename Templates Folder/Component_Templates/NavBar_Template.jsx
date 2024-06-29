import { Link } from "react-router-dom";
// import buttonImage1 from "/Home+Text.png";
// import buttonImage2 from "/Tours.jpg";
// import buttonImage3 from "/Events.png"
// import buttonImage4 from "/Contact.png";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div>
      <div className="NavContainer">
        <div className="titleDiv"> <strong> <img src="Long-logo.png" alt="" /></strong></div>
        <Link to="/Home">
          {/* <img src={buttonImage1} alt="Home" /> */}<strong>Home</strong>
        </Link>
        <Link to="/Tours">
          {/* <img src={buttonImage2} alt="Tours" />*/}<strong>Tours</strong> 
        </Link>
        <Link to="/Events">
          {/* <img src={buttonImage3} alt="Events" />*/}<strong>Events</strong> 
        </Link>
        <Link to="/Contact">
          {/* <img src={buttonImage4} alt="Contact" />*/}<strong>Contact</strong> 
        </Link>
      </div>
    </div>
  );
};

export default NavBar;