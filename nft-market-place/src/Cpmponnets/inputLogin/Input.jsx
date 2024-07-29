import React from 'react'
import style from "./input.module.css"
export default function Input({placeholder=""}) {
  return (
    <div>
        <input className={style.input} type="text" placeholder={placeholder} />
        
    </div>
  )
}
