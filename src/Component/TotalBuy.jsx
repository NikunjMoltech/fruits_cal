import React, { useState } from "react";

const TotalBuy = ({ fruits, balance }) => {
  const [go, setGo] = useState(false);

  const handleGo = () => {
    Object.values(fruits).every((value) => {
      if (value === null) {
        return true;
      }
      return false;
    });
    setGo(true);
  };

  const totalFruits = fruits.reduce((total, fruit) => {
    return total + parseInt(fruit.qnt);
  }, 0);
  const totalBill = fruits.reduce((total, fruit) => {
    return total + parseInt(fruit.qnt) * parseInt(fruit.price);
  }, 0);

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
              <th scope="col">$Total</th>
            </tr>
          </thead>
          <tbody>
            {fruits.map((data, index) => {
              return (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{data.name}</td>
                  <td>{data.price}</td>
                  <td>{data.qnt}</td>
                  <td>{parseInt(data.price) * parseInt(data.qnt)}</td>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr>
              <th scope="row ">Total</th>
              <td colSpan="2" style={{ textAlign: "center" }}></td>
              <td>{totalFruits}</td>
              <td>{totalBill}</td>
            </tr>
          </tfoot>
        </table>
        <button className="btn btn-primary" onClick={() => handleGo()}>
          Go
        </button>
      </div>
      {go ? (
        <h5>
          {balance < totalBill
            ? "Not sufficent balance 🤦‍♂️"
            : "you are good to go 🙌"}
        </h5>
      ) : null}
    </>
  );
};

export default TotalBuy;
