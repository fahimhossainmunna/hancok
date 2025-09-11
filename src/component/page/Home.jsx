import React from 'react'
import Header from '../layouts/Header'
import Banner from '../layouts/Banner'
import About from './About'
import Popular from '../layouts/Popular'
import Streming from '../layouts/Streming'
import Sale from '../layouts/Sale'

const Home = () => {
  return (
    <>
    <Header/>
    <Banner/>
    <About/>
    <Popular/>
    <Streming/>
    <Sale/>
    </>
  )
}

export default Home