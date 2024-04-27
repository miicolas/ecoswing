fetch("https://apps-pt-api.kas9uk.easypanel.host/game/getscore")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);
    try {
      let profile_container = document.querySelector(".data-wrapper");

      for (let i = 0; i <= 5; i++) {
        profile_container.innerHTML += `

      <li class="text-data"><span class="green-text"></span>${data[i].score}</li>
      

        `;
      }
    } catch (error) {
      console.log(error);
    }
  });
