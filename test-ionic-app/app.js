const reasonInput = document.querySelector('#input-reason');
const amountInput = document.querySelector('#input-amount');
const cancelBtn = document.querySelector('#button-cancel');
const confirmBtn = document.querySelector('#button-confirm');
const expensesList = document.querySelector('#expenses-list');

confirmBtn.addEventListener('click', () => {
  const enteredReason = reasonInput.value;
  const enteredAmount = amountInput.value;

  if(enteredReason.trim().length < 0 || enteredAmount <= 0 || enteredAmount.trim() <= 0) {
    return;
  }
  const newItem = document.createElement('ion-item');
  newItem.textContent = enteredReason + ': £' + enteredAmount;

  expensesList.appendChild(newItem);
});
