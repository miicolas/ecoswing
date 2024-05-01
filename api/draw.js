const draw = document.querySelector(".draw-link");
console.log(draw);

draw.addEventListener("click", async (e) => {
  e.preventDefault();
  console.log(token, "token draw");
  const res = await fetch("https://apps-pt-api.kas9uk.easypanel.host/gift/addgift", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();

  // Vérifier si la réponse est ok
  if (res.ok) {
    console.log(data);
    window.location = "/dashboard";
  } else {
    // Si la réponse n'est pas ok, afficher l'erreur sur la page dashboard
    const errorContainer = document.querySelector('.error-container');
    errorContainer.innerHTML = `<p class="error-message">${data.error}</p>`;
  }
});
