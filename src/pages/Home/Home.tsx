import React from 'react'
import Hero from '../../components/hero/Hero'
import WhyArvo from '../../components/hero/WhyArvo';
import Navbar from '../../components/navbar/NavBarView'
// document.body.style.overflow = 'hidden';
const Home = () => {
  return (
    <section className=''>
        <Navbar />
        <Hero />
        <WhyArvo />
    </section>
  )
}

export default Home
