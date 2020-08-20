import React from "react";
import AvatarList from "./AvatarList";
class AvatarDetails {
  constructor(id, name, work) {
    this.id = id;
    this.name = name;
    this.work = work;
  }
}
const avL = [
  new AvatarDetails(1, "Imran 1337", "Full Stack Web Developer"),
  new AvatarDetails(2, "Sobuj", "CEO"),
  new AvatarDetails(3, "Sojib", "Full Stack Web Developer"),
  new AvatarDetails(4, "Rifat", "Python Developer"),
  new AvatarDetails(5, "Arafat", "Android App Developer"),
];
const displayList = avL.map((avatarCard, i) => {
  return (
    <AvatarList
      id={avL[i].id}
      name={avL[i].name}
      work={avL[i].work}
      key={i.toString()}
    />
  );
});
export default displayList;
