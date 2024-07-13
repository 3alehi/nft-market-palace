import React from "react";
import style from "./MoreNftBox.module.css";
export default function MoreNftBox() {
  return (
      <div className={style.MoreNftBox}>
        <div className={style.body}>
          <img className={style.Img_nft} src="./img/nft/Image.jpg" alt="" />
   <div style={{margin:"20px"}}>
   <div >
        <h2>AstroFiction</h2>
        <div className={style.nft_info}>
          <img
            className={style.Avatar_info}
            src="./img/Avatar/Avatar Placeholder (13).png"
            alt=""
          />
          <span className={style.creator_nft}>Spaceone</span>
        </div>
      </div>
      <div className={style.price}>
        <div className={style.price_Top}>
          <p>Price</p>
          <p>Highest Bid</p>
        </div>
        <div className={style.hight_Bottom}>
          <p>1.63 ETH</p>
          <p>0.33 wETH </p>
        </div>
      </div>
   </div>
    </div>
    </div>
  );
}
