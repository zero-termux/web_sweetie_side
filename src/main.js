document.addEventListener("DOMContentLoaded", function () {
  const modal = document.querySelector(".modal");
  const buttonClose = document.querySelector(".button-close");
  buttonTesti = document.getElementById("buttonTesti");

  buttonTesti.addEventListener("click", function () {
    modal.style.display = "flex";
  });

  buttonClose.addEventListener("click", function () {
    modal.style.display = "none";
  });
});
