import React, { useState } from "react";
import TotalBuy from "./TotalBuy";

const FruitBuy = ({ fruitsList, balance }) => {
  const newFruitList = fruitsList.map((obj) => {
    return { ...obj, qnt: "0" };
  });

  const [fruits, setFruits] = useState(newFruitList);

  const [go, setGo] = useState(false);

  const handleChange = (value, ind) => {
    const temp = fruits.map((data, index) =>
      index === ind ? { ...data, qnt: value } : data
    );
    setFruits(temp);
  };

  const handleGo = () => {
    const isNotDefault = (fruit) => {
      const isValid = fruit.qnt !== "0";
      return isValid;
    };

    const fruitsValidityArray = fruits.map((fruits) => {
      return isNotDefault(fruits);
    });

    if (fruitsValidityArray.includes(false)) {
      setGo(false);
      window.alert("Fill all fields");
    } else {
      setGo(true);
    }
  };

  return (
    <>
      <div style={{ marginTop: "20px" }}>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Fruit</th>
              <th scope="col">Price(1-Ps)</th>
              <th scope="col">Buyed</th>
            </tr>
          </thead>
          <tbody>
            {fruits.map((data, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{data.name}</td>
                  <td>{data.price}</td>
                  <td>
                    <input
                      type="number"
                      min="0"
                      value={data.qnt}
                      onChange={(e) => handleChange(e.target.value, index)}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <button className="btn btn-primary" onClick={() => handleGo()}>
          Go
        </button>
      </div>
      {go ? <TotalBuy fruits={fruits} balance={balance} /> : null}
    </>
  );
};

export default FruitBuy;
