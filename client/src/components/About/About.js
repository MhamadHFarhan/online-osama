import React from "react";
import "./About.css";
const About = () => {
  return (
    <div className="About">
      <div className="About-Text">
        <h2>About</h2>
        <p>
          A site specialized in buying and selling that provides you with many
          important services
        </p>

        <div className="row-About">
          <div className="col-About">
            <h3>Department Users</h3>
            <img src="https://images.pexels.com/photos/919436/pexels-photo-919436.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
            <p>
              Ease of obtaining information about any commodity and The
              possibility of obtaining the commodity from anyone
            </p>
          </div>
          <div className="col-About">
            <h3>Department User and Users</h3>
            <img src="https://image.pngaaa.com/651/3457651-middle.png" />
            <p>
              He can exchange the commodity through buying and selling from
              customer to customer
            </p>
          </div>
          <div className="col-About">
            <h3>Department Company</h3>
            <img src="https://image.similarpng.com/very-thumbnail/2020/11/3d-online-shopping-on-social-media-mobile-applications-or-websites-concepts-on-transparent-background-PNG.png" />
            <p>The company can make its own advertisement , And also Kamal can deal with the user directly</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
