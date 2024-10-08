const gameCards = document.querySelectorAll(".game-card");

gameCards.forEach((card) => {
  card.addEventListener("click", function (event) {
    if (!event.target.classList.contains("favorite-btn")) {
      const gameTittle = this.querySelector("h3").textContent;
      const gameDescription = this.querySelector("p").textContent;
      const gameImage = this.querySelector(".game-img").src;

      document.getElementById("gameTittle").textContent = gameTittle;
      document.getElementById("gameDescription").textContent = gameDescription;
      document.getElementById("modalGameImage").src = gameImage;

      document.getElementById("gameModal").style.display = "block";
    }
  });
});

function closeModal() {
  document.getElementById("gameModal").style.display = "none";
}
