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
      
      let moves =findPossibleMoves(table, fromRow, fromColumn);
      console.log(moves);
    },
  };
}

      
// To calculate possible moves
let n = 4;
let m = 4;

function findPossibleMoves(table: any[][], p: number, q: number)
{
    // All possible moves of a knight
    let X = [ 2, 1, -1, -2, -2, -1, 1, 2 ];
    let Y = [ 1, 2, 2, 1, -1, -2, -2, -1 ];

    let count = 0;

    // Check if each possible move is valid or not
    for (let i = 0; i < 8; i++) {

        // Position of knight after move
        let x = p + X[i];
        let y = q + Y[i];

        // count valid moves
        if (x >= 0 && y >= 0 && x < n && y < m && table[x][y] == 0)
            count++;
            table[x][y] = 1;
    }

    // Return number of possible moves
    return count;
}