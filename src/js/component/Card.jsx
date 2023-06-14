import React from "react";
import "../../styles/cardStyles/cardStyles.css";

const Card = () => {
	return ( 
      <div className="col-md-3 col-12 mb-4 m-auto" >     
        <div className="card cardWorkers">
            <img src="https://ro-camper.ro/imgs/inchiriat-camper-romania-rulota.jpg.png" className="card-img-top" alt="Placeholder Image"/>
            <div className="card-body m-auto">
              <h5 className="card-title m-auto">Card Title</h5>
              <p className="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. At consequuntur nisi enim, est sequi quam repellat</p>
              <a href="#" className="btn btn-primary">Find Out More!</a>
            </div>
        </div>
      </div> 
	);
};

export default Card;






