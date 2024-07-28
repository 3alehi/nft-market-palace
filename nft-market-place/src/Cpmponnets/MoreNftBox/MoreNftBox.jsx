import React from "react";
import style from "./MoreNftBox.module.css";
export default function MoreNftBox({
  name,
  price,
  hprice,
  creator,
  nftpic,
  avatar,
}) {
  return (
    <div className={style.MoreNftBox}>
      <div className={style.body}>
        <img className={style.Img_nft} src={nftpic} alt="" />
        <div style={{ margin: "20px" }}>
          <div>
            <h2>{name}</h2>
            <div className={style.nft_info}>
              <img
                className={style.Avatar_info}
                src={avatar}
                alt=""
              />
              <span className={style.creator_nft}>{creator}</span>
            </div>
          </div>
          <div className={style.price}>
            <div className={style.price_Top}>
              <p>Price</p>
              <p>Highest Bid</p>
            </div>
            <div className={style.hight_Bottom}>
              <p>{price} ETH</p>
              <p>{hprice}wETH </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
