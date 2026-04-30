const graph = document.getElementById('graph');
const weeks = 53;
const levels = [0, 0, 0, 0, 0, 0, 1, 1, 1, 2, 2, 3, 4];

for (let w = 0; w < weeks; w++) {
  const col = document.createElement('div');
  col.className = 'graph-col';
  for (let d = 0; d < 7; d++) {
    const cell = document.createElement('div');
    cell.className = 'graph-cell';
    if (Math.random() > 0.35) {
      cell.dataset.level = levels[Math.floor(Math.random() * levels.length)];
    }
    col.appendChild(cell);
  }
  graph.appendChild(col);
}
