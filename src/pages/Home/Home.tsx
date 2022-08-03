import React from 'react'
import Bank from '../../components/bank/Bank';
import Footer from '../../components/footer/Footer';
import FormDetails from '../../components/formdetail/FormDetails';
import Hero from '../../components/hero/Hero'
import WhyArvo from '../../components/hero/WhyArvo';
import Navbar from '../../components/navbar/NavBarView'
import Paywith from '../../components/paywith/Paywith';
import Progress from '../../components/progress/Progress';
import MakeCardless from "./MakeCardless"
import OurCustomer from './OurCustomer';
import StartedAvro from './StartedAvro';
import ZeroExtra from './ZeroExtra';
// document.body.style.overflow = 'hidden';
const Home = () => {
  return (
    <section className=''>
      <Navbar />
      <Hero />
      <WhyArvo />
      <Progress />
      <div className='bg-[#F0FAFE]'>
        <Bank />
        <Paywith />
        <MakeCardless />
        <ZeroExtra />
      </div>
      <StartedAvro />
      <FormDetails />
      <OurCustomer />
      <Footer />
    </section>
  )
}

export default Home
