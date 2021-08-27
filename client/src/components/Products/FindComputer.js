import React, { useState, useEffect } from "react";
import axios from "axios";
import './Prodection.css'
const FindComputer = () =>{
    const [FindComputer, setFindComputer] = useState([]);
    useEffect(() => {
        getFindComputer();
      }, []);
      const getFindComputer = () => {
        axios.get("findComputer").then((res) => {
          console.log(res.data);
          setFindComputer(res.data);
        });
      };
    
    return(
      <div>
        {FindComputer.map((e,i)=>{
        return(      
         <div className="Categories-viwe" key={i}>
               <div>
                 <h4>{e.title}</h4>
                 <img src={e.imgPost}/>
                 <small>{e.cityPost}</small>
                 <small>{e.data}</small>
                 <p>{e.pricePost}</p>
               </div>
             </div>
        )
        })}
      </div>
    )
}
export default FindComputer