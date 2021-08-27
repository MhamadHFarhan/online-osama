import React, { useState } from "react";
import axios from "axios";
import "./Contact.css";
import jwt_decode from "jwt-decode";
import isEmpty from "is-empty";
const Contact = () => {
   //data
   const [contact_name,setContactName]=useState("");
   const [contact_email,setContactEmail]=useState("");
   const [contact_phone,setContactPhone]=useState("");
   const [contact_massage,setContactMassage]=useState("");
   const [massage,setMassage]=useState("")
   //erroe
   const [errorContactName,setErrorContactName]=useState("");
   const [errorcontactEmail,setErrorContactEmail]=useState("");
   const [errorContactPhone,setErrorContactPhone]=useState("");
   const [errorContactMassage,setErrorContactMassage]=useState("");
   const handleContactNameChange = (e) => {
    setContactName(e.target.value);
    setErrorContactName({});
  };
   const handleContactEmailChange = (e) => {
    setContactEmail(e.target.value);
    setErrorContactEmail({});
  };
   const handleContactPhoneChange = (e) => {
    setContactPhone(e.target.value);
    setErrorContactPhone({});
  };
   const handleContactMassageChange = (e) => {
    setContactMassage(e.target.value);
    setErrorContactMassage({});
  };

  const save = (e)=>{
    e.preventDefault();
    if (isEmpty(contact_name)) {
      setErrorContactName({ contact_name: "Name is required" });
    }
    if (isEmpty(contact_email)) {
      setErrorContactEmail({ contact_email: "Email is required" });
    }else if(!/\S+@\S+\.\S+/.test(contact_email)){
      setErrorContactEmail({
        contact_email : "Email address is invalid"
      })
    }
    if (isEmpty(contact_phone)) {
      setErrorContactPhone({ contact_phone: "Phone is required" });
    }
    if (isEmpty(contact_massage)) {
      setErrorContactMassage({ contact_massage: "Massage is required" });
    }
    const token = localStorage.getItem("token");
    const decoded = jwt_decode(token);
    console.log(decoded);
    const id = decoded.id;
    const data = {
      id_user: id,
      contact_name: contact_name,
      contact_email: contact_email,
      contact_phone: contact_phone,
      contact_massage: contact_massage,
    };
    axios.post(`contactUs`,data)
    .then((res)=>{
     if(res.data){
       return setMassage(" It has been sent successfully") 
     }else{
        return setMassage("Error")
     }
    })
  }
  return (
    <div className="contact">
      <div className="title-contact">
      <h3>Contact Us</h3>
      <p>Your messages are the secret of our development, so do not hesitate at all in any note or suggestion that will reach us and be of great interest to us.</p>
      </div>
      <div className="row-contact">
        <div className="col-contact">
          <div className="form-contact">
            <div>
            <input type="text" placeholder="Name..." name="contact_name" value={contact_name} onChange={handleContactNameChange}/>
            </div>
            <div>
            {errorContactName.contact_name &&(<small>{errorContactName.contact_name}</small>)}
          </div>
          </div>

          <div className="form-contact">
            <div>
            <input type="email" placeholder="Email..." name="contact_email" value={contact_email} onChange={handleContactEmailChange}/>
            </div>
            <div>
            {errorcontactEmail.contact_email &&(<small>{errorcontactEmail.contact_email}</small>)}
         </div>
          </div>
          <div className="form-contact">
            <div>
            <input type="text" placeholder="Phone..." name="contact_phone" value={contact_phone} onChange={handleContactPhoneChange} />
            </div>
            <div>
            {errorContactPhone.contact_phone &&(<small>{errorContactPhone.contact_phone}</small>)}
            </div>
          </div>
          <div className="form-contact">
            <div>
            <textarea placeholder="Message..." name="contact_massage" value={contact_massage} onChange={handleContactMassageChange}></textarea>
            {errorContactMassage.contact_massage &&(<small>{errorContactMassage.contact_massage}</small>)}
            </div>
          </div>
          <div className="form-contact">
            <button onClick={save}>
              <span>Send</span>
            </button>
            <div style={{color: "green;",paddingleft: "6px;"}}>
              {massage ?? (<small style={{color:"green"}}>{massage}</small>)}
            </div>
          </div>
        </div>
        <div className="col-contact-img">
          <img src="https://www.stylemotivation.com/wp-content/uploads/2018/11/shopping.png" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
