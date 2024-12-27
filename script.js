//main container
const container = document.createElement("div");
container.classList.add("container");
document.body.appendChild(container);

//create age-container
const ageContainer = document.createElement("div");
ageContainer.className = "age-container";
container.appendChild(ageContainer);

//create heading
const heading = document.createElement("div");
ageContainer.appendChild(heading);
heading.classList.add("heading");
//create h1
const h1 = document.createElement("h1");
h1.innerText = "Age Calculator";
heading.appendChild(h1);
//create paragraph
const p = document.createElement("p");
heading.appendChild(p);
p.innerText = "Enter your birth year and find out your age";

//create input container
const inputData = document.createElement("div");
ageContainer.appendChild(inputData);
inputData.className = "input-data";
//create input field
const input = document.createElement("input");
input.setAttribute("type", "date");
inputData.appendChild(input);
input.setAttribute("name", "date");
input.setAttribute("id", "data-container");
//create button and break tag
const button = document.createElement("button");
const br = document.createElement("br");
inputData.appendChild(br);
button.innerText = "Calculate Age";
inputData.appendChild(button);
button.classList.add("btn");

//create result container and heading
const resultContainer = document.createElement("div");
ageContainer.appendChild(resultContainer);
resultContainer.className = "result-container";
const heading3 = document.createElement("h3");
heading3.innerText = "Your Age is 20 Years old";
resultContainer.appendChild(heading3);

// styling

container.style.cssText =
  "height: 100vh; display: flex; flex-direction: column; justify-content: center; align-items: center; font-family: Inter, serif;";

ageContainer.style.cssText =
  "border: 1px solid black; padding: 10px 30px; border-radius: 5px";

input.style.cssText = "margin-bottom: 15px;";
button.style.cssText = "margin-bottom: 15px;";

// logic for calculating age
function calculateAge() {
  const calcuBirth = input.value;
  if (calcuBirth === "") {
    alert("Please enter your birth date");
  } else {
    const age = getAge(calcuBirth);
    resultContainer.innerText = `Your age is ${age} ${
      age > 1 ? "years" : "year"
    } old`;
  }
}

// function to calculate age
function getAge() {
  const calcuBirth = input.value;
  const currentDate = new Date();
  const dateOfBirth = new Date(calcuBirth);

  let age = currentDate.getFullYear() - dateOfBirth.getFullYear();
  const month = currentDate.getMonth() - dateOfBirth.getMonth();

  if (
    month < 0 ||
    (month === 0 && currentDate.getDate() < dateOfBirth.getDate())
  ) {
    age--;
  }

  return age;
}

button.addEventListener("click", calculateAge);
