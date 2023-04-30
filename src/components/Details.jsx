import React from "react";

function Details(props) {
  // with props, user will be able to send custome data from App.jsx to
  // components so that reusability can be increased
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <img className="circle-img" src={props.img} alt="avatar_img" />
      </div>
      <div className="bottom">
        <p className="info">{props.tel}</p>
        <p className="info">{props.web}</p>
      </div>
    </div>
  );
}

export default Details;
