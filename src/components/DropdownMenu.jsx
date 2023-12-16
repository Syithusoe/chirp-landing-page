/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

function DropdownMenu({ menu }) {
  return (
    <>
      {menu && (
        <div className="navbar-dropdown-container">
          <div className="navbar-dropdown">
            <Link className="navbar-item">Home</Link>
            <Link className="navbar-item">Pricing</Link>
            <Link className="navbar-item">FAQ</Link>
            <Link className="navbar-item">Login</Link>
          </div>
        </div>
      )}
    </>
  );
}

export default DropdownMenu;
