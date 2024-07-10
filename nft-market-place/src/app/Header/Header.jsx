import React from "react";
import style from "./Header.module.css";
export default function Header() {
  return (
    <div >
      <div className={style.Header}>
        <div className={style.left_header}>
          <h1 className={style.h1_header}>
            Discover <br className={style.br}  /> digital art & <br className={style.br} />
            Collect NFTs
          </h1>
          <p className={style.p_}>
            NFT marketplace UI created with Anima for Figma. Collect, buy and
            sell art from more than 20k NFT artists.
          </p>

          <button className={style.btn_header}>
            {" "}
            <p className={style.p_btn}>

            <span>
              <img src="./img/Icon/RocketLaunch (2).png" alt="" />
            </span>
            Get Started
            </p>

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
        <div className={style.right_header}>
          {/* <div className={style.div_right_header}> */}
          <img
            className={style.img_header_right}
            src="./img/nft/heroanimationtransparentbck-2.gif"
            alt=""
          />
          {/* <div className={style.user_info}>
              <h1 className={style.name_h1}>
              Space Walking
              </h1>
              <div className={style.cildern_user_info}>
                <p className={style.p_childeren}><img src="./img/Avatar/avatar1.svg" alt="" /> Animakid</p>


              </div> */}

          {/* </div> */}
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}
