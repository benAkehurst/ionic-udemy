// Defines HTML elements for access
const reasonInput = document.querySelector('#input-reason');
const amountInput = document.querySelector('#input-amount');
const cancelBtn = document.querySelector('#button-cancel');
const confirmBtn = document.querySelector('#button-confirm');
const expensesList = document.querySelector('#expenses-list');
const totalExpensesSpan = document.querySelector('#total-expenses');
const alertCtrl = document.querySelector('ion-alert-controller');

// Init running total of expenses
let totalExpenses = 0;

// Clears the input fields
const clear = () => {
  reasonInput.value = '';
  amountInput.value = '';
}

confirmBtn.addEventListener('click', () => {
  // Gets input values
  const enteredReason = reasonInput.value;
  const enteredAmount = amountInput.value;

  // Validates inputs aren't empty
  if(enteredReason.trim().length <= 0 || enteredAmount <= 0 || enteredAmount.trim() <= 0) {
    alertCtrl.create({
      header: 'Invalid Inputs',
      message: 'Please enter a valid reason and amount',
      buttons: ['Okay']
    }).then(alertElement => {
      alertElement.present();
    });
    return;
  }
  // Adds a new item to list of expenses
  const newItem = document.createElement('ion-item');
  newItem.textContent = enteredReason + ': £' + enteredAmount;
  expensesList.appendChild(newItem);

  // Adds up a running total of expenses
  totalExpenses += +enteredAmount;
  totalExpensesSpan.textContent = '£' + totalExpenses;

  // Clears the form at the end of the script
  clear();
});

// Adds the clear function to the clear button
cancelBtn.addEventListener('click', clear);
