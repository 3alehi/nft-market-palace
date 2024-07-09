import React from "react";

import style from "./Navbar.module.css";

export default function Navbar() {
  return (
    <div>

    <ul className={style.navbar}>
      <div className={style.mark}>
        <h2 className={style.header}> <p className={style.mark_icon}><img src="./img/Icon/Storefront.svg" alt="" /></p> NFT Marketplace</h2>
      </div>
      <div className={style.list}>
        <li>Marketplace</li>
        <li>Rankings</li>
        <li>Connect a Wallets</li>
        <li> <button className={style.btn_navbar}> <p> <img src="./img/Icon/User.svg" className={style.icon_list} alt="" /></p> Sighn up</button> </li>
      </div>
    </ul>
    </div>

  );
}
