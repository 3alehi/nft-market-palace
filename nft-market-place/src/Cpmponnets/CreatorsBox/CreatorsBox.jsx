import React from "react";
import style from "./CreatorsBox.module.css";
export default function CreatorsBox() {
  return (
    <div className={style.CreatorsBox}>
      <span className={style.Rank}>1</span>
      <img className={style.img_creator_box} src="./img/Avatar/Avatar Placeholder.png" alt="" />
      <h3 className={style.name_nft}>slavik maish</h3>
      <p className={style.sales}>total sales : 52ETH</p>
    </div>
  );
}
