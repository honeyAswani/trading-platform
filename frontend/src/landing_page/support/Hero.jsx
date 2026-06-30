import React from "react";

function Hero() {
  return (
    <section className="container-fluid m-5 " id="supportHero" style={{backgroundColor:"rgb(245,245,245)" }}>
      <div className="p-5 " id="supportWrapper" style={{marginLeft:"30px"}}>
        <h4 className="fs-2">Support Portal</h4>
        <a href="" style={{textDecoration:"none"}}>Track Tickets<i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
      </div>
      <div className="row p-5 m-3">
        <div className="col-6 p-3">
          <h1 className="fs-3 mb-4 ">
            Search for an answer or browse help topics to create a ticket
          </h1>
          <input placeholder="Eg: How do I open my account, How do i activate F&O" style={{width:"70%",height:"50px",}} />
          <br />
          <a href="" style={{textDecoration:"none", lineHeight: "2.5"}}>Track account opening<i class="fa fa-long-arrow-right" aria-hidden="true"></i></a><br></br>
          <a href="" style={{textDecoration:"none" , lineHeight: "2.5"}}>Track segment activation<i class="fa fa-long-arrow-right" aria-hidden="true"></i></a><br></br>
          <a href="" style={{textDecoration:"none" , lineHeight: "2.5"}}>Intraday margins<i class="fa fa-long-arrow-right" aria-hidden="true"></i></a><br></br>
          <a href="" style={{textDecoration:"none" , lineHeight: "2.5"}}>Kite user manual<i class="fa fa-long-arrow-right" aria-hidden="true"></i></a><br></br>
        </div>
        <div className="col-6 p-3">
          <h1 className="fs-3">Featured</h1>
          <ol>
            <li>
              <a href="" style={{textDecoration:"none"}}>Current Takeovers and Delisting - January 2024</a>
            </li>
            <li>
              <a href="" style={{textDecoration:"none"}}>Latest Intraday leverages - MIS & CO</a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;