import _ from "lodash";

function component() {
  const element = document.createElement("div");

  // Lodash, currently included via a script, is required for this line to work
  console.log("Just some random logging"   )
  element.innerHTML = _.join(["Hi", "mom!"], " ");

  return element;
}

document.body.appendChild(component());
