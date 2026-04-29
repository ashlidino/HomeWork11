// MAP — get all titles
const titles = cards.map(card => card.title);
console.log("Titles:", titles);

// FILTER — cards with "JavaScript" in description
const filtered = cards.filter(card =>
  card.description.includes("JavaScript")
);
console.log("Filtered:", filtered);

// SORT — alphabetically by title
const sorted = [...cards].sort((a, b) =>
  a.title.localeCompare(b.title)
);
console.log("Sorted:", sorted);

// REDUCE — total characters in all titles
const totalChars = cards.reduce((sum, card) =>
  sum + card.title.length, 0
);
console.log("Total title characters:", totalChars);