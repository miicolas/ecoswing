fetch("https://apps-pt-api.kas9uk.easypanel.host/dashboard/getprofile")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);
    try {
      let profile_container = document.querySelector(".profile_container");

      profile_container.innerHTML += `
        <div class="title-container">
            <h1 class="title-green">Dashboard</h1>
        </div>
        <h3 class="welcome-message">
            Bienvenue sur votre dashboard EcoSwing, <span class="text-green">${data.name}</span> !
        </h3>
        <div class="info-point-container">
            <p class="points-info">Vous avez actuellement ${data.gift} points</p>
            <p class="next-draw">Prochain tirage dans ${data.lastGift}</p>
        </div>
        <a href="/gift/addgift" ><div class="draw-link">Tirer votre point</div></a>
        <div class="discount-info">Vous pouvez obtenir des réductions à partir de 20 points</div>
        <a href="/auth/logout"><div class="logout-link">Se déconnecter</div></a>
        `;
    } catch (error) {
      console.log(error);
    }
  });
