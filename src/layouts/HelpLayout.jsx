import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function HelpLayout() {
  return (
    <div className="help-layout">
      <h3>Website Help</h3>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit,
        impedit?
      </p>

      <nav>
        <NavLink to="faq">Frequently Asked Questions</NavLink>
        <NavLink to="contact">Contact Us</NavLink>
      </nav>

      <Outlet />
    </div>
  );
}
