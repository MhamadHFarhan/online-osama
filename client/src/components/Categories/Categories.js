import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Categories.css";
import { Link } from "react-router-dom";
const Categories = () => {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    getCategory();
  }, []);
  const getCategory = () => {
    axios.get("categorys").then((res) => {
      console.log(res.data);
      setCategory(res.data);
    });
  };
  const Cars = category.map((e, i) => {
    return (
        <div>
          <h4>
            <Link to="/Cars">{e.nameCategory}</Link>
          </h4>
          <img src={e.imgCategory} style={{ width: "90%", height: "200px" }} />
        </div>
    );
  });
  const Mobile = category.map((e, i) => {
    return (
        <div>
          <h4>
            <Link to="/Mobile">{e.nameCategory}</Link>
          </h4>
          <img src={e.imgCategory}  style={{ width: "90%", height: "200px" }}/>
        </div>
    );
  });
  const Tablet = category.map((e, i) => {
    return (
      <div>
        <h4>
          <Link to="/Tablet">{e.nameCategory}</Link>
        </h4>
        <img src={e.imgCategory}  style={{ width: "90%", height: "200px" }}/>
      </div>
    );
  });
  const Computer = category.map((e, i) => {
    return (
      <div>
        <h4>
          <Link to="/Computer">{e.nameCategory}</Link>
        </h4>
        <img src={e.imgCategory}   style={{ width: "90%", height: "200px" }}/>
      </div>
    );
  });
  const Laptop = category.map((e, i) => {
    return (
      <div>
        <h4>
          <Link to="/Laptop">{e.nameCategory}</Link>
        </h4>
        <img src={e.imgCategory}  style={{ width: "90%", height: "200px" }}/>
      </div>
    );
  });
  const Playstation = category.map((e, i) => {
    return (
      <div>
        <h4>
          <Link to="/Playstation">{e.nameCategory}</Link>
        </h4>
        <img src={e.imgCategory}  style={{ width: "90%", height: "200px" }}/>
      </div>
    );
  });
  const BabySupplies = category.map((e, i) => {
    return (
      <div>
        <h4>
          <Link to="/BabySupplies">{e.nameCategory}</Link>
        </h4>
        <img src={e.imgCategory}  style={{ width: "90%", height: "200px" }}/>
      </div>
    );
  });
  const Clothes = category.map((e, i) => {
    return (
        <div>
          <h4>
            <Link to="/Clothes">{e.nameCategory}</Link>
          </h4>
          <img src={e.imgCategory}  style={{ width: "90%", height: "200px" }}/>
        </div>
    );
  });
  return (
    <div className="Categories">
      <div className="Categories-Title">
        <h2>Categories</h2>
      </div>
      
      <div className="row row-cols-4 row-cols-lg-4">
        <div className="item">{Cars[0]}</div>
        <div className="item">{Tablet[1]}</div>
        <div className="item">{Mobile[2]}</div>
        <div className="item">{Computer[3]}</div>
        <div className="item">{Laptop[4]}</div>
        <div className="item">{Playstation[5]}</div>
        <div className="item">{BabySupplies[6]}</div>
        <div className="item">{Clothes[7]}</div>
    </div>
    </div>
  );
};
export default Categories;
