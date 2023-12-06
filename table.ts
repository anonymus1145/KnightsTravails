import createKnight from './knight';

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

  const initialPosition = {row: 0, column: 0};
  const finalPosition = {row: 7, column: 2};

  let firstKnight = createKnight(initialPosition, table);
  firstKnight.addKnight();

  firstKnight.moveKnight(initialPosition, finalPosition);
  displayChessBoard(table);
