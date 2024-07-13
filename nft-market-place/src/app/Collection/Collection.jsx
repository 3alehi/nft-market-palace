"use client";
import React, { useState } from "react";
import style from "./Collection.module.css";
import Box from "@/Cpmponnets/Box/Box";
import IsMobie from "@/func/IsMobie";
import IsMobile from "@/func/IsMobie";
export default function Collection() {
  
  const Collection = [
    {
      id: 1,
      Des: "DSGN Animals",
      creator: "MrFox",
      poster: "img/Poster/Primary Photo Placeholder (1).png",
      imgColection: [
        "img/Poster/Secondary Photo Placeholder (1).png",
        "img/Poster/Secondary Photo Placeholder.png",
      ],
      Avatar:"img/Avatar/Avatar (4).png"

    },
    {
      id: 2,
      Des: "Magic Mushrooms",
      creator: "Shroomie",
      poster: "img/Poster/Primary Photo Placeholder (2).png",
      imgColection: [
        "img/Poster/Secondary Photo Placeholder (2).png",
        "img/Poster/Primary Photo Placeholder (2).png",
      ],
      Avatar:"./img/Avatar/Avatar Placeholder (14).png"
    },
    {
      id: 3,
      Des: "Disco Machines",
      creator: "BeKind2Robots",
      poster: "img/Poster/Primary Photo Placeholder (3).png",
      imgColection: [
        "img/Poster/Secondary Photo Placeholder (5).png",
        "img/Poster/Primary Photo Placeholder (3).png",
      ],
      Avatar:"./img/Avatar/Avatar Placeholder (13).png"

    },
  ];
  const [collectionmobile , setcoll] = useState([Collection[0]]) 

  return (
    <div className="container">
      <div className={style.collection}>
        <div className={style.header_col}>
          <h2>Trending Collection</h2>
          <p className={style.p_Box}>
            {" "}
            Checkout our weekly updated trending collection.
          </p>
        </div>
        <div className={style.Box_div}>
          { !IsMobile() && Collection.map((data) => (
            <Box
              poster={data.poster}
              imgColection1={data.imgColection[0]}
              imgColection2={data.imgColection[1]}
              creator={data.creator}
              desc={data.Des}
              avatar={data.Avatar}
            />
          ))}
              { IsMobile() && collectionmobile.map((data) => (
            <Box
              poster={data.poster}
              imgColection1={data.imgColection[0]}
              imgColection2={data.imgColection[1]}
              creator={data.creator}
              desc={data.Des}
              avatar={data.Avatar}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
