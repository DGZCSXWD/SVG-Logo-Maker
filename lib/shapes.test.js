const { Triangle, Circle, Square } = require("./shapes");

test("Triangle should render correct SVG", () => {
  const shape = new Triangle();
  shape.setColor("blue");
  expect(shape.render()).toEqual(
    '<polygon points="150, 18 244, 182 56, 182" fill="blue" />'
  );
});

test("Circle should render correct SVG", () => {
  const shape = new Circle();
  shape.setColor("red");
  expect(shape.render()).toEqual(
    '<circle cx="150" cy="100" r="80" fill="red" />'
  );
});

test("Square should render correct SVG", () => {
  const shape = new Square();
  shape.setColor("green");
  expect(shape.render()).toEqual(
    '<rect x="60" y="40" width="180" height="180" fill="green" />'
  );
});
