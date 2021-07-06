import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <div className=" navbar">
        <div className="container">
            {/* <div className="col-md-2"></div> */}
            <div className="col-md-6 col-sm-12">
            <ul>
        <li>
          <Link className="navLink" to="/Movies">Movies</Link>
        </li>
        <li>
           
          <Link  className="navLink" to="/streams">Streams</Link>
        </li>
        <li>
          <Link  className="navLink" to="/Events">Events</Link>
        </li>
        <li>
          <Link  className="navLink" to="/Plays">Plays</Link>
        </li>
        <li>
          <Link  className="navLink"to="/Sports">Sports</Link>
        </li>

        <li>
          <Link  className="navLink" to="/Activities">Activities</Link>
        </li>
        <li>
          <Link  className="navLink"  to="/Buzz">Buzz</Link>
        </li>
      </ul>
            </div>
            <div className="col-md-4 col-sm-12">
                <ul>
                    <li>
                    <Link  className="navLink" to="/ListYourShow">ListYourShow</Link>
                    </li>
                    <li>
                    <Link  className="navLink" to="/Corporates">Corporates</Link>
                    </li>
                    <li>
                    <Link  className="navLink" to="/Offers">Offers</Link>
                    </li>
                    <li>
                    <Link  className="navLink" to="/GiftCards">GiftCards</Link>
                    </li>
                </ul>
            </div>
        
        </div>
      
    </div>
  );
}
