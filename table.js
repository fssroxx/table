let a = prompt("Количество строк таблицы", "");
let b = prompt("Количество столбцов таблицы", "");

class Table {
  constructor(cells, quantity) {
    this.quantity = quantity;
    this.cells = cells;
  }
  formColumns() {
    for (let m = 0; m < this.cells; m++) {
      let $el = document.createElement("tr");
      $el.className = `cell${m}`;
      document.body.append($el);
      this.formCells($el.className);
    }
  }

  formCells(smth) {
    for (let i = 0; i < this.quantity; i++) {
      let $el = document.createElement("input");
      let cell = document.querySelector(`.${smth}`);
      cell.appendChild($el);
    }
  }
}

let n = new Table(a, b).formColumns();
