import React from "react";
import "./Apps.css";

const apps = [
  {
    name: "Kite",
    description: "Our ultra-fast flagship trading platform with streaming market data.",
    icon: "fa-solid fa-chart-line",
  },
  {
    name: "Console",
    description: "Portfolio analytics, reports, tax statements and trade history.",
    icon: "fa-solid fa-chart-pie",
  },
  {
    name: "Coin",
    description: "Invest in direct mutual funds with zero commission.",
    icon: "fa-solid fa-coins",
  },
  {
    name: "Varsity",
    description: "Learn stock markets through free, structured educational content.",
    icon: "fa-solid fa-book-open",
  },
  {
    name: "Pulse",
    description: "Stay updated with the latest financial and market news.",
    icon: "fa-solid fa-newspaper",
  },
  {
    name: "Kite Connect",
    description: "Build your own trading applications using APIs.",
    icon: "fa-solid fa-code",
  },
];

const Apps = () => {
  return (
    <div className="apps-page">

      <h2 className="mb-5 fw-bold">Apps</h2>

      <div className="row">

        {apps.map((app, index) => (
          <div className="col-lg-4 col-md-6 mb-4" key={index}>

            <div className="app-card">

              <div className="icon-box">
                <i className={app.icon}></i>
              </div>

              <h4>{app.name}</h4>

              <p>{app.description}</p>

            </div>

          </div>
        ))}

      </div>

    </div>
  );
};

export default Apps;