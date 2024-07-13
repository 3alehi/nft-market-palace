import React from 'react'
import './reset.css';
import Header from './Header/Header';
import Collection from './Collection/Collection';
import Creators from './creators/Creators';
import Category from './Category/Category';
import MoreNft from './MoreNft/MoreNft';
import Bg from '@/Cpmponnets/BG/Bg';
import Work from './Work/work';
import Join from './Join/Join';

export default function page() {
  return (
    <div >
      <Header/>
      <Collection/>
      <Creators/>
      <Category/>
      <MoreNft/>
      <Bg/>
      <Work/>
      <Join/>




    </div>
  )
}
