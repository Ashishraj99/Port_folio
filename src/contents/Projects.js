import { Component } from "react";
import project1 from "../img/Ashish2.jpg";
import project2 from "../img/Ashish3.jpg";
import project3 from "../img/Ashish4.png";

class Portfolio extends Component {
  render() {
    return (
      <div className="condiv">
        <h1 className="subtopic">My Work</h1>
        <div className="hr_line line2">
          <div className="inner2 inner3"></div>
        </div>
        <div class="port_out port1">
          <div class="port_in">
            <a href="https://github.com/Ashishraj99/Student-Databse-Mnagment-System">
              <img
                src={project1}
                className="po1"
                alt="AlgoSort Sorting Visualiser"
              ></img>
            </a>
          </div>
        </div>
        <div class="port_out port2">
          <div class="port_in">
            <a href="https://github.com/Ashishraj99/Contact-Managment-system">
              <img
                src={project2}
                className="po1"
                alt="Shoes Nike Landing page"
              ></img>
            </a>
          </div>
        </div>
        <div class="port_out port3">
          <div class="port_in">
            <a href="https://github.com/Ashishraj99/TodoCheckList">
              <img src={project3} className="po1" alt="To do list v2"></img>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Portfolio;
