export default class Piece {
    constructor(piece) {
        this.piece = piece;
    }

    el() {
        const pieceEl = document.createElement('div');
        pieceEl.classList.add('piece');
        pieceEl.classList.add('team-' + this.piece.team);
        pieceEl.appendChild(document.createTextNode(this.piece.type));
        return pieceEl;
    }
}