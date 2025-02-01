import React from 'react';
import cycleImage from '../assets/Cycle.png';
import Header from '../components/Header';
import Footer from '../components/Footer';



export default function Aboutus() {
  return (
    <>
    <Header cart={[]}/>
    <div className='about-us'>
      <div className='about-text'>
        <p>The De Simone Formulation is a probiotic medical food containing living bacteria. It is the driving force behind Visbiome®, which aids in the dietary management of microbial imbalance associated with IBS, ulcerative colitis, pouchitis, and hepatic encephalopathy.</p>
        <p>Claudio De. Simone, a pioneer in the intestinal microbiota and inventor of a probiotic mixture (8 strains, 450 billion bacteria) known as the De Simone </p>
        <p>Multi‐strain formulations appear superior in achieving remission and preventing recurrence in UC. The use of probiotics was not associated with better ...</p>
      </div>
      <div className='about-img'>
        <img src={cycleImage} alt="" />
      </div>
    </div>
    <Footer/>
    </>

  );
}
