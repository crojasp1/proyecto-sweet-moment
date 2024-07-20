import React from "react";
import "./Sidebar.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faFolderOpen } from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link to={"/addproduct"} style={{ textDecoration: "none" }}>
        <div className="sidebar-item">
          <FontAwesomeIcon icon={faCartShopping} />
          <p>Agregar carrito</p>
        </div>
      </Link>
      <Link to={"/listproduct"} style={{ textDecoration: "none" }}>
        <div className="sidebar-item">
          <FontAwesomeIcon icon={faFolderOpen} />
          <p>Lista de productos</p>
        </div>
      </Link>
    </div>
  );
};

export default Sidebar;
