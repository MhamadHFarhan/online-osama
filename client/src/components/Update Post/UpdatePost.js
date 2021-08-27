import React, { useState, useEffect } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import {useHistory, useParams } from "react-router-dom";
import "./UpdatePost.css";
const UpdatePost = () => {
  const { post_id } = useParams();
  const [id_user, setIdUser] = useState(null);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [imgPost, setImgPost] = useState("");
  const [cityPost, setCityPost] = useState("");
  const [pricePost, setPrice] = useState("");
  const [date, setDate] = useState("");
  const [phonePost, setPhonePost] = useState("");
  const [error, setError] = useState({});
  let history = useHistory();
  const handleIdUserChange = () => {
    const token = localStorage.getItem("token");
    const decoded = jwt_decode(token);
    console.log(decoded);
    const id = decoded.id;
    setIdUser(id);
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };
  const handleImgPostChange = (e) => {
    setImgPost(e.target.value);
  };
  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };
  const handleCityPostChange = (e) => {
    setCityPost(e.target.value);
  };
  const handlePhonePostChange = (e) => {
    setPhonePost(e.target.value);
  };
  useEffect(() => {
    handleIdUserChange();
    getPost();
  }, []);
  const getPost = () => {
    axios.get(`getPost/${post_id}`).then((res) => {
      setTitle(res.data[0].title);
      setCategory(res.data[0].category);
      setImgPost(res.data[0].imgPost);
      setCityPost(res.data[0].cityPost);
      setPrice(res.data[0].pricePost);
      setDate(res.data[0].date);
      setPhonePost(res.data[0].phonePost);
      console.log(res.data);
    });
  };
  const UpdatePostinf = () => {
    let data = {
      post_id: post_id,
      id_user: id_user,
      title: title,
      category: category,
      imgPost: imgPost,
      cityPost: cityPost,
      pricePost: pricePost,
      date: date,
      phonePost: phonePost,
    };
    axios
      .put(`/UpdatePost/${post_id}`, data)
      .then((response) => {
        if (response.data) {
          setError({ ...error, massage: `Sava Update Post ${title}` });
          console.log("response", response.data);
        } else {
          setError({ ...error, massage: response.sqlMessage });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const deletePost = () =>{
    axios.delete(`/deletePost/${post_id}`)
    .then((res)=>{
      console.log(res.data)
      
      history.push(`/MyAds/${id_user}`);
    })
  }
  return (
    <div className="UpdatePost">
      <div className="UpdatePostTitle">
        <h2>Edit The Ads</h2>
      </div>
      <div className="row-UpdatePost">
        <div className="col-text">
          <div>
            <h4>Preparing to market a product via the Internet</h4>
          </div>
          <div>
            <small>
              Before starting to market a product via the Internet, there are
              some things that must be done, namely:
            </small>
          </div>
          <div>
            <ul>
              <li>Finding a suitable market</li>
              <li>Determining costs</li>
              <li>Knowing the product life cycle</li>
              <li>Creating an online store</li>
            </ul>
          </div>
          <div>
            <h4>Tips for successful online marketing of a product</h4>
          </div>
          <div>
            <small>
              There are some tips that can be adhered to to achieve the desired
              benefit from e-marketing, including:
            </small>
          </div>
          <div>
            <ul>
              <li>Interact with customers' comments and not ignore them.</li>
              <li>Avoid mocking competitors' products.</li>
              <li>
                Determine the target group before starting the advertising
                campaign
              </li>
              <li>And adhere to the language and its general traditions.</li>
            </ul>
          </div>
        </div>

        <div className="UpdatePostInf">
          <div>
            <img src={imgPost} />
          </div>
          <div>
            <label>Title</label>
            <input
              type="text"
              id="type"
              name="title"
              placeholder={title}
              value={title}
              onChange={handleTitleChange}
            />
          </div>
          <div>
            <label>Image</label>
            <input
              type="text"
              placeholder="Enter image Url"
              name="imgPost"
              value={imgPost}
              onChange={handleImgPostChange}
            />
          </div>
          <div>
            <label>Category </label>
            <select
              name="category"
              value={category}
              onChange={handleCategoryChange}
            >
              <option>{category}</option>
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
          </div>
          <div>
            <label>City</label>
            <select
              name="cityPost"
              value={cityPost}
              onChange={handleCityPostChange}
            >
              <option>{cityPost}</option>
              <option>Select City</option>
              <option value="Amman">Amman</option>
              <option value="Irbid">Irbid</option>
              <option value="Karak">Karak</option>
              <option value="Aqaba">Aqaba</option>
              <option value="Madaba">Madaba</option>
            </select>
          </div>
          <div>
            <label>Price</label>
            <input
              type="text"
              placeholder="Enter Price"
              name="pricePost"
              value={pricePost}
              onChange={handlePriceChange}
            />
          </div>
          <div>
            <label>Phone</label>
            <input
              type="text"
              placeholder="Enter Phone"
              name="phonePost"
              value={phonePost}
              onChange={handlePhonePostChange}
            />
          </div>
          <div>
            <button onClick={UpdatePostinf}>
              <span>Save</span>
            </button>
            <button onClick={deletePost}>
              Delete
            </button>
          </div>
          <div style={{textAlign:"center"}}> {error.massage && (
              <small style={{ color: "green"}}>{error.massage}</small>
            )}</div>
        </div>
      </div>
    </div>
  );
};
export default UpdatePost;
