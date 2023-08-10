import React from "react";

export default function Form() {
  return (
    <div className="container">
      <form action="/sendData" id="employee_form" method="post">
        <div className="banner" align="center">
          <h1>Employee Form</h1>
        </div>
        <div className="prsnl">
          <div className="item">
            <label htmlFor="fname">
              Full Name<span>*</span>
            </label>
            <input
              type="text"
              className="inpt"
              id="name"
              name="name"
              required
            />
          </div>
          <div className="item">
            <label htmlFor="gender">
              Gender<span>*</span>
            </label>
            <select id="gender" name="gender">
              <option value="Male">MALE</option>
              <option value="Female">FEMALE</option>
              <option value="Others">OTHERS</option>
            </select>
          </div>
          <div className="item">
            <label htmlFor="date" style={{ display: "block" }}>
              Date<span>*</span>
            </label>
            <input
              type="date"
              className="inpt date"
              id="startDate"
              name="startDate"
              required
            />
            <em>to</em>
            <input
              type="date"
              className="inpt date"
              id="tillDate"
              name="tillDate"
              required
            />
          </div>
          <div className="item">
            <label htmlFor="mobile">
              Mobile Number<span>*</span>
            </label>
            <br />
            <input
              type="tel"
              defaultValue={+91}
              maxLength={4}
              id="noAdd91"
              readOnly
            />
            <input type="tel" id="phone" name="phone" maxLength={10} required />
          </div>
          <div className="item">
            Upload Resume<span>*</span>
            <input
              type="file"
              className="inpt"
              id="resume"
              name="resume"
              required
            />
          </div>
          <div className="item">
            <label htmlFor="email">
              Email<span>*</span>
            </label>
            <input
              type="email"
              className="inpt"
              name="email"
              id="email"
              placeholder="xyz@gmail.com"
              required
            />
          </div>
        </div>
        <div id="error" />
        <div className="item" align="center">
          <button type="submit" id="btn">
            Submit
          </button>
        </div>
        <div
          id="submitRes"
          align="center"
          style={{ color: "#2567ce", fontWeight: "bold" }}
        />
      </form>
    </div>
  );
}
