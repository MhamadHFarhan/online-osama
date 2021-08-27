import React, { useState } from "react";
import axios from "axios";
import "./NewPost.css";
import jwt_decode from "jwt-decode";
import isEmpty from "is-empty";
import { useHistory } from "react-router-dom";
const NewPost = () => {
  // Data
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [imgPost, setImgPost] = useState("");
  const [cityPost, setCityPost] = useState("");
  const [pricePost, setPrice] = useState("");
  const [date, setDate] = useState("");
  const [phonePost, setPhonePost] = useState("");
  const [addCart, setCart] = useState("");
  const [errors, setErrors] = useState({});
  const[success,setSuccess] =useState("");
  // Errors Change
  const [errorsTitle, setErrorsTitle] = useState({});
  const [errorsImgPost, setErrorsImgPost] = useState({});
  const [errorsCategory, setErrorsCategory] = useState({});
  const [errorsCityPost, setErrorsCityPost] = useState({});
  const [errorsPricePost, setErrorsPricePost] = useState({});
  const [errorsDate, setErrorsDate] = useState({});
  const [errorsPhonePost, setErrorsPhonePost] = useState({});
  let history = useHistory();
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
    setErrorsTitle({});
  };
  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
    setErrorsCategory({});
  };
  const handleImgPostChange = (e) => {
    setImgPost(e.target.value);
    setErrorsImgPost({});
  };
  const handlePriceChange = (e) => {
    setPrice(e.target.value);
    setErrorsPricePost({});
  };
  const handleDateChange = (e) => {
    setDate(e.target.value);
    setErrorsDate({});
  };
  const handleCityPostChange = (e) => {
    setCityPost(e.target.value);
    setErrorsCityPost({});
  };
  const handlePhonePostChange = (e) => {
    setPhonePost(e.target.value);
    setErrorsPhonePost({});
  };

  const save = (e) => {
    e.preventDefault();
    if (isEmpty(title)) {
      setErrorsTitle({ title: "Title is required" });
    }
    if (isEmpty(imgPost)) {
      setErrorsImgPost({ imgPost: "Img is required" });
    }
    if (isEmpty(category)) {
      setErrorsCategory({ category: "Category is required" });
    }
    if (isEmpty(cityPost)) {
      setErrorsCityPost({ cityPost: "City is required" });
    }
    if (isEmpty(pricePost)) {
      setErrorsPricePost({ pricePost: "Price is required" });
    }
    if (isEmpty(date)) {
      setErrorsDate({ date: "Date is required" });
    }
    if (isEmpty(phonePost)) {
      setErrorsPhonePost({ phonePost: "phone is required" });
    }
    setCart("Add to Cart");
    const token = localStorage.getItem("token");
    const decoded = jwt_decode(token);
    console.log(decoded);
    const id = decoded.id;
    const data = {
      id_user: id,
      title: title,
      category: category,
      imgPost: imgPost,
      cityPost: cityPost,
      pricePost: pricePost,
      date: date,
      phonePost: phonePost,
      addCart: "Add to Cart",
    };

    axios.post(`/newpost`, data).then((res) => {
      if(res.data.result){
        history.push(`/MyAds/${data.id_user}`);
      }else if(res.data.err){
        setErrors(
          {
            ...errors,
            err: res.data.err,
          },
          
        );
      }
    });
  };
  return (
    <div className="NewPost">
      <div className="row-NewPost">
        <div className="col-NewPost-P">
          <h2>The most important ways to shop online</h2>
          <p>
            Search Engine Optimization (SEO): The appearance of marketing ads on
            websites is improved among the first page results in free search
            engines, and there are many ways to do this, by creating a multiple
            mix of incoming and outgoing links, and using specific keywords or
            keywords, And follow-up changes to the search engine algorithms on
            an ongoing basis.
          </p>
          <p>
            Search Engine Marketing (SEM): It is an effective method of
            well-known e-marketing, which allows advertising of goods on search
            engine sites and showing them within the results of paid ads, and
            these ads appear at the beginning of search pages, and one of the
            most famous sites that provide this service is Google Ads and Bing
            ads.
          </p>
          <p>
            Marketing using social media (SMM): where e-marketing using various
            social media, including Facebook, Twitter, YouTube and Instagram, is
            one of the most ways to attract customers, and achieve the goal of
            the marketing campaign, and these sites can be chosen according to
            the type and nature of the product being marketed for, according to
            The nature and interests of the target group.
          </p>
        </div>
        <div className="col-NewPost-input">
          <label>Title</label>
          <div>
            <input
              type="text"
              placeholder="Enter Title"
              name="title"
              value={title}
              onChange={handleTitleChange}
            />
          </div>
          {errorsTitle.title && (
            <small
              style={{
                color: "red",
                fontFamily: "Roboto, sans-serif",
                fontSize: "12px",
              }}
            >
              {errorsTitle.title}
            </small>
          )}
          <br></br>
          <label>Image</label>
          <div>
            <input
              type="text"
              placeholder="Enter image Url"
              name="imgPost"
              value={imgPost}
              onChange={handleImgPostChange}
            />
          </div>
          {errorsImgPost.imgPost && (
            <small
              style={{
                color: "red",
                fontFamily: "Roboto, sans-serif",
                fontSize: "12px",
              }}
            >
              {errorsImgPost.imgPost}
            </small>
          )}
          <br></br>
          <label>Category </label>
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
          </div>
          {errorsCategory.category && (
            <small
              style={{
                color: "red",
                fontFamily: "Roboto, sans-serif",
                fontSize: "12px",
              }}
            >
              {errorsCategory.category}
            </small>
          )}
          <br></br>
          <label>City</label>
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
          </div>
          {errorsCityPost.cityPost && (
            <small
              style={{
                color: "red",
                fontFamily: "Roboto, sans-serif",
                fontSize: "12px",
              }}
            >
              {errorsCityPost.cityPost}
            </small>
          )}
          <br></br>
          <label>Price</label>
          <div>
            <input
              type="text"
              placeholder="Enter Price"
              name="pricePost"
              value={pricePost}
              onChange={handlePriceChange}
            />
          </div>
          {errorsPricePost.pricePost && (
            <small
              style={{
                color: "red",
                fontFamily: "Roboto, sans-serif",
                fontSize: "12px",
              }}
            >
              {errorsPricePost.pricePost}
            </small>
          )}
          <br></br>
          <label>Date</label>
          <div>
            <input
              type="date"
              name="date"
              value={date}
              onChange={handleDateChange}
            />
          </div>
          {errorsDate.date && (
            <small
              style={{
                color: "red",
                fontFamily: "Roboto, sans-serif",
                fontSize: "12px",
              }}
            >
              {errorsDate.date}
            </small>
          )}
          <br></br>
          <label>Phone</label>
          <div>
            <input
              type="text"
              placeholder="Enter Phone"
              name="phonePost"
              value={phonePost}
              onChange={handlePhonePostChange}
            />
          </div>
          {errorsPhonePost.phonePost && (
            <small
              style={{
                color: "red",
                fontFamily: "Roboto, sans-serif",
                fontSize: "12px",
              }}
            >
              {errorsPhonePost.phonePost}
            </small>
          )}
          <br></br>
          <div>
            <button onClick={save}>
              <span>Post</span>
            </button>
            {errors.err && <small>{errors.err}</small>}
            {success.result &&<small>{success.result}</small>}
          </div>
        </div>
      </div>
    </div>
  );
};
export default NewPost;
