import React from "react";
import Details from "./Details";
import contacts from "../contacts";
// import contacts from "contacts";
// import Details from "Details";

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Details
        name={contacts[0].name}
        img={contacts[0].imgURL}
        tel={contacts[0].phone}
        web={contacts[0].email}
      />
      <Details
        name={contacts[1].name}
        img={contacts[1].imgURL}
        tel={contacts[1].phone}
        web={contacts[1].email}
      />
      <Details
        name={contacts[2].name}
        img={contacts[2].imgURL}
        tel={contacts[2].phone}
        web={contacts[2].email}
      />
    </div>
  );
}

export default App;
