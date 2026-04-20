// =============================================
// KANFLOW - MODULE 2: main.js
// =============================================

console.log("KanFlow is running - Module 2!");

// Render the board when the page loads
renderBoard();

console.log("Board rendered from data array.");
console.log("Columns:", columns.length);
console.log("Cards:", cards.length);


// =============================================
// CLICK EVENT (ADD CARD BUTTON)
// =============================================

const addBtn = document.getElementById('add-card-btn');

addBtn.addEventListener('click', addCard);


// =============================================
// ENTER KEY EVENT (INPUT FIELD)
// =============================================

const input = document.getElementById('card-input');

input.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    addCard();
  }
});


// =============================================
// TRY THESE IN THE CONSOLE (F12)
// =============================================
//
// 1. How many cards are in the To Do column?
//    cards.filter(c => c.column === 'todo').length
//
// 2. Add a new card manually:
//    cards.push({
//      id: 7,
//      title: "My new card",
//      column: "todo",
//      tag: "JS",
//      done: false
//    });
//    renderBoard();
//
// 3. Move a card to another column:
//    cards[0].column = "inprogress";
//    renderBoard();