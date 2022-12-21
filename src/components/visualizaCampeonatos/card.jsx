import "./content.css";
import React from "react";

import { BiDollar, BiCalendar, BiMap } from "react-icons/bi";
import { BsPeople } from "react-icons/bs";


export const Card = ({ img,valor,data,local,nrDplas } ) => {

    return (
        <div className="card">
            <div className="img_content">
                <img src={img} alt="photo-championship" className="photo_championship" />
            </div>
            <div className="info_card">
                <div>
                    <BiDollar className="icon_card" />
                    <p>{valor}</p>
                </div>
                <div>
                    <BiCalendar className="icon_card" />
                    <p>{data}</p>
                </div>
                <div>
                    <BiMap className="icon_card" />
                    <p>{local}</p>
                </div>
                <div>
                    <BsPeople className="icon_card" />
                    <p>{nrDplas}</p>
                </div>
            </div>
        </div>

    )
}