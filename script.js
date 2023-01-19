const button = document.querySelector("button");

function lightswitch() {
  button.classList.toggle("light-off");
  document.body.classList.toggle("light-off-body");

  if (document.title === "Good Night") {
    document.title = "Good Morning";
  } else {
    document.title = "Good Night";
  }
}

button.addEventListener("click", lightswitch);
