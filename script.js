let newDateInput = document.querySelector("#dateinput");
let newExpenseInput = document.querySelector("#expenseinput");
let newAmountInput = document.querySelector("#amountinput");

let table = document.querySelector("#table");

let nothingAdded = document.querySelector("#nothingadded");

let addButton = document.querySelector("#addbutton");

let table_rows = 0;

addButton.addEventListener("click", () => {
  nothingAdded.innerText = "";
  table_rows++;

  let newDateValue = newDateInput.value;
  let newExpenseValue = newExpenseInput.value;
  let newAmountValue = newAmountInput.value;

  newDateInput.value = null;
  newExpenseInput.value = null;
  newAmountInput.value = null;

  let newRow = document.createElement("tr");
  table.append(newRow);

  let newDateCell = document.createElement("td");
  newRow.append(newDateCell);
  newDateCell.append(newDateValue);

  let newExpenseCell = document.createElement("td");
  newRow.append(newExpenseCell);
  newExpenseCell.append(newExpenseValue);

  let newAmountCell = document.createElement("td");
  newRow.append(newAmountCell);
  newAmountCell.append(newAmountValue);

  let deleteButton = document.createElement("button");
  deleteButton.innerText = "remove";
  deleteButton.classList.add("deletebutton");
  newRow.append(deleteButton);
  deleteButton.addEventListener("click", () => {
    table.removeChild(newRow);
    table_rows--;
    if (table_rows === 0) {
      nothingAdded.innerText = "No expenses added yet.";
    }
  });
});
