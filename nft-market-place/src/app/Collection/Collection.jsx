import React from "react";
import style from "./Collection.module.css";
import Box from "@/Cpmponnets/Box/Box";
export default function Collection() {
  return (
    <div className="container">
      <div className={style.collection}>
        <h2>Trending Collection</h2>
        <p className={style.p_Box}>
          {" "}
          Checkout our weekly updated trending collection.
        </p>
        <div className={style.Box_div}>

        <Box />
        <Box />
        <Box />
        
        </div>
      </div>
    </div>
  );
}
