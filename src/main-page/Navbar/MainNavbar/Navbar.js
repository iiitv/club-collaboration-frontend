import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import "./Navbar.css";
const Navbar = (props) => {
  let click = 0;
  const myFunction = () => {
    const x = document.getElementById("center-link");
    const body = document.getElementsByTagName("body")[0];
    const y = document.getElementsByClassName("our-club")[0];
    if (x.className === "responsive-menu") {
      x.className += " center-link";
      body.addEventListener(
        "click",
        function () {
          var x = document.getElementById("center-link");
          x.className = "responsive-menu";
        },
        false
      );
      x.addEventListener(
        "click",
        function (ev) {
          ev.stopPropagation();
        },
        false
      );
      y.addEventListener(
        "click",
        function (ev) {
          const dropdown = document.getElementsByClassName("drop-menu")[0];
          if (click === 0) {
            click++;
            dropdown.className += " show-drop-menu";
          } else {
            dropdown.className = "drop-menu";
            click = 0;
          }
          ev.stopPropagation();
        },
        false
      );
    } else {
      x.className = "responsive-menu";
    }
  };

  function handleMenu() {
    const x = document.getElementById("center-link");
    x.className = "responsive-menu";
  }

  function handleSidemenu() {
    const sidemenu = document.getElementsByClassName("menu-2")[0];
    if (sidemenu.className === "menu-2") {
      sidemenu.className += " side-menu";
    } else {
      sidemenu.className = "menu-2";
    }
  }

  function onMouseOver() {
    const dropdown = document.getElementsByClassName("drop-menu")[0];
    if (dropdown.className === "drop-menu") {
      dropdown.className += " show-drop-menu";
    }
  }
  function onMouseOut() {
    const dropdown = document.getElementsByClassName("drop-menu")[0];
    dropdown.className = "drop-menu";
  }
  const renderSideBarNavLink = (to, title) => {
    return (
      <h2 className={"menu-list"}>
        <NavLink to={to}>{title}</NavLink>
      </h2>
    );
  };
  const renderMenuNavLink = (to, title) => {
    return (
      <NavLink exact activeClassName="current" to={to} onClick={handleMenu}>
        {title}
      </NavLink>
    );
  };
  const clubs = props.club;
  return (
    <div className="all-navbar">
      <div className="three-dot">
        <button onClick={myFunction}>
          <img src="../images/navbar-image/3-dot.png" alt="main-menu"></img>
        </button>
      </div>
      <div className="navbar-all-links">
        <div className="logo">
          <h1>Club</h1>
          <h4>Collaboration</h4>
        </div>
        <div className="responsive-menu" id="center-link">
          <h1>Club</h1>
          <h4>Collaboration</h4>
          {renderMenuNavLink("/", "Home")}
          {renderMenuNavLink("/Events", "Events")}
          {renderMenuNavLink("/Announcement", "Announcement")}
          {renderMenuNavLink("/Login", "Login")}
          <span
            className="our-club"
            onClick={onMouseOver}
            onMouseOut={onMouseOut}
          >
            Our Clubs
          </span>
          <br></br>
          <div
            className="drop-menu"
            onMouseOver={onMouseOver}
            onMouseOut={onMouseOut}
          >
            {clubs.map((index) => (
              <div key={index.id}>
                <NavLink
                  exact
                  activeClassName="active-drop-down"
                  to={`/club/${index.club}`}
                >
                  {index.club}
                </NavLink>
              </div>
            ))}
          </div>
        </div>
        <div>
          <img
            className="slide-menu-icon"
            onClick={handleSidemenu}
            alt="menu"
            src="../images/navbar-image/menu.png"
          ></img>
        </div>
      </div>
      <div className="menu-2 side-menu">
        <div className="bada-flex" onClick={handleSidemenu}></div>
        <div className="chota-flex">
          <button className="cross-img" onClick={handleSidemenu}>
            <img alt="go-back" src="../images/navbar-image/cross.png"></img>
          </button>
          <ul>
            {renderSideBarNavLink("/Blogs", "Blogs")}
            {renderSideBarNavLink("/Gallery", "Gallery")}
            {renderSideBarNavLink("/Contact", "Contact")}
            {renderSideBarNavLink("/Posts", "Posts")}
            {renderSideBarNavLink("/News", "News")}
            {renderSideBarNavLink("/Members", "Members")}
            {renderSideBarNavLink("/About", "About us")}
          </ul>
          <div className="border"></div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    club: state.clubs.club,
  };
};

export default connect(mapStateToProps)(Navbar);
