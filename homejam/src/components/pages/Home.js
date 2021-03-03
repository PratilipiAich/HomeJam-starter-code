import React, { Component } from "react";
import "../styles/Home.css";
import "react-circular-progressbar/dist/styles.css";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import Shows from "./Shows";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import EventIcon from "@material-ui/icons/Event";
import VideocamOutlinedIcon from '@material-ui/icons/VideocamOutlined';
import GroupOutlinedIcon from '@material-ui/icons/GroupOutlined';

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
            <div style={{ width: 200, height: 200, display: "inline-block" }}>
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
                  <FavoriteBorderIcon
                    style={{ width: 40, height: 40, color: "blue" }}
                  />
                  <div style={{ fontSize: 28, fontFamily: "serif" }}>456</div>
                  <div style={{ fontSize: 16, color: "#868586" }}>Likes everyday</div>
                </div>
              </CircularProgressbarWithChildren>
            </div>
            <div
              style={{
                width: 200,
                height: 200,
                display: "inline-block",
                marginLeft: "3%",
              }}
            >
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
                  <EventIcon style={{ width: 40, height: 40 }} />
                  <div style={{ fontSize: 28, fontFamily: "serif" }}>745</div>
                  <div style={{ fontSize: 16, color: "#868586" }}>Online events</div>
                </div>
              </CircularProgressbarWithChildren>
            </div>
            <div
              style={{
                width: 200,
                height: 200,
                display: "inline-block",
                marginLeft: "3%",
              }}
            >
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
                  <GroupOutlinedIcon style={{ width: 40, height: 40 }} />
                  <div style={{ fontSize: 28, fontFamily: "serif" }}>+10K</div>
                  <div style={{ fontSize: 16, color: "#868586" }}>Users</div>
                </div>
              </CircularProgressbarWithChildren>
            </div>
            <div
              style={{
                width: 200,
                height: 200,
                display: "inline-block",
                marginLeft: "3%",
              }}
            >
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
                  <VideocamOutlinedIcon style={{ width: 40, height: 40 }} />
                  <div style={{ fontSize: 28, fontFamily: "serif" }}>+2</div>
                  <div style={{ fontSize: 16, color: "#868586" }}>Views everyday</div>
                </div>
              </CircularProgressbarWithChildren>
            </div>
          </span>
        </div>
        <Shows />
      </div>
    );
  }
}
export default Home;
