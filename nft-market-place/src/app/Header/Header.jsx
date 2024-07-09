import React from "react";
import style from "./Header.module.css";
export default function Header() {
  return (
    <div className="container">
      <div className={style.Header}>
        <div className={style.left_header}>
          <h1 className={style.h1_header}>
            Discover <br /> digital art & <br />
            Collect NFTs
          </h1>
          <p>
            NFT marketplace UI created with Anima for Figma. Collect, buy and
            sell art from more than 20k NFT artists.
          </p>

          <button className={style.btn_header}>
            {" "}
            <p>
              <img src="./img/Icon/RocketLaunch (2).png" alt="" />
            </p>{" "}
            Get Started
          </button>
          <div className={style.info_header}>
            <div className={style.info_header_div}>
              <span>240k+ </span>
              <span>Total Sale</span>
            </div>
            <div className={style.info_header_div}>
              <span>100k+</span>
              <span>Auctions</span>
            </div>

            <div className={style.info_header_div}>
              <span>240k+</span>
              <span>Artists</span>
            </div>
          </div>
        </div>
        <div className={style.right_header}></div>
      </div>
    </div>
  );
}
