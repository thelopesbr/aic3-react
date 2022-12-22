import "./confronto.css";
import { MdSportsTennis, MdDateRange } from "react-icons/md";
import { AiOutlineClockCircle } from "react-icons/ai";


import img from "./profile.svg";

export const Confronto = ({chave, duoOne,duoTwo, court, time, date} ) => {
  return (
      <div name={chave} className="confronto">
        <div className="pair">
          <div className="participant">
            <img src={duoOne.player1?.img || img } className="profile-pic-participant"></img>
            <span className="name">{duoOne.player1?.name}</span>
          </div>
          <div className="participant">
            <img src={duoOne.player2?.img?.img || img} className="profile-pic-participant"></img>
            <span className="name">{duoOne.player2?.name}</span>
          </div>
        </div>
        <div className="versus">
          <span>VS</span>
          <div className="container_info">
            <div className="info">
              <MdDateRange />
              <span>{date}</span>
            </div>
            <div className="info">
              <MdSportsTennis />
              <span>{court}</span>
            </div>
            <div className="info">
              <AiOutlineClockCircle />
              <span>{time}</span>
            </div>
          </div>
        </div>
        <div className="pair">
          <div className="participant">
            <img src={duoTwo.player1?.img|| img} className="profile-pic-participant"></img>
            <span className="name">{duoTwo.player1?.name}</span>
          </div>
          <div className="participant">
            <img src={duoTwo.player2?.img || img} className="profile-pic-participant"></img>
            <span className="name">{duoTwo.player2?.name}</span>
          </div>
        </div>
      </div>
  );
}
