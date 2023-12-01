import React, { useState } from "react";
import FruitBuy from "./FruitBuy";

const FruitsNamePrice = ({ fruits, balance }) => {
  const fields = new Array(fruits).fill({
    name: "",
    price: "0",
  });

  const [fruitsList, setFruitsList] = useState(fields);

  const [go, setGo] = useState(false);

  const nameChange = (ind, value) => {
    const newList = fruitsList.map((object, index) =>
      index === ind ? { ...object, name: value } : object
    );
    setFruitsList(newList);
  };

  const priceChange = (ind, value) => {
    const newList = fruitsList.map((object, index) =>
      index === ind ? { ...object, price: value } : object
    );
    setFruitsList(newList);
  };

  const handleGo = () => {
    //check array comparision aboutr loadsh here
    // https://codedamn.com/news/javascript/compare-2-arrays-javascript
    const isNotDefault = (fruit) => {
      const isValid = fruit.name !== "" && fruit.price !== "0";
      return isValid;
    };

    const fruitsValidityArray = fruitsList.map((fruits) => {
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
      <div className="card" style={{ width: "50%", marginTop: "20px" }}>
        <div className="card-body ">
          {fruitsList.map((data, index) => {
            return (
              <ul key={index}>
                <h5>{`${index + 1} fruit `}</h5>
                <label>Name</label>
                <input
                  type="text"
                  value={data.name}
                  onChange={(e) => nameChange(index, e.target.value)}
                />
                <label>Price</label>
                <input
                  type="number"
                  min="0"
                  value={data.price}
                  onChange={(e) => priceChange(index, e.target.value)}
                />
              </ul>
            );
          })}
          <button className="btn btn-primary" onClick={() => handleGo()}>
            Go
          </button>
        </div>
      </div>
      {go ? <FruitBuy fruitsList={fruitsList} balance={balance} /> : null}
    </>
  );
};

export default FruitsNamePrice;
