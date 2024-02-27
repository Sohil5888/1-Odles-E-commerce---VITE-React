import React, { useEffect } from 'react'
import HeroSection from './Components/HeroSection'
import { useGlobalContext } from './context'

const About = () => {

  const {updateAboutPage} = useGlobalContext();

  useEffect(() => {
    updateAboutPage();
  }, [])

  // const data = {
  //   name: 'Sohil Sapariya',
  //   image : './assets/images/about1.svg'
  // }
  return (
    // <HeroSection {...data}/>
    <HeroSection />
  )
}

export default About