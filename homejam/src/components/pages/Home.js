import React, { Component } from "react";
import "../styles/Home.css";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { CircleProgress } from "react-gradient-progress";
import Shows from "./Shows";

class Home extends Component {
  render() {
    return (
      <div>
        <div className="text-container">
          <p className="heading">Cari Cari</p>
          <p className="content">
            Live from their sofa to yours. Get closer to your favorite artists,
            and never miss out.
          </p>
        </div>

        <div className="progress-bar">
          <span>
            <CircleProgress
              percentage={70}
              strokeWidth={1}
              secondaryColor="#868586"
              primaryColor={["#FE068D", "#EF0183"]}
            />
            <CircleProgress
              percentage={0}
              strokeWidth={1}
              secondaryColor="#868586"
              primaryColor={["#FE068D", "#EF0183"]}
            />
            <CircleProgress
              percentage={0}
              strokeWidth={1}
              secondaryColor="#868586"
              primaryColor={["#FE068D", "#EF0183"]}
            />
            <CircleProgress
              percentage={0}
              strokeWidth={1}
              secondaryColor="#868586"
              primaryColor={["#FE068D", "#EF0183"]}
            />
          </span>
        </div>
        <Shows />
      </div>
    );
  }
}
export default Home;
