import React from 'react'
import Hero from '../Components/Hero/index'
import InfoSection from '../Components/InfoSecions/index'
import NewsletterForm from '../Components/NewsLetter/News'
import ScrollToTop from '../Components/scrollTop/ScrollTop'
const Home = () => {
  return (
    <>
    <ScrollToTop/>
    <Hero />
    <InfoSection/>
    <NewsletterForm />
    </>
  )
}

export default Home