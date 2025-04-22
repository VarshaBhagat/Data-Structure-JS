const userInput = document.getElementById("userInput");

const lowerCaseEl = document.getElementById("lowercase");
const upperCaseEl = document.getElementById("uppercase");
const camelCaseEl = document.getElementById("camelcase");
const pascalCaseEl = document.getElementById("pascalcase");
const snakeCaseEl = document.getElementById("snakecase");
const kebabCaseEl = document.getElementById("kebabcase");
const titleCaseEl = document.getElementById("trim");

function transform(e) {
    
  const item = e.target.value;
  const camelCase = item.split(" ").reduce((a,b)=> a+b[0].toUpperCase()+b.substring(1));
  lowerCaseEl.textContent = item.toLowerCase();
  upperCaseEl.textContent = item.toUpperCase();
  camelCaseEl.textContent = camelCase;
  pascalCaseEl.textContent = camelCase[0].toUpperCase()+camelCase.substring(1);
  snakeCaseEl.textContent = item.split(" ").join("_");
  kebabCaseEl.textContent = item.split(" ").join("-");
  titleCaseEl.textContent = item.trim();

  console.log(e.target.value);
}
userInput.addEventListener("input", transform);
