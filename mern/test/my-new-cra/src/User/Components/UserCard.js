import React from "react";
import { Link } from "react-router-dom";

export default function UserCard(props) {
  return (
    <div className="col my-2 ">
      <div className="card border-secondary" style={{ width: "18rem" }}>
        <Link to={`/:${props.id}/places`} style={{ textDecoration: "none" }}>
          <div
            className="card-img-top"
            style={{
              backgroundImage: `url(${props.image})`,
              width: "100%",
              height: "200px",
              backgroundPosition: "center center",
              backgroundRepeat: "no-repeat",
            }}
          ></div>

          <div className="card-header">{props.name}</div>
          <div className="card-body ">
            <p className="card-text">{props.about}</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

//Using Normal html and css:

// <div
// style={{
//   backgroundImage: `url(${props.image})`,
//   width: "200px",
//   height: "200px",
//   backgroundPosition: "center center",
//   backgroundRepeat: "no-repeat",
// }}
// className="border border-5 rounded"
// >

//   <div style={{}} className="">
//     <h3 style={{}}>{props.name}</h3>

//     <span>
//       {props.places}
//       {props.places === 1 ? " Place" : " Places"}
//     </span>
//   </div>
// I
// </div>
