function isColorValid(color) {
  if (color === "blue" || color === "green") {
    return true;
  } else {
    return false;
  }
}

// is exactly the same as below

function isColorValid(color) {
  return color === "blue" || color === "green";
}

let isColorValid = color => color === "blue" || color === "green";

let isColorValid = color => ["blue", "green"].includes(color);