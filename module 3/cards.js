// =============================================
// KANFLOW - MODULE 3: cards.js
// =============================================
// Handles card actions:
// - addCard()
// - deleteCard()
// =============================================


/**
 * ADD CARD FUNCTION
 * Reads input, creates new card, pushes into TODO column, re-renders board
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

  const todoColumn = boardData.find(col => col.id === 'todo');

  if (!todoColumn) {
    console.error('TODO column not found');
    return;
  }

  todoColumn.cards.push(newCard);

  input.value = '';
  renderBoard();
}


/**
 * DELETE CARD FUNCTION
 * Removes a card from a specific column by ID
 */
function deleteCard(columnId, cardId) {
  const column = boardData.find(col => col.id === columnId);

  if (!column) {
    console.error('Column not found:', columnId);
    return;
  }
  column.cards = column.cards.filter(card => card.id !== cardId);
  renderBoard();
}