import React, { Component } from "react";
import "../styles/Home.css";
import "react-circular-progressbar/dist/styles.css";
import { CircleProgress } from "react-gradient-progress";
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import Shows from "./Shows";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import EventIcon from '@material-ui/icons/Event';

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
            <div style={{ width: 210, height: 210, display: "inline-block" }}>
              <CircularProgressbarWithChildren
                value={65}
                strokeWidth={0.5}
                textSize={"10px"}
                styles={buildStyles({
                  pathColor: "#EF0183",
                  trailColor: "#868586",
                  width: "20%",
                })}
              >
                <div
                  style={{
                    position: "relative",
                    width: "100px",
                    height: "100px",
                  }}
                >
                  <FavoriteBorderIcon style={{width: 40, height: 40, color: "blue"}}/>
                  <div style={{ fontSize: 30,fontFamily: "serif" }}>
                    0
                  </div>
                  <div style={{ fontSize: 16, color: "#868586" }}>Label</div>
                </div>
              </CircularProgressbarWithChildren>
              </div>
              <div style={{ width: 210, height: 210, display: "inline-block", marginLeft: "3%" }}>
              <CircularProgressbarWithChildren
                value={0}
                strokeWidth={0.5}
                textSize={"10px"}
                styles={buildStyles({
                  pathColor: "#EF0183",
                  trailColor: "#868586",
                  width: "20%",
                })}
              >
                <div
                  style={{
                    position: "relative",
                    width: "100px",
                    height: "100px",
                  }}
                >
                  <EventIcon style={{width: 40, height: 40}}/>
                  <div style={{ fontSize: 30,fontFamily: "serif" }}>
                    0
                  </div>
                  <div style={{ fontSize: 16, color: "#868586" }}>Label</div>
                </div>
              </CircularProgressbarWithChildren>
              </div>
              <div style={{ width: 210, height: 210, display: "inline-block", marginLeft: "3%"  }}>
              <CircularProgressbarWithChildren
                value={0}
                strokeWidth={0.5}
                textSize={"10px"}
                styles={buildStyles({
                  pathColor: "#EF0183",
                  trailColor: "#868586",
                  width: "20%",
                })}
              >
                <div
                  style={{
                    position: "relative",
                    width: "100px",
                    height: "100px",
                  }}
                >
                  <EventIcon style={{width: 40, height: 40}}/>
                  <div style={{ fontSize: 30,fontFamily: "serif" }}>
                    0
                  </div>
                  <div style={{ fontSize: 16, color: "#868586" }}>Label</div>
                </div>
              </CircularProgressbarWithChildren>
              </div>
              <div style={{ width: 210, height: 210, display: "inline-block", marginLeft: "3%"  }}>
              <CircularProgressbarWithChildren
                value={0}
                strokeWidth={0.5}
                textSize={"10px"}
                styles={buildStyles({
                  pathColor: "#EF0183",
                  trailColor: "#868586",
                  width: "20%",
                })}
              >
                <div
                  style={{
                    position: "relative",
                    width: "100px",
                    height: "100px",
                  }}
                >
                  <EventIcon style={{width: 40, height: 40}}/>
                  <div style={{ fontSize: 30,fontFamily: "serif" }}>
                    0
                  </div>
                  <div style={{ fontSize: 16, color: "#868586" }}>Label</div>
                </div>
              </CircularProgressbarWithChildren>
              </div>
            </span>
          
          {/* <span>
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
          </span> */}
        </div>
        <Shows />
      </div>
    );
  }
}
export default Home;
