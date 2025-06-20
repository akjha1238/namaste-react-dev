/* 
<div id="parent">
    <div id="child">
        <h1></h1>
    </div>
</div>

REplicate this using js 
*/
const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    [React.createElement(
        "h1",
        { id: "nestedHeading" },
        "React Nested heading<h1> inside <div> tag"
      ),React.createElement(
        "h2",
        { id: "nestedHeading" },
        "Nested sibling heading <h2> tag"
      )]
  )
);
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello world from React using CDN"
);
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);
root.render([parent,heading])
