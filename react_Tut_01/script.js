// function Content() {
//   return (
//     <div>
//       <h1>Hi, there </h1>
//       <p>I am Shudhansu</p>
//     </div>
//   );
// }

// ReactDOM.render(
//   <div>
//     <Content />
//   </div>,
//   document.querySelector("#root")
// );

// const elem = (
//   <nav>
//     <h1>SCode</h1>
//     <ul>
//       <li>Pricing</li>
//       <li>About</li>
//       <li>Contack</li>
//     </ul>
//   </nav>
// );

/*************************************************************** */
/*************************************************************** */
/*************************************************************** */
/*************************************************************** */
// ReactDOM.createRoot(document.getElementById("root")).render(elem);
/*************************************************************** */
/*************************************************************** */
/*************************************************************** */
/*************************************************************** */

// const page = (
//   <div>
//     <img src="logo.png" alt="LOGO" width="9%" />
//     <h1>Fun facts about React</h1>
//     <ul>
//       <li>Was first released in 2013</li>
//       <li>Was originally created by Jordan Walke</li>
//       <li>Has well over 100K stars on GitHub</li>
//       <li>Is maintained by Facebook</li>
//       <li>Powers thousands of enterprise apps, including mobile apps</li>
//     </ul>
//   </div>
// );

const element = document.getElementById("root");

import Header from "./Header";

import MainContent from "./MainContent";

function Footer() {
  return <footer> © 2023 Pandey development. All rights reserved.</footer>;
}

function TemporaryName() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

ReactDOM.render(<TemporaryName />, element);
