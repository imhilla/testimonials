import React from 'react';
import Header from './Reusables.js/Header';
import Hero from '../../src/Components/HomeComponents/Hero';
import Blog from './HomeComponents/Blog';
import Feedback from './HomeComponents/Feedback';
import Footer from './Reusables.js/Footer';
import Intergaration from './HomeComponents/Intergaration';
import Plan from './HomeComponents/Plan';

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <Intergaration />
      <Plan />
      <Feedback />
      <Blog />
      <Footer />
    </div>
  )
}
