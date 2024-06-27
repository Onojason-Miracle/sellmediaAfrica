import React from "react";
import images from "./imageText";

function Team() {

  
  return (
    <div id="team">
      <div>
        <h1 className="teamText">Meet the heroes behind the magic</h1>
      </div>

      <div className="team-flex">
        {images.map((sellmedia) => (
          <div key={sellmedia.id} className="teamImage">
            <img
              src={sellmedia.imageUrl}
              alt={`pix ${sellmedia.id}`}
              className="team-img"
            />
            <p className="text1">{sellmedia.text1}</p>
            <p className="text2">{sellmedia.text2}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Team;
