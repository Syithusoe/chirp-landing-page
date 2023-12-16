import { Link } from "react-router-dom";
import { BsTwitter } from "react-icons/bs";
import { FiAlignJustify } from "react-icons/fi";
import { useState } from "react";
import DropdownMenu from "./DropdownMenu";

function Navbar() {
  const [menu, setMenu] = useState(false);
  function handleChage() {
    setMenu((menu) => !menu);
  }
  return (
    <>
      <nav className="navbar">
        <div>
          <Link className="logo">Chirp</Link>
        </div>
        <div className="navbar-items">
          <Link className="navbar-item">Home</Link>
          <Link className="navbar-item">Pricing</Link>
          <Link className="navbar-item">FAQ</Link>
          <div>
            <button className="navbar-item-btn">
              <span>
                <BsTwitter />
              </span>
              Sign in with Twitter
            </button>
          </div>

          <FiAlignJustify
            size={30}
            className="navbar-item-icon"
            onClick={handleChage}
          />
        </div>
      </nav>
      <DropdownMenu menu={menu} />
    </>
  );
}

export default Navbar;
