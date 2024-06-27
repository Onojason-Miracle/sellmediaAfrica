import React from "react";

function Footer() {
  return (
    <div id="footer">
      <div className="footer-div">
        <div className="footer-flex-1">
          <div className="footer-flex-div-1">
            <p className="footer-flex-div-p1">Hand</p>
            <p className="footer-flex-div-p2">
              We love what we do and create partnerships
            </p>
          </div>
          <div className="footer-flex-div-2">
            <button className="footer-flex-div-2-btn">Start a Project</button>
            <p className="footer-flex-div-2-p">hello@devseal.tech</p>
            <div className="iconsDiv">
              <i class="fa-brands fa-x-twitter"></i>
              <i class="fa-brands fa-linkedin"></i>
              <i class="fa-brands fa-square-facebook"></i>
              <i class="fa-brands fa-square-instagram"></i>
              <p>Hand</p>
            </div>
          </div>
        </div>

        <div className="border"></div>

        <div className="footer-flex-2">
          <p>© 2024 hand. All Rights Reserved</p>
          <div className="footer-flex-2-div">
            <p>Privacy Policy</p>
            <p>Media Kit</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
