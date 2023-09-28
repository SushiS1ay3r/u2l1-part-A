const button = document.querySelector("button");

button.addEventListener("click", updateName);

const buttonTwo = document.getElementById("colorChanger");

buttonTwo.addEventListener("click", updateColor);

function updateName() 
{
  const name = prompt("Enter a new name");
  button.textContent = `Player 1: ${name}`;
}

function updateColor()
{
  buttonTwo.textContent = "Congrats you changed the color!";
  document.getElementById("colorChanger").classList.add("aqua");
}
