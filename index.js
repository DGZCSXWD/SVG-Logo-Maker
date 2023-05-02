const inquirer = require("inquirer");
const fs = require("fs");
const { Triangle, Circle, Square } = require("./lib/shapes");

const questions = [
  {
    type: "input",
    name: "text",
    message: "Enter up to three characters for the text:",
    validate: (input) =>
      input.length <= 3 || "Please enter up to three characters.",
  },
  {
    type: "input",
    name: "textColor",
    message: "Enter the text color (keyword or hexadecimal number):",
  },
  {
    type: "list",
    name: "shape",
    message: "Select a shape:",
    choices: ["Triangle", "Circle", "Square"],
  },
  {
    type: "input",
    name: "shapeColor",
    message: "Enter the shape color (keyword or hexadecimal number):",
  },
];

inquirer.prompt(questions).then((answers) => {
  const { text, textColor, shape, shapeColor } = answers;
  const ShapeClass = { Triangle, Circle, Square }[shape];
  const shapeInstance = new ShapeClass();
  shapeInstance.setColor(shapeColor);

  const svgContent = `
<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200" viewBox="0 0 300 200">
  ${shapeInstance.render()}
  <text x="50%" y="50%" font-size="36" font-family="sans-serif" text-anchor="middle" fill="${textColor}" dy=".3em">
    ${text}
  </text>
</svg>
  `;

  fs.writeFileSync("logo.svg", svgContent.trim());
  console.log("Generated logo.svg");
});
