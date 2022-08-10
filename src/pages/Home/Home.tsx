import React, { useRef } from 'react'
import Bank from '../../components/bank/Bank';
import Footer from '../../components/footer/Footer';
import FormDetails from '../../components/formdetail/FormDetails';
import Hero from '../../components/hero/Hero'
import WhyArvo from '../../components/hero/WhyArvo';
import Navbar from '../../components/navbar/NavBarView'
import Paywith from '../../components/paywith/Paywith';
import Progress from '../../components/progress/Progress';
import { Getupdates } from './Getupdates';
import MakeCardless from "./MakeCardless"
import OurCustomer from './OurCustomer';
import StartedAvro from './StartedAvro';
import ZeroExtra from './ZeroExtra';
// document.body.style.overflow = 'hidden';

import ScrollToTop from '../../components/scrollToTop/ScrollToTop';
import LookingToTake from './LookingToTake';
import ScrollIcon from '../../components/scrollToTop/ScrollIcon';
const Home = () => {

  const whyavro = useRef()
  const contact = useRef()
  const product = useRef()
  const faqs = useRef()

  const scrollToSection = (elementRef: any) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth',
    })
  }
  return (
    <section className=''>
      <Navbar {...{ whyavro }} {...{ contact }} {...{ product }} {...{ faqs }}  {...{ scrollToSection }} />
      <Hero />
      <WhyArvo {...{ whyavro }} />
      <Progress />
      <div className='bg-[#F0FAFE]'>
        <Bank {...{ product }} />
        <Paywith />
        <MakeCardless />
        <ZeroExtra />
      </div>
      <LookingToTake />
      <StartedAvro />
      <OurCustomer {...{ faqs }} />
      <FormDetails {...{ contact }} />
      <Getupdates />
      <Footer />


      <ScrollToTop>
        i<ScrollIcon />
      </ScrollToTop>
    </section>
  )
}

export default Home
