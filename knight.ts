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
    moveKnight: function (start: Position, target: Position) {
      let path = shortestPath(
        [start.row, start.column],
        [target.row, target.column]
      );

      console.log('Here is your path:');

      path!.forEach(element => {
        console.log(element);
      });
    },
  };
}

// Check if a move is between 0 and 7
function isValidMove(x: number, y: number): boolean {
  return x >= 0 && x < 8 && y >= 0 && y < 8;
}

// Possible moves for the knight
function knightMoves(x: number, y: number): [number, number][] {
  const moves: [number, number][] = [];
  const possibleMoves: [number, number][] = [
    [-2, -1],
    [-2, 1],
    [-1, -2],
    [-1, 2],
    [1, -2],
    [1, 2],
    [2, -1],
    [2, 1],
  ];

  for (const move of possibleMoves) {
    const newX = x + move[0];
    const newY = y + move[1];
    if (isValidMove(newX, newY)) {
      moves.push([newX, newY]);
    }
  }

  return moves;
}

// Find the shortest path from start to target
function shortestPath(
  start: [number, number],
  target: [number, number]
): [number, number][] | null {
  const visited: boolean[][] = Array.from({ length: 8 }, () =>
    Array(8).fill(false)
  );
  const queue: [number, number, number][] = []; // [x, y, distance]

  queue.push([...start, 0]);
  visited[start[0]][start[1]] = true;

  let count = 0;

  while (queue.length > 0) {
    const [currentX, currentY, distance] = queue.shift()!;

    if (currentX === target[0] && currentY === target[1]) {
      // Target reached, reconstruct the path
      const path: [number, number][] = [];
      let x = target[0];
      let y = target[1];

      for (let i = distance; i > 0; i--) {
        path.unshift([x, y]);

        for (const move of knightMoves(x, y)) {
          const [nextX, nextY] = move;
          count++;
          if (
            isValidMove(nextX, nextY) &&
            visited[nextX][nextY] &&
            visited[nextX][nextY] === true
          ) {
            x = nextX;
            y = nextY;
            break;
          }
        }
      }
      console.log('=> You made it in ' + count + ' moves!');
      return path;
    }

    for (const move of knightMoves(currentX, currentY)) {
      const [nextX, nextY] = move;

      if (!visited[nextX][nextY]) {
        visited[nextX][nextY] = true;
        queue.push([nextX, nextY, distance + 1]);
      }
    }
  }

  // No path found
  return null;
}

/*
This code uses Breadth-First Search to find the shortest path from a starting point to a target point on the chessboard. 
The getKnightMoves function is used to get all possible moves for the knight. 
The shortestPath function uses BFS to explore possible moves, keeping track of the distance from the starting point. 
When the target is reached, it reconstructs the path from the target back to the starting point. 
If no path is found, it returns null.
*/
