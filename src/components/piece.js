export default class Piece {
    constructor(type, team = null) {
        this.type = type;
        this.team = team;
    }

    toString() {
        return this.type;
    }
}