import React from "react";
import style from "./WorkBox.module.css";
export default function WorkBox({ icon, desc, top1 }) {
  return (
    <div className={style.WorkBox}>
        <img src={icon} alt="" />
        <h3>{top1}</h3>
        <p className={style.p}>{desc}</p>
    </div>
  );
}
