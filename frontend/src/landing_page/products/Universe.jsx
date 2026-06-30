import React from "react";
import smallcaseLogo from "../../assets/smallcaseLogo.png";
import zerodhaFundhouse from "../../assets/zerodhaFundhouse.png";
import sensibullLogo from "../../assets/sensibullLogo.svg";
import goldenpiLogo from "../../assets/goldenpiLogo.png";
import streakLogo from "../../assets/streakLogo.png";
import dittoLogo from "../../assets/dittoLogo.png";



function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center" >
        <h1 className="text-muted fs-3">The Zerodha Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="col-4 p-3 mt-5">
          <img src={zerodhaFundhouse} style={{width:"199px", height:"52px"}} />
          <p className="text-small text-muted mt-3 fs-8" style={{height:"54px",width:"255px",marginLeft:"80px"}}>Our asset management venture that is creating simple and transparent index funds to help you save for your goals. </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src={sensibullLogo} style={{width:"199px", height:"52px"}} />
          <p className="text-small text-muted mt-3 fs-8" style={{height:"54px",width:"255px",marginLeft:"80px"}}>Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FLL/DLL, and more. </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src={goldenpiLogo} style={{width:"199px", height:"52px"}} />
          <p className="text-small text-muted mt-3 fs-8" style={{height:"54px",width:"255px",marginLeft:"80px"}}>Our asset management venture that is creating simple and transparent index funds to help you save for your goals. </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src={streakLogo} style={{width:"199px", height:"52px"}}/>
          <p className="text-small text-muted mt-3 fs-8" style={{height:"54px",width:"255px",marginLeft:"80px"}}>Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FLL/DLL, and more. </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src={smallcaseLogo}  style={{width:"199px", height:"52px"}}/>
          <p className="text-small text-muted mt-3 fs-8" style={{height:"54px",width:"255px",marginLeft:"80px"}}>Our asset management venture that is creating simple and transparent index funds to help you save for your goals. </p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img src={dittoLogo} style={{width:"199px", height:"52px"}}/>
          <p className="text-small text-muted mt-3 fs-8" style={{height:"54px",width:"255px",marginLeft:"80px"}}>Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FLL/DLL, and more. </p>
        </div>
        <button
          className="p-2 btn btn-primary fs-5 mb-5 mt-5"
          style={{ width: "20%", margin: "0 auto" }}
        >
          Signup Now
        </button>
      </div>
    </div>
  );
}

export default Universe;