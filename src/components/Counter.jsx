import React from 'react';
import professorImage from '../assets/professor_desimone-1.png';

export default function Counter() {
  return (
    <>
    <div id="counter-section">
        <div className="speak-div">
            <div className="science-img">
                <div className="imgDiv">
                    <img src={professorImage} alt=""/>
                </div>
                <div className="counter-Div">
                    <div>
                        <p className="p-count">20+</p>
                        <p>years of research</p>
                    </div>
                    <div>
                        <p className="p-count">8</p>
                        <p>Selected Bacterial strains</p>
                    </div>
                    <div>
                        <p className="p-count">900</p>
                        <p>upto goes Billion Live Bacteria per sachet</p>
                    </div>
                    <div>
                        <p className="p-count">+200</p>
                        <p>scientific publications</p>
                    </div>
                </div>

            </div>
            <div className="science-text">

                <h1 className="science-Headtext">Science <span className="science-span1">Speaks <br/> For </span><span className="science-span2">Itself</span> </h1>
                <p>The De Simone Formulation contained in CDS22-formula is the only
                    probiotic formulation recommended and recognized by name in
                    the American College of Gastroenterology AGA guidelines for the
                    management of pouchitis and other pouch-related disorders (Olleik
                    et al., Gastroenterology, Vol. 164, No. 6, 2023).
                    </p>
                <p>The European Crohn’s and Colitis Organization (ECCO) has included
                    the De Simone Formulation in its guidelines for the management of
                    Inflammatory Bowel Diseases (IBD) (ECCO, ECCO News, 2023).
                    CDS22-formula is highly effective in the dietary management of
                    various gastrointestinal conditions. The extensive scientific evidence,
                    comprising over 200 peer-reviewed articles and more than 80
                    controlled clinical studies, ensures that the benefits observed in
                    clinical trials are replicable in everyday use</p>
                <button>view products</button>
            </div>

        </div>
    </div>
    </>
  );
}
