import * as NS from 'shared/types/models/Board';

function makeGrid(height: number, width: number, makeRandom = false): NS.IRow[] {
  const grid: NS.IRow[] = [];
  for (let i = 0; i < height; i++) {
    const row: NS.IRow = [];
    for (let j = 0; j < width; j++) {
      const value: NS.ICell = {
        alive: false,
        newBorn: false,
      };
      if (makeRandom) {
        value.alive = Math.random() > 0.85;
        value.newBorn = value.alive;
      }
      row.push(value);
    }
    grid.push(row);
  }
  return grid;
}

function advanceGrid(grid: NS.IRow[] = []) {
  const gridHeight = grid.length;
  const gridWidth = grid[0].length;

  const calculateNeighbor = (x: number, y: number) => {
    const topRow = x - 1 < 0 ? (gridHeight - 1) : x - 1;
    const bottomRow = (x + 1 === gridHeight) ? 0 : x + 1;
    const leftColumn = y - 1 < 0 ? (gridWidth - 1) : y - 1;
    const rightColumn = (y + 1 === gridWidth) ? 0 : y + 1;

    let total = 0;
    total += grid[topRow][leftColumn].alive ? 1 : 0;
    total += grid[topRow][y].alive ? 1 : 0;
    total += grid[topRow][rightColumn].alive ? 1 : 0;
    total += grid[x][leftColumn].alive ? 1 : 0;
    total += grid[x][rightColumn].alive ? 1 : 0;
    total += grid[bottomRow][leftColumn].alive ? 1 : 0;
    total += grid[bottomRow][y].alive ? 1 : 0;
    total += grid[bottomRow][rightColumn].alive ? 1 : 0;

    return total;
  };

  const newGrid: NS.IRow[] = [];
  for (let i = 0; i < gridHeight; i++) {
    const row: NS.IRow = [];
    for (let j = 0; j < gridWidth; j++) {
      const cellIsAlive: boolean = grid[i][j].alive;
      const neighbors = calculateNeighbor(i, j);
      if (cellIsAlive) {
        if (neighbors < 2) {
            row.push({ alive: false, newBorn: false });
        } else if (neighbors > 3) {
            row.push({ alive: false, newBorn: false });
        } else {
            row.push({ alive: true, newBorn: false });
        }
      }

      if (!cellIsAlive) {
        if (neighbors === 3) {
        row.push({
          alive: true,
          newBorn: true,
        });
      } else {
        row.push({ alive: false, newBorn: false });
        }
      }
    }
    newGrid.push(row);
  }
  return newGrid;
}

export { makeGrid, advanceGrid };
