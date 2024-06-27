import React from "react";
import images from "./imageText";

function Team() {
  return (
    <div id="team">
      <div>
        <h1 className="teamText">Meet the heroes behind the magic</h1>
      </div>

      <div className="flex">
        {images.map((image) => (
          <div key={image.id} className="teamImage">
            <img
              src={image.imageUrl}
              alt={`pix ${image.id}`}
              className="images"
            />
            <p className="text1">{image.text1}</p>
            <p className="text2">{image.text2}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Team;
