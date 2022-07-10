import { Component } from "react";
import Navitem from "./Navitem";
import profilepic from "../img/Ashish.png";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      NavItemActive: "",
    };
  }
  activeitem = (x) => {
    if (this.state.NavItemActive.length > 0) {
      document
        .getElementById(this.state.NavItemActive)
        .classList.remove("active");
    }
    this.setState({ NavItemActive: x }, () => {
      document.getElementById(this.state.NavItemActive).classList.add("active");
    });
  };
  render() {
    return (
      <nav>
        <div className="neu2">
          <div className="neu1">
            <img
              src={profilepic}
              className="profilepic"
              alt="Profile Pic"
            ></img>
          </div>
        </div>
        <h2>
          Ashish  <mark> Raj</mark>
        </h2>
        <p>Software Testing and Development</p>
        <ul>
          <Navitem item="Home" tolink="/" activec={this.activeitem}></Navitem>
          <Navitem
            item="About"
            tolink="/about"
            activec={this.activeitem}
          ></Navitem>
          <Navitem
            item="Projects"
            tolink="/projects"
            activec={this.activeitem}
          ></Navitem>
          <Navitem
            item="Contact"
            tolink="/contact"
            activec={this.activeitem}
          ></Navitem>
        </ul>
      </nav>
    );
  }
}

export default Navbar;