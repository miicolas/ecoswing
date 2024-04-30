const logout = document.querySelector(".logout-link");
console.log(logout);

logout.addEventListener("click", async (e) => {
  e.preventDefault();
  localStorage.removeItem("token");
  window.location = "/login";
});