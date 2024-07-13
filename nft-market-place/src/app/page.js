import React from 'react'
import './reset.css';
import Header from './Header/Header';
import Collection from './Collection/Collection';
import Creators from './creators/Creators';
import Category from './Category/Category';
import MoreNft from './MoreNft/MoreNft';

export default function page() {
  return (
    <div className='container'>
      <Header/>
      <Collection/>
      <Creators/>
      <Category/>
      <MoreNft/>




    </div>
  )
}
