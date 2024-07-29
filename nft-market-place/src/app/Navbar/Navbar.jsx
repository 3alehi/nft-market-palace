import React from "react";

import style from "./Navbar.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
    <div>
      <ul className={style.navbar}>
        <div className={style.mark}>
          <h2 className={style.header}>
            {" "}
            <p className={style.mark_icon}>
              <img className={style.icon_nf} src="./img/Icon/Storefront.svg" alt="" />
            </p>{" "}
            <span className={style.nft_de}> NFT Marketplace</span>
          </h2>
        </div>
        <div className={style.humberger_nav}>
          <img
            src="img/Icon/Burger Menu.png
"
            alt=""
          />
        </div>
        <div className={style.list}>
          <li>Marketplace</li>
          <li>Rankings</li>
          <li>Connect a Wallets</li>
          <li>
            {" "}
            <Link href={"/login"} className={style.btn_navbar}>
              {" "}
              <p>
                {" "}
                <img
                  src="./img/Icon/User.svg"
                  className={style.icon_list}
                  alt=""
                />
              </p>{" "}
              Sighn up
            </Link >{" "}
          </li>
        </div>
      </ul>
    </div>
  );
}
