let Vec = require("./Vec");
class Maze {
    /**
     *
     * @param {Vec} size
     */
    constructor(size) {
        this.size = size;
        this.mazeStruckture = [];

        // generate...

    }
    generateMaze() {
        for (let i = 0; i < size.x * size.y; i++) {
            mazeStruckture.push(Maze.WALL);
        }
        setCell(new Vec(Math.round(Math.random() * (size.x - 1)), Math.round(Math.random() * (size.y - 1))), Maze.INTERSECTION);

    }
    getCell(pos) {
        return (this.mazeStruckture[pos.x + pos.y * size.x]);
        // return PATH / WALL;
    }
    setCell(pos, value) {
        this.mazeStruckture[pos.x + pos.y * size.x] = value;
    }
}
Maze.WALL = 0;
Maze.WAY = 1;
Maze.INTERSECTION = 2;

testMaze = new Maze(new Vec(5, 5));