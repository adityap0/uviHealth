import React from "react";
import { Link } from "react-router-dom";


class Header extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <>
        <div className="flex justify-between align-middle w-9/12 mx-auto">
          <h1 className="m-4 font-bold text-green-500 text-2xl cursor-pointer">
            <Link to="/">appointApp</Link>
          </h1>
          <nav>
            <ul className="flex cursor-pointer">
              <li className="m-4 text-gray-400 hover:text-gray-700">
                <Link to="/new">New Appointment</Link>
              </li>
            </ul>
          </nav>
        </div>
      </>
    );
  }
}

export default Header;
