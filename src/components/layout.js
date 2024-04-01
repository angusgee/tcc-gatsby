import * as React from "react";
import { Link } from "gatsby";

function Layout({ pageTitle, children }) {
  return (
    <main className="max-w-lg mx-auto">
      <nav>
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="text-blue-500 hover:underline">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-blue-500 hover:underline">
              About
            </Link>
          </li>
        </ul>
      </nav>
      <h1 className="text-4xl font-bold">{pageTitle}</h1>
      {children}
    </main>
  );
}

export default Layout;
