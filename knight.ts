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

  export default function createKnight(position: Position, table: any[][]): Knight {
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