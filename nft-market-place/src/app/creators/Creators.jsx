import React from "react";
import style from "./Creators.module.css";
import CreatorsBox from "@/Cpmponnets/CreatorsBox/CreatorsBox";
export default function Creators() {
  return (
    <div>
      <div>
        <h1>Top creators</h1>
        <p>Checkout Top Rated Creators on the NFT Marketplace</p>
        <div>
          <button>View Rankings img</button>
        </div>
      </div>

      <CreatorsBox />
    </div>
  );
}
