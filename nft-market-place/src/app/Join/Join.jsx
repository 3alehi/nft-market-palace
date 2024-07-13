import React from 'react'
import style from "./Join.module.css"
export default function Join() {
  return (
    <div className={style.Join_dad}> 
         <div className={style.join}>

<div className={style.right_join}>
  <div className={style.right_join_body}>
    <h1>Join our weekly digest</h1>
    <p>Get exclusive promotions & updates straight to your inbox.</p>
    <div className={style.footer}>
      <input type="text" placeholder='enter yout email' />
      <button>submit email</button>
    </div>
  </div>

</div>
<div className={style.left_join}>
  <img  className={style.img} src="./img/Poster/Photo.png" alt="" />
</div>
</div>
    </div>
 
  )
}
