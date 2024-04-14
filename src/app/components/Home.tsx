import React from 'react'

import Hero from './Hero/Hero'
import Feature from './Feature/feature'
import PopularBurger from './Users/popularUsers'
import Newsletter from './Newsletter/Newsletter'
import Experience from './Experience/Experience'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Feature/>
      <PopularBurger/>
      <Experience/>
      <Newsletter/>
    </div>
  )
  
}

export default Home;