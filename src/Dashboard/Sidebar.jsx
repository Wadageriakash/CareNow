import "./Navbar.css";
import { FiHome } from "react-icons/fi";

const Sidebar = ({ show }) => {
  return (
    <div className={show ? "sidenav acttive" : 'sidenav'}>
      <ul>
        <li>
          <a href=""><FiHome/>Home</a>
        </li>
        <li>
          <a href="">Appointments</a>
        </li>
        <li>
          <a href="">Medical Records</a>
        </li>
        <li>
          <a href="">contact us</a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
