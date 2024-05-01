const token = localStorage.getItem("token"); // Récupère le token depuis le localStorage
console.log(token);

fetch("https://apps-pt-api.kas9uk.easypanel.host/dashboard/getprofile", {
    headers: {
        Authorization: `Bearer ${token}`, // Ajoute le token dans le header Authorization
    },
})
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
                Welcome to your EcoSwing dashboard, <span class="text-green">${data.user.name}</span> !
            </h3>
            <div class="info-point-container">
                 <p class="points-info">You currently have ${data.user.gift} ${data.user.gift === 1? 'point': 'points'}</p>
                <p class="next-draw">Next draw in ${data.nextGiftTime.hours} hours and ${data.nextGiftTime.minutes} minutes</p>
            </div>
        `;

    } catch (error) {
        console.log(error);
    }
});
