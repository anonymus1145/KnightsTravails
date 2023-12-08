import createKnight from './knight';

// Chessboard
let table: any[][] = [];

for (let i = 0; i <= 7; i++) {
  table[i] = [];
  for (let j = 0; j <= 7; j++) {
    table[i][j] = 0;
  }
}
  
  const initialPosition = {row: 2, column: 3};
  const finalPosition = {row: 7, column: 4};

  
  let firstKnight = createKnight(initialPosition, table);
  firstKnight.addKnight();

  console.log('> knightMoves from ( '+[initialPosition.row, initialPosition.column]+' ) to ( '+ [finalPosition.row, finalPosition.column]+' )');
  firstKnight.moveKnight(initialPosition, finalPosition);

