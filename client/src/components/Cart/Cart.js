import React, { useState, useEffect } from "react";
import "./Cart.css";
import axios from "axios";
import jwt_decode from "jwt-decode";
const Cart = () => {
  const [infCart, setInfCart] = useState([]);
  const [checkOut, setCheckOut] = useState(false);
  useEffect(() => {
    getInfCart();
  }, []);
  const getInfCart = (e) => {
    const token = localStorage.getItem("token");
    const decoded = jwt_decode(token);
    console.log(decoded);
    const id = decoded.id;
    axios.get(`/getInfCart/${id}`).then((res) => {
      setInfCart(res.data);
    });
  };

  const addCartChange = (e) => {
    const token = localStorage.getItem("token");
    const decoded = jwt_decode(token);
    console.log(decoded);
    const id = decoded.id;
    const addCart =
      e.addCart == "Add to Cart" ? "Remove to Cart" : "Add to Cart";
    const post_id = e.post_id;
    const data = {
      addCart: addCart,
      id: id,
    };
    axios.put(`/updateAddCart/${post_id}`, data).then((res) => {
      console.log(res.data);
      getInfCart();
    });
  };

  const totalPrice = infCart.reduce(
    (accumulator, current) => accumulator + current.pricePost,
    0
  );

  const data = infCart.map((e, i) => {
    return (
      <div className="inf-Cart" key={i + 1}>
        <div className="inf-cart-img">
          <img
            src={e.imgPost}
            style={{ width: "100%", height: "150px", marginLeft: "0px" }}
          />
        </div>
        <div>
          <p>{e.title}</p>
          <p>{e.phonePost}</p>
          <p>{e.pricePost}</p>
        </div>
        <div>
          <p>{e.pricePost} JD</p>
          <p>{e.cityPost}</p>
          <button
            type="button"
            onClick={() => {
              addCartChange(e);
            }}
          >
            {e.addCart
              ? e.addCart == "Add To Cart"
              : e.addCart == "Remove to Cart"}
            {e.addCart}
          </button>
        </div>
      </div>
    );
  });
  const CheckOut = () => {
    console.log("osama");
    setCheckOut(!checkOut);
  };
  return (
    <div className="cart">
      <div className="row-cart">
        <div className="col-cart-Inf">
          <div>
            <h4>
              My Cart <hr style={{ marginTop: "1rem", width: "121%" }}></hr>
            </h4>
            <div>{data}</div>
          </div>
        </div>
        <div className="col-cart-order">
          <div>
            <h4>
              Order Summary <hr style={{ marginTop: "1rem" }}></hr>
            </h4>
          </div>

          <div className="order-total">
            <div>
              <p style={{ textAlign: "left" }}>Subtotal</p>
              <p style={{ textAlign: "left" }}>Country </p>
            </div>
            <div>
              <p style={{ textAlign: "right" }}>{totalPrice} JD</p>
              <p style={{ textAlign: "right" }}>Jordan , Amman</p>
            </div>
          </div>
          <hr style={{ marginTop: "0rem", width: "100%" }}></hr>
          <div className="order-total">
            <div>
              <p style={{ textAlign: "left" }}>Total</p>
            </div>
            <div>
              <p style={{ textAlign: "right" }}>{totalPrice} JD</p>
            </div>
          </div>
          <hr style={{ marginTop: "0rem", width: "100%" }}></hr>
          <button onClick={CheckOut}>Checkout</button>
          <br></br>
          {checkOut ? (
            <div>
              <p style={{fontSize:"13px",color:"red"}}>
                If you want one of the products to buy, contact us through email
                or phone
              </p>

              {infCart.map((e, i) => {
                return (
                  <div>
                    <table>
                      <tr>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Price</td>
                        <td>Phone</td>
                      </tr>
                      <tr>
                        <td>{e.yourName}</td>
                        <td>{e.email}</td>
                        <td>{e.pricePost}</td>
                        <td style={{background:"blue"}}>{e.phonePost}</td>
                      </tr>
                    </table>
                  </div>
                );
              })}
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};
export default Cart;
