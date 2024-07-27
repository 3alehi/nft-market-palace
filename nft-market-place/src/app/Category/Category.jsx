import React from "react";
import style from "./Category.module.css";
import CategoryBox from "@/Cpmponnets/CategoryBox/CategoryBox";
export default function Category() {
  const categoryData = [
    {
      id: 1,
      cagegort: "Art",
      logo: "./img/Category/Image Placeholder (12).png",
      icon: "./img/Icon/PaintBrush (1).png",
    },
    {
      id: 2,
      cagegort: "Collectibles",
      logo: "./img/Icon/Image Placeholder.png",
      icon: "./img/Icon/Swatches.png",
    },
    {
      id: 3,
      cagegort: "Music",
      logo: "./img/Icon/Image Placeholder (1).png",
      icon: "./img/Icon/MusicNotes.png",
    },
    {
      id: 4,
      cagegort: "Video",
      logo: "./img/Icon/Image Placeholder (2).png",
      icon: "./img/Icon/VideoCamera.png",
    },
    {
      id: 5,
      cagegort: "Utility",
      logo: "./img/Icon/Image Placeholder (3).png",
      icon: "./img/Icon/MagicWand.png",
    },
    // {
    //   id: 6,
    //   cagegort: "Sport",
    //   logo: "./img/Icon/Category Icon.png",
    //   icon: "./img/Icon/Basketball.png",
    // },
  ];
  return (
    <div className={style.Category}>
      <h1>Browse Categories</h1>
      <div className={style.Box_category}>
        {categoryData.map(data =>(
                  <CategoryBox Category={data.cagegort} src={data.logo} icon={data.icon}/>

        ))}
      
      </div>
    </div>
  );
}
