import React from "react";
import style from "./Creators.module.css";
import CreatorsBox from "@/Cpmponnets/CreatorsBox/CreatorsBox";
export default function Creators() {
  return (
    <div>
      <div className={style.top_creator}>
        <div className={style.left_creator}>
        <h1>Top creators</h1>
        <p>Checkout Top Rated Creators on the NFT Marketplace</p>
        </div>
        <div className={style.btn_div}>

          <button className={style.btn_creator}> <img className={style.img_creator} src="./img/Icon/RocketLaunch (2).png" alt="" />View Rankings</button>
        </div>
      </div>
      <div className={style.creator_box}>
      <CreatorsBox />
      <CreatorsBox />
      <CreatorsBox />

      <div className={style.btn_div}>
      <button className={style.btn_creator_mobile}> <img className={style.img_creator} src="./img/Icon/RocketLaunch (2).png" alt="" />View Rankings</button>

      </div>
 


      </div>

    </div>
  );
}
