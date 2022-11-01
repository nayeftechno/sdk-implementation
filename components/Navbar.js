import { memo } from "react";
import Link from "next/link";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark container-fluid">
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" href={"/"}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" href={"/"}>
              Home
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default memo(Navbar);
