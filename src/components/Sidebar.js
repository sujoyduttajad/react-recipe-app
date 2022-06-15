import React from "react";
import {
  Category,
  Document,
  Heart,
  Graph,
  Setting,
  InfoCircle,
} from "react-iconly";
import logo from "../images/logo.svg";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside>
      <section className="slideout">
        <div className="logo-container">
          <img src={logo} alt="logo" />
        </div>

        <NavLink
          exact
          to="/"
          className="navlink-styles"
          activeStyle={{
            width: "100%",
            borderRadius: "15px",
            opacity: "1",
            webkitBoxShadow:
              " 2px 2px 4px #70C997,  inset -2px -2px 4px #70C997",
            boxShadow:
              "  inset -2px -2px 4px #70C997,  inset  2px 2px 4px #70C997",
          }}
        >
          <div className="icon-container">
            <Category
              stroke="bold"
              name="category"
              set="light border"
              primaryColor="white"
              size="medium"
            />
            <h3>Overview</h3>
          </div>
        </NavLink>

        <NavLink
          to="/recipes"
          activeStyle={{
            width: "100%",
            borderRadius: "15px",
            opacity: "1",
            webkitBoxShadow:
              " 2px 2px 4px #70C997,  inset -2px -2px 4px #70C997",
            boxShadow:
              "  inset -2px -2px 4px #70C997,  inset  2px 2px 4px #70C997",
          }}
        >
          <div className="icon-container">
            <Document
              stroke="bold"
              name="category"
              set="light border"
              primaryColor="white"
              size="medium"
            />
            <h3>Recipes</h3>
          </div>
        </NavLink>

        <NavLink
          to="/favourites"
          activeStyle={{
            width: "100%",
            borderRadius: "15px",
            opacity: "1",
            webkitBoxShadow:
              " 2px 2px 4px #70C997,  inset -2px -2px 4px #70C997",
            boxShadow:
              "  inset -2px -2px 4px #70C997,  inset  2px 2px 4px #70C997",
          }}
        >
        <div className="icon-container">
          <Heart
            stroke="bold"
            name="category"
            set="light border"
            primaryColor="white"
            size="medium"
          />
          <h3>Favourites</h3>
        </div>
        </NavLink>

        <NavLink
          to="/community"
          activeStyle={{
            width: "100%",
            borderRadius: "15px",
            opacity: "1",
            webkitBoxShadow:
              " 2px 2px 4px #70C997,  inset -2px -2px 4px #70C997",
            boxShadow:
              "  inset -2px -2px 4px #70C997,  inset  2px 2px 4px #70C997",
          }}
        >
        <div className="icon-container">
          <Graph
            stroke="bold"
            name="category"
            set="light border"
            primaryColor="white"
            size="medium"
          />
          <h3>Community</h3>
        </div>
        </NavLink>

        <NavLink
          to="/settings"
          activeStyle={{
            width: "100%",
            borderRadius: "15px",
            opacity: "1",
            webkitBoxShadow:
              " 2px 2px 4px #70C997,  inset -2px -2px 4px #70C997",
            boxShadow:
              "  inset -2px -2px 4px #70C997,  inset  2px 2px 4px #70C997",
          }}
        >
        <div className="icon-container">
          <Setting
            stroke="bold"
            name="category"
            set="light border"
            primaryColor="white"
            size="medium"
          />
          <h3>Settings</h3>
        </div>
        </NavLink>

        <NavLink
          to="/help"
          activeStyle={{
            width: "100%",
            borderRadius: "15px",
            opacity: "1",
            webkitBoxShadow:
              " 2px 2px 4px #70C997,  inset -2px -2px 4px #70C997",
            boxShadow:
              "  inset -2px -2px 4px #70C997,  inset  2px 2px 4px #70C997",
          }}
        >
        <div className="icon-container">
          <InfoCircle
            stroke="bold"
            name="category"
            set="light border"
            primaryColor="white"
            size="medium"
          />
          <h3>Help</h3>
        </div>
        </NavLink>

      </section>
    </aside>
  );
};

export default Sidebar;
