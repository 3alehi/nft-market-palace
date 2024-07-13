import React from "react";
import style from "./WorkBox.module.css";
export default function WorkBox() {
  return (
    <div className={style.WorkBox}>
      <img src="./img/Icon/Icon.png" alt="" />
      <h3>Setup Your wallet</h3>
      <p className={style.p}>
        Set up your wallet of choice. Connect it to the Animarket by clicking
        the wallet icon in the top right corner.
      </p>
    </div>
  );
}
