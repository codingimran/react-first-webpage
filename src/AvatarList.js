import React from "react";
import "./AvatarList.css";
const AvatarList = (props) => {
  return (
    <div className="avatarStyle ma4 bg-light-purple dib p4 tc grow shadow-4">
      <img
        src={`https://joeschmoe.io/api/v1/${props.name}`}
        alt="Avatar"
        className="grow"
      ></img>
      <div>
        <h1 className="devname grow">{props.name}</h1>
        <p className="profession">{props.work}</p>
      </div>
    </div>
  );
};
export default AvatarList;
