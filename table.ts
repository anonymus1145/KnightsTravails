// Chessboard
let table: any[][] = [];

for (let i = 0; i <= 7; i++) {
  table[i] = [];
  for (let j = 0; j <= 7; j++) {
    table[i][j] = 0;
  }
}

// Display the chessboard
function displayChessBoard(board: any[][]): void {
    for (let i = 0; i < board.length; i++) {
      console.log(board[i].join(' '));
    }
  }

  // Knight
  interface Knight {
    name: string;
    addKnight: () => void;
    moveKnight: (from: Position, to: Position) => void;
  }

  interface Position {
    colomn: number;
    row: number;
  }

  function createKnight(position: Position): Knight {
    return {
      name: 'knight',
      addKnight: function () {
        const {row, colomn} = position;
        if(row >= 0 && row < 8 && colomn >= 0 && colomn < 8) {
          table[row][colomn] = 'k';
        } else {
          console.log('Invalid position');
        }
      },
      moveKnight: function (from: Position, to: Position) {
        const {row: fromRow, colomn: fromColomn} = from;
        const {row: toRow, colomn: toColomn} = to;
        if(fromRow >= 0 && fromRow < 8 && fromColomn >= 0 && fromColomn < 8 && toRow >= 0 && toRow < 8 && toColomn >= 0 && toColomn < 8) {
            if(table[fromRow][fromColomn] === 'k') {
              table[fromRow][fromColomn] = 0;
              table[toRow][toColomn] = 'k';
            } else {
              console.log('No knight at this position');
            }
        } else {
          console.log('Invalid position for moving the knight');
        } 
      }
    };
  }

  const initialPosition = {row: 0, colomn: 0};
  const finalPosition = {row: 4, colomn: 3};

  let firstKnight = createKnight(initialPosition);
  firstKnight.addKnight();
  displayChessBoard(table);
  console.log('/n');

  firstKnight.moveKnight(initialPosition, finalPosition);
  displayChessBoard(table);