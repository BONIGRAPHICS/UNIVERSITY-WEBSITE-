import React from "react";
import "./style.css";

const Benefts = () => {
  return (
    <div>
      <div className="benefits">
        <div className="beneftcontent">
          <h1>
            Why You Should Choose <br />
            Our University
          </h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur
            quo quis quae reiciendis vero maxime, repudiandae, illum sed fugiat
            iusto eum nostrum? Maiores placeat velit delectus, obcaecati magnam
            at qui?
          </p>
          <div className="beneftcontentlist">
            <div className="listbenefit">
              <div className="listicon">&#10003;</div>
              <h3>Costs That Are More Affordable</h3>
            </div>
            <div className="listbenefit">
              <div className="listicon">&#10003;</div>
              <h3>There is Much Greater Insight Gained</h3>
            </div>
            <div className="listbenefit">
              <div className="listicon">&#10003;</div>
              <h3>Providing more flexibility in the study schedule</h3>
            </div>
          </div>
        </div>
        <div className="beneftimage">
          <img src="images/corse.jpg" alt="" />
          <img src="images/corse.jpg" alt="" />
          <img src="images/corse.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Benefts;
