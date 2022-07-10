import { Component } from "react";
import ReactTypingEffect from "react-typing-effect";
import profilepic from "../img/profile_photo.jpg";
import Social from "../components/Social";

class Home extends Component {
  render() {
    return (
      <div className="condiv home">
        <h1>
          Ashish <mark>Raj</mark>
        </h1>
        <ReactTypingEffect
          className="typingeffect"
          text={[
            "Software Testing and Development",
            "A Data Scientist",
          ]}
          speed={100}
          eraseDelay={900}
        />
        <div className="hr_line">
          <div className="hr_inner"></div>
        </div>
        <Social />
      </div>
    );
  }
}

export default Home;
