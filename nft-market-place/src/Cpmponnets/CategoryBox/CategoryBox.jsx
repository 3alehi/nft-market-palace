import React from "react";
import style from "./CategoryBox.module.css";
export default function CategoryBox() {
  return (
    <div className={style.CategoryBox}>
      <div className={style.img_wrap}>
        <img
          className={style.category_img}
          src="./img/Category/Image Placeholder (12).png"
          alt=""
        />
        <img
          className={style.category_icon}
          src="./img/Icon/PaintBrush (1).png"
          alt=""
        />
      </div>
      <h1>ART</h1>
    </div>
  );
}
