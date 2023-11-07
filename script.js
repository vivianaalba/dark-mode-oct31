let button = document.createElement('button');
button.innerHTML = 'Dark Mode';
document.body.appendChild(button);

function toggleMode() {
  var element = document.body;
  element.classList.toggle("dark");

  if (element.classList.contains("dark")) {
    button.textContent = "Light Mode";
  } else {
    button.textContent = "Dark Mode";
  }
}

button.addEventListener("click", toggleMode);
