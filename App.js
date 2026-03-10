import React from "react";
import ReactDom from "react-dom/client";

// JSX - html/Xml like syntax
// it is not html inside js
//it is a syntactical sugar over the react to make dev life easier

const jsxHeading = <h1 id="heading">Namaste React using JSX !</h1>;
const root = ReactDom.createRoot(document.getElementById("root"));
root.render(jsxHeading);
