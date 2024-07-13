"use client";
import React from "react";
import style from "./Box.module.css";
export default function Box() {
  return (
    <div className={style.Box}>
      <img
        className={style.poster}
        src="./img/Poster/Primary Photo Placeholder (1).png"
        alt=""
      />
      <div className={style.box_collection}>
        <img src="./img/Poster/Secondary Photo Placeholder (1).png" alt="" />
        <img src="./img/Poster/Secondary Photo Placeholder.png" alt="" />
        <div className={style.box_null}>
          <h2>+1254</h2>
        </div>
      </div>
      <h3>DSGN Animals</h3>
      <div className={style.collection_info}>
        <h3 className={style.Box_user_info}>
          <img src="./img/Avatar/Avatar (4).png" alt="" /> MrFox
        </h3>
      </div>
    </div>
  );
}
