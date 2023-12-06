// Knight
interface Knight {
  name: string;
  addKnight: () => void;
  moveKnight: (from: Position, to: Position) => void;
}

interface Position {
  column: number;
  row: number;
}

export default function createKnight(
  position: Position,
  table: any[][]
): Knight {
  return {
    name: "knight",
    addKnight: function () {
      const { row, column } = position;
      if (row >= 0 && row < 8 && column >= 0 && column < 8) {
        table[row][column] = "k";
      } else {
        console.log("Invalid position");
      }
    },
    moveKnight: function (from: Position, to: Position) {
      const { row: fromRow, column: fromColumn } = from;
      const { row: toRow, column: toColumn } = to;
      
      if (findBestMove(from, to) === false) {
        console.log("Invalid move");
      } else {
        table[toRow][toColumn] = "k";
        table[fromRow][fromColumn] = 0;
      }
    },
  };
}

function isValidPosition(row: number, column: number): boolean {
  return row >= 0 && row < 8 && column >= 0 && column < 8;
}

function isValidMove(from: Position, to: Position): boolean {
  const { row: fromRow, column: fromColumn } = from;
  const { row: toRow, column: toColumn } = to;
  const rowDiff = Math.abs(fromRow - toRow);
  const columnDiff = Math.abs(fromColumn - toColumn);
  return (
    (rowDiff === 2 && columnDiff === 1) || (rowDiff === 1 && columnDiff === 2)
  );
}

function findBestMove(from: Position, to: Position): boolean {
  let { row: fromRow, column: fromColumn } = from;
  let { row: toRow, column: toColumn } = to;
  let nextPosition: Position = { row: fromRow, column: fromColumn };

  if (
    isValidPosition(fromRow, fromColumn) && isValidPosition(toRow, toColumn)) {

      console.log([fromRow, fromColumn]);

    while (nextPosition.row !== toRow || nextPosition.column !== toColumn) {

       console.log([nextPosition.row, nextPosition.column]);

       // Placeholder logic: Move one step closer to the target in the row direction
       nextPosition.row += (toRow - nextPosition.row > 0) ? 1 : (toRow - nextPosition.row < 0) ? -1 : 0;

       // Placeholder logic: Move one step closer to the target in the column direction
       nextPosition.column += (toColumn - nextPosition.column > 0) ? 1 : (toColumn - nextPosition.column < 0) ? -1 : 0;

      isValidMove({ row: fromRow, column: fromColumn }, nextPosition);
      fromRow = nextPosition.row;
      fromColumn = nextPosition.column;
    }
    return true;
  }
  return false;
}
