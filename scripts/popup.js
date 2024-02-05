document.addEventListener("DOMContentLoaded", function () {
  var popup = document.getElementById("popup");
  var overlay = document.getElementById("overlay");
  var closePopup = document.getElementById("closePopup");

  popup.style.display = "block";
  overlay.style.display = "block";
  document.body.style.overflow = "hidden"; // Prevent scrolling

  closePopup.addEventListener("click", function () {
    popup.style.display = "none";
    overlay.style.display = "none";
    document.body.style.overflow = ""; // Allow scrolling
  });
});
