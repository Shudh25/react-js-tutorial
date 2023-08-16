import React from "react";
import "./css/PostDataStyle.css";

export default function PostData() {
  const [data, setData] = React.useState({
    fname: "",
    gender: "Male",
    startDate: "",
    tillDate: "",
    phone: "",
    email: "",
  });

  const [file, setFile] = React.useState(null);
  const errorElement = document.getElementById("error");
  const submitRes = document.getElementById("submitRes");

  //handling change
  function handleChange(event) {
    const { name, value } = event.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  //handling file input
  function handleFileInput(e) {
    console.warn(e.target.files);
    const files = e.target.files[0];
    const size = files.size;
    const type = files.type;

    if (size > 5000000) {
      alert("file size can't exceed 5 MB and Null ");
      return;
    }

    if (type !== "application/pdf" && type !== "image/png") {
      alert("only .pdf and .png extension ");
      return;
    }

    setFile(files);
  }

  //Form VALIDATIONS
  function formValidation(e) {
    let error_messages = [];

    // PHONE VALIDATIONS

    var numbers = /^[0-9]+$/;

    if (data.phone.match(numbers) == null) {
      error_messages.push("Enter Number only in Phone");
      console.log("hello");
    }

    // If the Entered Phone Is less than 10 Digit
    let phone_length = data.phone.toString().length;
    if (phone_length < 10) {
      error_messages.push("Please Enter valid Phone Number");
    }

    //EMAIL VALIDATIONS

    var validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@(xenonstack.in|xenonstack.com)$/;
    var receivedEmail = data.email.trim();

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

  //    SUBMITTING THE FORM
  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData();
    formData.append("name", data.fname.trim());
    formData.append("gender", data.gender);
    formData.append("startDate", data.startDate);
    formData.append("tillDate", data.tillDate);
    formData.append("phone", data.phone);
    formData.append("email", data.email);
    formData.append("resume", file);

    console.log(formData.get("name"));
    console.log(formData.get("gender"));
    console.log(formData.get("startDate"));
    console.log(formData.get("tillDate"));
    console.log(formData.get("phone"));
    console.log(formData.get("email"));
    console.log(formData.get("resume"));

    console.log(formData);

    const api_url = "http://localhost:8080/sendData";
    fetch(api_url, {
      method: "POST",
      //   headers: {
      //     "Content-Type": "multipart/form-data",
      //   },
      body: data,
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .then((error) => console.log(error));

    //Resetting The Form
    // setMsg("");
    // setData({
    //   fname: "",
    //   gender: "",
    //   startDate: "",
    //   tillDate: "",
    //   phone: "",
    //   email: "",
    // });
    // setFile(null);
  }

  function submitForm(e) {
    e.preventDefault();
    if (formValidation(e)) {
      errorElement.style.display = "none";
      handleSubmit(e);
      submitRes.innerText = "Data Submitted Sucessfully";

      // RESET CODE
    }
  }

  return (
    <div className="container">
      <form
        onSubmit={submitForm}
        id="employee_form"
        method="post"
        encType="multipart/form-data"
      >
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
              name="fname"
              value={data.fname}
              onChange={handleChange}
              required
            />
          </div>
          <div className="item">
            <label htmlFor="gender">
              Gender<span>*</span>
            </label>
            <select
              id="gender"
              name="gender"
              value={data.gender}
              onChange={handleChange}
            >
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
              value={data.startDate}
              onChange={handleChange}
              required
            />
            <em>to</em>
            <input
              type="date"
              className="inpt date"
              id="tillDate"
              name="tillDate"
              value={data.tillDate}
              onChange={handleChange}
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
              defaultValue={"+91"}
              maxLength={3}
              id="noAdd91"
              readOnly
            />
            <input
              type="tel"
              id="phone"
              name="phone"
              maxLength={10}
              value={data.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="item">
            Upload Resume<span>*</span>
            <input
              type="file"
              className="inpt"
              id="resume"
              name="resume"
              accept=".pdf, .png"
              onChange={handleFileInput}
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
              id="email"
              placeholder="xyz@gmail.com"
              name="email"
              value={data.email}
              onChange={handleChange}
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
