export default class Cell {
    constructor(x, y, walkable = true, name = null, piece = null) {
        this.x = x;
        this.y = y;
        this.walkable = walkable;
        this.name = name;
        this.piece = piece;

        if (this.name == null && x >= 0 && x < 8 && y >= 0 && y < 8) {
            this.name = String.fromCharCode(97+y) + (x+1);
        }
    }
}