import React from 'react';
import homeHero from '../../assets/homeHero.png'
import { Link } from "react-router-dom";
function Hero
() {
    return ( 
        <div className="container p-5  ">
            <div className="row text-center ">
                <div className="text-center">
                    <img  src={homeHero} alt='Hero Image'  className='img-fluid mb-4 ' style={{ width: "70%" }} />
                </div>
                <h1 className='mt-4 fs-2 text-muted'>Invest in everything</h1>
                <p className='mb-5 fs-5 text-muted'>Online platform to invest in stocks, derrivatives, mutual funds, ETFs, bonds, and more. </p>
                <Link
  to="/signup"
  className="btn btn-primary fs-5 mb-5 p-2"
  style={{ width: "20%", margin: "0 auto" }}
>
  Signup Now
</Link>
            </div>
        </div>
     );
}

export default Hero
;