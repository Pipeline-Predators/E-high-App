import React from "react";
import image from "./userprofilephoto1.jpg";

function ProfileInfo() {
  return (
    <div className="profile">
      <img src={image} alt="ProfileImage" />
      <span>Hello Username</span>
      <p clasName="">1238 pts</p>
    </div>
  );
}

export default ProfileInfo;
