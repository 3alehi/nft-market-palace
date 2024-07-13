import React from 'react'
import style from "./Category.module.css"
import CategoryBox from '@/Cpmponnets/CategoryBox/CategoryBox'
export default function Category() {
  return (
    <div className={style.Category}>
      <h1>Browse Categories</h1>
   <div className={style.Box_category}>
   <CategoryBox/>
      <CategoryBox/>
      <CategoryBox/>
      <CategoryBox/>
      <CategoryBox/>
      <CategoryBox/>
      <CategoryBox/>
   </div>


    </div>
  )
}
