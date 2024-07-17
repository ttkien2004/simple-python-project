import React from "react";
import Author1 from "../assets/Author/Author1.png";
import Author2 from "../assets/Author/Author2.png";
import Author3 from "../assets/Author/Author3.png";
import Author4 from "../assets/Author/Author4.png";

export default function Services2() {
  const author_container = [
    {
      name: "Adam Levin",
      intro:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
      image: Author1,
    },
    {
      name: "Jennifer Dawn",
      intro:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
      image: Author2,
    },
    {
      name: "Harry Corolyn",
      intro:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
      image: Author3,
    },
    {
      name: "Hailey Chang",
      intro:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
      image: Author4,
    },
  ];
  return (
    <div>
      <h1>OUR SERVICES</h1>
      <div>
        <h1>Author of the month</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem
          ipsum
        </p>
        <p>
          dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus
          nec ullamcorper mattis, pulvinar dapibus leo.
        </p>
      </div>
      <div className="author-container">
        {author_container.map((auth, index) => (
          <div key={index}>
            <img src={auth.image} alt="Logo"></img>
            <h1>AUTHOR</h1>
            <p className="author-name">{auth.name}</p>
            <p className="author-intro">{auth.intro}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
