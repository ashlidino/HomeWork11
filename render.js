const container = document.getElementById("cards-container");

cards.forEach(card => {
  const cardDiv = document.createElement("div");
  cardDiv.classList.add("card");

  const img = document.createElement("img");
  img.src = card.imageUrl;

  const title = document.createElement("h3");
  title.textContent = card.title;

  const desc = document.createElement("p");
  desc.textContent = card.description;

  const link = document.createElement("a");
  link.href = card.link;
  link.textContent = "Learn more";

  cardDiv.appendChild(img);
  cardDiv.appendChild(title);
  cardDiv.appendChild(desc);
  cardDiv.appendChild(link);

  container.appendChild(cardDiv);

  // event listener (required part)
  cardDiv.addEventListener("click", () => {
    console.log(`You clicked on ${card.title}`);
  });
});