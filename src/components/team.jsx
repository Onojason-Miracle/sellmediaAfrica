import React from "react";


function Team() {
  const images = [
    {
      id: 1,
      imageUrl: "https://res.cloudinary.com/blackgirlmagic/image/upload/v1719518461/Contact%20Form/Avatar1_b1srar.png",
      text1: "Esther Howard",
      text2: "Founder",
    },
    {
      id: 2,
      imageUrl: "https://res.cloudinary.com/blackgirlmagic/image/upload/v1719518461/Contact%20Form/Avatar2_ezjnwc.png",
      text1: "Cody Fisher",
      text2: "Developer",
    },
    {
      id: 3,
      imageUrl: "https://res.cloudinary.com/blackgirlmagic/image/upload/v1719518461/Contact%20Form/Avatar3_f2uxot.png",
      text1: "Brooklyn Simmons",
      text2: "Designer",
    },
  ];
  
  
  return (
    <div id="team">
      <div>
        <h1 className="teamText">Meet the heroes behind the magic</h1>
      </div>

      {/* <div className="team-flex">
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
      </div> */}

      <div className="team-flex">
        <div className="teamImage">
        <img src="https://res.cloudinary.com/blackgirlmagic/image/upload/v1719518461/Contact%20Form/Avatar1_b1srar.png" alt="avatar1" />

<p className="text1">Esther Howard</p>
    <p className="text2">Founder</p>
        </div>
      </div>
    </div>
  );
}

export default Team;
