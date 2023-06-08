import React from "react";
import Navbar from "../Navbar/Navbar";
import SearchFrom from "../SearchForm/SearchForm";
import "./header.css";

const Header = () => {
  return (
    <div className="holder">
      <header className="header">
        <Navbar />
        <div className="header-content flex flex-c text-center text-white">
          <h2 className="header-title text-capitalize">
            find your book choice.
          </h2>{" "}
          <br />
          <p className="header-text fs-18 fw-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore,
            fugit dignissimos. Id atque molestias, aut voluptatum mollitia
            maiores dolore sit molestiae qui, repellat laborum fugit?
          </p>
          <SearchFrom />
        </div>
      </header>
    </div>
  );
};

export default Header;
