import React from "react";
import "./css/GetDataStyle.css";

export default function GetData() {
  // JS CODE
  // api url
  const api_url = "http://localhost:8080/getData";

  fetch("http://localhost:8080/getData")
    .then((res) => res.json())
    .then((data) => console.log(data));

  // Defining async function
  async function getapi(url) {
    // Storing response
    const response = await fetch(url);

    // Storing data in form of JSON
    var data = await response.json();
    console.log(data);
    if (response) {
      hideloader();
    }
    show(data);
  }
  // Calling that async function
  getapi(api_url);

  // Function to hide the loader
  function hideloader() {
    document.getElementById("loading").style.display = "none";
  }
  // Function to define innerHTML for HTML table
  function show(data) {
    let tableData = `<tr>
          <th class="table-header">Name</th>
          <th class="table-header">Gender</th>
          <th class="table-header">From Date</th>
          <th class="table-header">To Date</th>
          <th class="table-header">Phone</th>
          <th class="table-header">Resume</th>
          <th class="table-header">Email</th>
         </tr>`;

    // Loop to access all rows
    for (let r of data) {
      tableData += `<tr>
    <td>${r.name} </td>
    <td>${r.gender}</td>
    <td>${r.from_Date}</td>
    <td>${r.to_Date}</td>
    <td>+91 ${r.phone}</td>
    <td title="Open File">
        <a href="http://localhost:8080/${r.resume}"> ${r.resume}</a>
    </td>
    <td>${r.email}</td>       
    </tr>`;
    }

    // Setting innerHTML as tableData variable
    const dom = document.getElementById("employees");
    dom.innerHTML = tableData;
  }
  return (
    <div>
      <div className="container">
        <div id="loading">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
      <h1 id="Title" align="center">
        Registered Employees
      </h1>
      {/*table for showing data */}
      <table id="employees" align="center" />
    </div>
  );
}
