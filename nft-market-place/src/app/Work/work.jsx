import React from "react";
import style from "./Work.module.css";
import WorkBox from "@/Cpmponnets/WorkBox/WorkBox";
export default function Work() {
  return (
    <div className={style.work}>
      <h1>How it works</h1>
      <h3>Find out how to get started</h3>
      <div className={style.work_box}>
        <WorkBox />
        <WorkBox />
        <WorkBox />
      </div>
    </div>
  );
}
