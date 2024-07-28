import React from "react";
import style from "./CategoryBox.module.css";
export default function CategoryBox({ Category, src, icon }) {
  return (
    <div className={style.CategoryBox}>
      <div className={style.img_wrap}>
        <img
          className={style.category_img}
          src={src}
          alt=""
        />
        <img
          className={style.category_icon}
          src={icon}
          alt=""
        />
      </div>
      <h1>{Category}</h1>
    </div>
  );
}
