import "./confronto.css";
import { MdSportsTennis } from "react-icons/md";
import { AiOutlineClockCircle } from "react-icons/ai";
import profile from "./profile.svg";

export const Confronto = () => {
  return (
    <div className="confronto">
      <div className="pair">
        <div className="participant">
          <img src={profile} className="profile-pic-participant"></img>
          <span className="name">participant 1</span>
        </div>
        <div className="participant">
          <img src={profile} className="profile-pic-participant"></img>
          <span className="name">participant 2</span>
        </div>
      </div>
      <div className="versus">
        <span>VS</span>
        <div className="container_info">
          <div className="info">
            <MdSportsTennis />
            <span>QUADRA</span>
          </div>
          <div className="info">
            <AiOutlineClockCircle />
            <span>16:30</span>
          </div>
        </div>
      </div>
      <div className="pair">
        <div className="participant">
          <img src={profile} className="profile-pic-participant"></img>
          <span className="name">participant 1</span>
        </div>
        <div className="participant">
          <img src={profile} className="profile-pic-participant"></img>
          <span className="name">participant 2</span>
        </div>
      </div>
    </div>
  );
}

