import React from "react";
import Mail from "../assets/mail.png";
import Phone from "../assets/telephone.png";
import Home from "../assets/home.png";

export default function Footer() {
  return (
    <div className="footer">
      <div>
        <h1>Publisher</h1>
        <div className="pl-10 mt-5">
          <div>Best Seller</div>
          <div>Authors Story</div>
          <div>Interview</div>
        </div>
      </div>
      <div>
        <h1>Come & Find Us</h1>
        <div className="pl-10 mt-5">
          <div>
            <img src={Home} alt="Logo" className="small-icon"></img>
            Peakview Tower, 36 Hoang Cau, Dong Da, Hanoi
          </div>
          <div>
            <img src={Phone} alt="Logo" className="small-icon"></img>
            012.3344.566
          </div>
          <div>
            <img src={Mail} alt="Logo" className="small-icon"></img>
            support@tempi.vn
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <h1>Give Us Your Information</h1>

        <form className="flex flex-col">
          <label className="relative">
            <span className="star">*</span>
            <input type="text" required placeholder="Your name"></input>
          </label>

          <label className="relative">
            <span className="star">*</span>
            <input type="text" required placeholder="Your phone number"></input>
          </label>

          <label>
            <input type="text" required placeholder="Your email"></input>
          </label>
          <label>
            <textarea placeholder="Leave us a message"></textarea>
          </label>
          <label className="flex justify-center">
            <button className="bg-[#c24b3a] text-white text-sm rounded-lg pr-14 pl-14 pt-2 pb-2">
              Submit
            </button>
          </label>
        </form>
      </div>
    </div>
  );
}
