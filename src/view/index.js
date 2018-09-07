import Piece from './components/piece';

export default class View {
    getBoardEl(boardRecipe) {
        const board = document.createElement('div');
        board.className += 'board';
        const table = document.createElement('table');
        for (let y = boardRecipe.meta.maxY; y > boardRecipe.meta.minY - 1; y--) {
            const tr = document.createElement('tr');
            for (let x = boardRecipe.meta.minX; x < boardRecipe.meta.maxX + 1; x++) {
                const td = document.createElement('td');

                if (boardRecipe.cells[y] && boardRecipe.cells[y][x]) {
                    const cell = boardRecipe.cells[y][x];
                    const cellText = document.createTextNode(cell.name ? cell.name : x + ',' + y);

                    if (cell.piece) {
                        td.appendChild((new Piece(cell.piece).el()));
                    }

                    td.appendChild(cellText);
                    td.classList.add((x + y) % 2 == 0 ? 'black' : 'white');

                    if (!cell.walkable) {
                        td.classList.add('unwalkable');
                    }
                }

                tr.appendChild(td);
            }
            table.appendChild(tr);
        }

        board.appendChild(table);
        return board;
    };
}