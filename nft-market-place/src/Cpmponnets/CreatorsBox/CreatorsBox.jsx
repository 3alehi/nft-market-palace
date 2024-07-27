import React from "react";
import style from "./CreatorsBox.module.css";
export default function CreatorsBox({sale , name , avatar , id}) {
  return (
      <div className={style.CreatorsBox} >
      <span className={style.Rank}>{id}</span>
      <img className={style.img_creator_box} src={avatar} alt="" />
      <h3 className={style.name_nft}>{name}</h3>
      <p className={style.sales}><span className={style.price}>total sales :</span> {sale} ETH</p>
    </div>
  );
}
