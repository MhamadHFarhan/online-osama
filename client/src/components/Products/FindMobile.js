import React, { useState, useEffect } from "react";
import axios from "axios";
import './Prodection.css'
const FindMobile = () =>{
    const [mobile, setMobile] = useState([]);
    useEffect(() => {
        getFindMobile();
      }, []);
      const getFindMobile = () => {
        axios.get("findMobile").then((res) => {
          console.log(res.data);
          setMobile(res.data);
        });
      };
      const Mobile=mobile.map((e,i)=>{
        return(      
         <div className="Categories-viwe" key={i}>
               <div>
                 <h4>{e.title}</h4>
                 <img src={e.imgPost}  style={{width:"90%",height:"180px",}}/>
                 <small>{e.cityPost}</small>
                 <small>{e.data}</small>
                 <p>{e.pricePost}</p>
               </div>
             </div>
        )
        })

    return(
      <div className="Categories">
        <div className="Categories-Title">
          <h2>Mobile</h2>
        </div>
        <div className="Categories-container" >
          <div className="row row-cols-1 row-cols-sm-3 row-cols-md-4">
             {Mobile}
  
             </div>
             </div>
        </div>
    )}
export default FindMobile