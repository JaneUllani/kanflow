// =============================================
// KANFLOW - MODULE 2: main.js
// =============================================

console.log("KanFlow is running - Module 2!");


// =============================================
// RENDER BOARD ON LOAD
// =============================================
renderBoard();

console.log("Board rendered from data array.");
console.log("Columns:", columns.length);
console.log("Cards:", cards.length);


// =============================================
// SAFE DOM ELEMENT CHECKS
// =============================================

// Get button + input safely AFTER DOM is ready
document.addEventListener("DOMContentLoaded", function () {

  const addBtn = document.getElementById('add-card-btn');
  const input = document.getElementById('card-input');

  // SAFETY CHECK: Button exists?
  if (addBtn) {
    addBtn.addEventListener('click', addCard);
  } else {
    console.error("Add Card button not found!");
  }

  // ENTER KEY EVENT
  if (input) {
    input.addEventListener('keydown', function (event) {
      if (event.key === 'Enter') {
        addCard();
      }
    });
  } else {
    console.error("Card input not found!");
  }
});


// =============================================
// CONSOLE TESTS
// =============================================
//
// 1. Count To Do cards:
//    cards.filter(c => c.column === 'todo').length
//
// 2. Add test card:
//    cards.push({
//      id: Date.now(),
//      title: "My new card",
//      column: "todo",
//      tag: "JS",
//      done: false
//    });
//    renderBoard();
//
// 3. Move card:
//    cards[0].column = "inprogress";
//    renderBoard();