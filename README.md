# KnightsTravails

This project implements the KnightsTravails algorithm, which calculates the shortest path for a knight on a chessboard to reach a target position.

## Installation

To install and run the project, follow these steps:

Clone the repository: git clone https://github.com/your-username/KnightsTravails.git
Navigate to the project directory: cd KnightsTravails
Install dependencies: npm install
Run the project: npm start

## Usage

The main function of interest is createKnight() defined in the knight.ts file. This function creates a knight object with the specified position and chessboard table.

createKnight(position: Position, table: any[][]): Knight
This function accepts two parameters:

position (type: Position): The initial position of the knight on the chessboard.
table (type: any[][]): The chessboard table.
The function returns a Knight object with the following properties and methods:

## Properties

name (type: string): The name of the knight.
Methods
addKnight(): This method adds the knight to the specified position on the chessboard. It checks if the position is valid and updates the table accordingly.

moveKnight(start: Position, target: Position): This method calculates the shortest path from the start position to the target position using the shortestPath() function. It logs the path to the console.

## Contributing

Contributions to this project are welcome! If you find any issues or have suggestions for improvements, please submit an issue or a pull request.

## License

This project is licensed under the MIT License.