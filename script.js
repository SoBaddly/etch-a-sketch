// All cells properties are configurate before the generation via appendChild

function grid() {
  //Grid configuration
  let rowQty = prompt('How many rows do you want ? Have to be inferior to 100');
  if (!rowQty || isNaN(rowQty) || rowQty > 100) return;

  //Grid reinitialization
  let container = document.querySelector('.container');
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }

  // Row generation
  const rows = [];
  for (let i = 0; i < rowQty; i++) {
    rows.push(document.createElement('div'));
    rows[i].setAttribute('class', `row${i}`);
    container.appendChild(rows[i]);
  }

  // Column configuration & cells color
  for (let row of rows) {
    for (let col = 0; col < rowQty; col++) {
      let subcolumn = document.createElement('div');
      let r = parseInt(Math.random() * 255);
      let g = parseInt(Math.random() * 255);
      let b = parseInt(Math.random() * 255);
      const stepR = r / 10;
      const stepG = g / 10;
      const stepB = b / 10;
      const color = () =>
        `rgb(${Math.floor(r)}, ${Math.floor(g)}, ${Math.floor(b)})`;
      subcolumn.setAttribute('class', `col`);
      subcolumn.setAttribute('style', 'background-color:' + color);
      // Event Listener attachement to cells before its generation
      subcolumn.addEventListener('mouseenter', () => {
        subcolumn.style.backgroundColor = 'lightblue';
      });
      // Event Listener to darken color properties
      subcolumn.addEventListener('mouseleave', () => {
        r -= stepR;
        g -= stepG;
        b -= stepB;
        subcolumn.style.backgroundColor = color();
      });
      // Cells creation
      row.appendChild(subcolumn);
    }
  }
}