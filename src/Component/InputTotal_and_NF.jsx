import React, { useState } from "react";
import FruitsNamePrice from "./FruitsName_Price";

const InputTotalandNF = () => {
  const [balance, setBalance] = useState(0);
  const [fruits, setFruits] = useState(0);

  const [go, setGo] = useState(false);

  const handleBalance = (e) => {
    setBalance(e.target.value);
  };
  const handleFruits = (e) => {
    setFruits(e.target.value);
  };

  const handleGo = () => {
    setGo(true);
  };

  const enable = balance > 0 && fruits > 0;

  return (
    <div className="d-flex flex-column ">
      <div className="card" style={{ width: "50%", marginTop: "20px" }}>
        <div className="card-body ">
          <div>
            <label>Total Balance : </label>
            <input
              type="number"
              min="0"
              value={balance}
              onChange={(e) => handleBalance(e)}
            ></input>
          </div>
          <div>
            <label>Number Of Fruits :</label>
            <input
              type="number"
              min="0"
              value={fruits}
              onChange={(e) => handleFruits(e)}
            ></input>
          </div>
          <div>
            <button
              className="btn btn-primary"
              onClick={() => handleGo()}
              disabled={!enable}
            >
              Go
            </button>
          </div>
        </div>
      </div>
      {go ? (
        <FruitsNamePrice fruits={parseInt(fruits)} balance={balance} />
      ) : null}
    </div>
  );
};

export default InputTotalandNF;
