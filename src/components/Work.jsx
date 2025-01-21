import React from 'react';
import cycleImage from '../assets/Cycle.png';

export default function Work() {
  return (
    <>
    <div id="work-section">
        <div className="work-div">
            <div className="work-text">
                <h1>why does it  <span className="title-work">Work?</span> </h1>
                <p>Not all probiotics are the same. The overall biological action of a probiotic is not
                    simply the sum of its individual components’ actions but the result of a complex
                    network of relationships between the microorganisms it contains and the human
                    host. Unlike many other products on the market, the clinical results obtained
                    from CDS22-formula speak louder than any technical description</p>
                <p>CDS22-formula combines 8 bacterial strains selected for their biochemical and
                    enzymatic profiles and specifically calibrated in precise proportions to
                    synergistically act on the physiology of the human gastrointestinal tract.
                    
                    It is crucial to emphasize that the production of the Formulazione De Simone falls
                    within the field of biology, not chemistry, as the bacteria forming the product’s
                    base are living organisms. Their cultivation requires advanced scientific
                    knowledge and specific know-how, still protected by industrial secrecy.
                    
                </p>
                <p>The unique and advanced know-how developed by Prof. Claudio De Simone,
                    which includes specific industrial secrets, contributes to the uniqueness and
                    efficacy of CDS22-formula, making it extremely difficult for others to replicate or
                    produce an identical or functionally equivalent product.
                    
                    Supported by solid scientific evidence, CDS22-formula is highly effective in the
                    dietary management of dysbiosis and other gastrointestinal conditions, offering
                    proven and replicable clinical results.</p>
            </div>
            <div className="work-picdiv">
                <img src={cycleImage} alt=""/>
            </div>

        </div>
    </div>
    </>
  );
}
