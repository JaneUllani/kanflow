// =============================================
// KANFLOW - MODULE 2: board.js
// =============================================
// This file is responsible for rendering the
// board from the data defined in data.js.
//
// FUNCTIONS IN THIS FILE:
//   renderBoard()  - builds all columns and cards
//   createColumn() - builds one column element
//   createCard()   - builds one card element
// =============================================


// ---------------------------------------------
// renderBoard()
// ---------------------------------------------
// Clears the board and re-renders everything
// from the columns and cards arrays in data.js.
//
// This is called once when the page loads
// and again whenever the data changes.
// ---------------------------------------------
function renderBoard() {

  // Step 1 - Get the board element from the DOM
  const board = document.getElementById("board");

  // Step 2 - Clear any existing content
  // This ensures we always start fresh before re-rendering
  board.innerHTML = "";

  // Step 3 - Loop through each column and build it
  columns.forEach(function(column) {

    // Step 3a - Create the column element
    const columnEl = createColumn(column);

    // Step 3b - Find all cards that belong to this column
    const columnCards = cards.filter(function(card) {
      return card.column === column.id;
    });

    // Step 3c - Get the card list container inside this column
    const cardList = columnEl.querySelector(".card-list");

    // Step 3d - Loop through matching cards and add them
    columnCards.forEach(function(card) {
      const cardEl = createCard(card);
      cardList.appendChild(cardEl);
    });

    // Step 3e - Update the card count in the column header
    const countEl = columnEl.querySelector(".column-count");
    countEl.textContent = columnCards.length;

    // Step 3f - Add the completed column to the board
    board.appendChild(columnEl);
  });
}


// ---------------------------------------------
// createColumn(column)
// ---------------------------------------------
// Receives one column object from data.js
// and returns a fully built column DOM element.
// ---------------------------------------------
function createColumn(column) {

  // Create the outer section element
  const section = document.createElement("section");
  section.className = "column";
  section.dataset.column = column.id;

  // Build the inner HTML for the column
  // Notice we use template literals (backticks) to insert data
  section.innerHTML = `
    <div class="column-header">
      <span class="column-dot ${column.dot}"></span>
      <h2 class="column-title">${column.title}</h2>
      <span class="column-count">0</span>
    </div>
    <div class="card-list" id="col-${column.id}">
    </div>
  `;

  return section;
}


// ---------------------------------------------
// createCard(card)
// ---------------------------------------------
// Receives one card object from data.js
// and returns a fully built card DOM element.
// ---------------------------------------------
function createCard(card) {

  // Create the article element
  const article = document.createElement("article");

  // Apply the card class - add card-done if the card is marked done
  article.className = card.done ? "card card-done" : "card";

  // Set a data attribute so we can identify this card later
  article.dataset.id = card.id;

  // Build the tag class from the tag name
  // Example: "Research" becomes "tag-blue" based on our mapping
  const tagClass = getTagClass(card.tag);

  // Build the card inner HTML
  article.innerHTML = `
    <p class="card-title">${card.title}</p>
    <div class="card-footer">
      <span class="card-tag ${tagClass}">${card.tag}</span>
    </div>
  `;

  return article;
}


// ---------------------------------------------
// getTagClass(tag)
// ---------------------------------------------
// Maps a tag name to a CSS class.
// Add more tags here as needed.
// ---------------------------------------------
function getTagClass(tag) {
  const tagMap = {
    "Research": "tag-blue",
    "Setup":    "tag-green",
    "HTML":     "tag-yellow",
    "CSS":      "tag-yellow",
    "JS":       "tag-blue",
    "Planning": "tag-green",
    "Review":   "tag-purple",
  };
  return tagMap[tag] || "tag-blue";
}
