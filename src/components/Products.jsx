import React from 'react';
import health1 from '../assets/rm900.png';
import health2 from '../assets/rm112.png';
import health3 from '../assets/rm450.png';

export default function Products({onAddToCart}) {
    const addToCart = (name, price) => {
        alert(`${name} (price: $${price}) added to the cart!`);
        onAddToCart(name,price); 
      };
    return (
    <>
        <div id="package-sec">
            <div className="package-div">
                <h1 style={{textAlign: "center"}}>Product packaging</h1>
                <p style={{textAlign: "center"}}>CDS22-formula, is available in sachets and capsules to meet specific tastes and needs.<br/>Each format of CDS22-formula is gluten-free and vegetarian.</p>
            </div>
            <div className="images-div">
                <div className="img1"><img src={health1} alt=""/>
                    <h2>CDS22-<i>formula</i> <br/> <span>900 billion sachets</span> </h2>
                    <p style={{textAlign: "center"}}>Superior power</p>
                    <p style={{textAlign: "center"}}>Potency, 900 billion live bacteria per sachet</p>
                    <p style={{textAlign: "center"}}>price : $900</p>
                    <button className="shop-now"  onClick={() => addToCart('CDS22-900 billion sachets', 900)}>SHOP NOW</button>
                </div>
                <div className="img-mid"><img src={health2} alt=""/>
                    <h2>CDS22-<i>formula</i> <br/> <span>112 billion sachets</span> </h2>
                    <p style={{textAlign: "center"}}>Strong and convenient</p>
                    <p style={{textAlign: "center"}}>Potency, 112 billion live bacteria per sachet</p>
                    <p style={{textAlign: "center"}}>price : $1500</p>
                    <button className="shop-now"  onClick={() => addToCart('CDS22-112 billion sachets', 1500)}>SHOP NOW</button>
                </div>
                <div className="img1"><img src={health3} alt=""/>
                    <h2>CDS22-<i>formula</i> <br/> <span>450 billion sachets</span> </h2>
                    <p style={{textAlign: "center"}}>Efficient and flexible</p>
                    <p style={{textAlign: "center"}}>Potency, 450 billion live bacteria per capsule</p>
                    <p style={{textAlign: "center"}}>price : $1750</p>
                    <button className="shop-now"  onClick={() => addToCart('CDS22-450 billion sachets', 1750)}>SHOP NOW</button>
                </div>
            </div>
            <div className="list-div">
                <h3>Follow the dosage instructions indicating on the packaging</h3>
                <li>Do not exceed the stated recommended daily dose unless otherwise advised by a doctor    </li>
                <li>store the product in the refrigator at atemperature of 2-8C and away from light. the product can with stand room temperature (max 25 C) for one  week <br/> without altering its effectiveness</li>
                <li>CDS22Formula is a food suplement; it does not replace a varied and balance diet</li>
                <li>Keep out of reach of young children</li>
                <li>This product is not intended for the diagnosis, traetment ,cure or prevention of diseases</li>
            </div>
            <div className="faqs">
                <h1>FAQS</h1>
                <button>What does CDS22-formula contain?</button>
                <button>Where can i find CDS22-formula?</button>
                <button>Why should i take CDS22-formula?</button>
                <button>Does CDS22-formula contain allergens?</button>
                <button>How do i take CDS22-formula?</button>
                <button>Why must CDS22-formula to be stored in the refrigrator?</button>
                <button>Can CDS22-formula have side effects?</button>
                <button>Can CDS22-formula be taken during antibiotic theraphy?</button>
                <button>Can CDS22-formula be taken during pregnancy?</button>

            </div>
        </div>
    </>
  );
}
