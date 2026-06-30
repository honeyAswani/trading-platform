import React from "react";
import { Link } from "react-router-dom";
import "./Funds.css";

const Funds = () => {
  return (
    <>
      <div className="funds">
        <p className="fund-text">
  Instant, zero-cost fund transfers with UPI
</p>
        <button className="btn btn-success me-3">
  Add Funds
</button>

<button className="withdraw-btn">
  Withdraw
</button>
      </div>

      <div className="row">
        <div className="col">
          <span>
            <h4 className="fw-bold mb-4">
  Equity
</h4>
          </span>

          <div className="table">
            <div className="data">
              <p>Available margin</p>
              <p className="imp colored">₹4,043.10</p>
            </div>
            <div className="data">
              <p>Used margin</p>
              <p className="imp">₹3,757.30</p>
            </div>
            <div className="data">
              <p>Available cash</p>
              <p className="imp">₹4,043.10</p>
            </div>
            <hr />
            <div className="data">
              <p>Opening Balance</p>
              <p>₹4,043.10</p>
            </div>
            <div className="data">
              <p>Opening Balance</p>
              <p>₹3736.40</p>
            </div>
            <div className="data">
              <p>Payin</p>
              <p>₹4064.00</p>
            </div>
            <div className="data">
              <p>SPAN</p>
              <p>₹0.00</p>
            </div>
            <div className="data">
              <p>Delivery margin</p>
              <p>₹0.00</p>
            </div>
            <div className="data">
              <p>Exposure</p>
              <p>₹0.00</p>
            </div>
            <div className="data">
              <p>Options premium</p>
              <p>₹0.00</p>
            </div>
            <hr />
            <div className="data">
              <p>Collateral (Liquid funds)</p>
              <p>₹0.00</p>
            </div>
            <div className="data">
              <p>Collateral (Equity)</p>
              <p>₹0.00</p>
            </div>
            <div className="data">
              <p>Total Collateral</p>
              <p>₹0.00</p>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="commodity">
            <h5>Commodity</h5>

<p className="text-muted">
You don't have a commodity account yet.
</p>
            <button className="btn btn-primary">
    Open Account
</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Funds;