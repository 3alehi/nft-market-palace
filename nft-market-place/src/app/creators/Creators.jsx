"use client";
import React from "react";
import style from "./Creators.module.css";
import CreatorsBox from "@/Cpmponnets/CreatorsBox/CreatorsBox";
export default function Creators() {
  const Creator = [
    {
      Id: 1,
      Name: "Keepitreal",
      Avatart: "./img/Avatar/Avatar Placeholder.png",
      Sale: "34.25",
    },
    {
      Id: 2,
      Name: "DigiLab",
      Avatart: "./img/Avatar/Avatar Placeholder (17).png",
      Sale: "30",
    },
    {
      Id: 3,
      Name: "GravityOne",
      Avatart: "./img/Avatar/Avatar Placeholder (18).png",
      Sale: "34",
    },
    {
      Id: 4,
      Name: "Juanie",
      Avatart: "./img/Avatar/Avatar Placeholder (19).png",
      Sale: "58",
    },
    {
      Id: 5,
      Name: "BlueWhale",
      Avatart: "./img/Avatar/Avatar Placeholder (21).png",
      Sale: "62",
    },
    {
      Id: 6,
      Name: "mr fox",
      Avatart: "./img/Avatar/Avatar Placeholder (22).png",
      Sale: "34",
    },
    {
      Id: 7,
      Name: "Shroomie",
      Avatart: "./img/Avatar/Avatar Placeholder (23).png",
      Sale: "12.58",
    },
    {
      Id: 8,
      Name: "robotica",
      Avatart: "./img/Avatar/Avatar Placeholder (24).png",
      Sale: "52.3",
    },
    {
      Id: 9,
      Name: "RustyRobot",
      Avatart: "./img/Avatar/Avatar Placeholder (25).png",
      Sale: "34",
    },
    {
      Id: 10,
      Name: "animakid",
      Avatart: "./img/Avatar/Avatar Placeholder (26).png",
      Sale: "34",
    },
    {
      Id: 11,
      Name: "Dotgu",
      Avatart: "./img/Avatar/Avatar Placeholder (27).png",
      Sale: "40.2",
    },
    {
      Id: 12,
      Name: "Ghiblier",
      Avatart: "./img/Avatar/Avatar Placeholder (16).png",
      Sale: "7.02",
    },
  ];
  return (
    <div>
      <div className={style.top_creator}>
        <div className={style.left_creator}>
          <h1>Top creators</h1>
          <p>Checkout Top Rated Creators on the NFT Marketplace</p>
        </div>
        <div className={style.btn_div}>
          <button className={style.btn_creator}>
            {" "}
            <img
              className={style.img_creator}
              src="./img/Icon/RocketLaunch (2).png"
              alt=""
            />
            View Rankings
          </button>
        </div>
      </div>
      <div className={style.creator_box}>
        {Creator.map((data) => (
          <CreatorsBox sale={data.Sale} name={data.Name} avatar={data.Avatart}  id={data.Id}/>
        ))}

        <div className={style.btn_div}>
          <button className={style.btn_creator_mobile}>
            {" "}
            <img
              className={style.img_creator}
              src="./img/Icon/RocketLaunch (2).png"
              alt=""
            />
            View Rankings
          </button>
        </div>
      </div>
    </div>
  );
}
