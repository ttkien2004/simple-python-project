import React from "react";
import Author1 from "../assets/Author/Author1.png";
import Author2 from "../assets/Author/Author2.png";
import Author3 from "../assets/Author/Author3.png";
import Author4 from "../assets/Author/Author4.png";

export default function Services2() {
  const author_container = [
    {
      name: "Adam Levin",
      intro1: "Lorem ipsum dolor sit amet, consectetur",
      intro2: "adipiscing elit. Ut elit tellus, luctus nec",
      intro3: "ullamcorper mattis, pulvinar dapibus leo.",
      image: Author1,
    },
    {
      name: "Jennifer Dawn",
      intro1: "Lorem ipsum dolor sit amet, consectetur",
      intro2: "adipiscing elit. Ut elit tellus, luctus nec",
      intro3: "ullamcorper mattis, pulvinar dapibus leo.",
      image: Author2,
    },
    {
      name: "Harry Corolyn",
      intro1: "Lorem ipsum dolor sit amet, consectetur",
      intro2: "adipiscing elit. Ut elit tellus, luctus nec",
      intro3: "ullamcorper mattis, pulvinar dapibus leo.",
      image: Author3,
    },
    {
      name: "Hailey Chang",
      intro1: "Lorem ipsum dolor sit amet, consectetur",
      intro2: "adipiscing elit. Ut elit tellus, luctus nec",
      intro3: "ullamcorper mattis, pulvinar dapibus leo.",
      image: Author4,
    },
  ];
  return (
    <div className="services2">
      <h1 className="text-[#999999] text-sm service2-center">OUR SERVICES</h1>
      <div>
        <h1 className="text-[40px] service2-center">Author of the month</h1>
        <div className="flex flex-col items-center text-[#5B5656] text-sm mt-8">
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
      </div>
      <div className="author-container">
        {author_container.map((auth, index) => (
          <div key={index}>
            <div className="author-img">
              <img src={auth.image} alt="Author"></img>
            </div>
            <h1 className="text-[#999999] flex justify-center">AUTHOR</h1>
            <p className="author-name">{auth.name}</p>
            <div className="author-intro">
              <p>{auth.intro1}</p>
              <p>{auth.intro2}</p>
              <p>{auth.intro3}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
