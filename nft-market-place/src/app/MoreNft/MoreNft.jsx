import React from "react";
import style from "./MoreNft.module.css";
import MoreNftBox from "@/Cpmponnets/MoreNftBox/MoreNftBox";
export default function MoreNft() {
  return (
    <div>
      <div className={style.top}>
        <div>
          <h1>Discover More NFTs</h1>
          <p>Explore new trending NFTs</p>
        </div>
        <div>
          <button className={style.btn_more_nft}>
            <img src="./img/Icon/Eye (1).png" alt="" />
            <span>See All</span>
          </button>
        </div>
      </div>
      <div className={style.Box}>
        <MoreNftBox />
        <MoreNftBox />
        <MoreNftBox />
        <MoreNftBox />
        {/* <MoreNftBox /> */}
      </div>
    </div>
  );
}
