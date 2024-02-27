import React, { useEffect } from 'react'
import HeroSection from './Components/HeroSection'
import { useGlobalContext } from './context'
import Services from './Services';
import Contact from './Contact';

const Home = () => {
  const { updateHomePage } = useGlobalContext();

  useEffect(() => {
    updateHomePage();
  }, [])

  // const data = {
  //   name: 'Sapariya Sohil',
  //   image : './assets/images/hero.svg'
  // }
  return (
    // <HeroSection {...data} />
    <>
      <HeroSection />
      <Services />
      <Contact />
    </>
  )
}

export default Home