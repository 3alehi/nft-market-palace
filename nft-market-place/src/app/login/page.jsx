import React from "react";
import Style from "./Login.module.css";
import Input from "@/Cpmponnets/inputLogin/Input";
export default function index() {
  return (
    <div className={Style.login}>
      <div className={Style.left}>
        <img
          className={Style.img}
          src="./img/Poster/image-placeholder-85@1x.png"
          alt=""
        />
      </div>
      <div className={Style.right}>
        <h1>Create account</h1>
        <h3 className={Style.h3}>
          Welcome! enter your details and start creating, collecting and selling
          NFTs.
        </h3>
        <Input placeholder="username"/>
        <Input placeholder="Email address"/>
        <Input placeholder="password"/>
        <Input placeholder="confirm password"/>
        <button className={Style.btn}> Create account</button>

      </div>
    </div>
  );
}
