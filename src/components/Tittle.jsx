import React from 'react';
import doublePack from '../assets/doublepack.png';

export default function Tittle() {
  return (
    <>
    <div id="title-section">
        <div className="formula-div">
            <div className="formula-text">
                <h1>The <span className="title-desimone">De Simone Formulation</span> unique and certified by <span className="invent">the Inventor</span> </h1>
                <p>The De Simone Formulation unique and certified <br/> by the Inventor</p>
            </div>
            <div className="formula-picdiv">
                <img src={doublePack} alt="" height="350px"/>
            </div>

        </div>
    </div>
    </>
  );
}
