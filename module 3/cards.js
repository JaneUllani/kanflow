// =============================================
// KANFLOW - MODULE 3: cards.js
// =============================================
// Handles card actions:
// - addCard()
// - deleteCard()
// =============================================


/**
 * ADD CARD FUNCTION 
 */
function addCard() {

  const input = document.getElementById('card-input');
  const title = input.value.trim();

  if (title === '') return;

  const newCard = {
    id: Date.now(),
    title: title,
    column: 'todo',
    tag: 'Task',
    done: false,
  };

  // ✔ Add card to correct data array
  cards.push(newCard);

  // Clear input field
  input.value = '';

  // Re-render board
  renderBoard();
}


/**
 * DELETE CARD FUNCTION 
 */
function deleteCard(columnId, cardId) {

  // Remove card from global cards array
  cards = cards.filter(function(card) {
    return card.id !== cardId;
  });

  // Re-render board after deletion
  renderBoard();
}