import React from "react";
import Services from "../BookSelfLayout/Services1";
import Services2 from "../BookSelfLayout/Services2";
import Author1 from "../AuthorIntro/Author1";
import Author2 from "../AuthorIntro/Author2";
import Branches from "../BookLogo/BookBrand";
import DisplayBooks from "../BookSelfLayout/ShelfBook";
import Footer from "./Footer";

export default function MainBody() {
  return (
    <div className="main-body">
      <DisplayBooks />
      <Services />
      <Services2 />
      <Author1 />
      <Author2 />
      <Branches />
      <Footer />
    </div>
  );
}
