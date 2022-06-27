import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav className="flex items-center justify-between flex-wrap bg-black text-white p-6">
        <Link to="/">Home</Link>
        <ul className="flex items-center">
          <Link className="mr-5" to="/create">
            Create
          </Link>
          <Link className="mr-5" to="/list">
            List
          </Link>
        </ul>
      </nav>
    </header>
  );
}
