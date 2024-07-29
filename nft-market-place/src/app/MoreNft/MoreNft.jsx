import React from "react";
import style from "./MoreNft.module.css";
import MoreNftBox from "@/Cpmponnets/MoreNftBox/MoreNftBox";
export default function MoreNft() {
  const moreNfts = [
    {
      id: 1,
      name: "Distant Galaxy",
      creator: "MoonDancer",
      avatarCreator: "./img/Avatar/Avatar Placeholder (15).png",
      logo: "./img/nft/Image Placeholder (1).png",
      Price: 1.63,
      Highest: 0.33,
    },
    {
      id: 2,
      name: "Life on Edena",
      creator: "NebulaKid",
      avatarCreator: "./img/Avatar/Avatar Placeholder (14).png",
      logo: "./img/nft/Image Placeholder.png",
      Price: 1.63,
      Highest: 0.33,
    },
    {
      id: 3,
      name: "AstroFiction",
      creator: "Spaceone",
      avatarCreator: "./img/Avatar/Avatar Placeholder (13).png",
      logo: "./img/nft/Image.jpg",
      Price: 1.63,
      Highest: 0.33,
    },
  ];
  return (
    <div>
      <div className={style.top}>
        <div className={style.text}>
          <h1>Discover More NFTs</h1>
          <p>Explore new trending NFTs</p>
        </div>
        <div className={style.btn}>
          <button className={style.btn_more_nft}>
            <img src="./img/Icon/Eye (1).png" alt="" />
            <span>See All</span>
          </button>
        </div>
      </div>
      <div className={style.Box}>
        {moreNfts.map((data) => (
          <MoreNftBox
            name={data.name}
            price={data.Price}
            hprice={data.Highest}
            creator={data.creator}
            nftpic={data.logo}
            avatar={data.avatarCreator}
          />
        ))}

        {/* <MoreNftBox /> */}
      </div>
      <div className={style.btn_}>
          <button className={style.btn_more_nft}>
            <img src="./img/Icon/Eye (1).png" alt="" />
            <span>See All</span>
          </button>
        </div>    </div>
  );
}
