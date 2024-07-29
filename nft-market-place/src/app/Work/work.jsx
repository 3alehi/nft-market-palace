import React from "react";
import style from "./Work.module.css";
import WorkBox from "@/Cpmponnets/WorkBox/WorkBox";
export default function Work() {
  const data = [
    {
      id: 1,
      desc: "Set up your wallet of choice. Connect it to the NFT market by clicking the wallet icon in the top right corner.",
      top: "Setup Your wallet",
      icon: "./img/Icon/Icon.png",
    },
    {
      id: 2,
      desc: "Upload your work and setup your collection. Add a description, social links and floor price.",
      top: "Create Collection",
      icon: "./img/Icon/Icon (1).png",
    },
    {
      id: 3,
      desc: "Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others.",
      top: "Start Earning",
      icon: "./img/Icon/Icon1.png",
    },
  ];
  return (
    <div className={style.work}>
      <h1>How it works</h1>
      <h3>Find out how to get started</h3>
      <div className={style.work_box}>
        {data.map((data) => (
          <WorkBox icon={data.icon} desc={data.desc} top1={data.top} />
        ))}
      </div>
    </div>
  );
}
