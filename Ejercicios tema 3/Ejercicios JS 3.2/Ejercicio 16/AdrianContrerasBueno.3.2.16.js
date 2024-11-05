const openWindowButton = document.getElementById("openWindowButton");
openWindowButton.addEventListener("click", function () {
  const newWindow = window.open(
    "https://www.youtube.com/",
    "",
    "width=600,height=400"
  );
  setTimeout(function () {
    newWindow.close();
  }, 5000);
});
