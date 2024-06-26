fetch("/dashboard/getprofile")
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

      profile_container.innerHTML += `<div>
                <h1>Dashboard</h1>
            </div>
            <h3>
                Bienvenue sur votre dashboard EcoSwing, ${data.name} !
            </h3>
            <p>Vous avez actuellement ${data.gift} points</p>
            <p>Prochain tirage dans ${data.lastGift}</p>
            <button>Tirer votre point</button>
            <div> Vous pouvez obtenir des réductions à partir de 20 points</div>`;
    } catch (error) {
      console.error("Error displaying profile:", error);
    }
  })
  .catch((error) => {
    console.error("Error fetching profile:", error);
  });
