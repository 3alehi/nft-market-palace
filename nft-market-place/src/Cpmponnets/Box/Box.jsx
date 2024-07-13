"use client";
import React from "react";
import style from "./Box.module.css";
export default function Box({poster,
  imgColection1,
  imgColection2,
  creator,
  desc,
avatar}) {
  return (
    <div className={style.Box}>
      <img
        className={style.poster}
        src={poster}
        alt=""
      />
      <div className={style.box_collection}>
        <img src={imgColection1} alt="" />
        <img src={imgColection2} alt="" />
        <div className={style.box_null}>
          <h2>+1254</h2>
        </div>
      </div>
      <h3>{desc}</h3>
      <div className={style.collection_info}>
        <h3 className={style.Box_user_info}>
          <img  className={ style.avatar}src={avatar} alt="" /> {creator}
        </h3>
      </div>
    </div>
  );
}
