import React from "react";
import SNavbar from "./sucessNav";
import Footer from "./footer";

function Success() {
  return (
    <div id="Success">
      <SNavbar />

      <div className="success-wrapper">
        <div className="success-wrapper-div">
          <i class="fa-solid fa-thumbs-up"></i>
          <h1>Submission Successful!</h1>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Success;
