import React from "react";
import style from "./CreatorsBox.module.css";
export default function CreatorsBox({sale , name , avatar , id}) {
  return (
      <div className={style.CreatorsBox} >
    <div className={style.right}>
    <span className={style.Rank}>{id}</span>
    <img className={style.img_creator_box} src={avatar} alt="" />
    </div>
    <div className={style.left}>
    <h3 className={style.name_nft}>{name}</h3>
    <p className={style.sales}><span className={style.price}>total sales :</span> {sale} ETH</p>
    </div>
   
    </div>
  );
}
