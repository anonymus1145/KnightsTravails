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

  const initialPosition = {row: 0, colomn: 0};
  const finalPosition = {row: 0, colomn: 7};

  let firstKnight = createKnight(initialPosition, table);
  firstKnight.addKnight();
  displayChessBoard(table);
  console.log('/n');

  firstKnight.moveKnight(initialPosition, finalPosition);
  displayChessBoard(table);

  // 