import React from "react";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="nav-bar">
      <ul>
        <li>
          <Link href="/about">
            <p>About Us</p>
          </Link>
        </li>
        <li>
          <Link href="/services">
            <p>Services</p>
          </Link>
        </li>
        <li>
          <Link href="/contacts">
            <p>Contacts</p>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
