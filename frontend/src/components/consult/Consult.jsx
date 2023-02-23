import React from 'react';

// import components
import Hero from './hero/Hero';
import Appointment from './appointment/Appointment';
import Prices from './prices/Prices';
import Contact from './contact/Contact';
import Footer from './footer/Footer';

const Consult = () => {
  return (
    <div className='w-full max-w-[1440px] mx-auto bg-orange-quaternary relative'>
      <Hero />
      <Appointment />
      <Prices />
      <Contact />
      <Footer />
    </div>
  );
};

export default Consult;
