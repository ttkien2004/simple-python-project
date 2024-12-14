import React from "react";

export default function Footer() {
  return (
    <div className="footer">
      <div className="border border-red-500">
        <h1>Publisher</h1>
        <div>
          <div>Best Seller</div>
          <div>Authors Story</div>
          <div>Interview</div>
        </div>
      </div>
      <div className="border border-red-500">
        <h1>Come & Find Us</h1>
        <div>
          <div>Peakview Tower, 36 Hoang Cau, Dong Da, Hanoi</div>
          <div>012.3344.566</div>
          <div>support@tempi.vn</div>
        </div>
      </div>
      <div className="flex flex-col border border-red-500">
        <h1>Give Us Your Information</h1>

        <form className="flex flex-col">
          <label>
            <span className="text-red-500">*</span>
            <input type="text" required placeholder="Your name"></input>
          </label>

          <label>
            <span className="text-red-500">*</span>
            <input type="text" required placeholder="Your phone number"></input>
          </label>

          <label>
            <input type="text" required placeholder="Your email"></input>
          </label>
          <label>
            <textarea
              className="border border-red-500"
              placeholder="Leave us a message"
            ></textarea>
          </label>
        </form>
      </div>
    </div>
  );
}
