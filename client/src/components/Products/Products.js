import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Prodection.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setcategory] = useState("");
  const [cityPost, setCityPost] = useState("");
  useEffect(() => {
    getProducts();
  }, [search, category, cityPost]);

  const getProducts = () => {
    axios.get("getPost").then((res) => {
      console.log(res.data);
      setProducts(res.data);
    });
  };
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };
  const handleCategoryChange = (e) => {
    setcategory(e.target.value);
  };
  const handleCityPostChange = (e) => {
    setCityPost(e.target.value);
  };

  const findSearch = () => {
    setProducts(
      products.filter((e) => {
        return e.title.toUpperCase().indexOf(search.toUpperCase()) !== -1;
      })
    );
  };
  const findCategory = () => {
    setProducts(
      products.filter((e) => {
        return e.category.toUpperCase().indexOf(category.toUpperCase()) !== -1;
      })
    );
  };
  const findCityPost = () => {
    setProducts(
      products.filter((e) => {
        return e.cityPost.toUpperCase().indexOf(cityPost.toUpperCase()) !== -1;
      })
    );
  };
  const addCartChange = (e) => {
    const addCart = e.addCart == "Add to Cart" ? "Remove to Cart" : "Add to Cart";
    const post_id = e.post_id;
    const data ={
      addCart:addCart
    }
    axios.put(`/updateAddCart/${post_id}`, data).then((res) => {
      console.log(res.data);
      getProducts();
    });
  };
  const data= products.map((e, i) => {
    return (
      <div className="col-Prodrction" key={i}>
        <div className="shop-user">
          <img src={e.img} />
          <label>{e.yourName}</label>
        </div>
        <div className="shop-post-info">
          <div>
            <img
              src={e.imgPost}
              style={{ width: "100%", height: "180px" }}
            />
          </div>
          <div className="shop-text-post">
            <div className="shop-title-city">
              <p>{e.title}</p>
              <p>{e.cityPost}</p>
              <p>{e.date}</p>
            </div>
            <div className="shop-Price-Phone">
              <p>{e.category}</p>
              <p style={{ background: "yellow", color: "black" }}>
                {e.pricePost}JD
              </p>
              <p>{e.phonePost}</p>
            </div>
          </div>
        </div>

        <div className="shop-Button-Update-Delete">
          <button type="button" onClick={() => { addCartChange(e) }}>
            {e.addCart ? ((e.addCart == "Add To Cart")):((e.addCart == "Remove to Cart"))}
           {e.addCart}
          </button>
        </div>
      </div>
    );
  })
  return (
    <div className="Products">
      <div className="search-input">
        <div>
          <select
            name="category"
            value={category}
            onChange={handleCategoryChange}
          >
            <option>Select Category</option>
            <option value="Cars">Cars</option>
            <option value="Tablet">Tablet</option>
            <option value="Mobile">Mobile</option>
            <option value="Computer">Computer</option>
            <option value="Laptop">Laptop</option>
            <option value="Playstation">Playstation</option>
            <option value="Baby Supplies">Baby Supplies</option>
            <option value="Fashion - Men''s Fashion">
              Fashion - Men''s Fashion
            </option>
          </select>
          <button onClick={findCategory}>
            <i className="fa fa-search"></i>
          </button>
        </div>
        <div className="search-input-div">
          <input
            type="search"
            placeholder="Search..."
            name="search"
            value={search}
            onChange={handleSearchChange}
          />
          <button onClick={findSearch}>
            <i className="fa fa-search"></i>
          </button>
        </div>
        <div>
          <select
            name="cityPost"
            value={cityPost}
            onChange={handleCityPostChange}
          >
            <option>Select City</option>
            <option value="Amman">Amman</option>
            <option value="Irbid">Irbid</option>
            <option value="Karak">Karak</option>
            <option value="Aqaba">Aqaba</option>
            <option value="Madaba">Madaba</option>
          </select>
          <button onClick={findCityPost}>
            <i className="fa fa-search"></i>
          </button>
        </div>
      </div>
      <div className="Prodrction-container">
        <div id="row-Prodrction" className="row row-cols-1 row-cols-sm-3 row-cols-md-4">
         {data}
        </div>
      </div>
    </div>
  );
};
export default Products;
