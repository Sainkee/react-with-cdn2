const parentElement = React.createElement(
  "div",
  { className: "main" },
  React.createElement("p", { className: "heading" }, "Topic Covered"),
  React.createElement(
    "p",
    { className: "para" },
    "The following id list pf all the topics were covered in the mdn learning aeaa"
  ),
  React.createElement(
    "a",
    { href: "https://react.dev/" },
    "Getting started with React"
  ),
  React.createElement(
    "p",
    { className: "para" },
    "Provide a practical way to interact with web development begainer course"
  ),
  React.createElement(
    "a",
    { href: "https://www.w3schools.com/html/" },
    "HTML- structuring the web"
  ),
  React.createElement(
    "p",
    { className: "para" },
    "Html is a simple language that can be used to structure the different parts of our content and react components refined what the purpose and the meaning of is. this topic teach you to dive into html"
  ),
  React.createElement(
    "a",
    { href: "https://www.w3schools.com/css/" },
    "Css- styling  the web"
  ),
  React.createElement(
    "p",
    { className: "para" },
    "CSS (Cascading Style Sheets) is a style sheet language used to describe the presentation and layout of a document written in HTML or XML. CSS allows you to separate the content and structure of a webpage (which is defined by HTML) from its appearance and style."
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(parentElement);
