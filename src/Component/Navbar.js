import { Component } from "react";
import "./NavbarStyles.css";
import { MenuItems } from "./MenuItems";

class Navbar extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  render() {
    return (
      <>
        <div className="main-class">
          <div className="img">
            <img alt="logoImg" src="./assets/logo.png" />
          </div>
          <nav className="navbar-items">
            {/* <h1 className="logo">Demaze Technology</h1> */}

            <div className="menu-icons" onClick={this.handleClick}>
              <i
                className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
              ></i>
            </div>
            <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
              {MenuItems.map((item, index) => {
                return (
                  <li key={index}>
                    <a className={item.cName} href={item.url}>
                      {item.title}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </>
    );
  }
}

export default Navbar;
