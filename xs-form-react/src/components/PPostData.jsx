import React from "react";
import "./css/PostDataStyle.css";

export default function PPostData() {
  const formE1 = document.getElementById("employee_form");
  const phone = document.getElementById("phone");
  const resume = document.getElementById("resume");
  const email = document.getElementById("email");
  const errorElement = document.getElementById("error");
  const submitRes = document.getElementById("submitRes");

  function SUBMIT(e) {
    e.preventDefault();
    if (formValidation(e)) {
      errorElement.style.display = "none";
      send(e);
      submitRes.innerText = "Data Submitted Sucessfully";
      formE1.reset();
    }
  }

  function formValidation(e) {
    let error_messages = [];

    // PHONE VALIDATIONS

    var numbers = /^[0-9]+$/;

    if (phone.value.match(numbers) == null) {
      error_messages.push("Enter Number only in Phone");
      console.log("hello");
    }

    // If the Entered Phone Is less than 10 Digit
    let phone_length = phone.value.toString().length;
    if (phone_length < 10) {
      error_messages.push("PLease Enter valid Phone Number");
    }

    //FILE VALIDATIONS

    var InputFile = resume;
    var filePath = InputFile.value;

    // Allowing file type
    var allowedExtensions = /(\.pdf|\.png)$/i;

    if (!allowedExtensions.exec(filePath)) {
      error_messages.push("Invalid file type");
      InputFile.value = "";
    }

    //EMAIL VALIDATIONS

    var validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@(xenonstack.in|xenonstack.com)$/;
    var receivedEmail = email.value.trim();

    //Checking Custom Domain Vaidation
    if (!receivedEmail.toLowerCase().match(validRegex)) {
      error_messages.push("Please enter valid email address.");
    }

    // Printing All error_messages
    if (error_messages.length > 0) {
      e.preventDefault();
      errorElement.innerText = error_messages.join(", ");
      errorElement.style.height = "10px";
      return false;
    }
    return true;
  }

  function send(event) {
    event.preventDefault();

    const data = new FormData(formE1);
    data.append("Resume", resume.files[0]);

    fetch("http://localhost:8080/sendData", {
      method: "POST",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .then((error) => console.log(error));
  }

  return (
    <div className="container">
      <form onSubmit={SUBMIT} id="employee_form" method="post">
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
