import React from 'react'
import './reset.css';
import Header from './Header/Header';
import Collection from './Collection/Collection';
import Creators from './creators/Creators';
import Category from './Category/Category';

export default function page() {
  return (
    <div className='container'>
      <Header/>
      <Collection/>
      <Creators/>
      <Category/>




    </div>
  )
}
