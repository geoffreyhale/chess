import Cell from '../components/cell';
import Piece from '../components/piece';

export default {
    standard() {
        const standardCells = {};
        for (let y = 7; y > -1; y--) {
            standardCells[y] = {};
            for (let x = 0; x < 8; x++) {
                standardCells[y][x] = new Cell(x,y);
            }
        }
        standardCells[0][0].piece = new Piece('R', 'white');
        standardCells[0][1].piece = new Piece('N', 'white');
        standardCells[0][2].piece = new Piece('B', 'white');
        standardCells[0][3].piece = new Piece('Q', 'white');
        standardCells[0][4].piece = new Piece('K', 'white');
        standardCells[0][5].piece = new Piece('R', 'white');
        standardCells[0][6].piece = new Piece('N', 'white');
        standardCells[0][7].piece = new Piece('R', 'white');
        standardCells[1][0].piece = new Piece('p', 'white');
        standardCells[1][1].piece = new Piece('p', 'white');
        standardCells[1][2].piece = new Piece('p', 'white');
        standardCells[1][3].piece = new Piece('p', 'white');
        standardCells[1][4].piece = new Piece('p', 'white');
        standardCells[1][5].piece = new Piece('p', 'white');
        standardCells[1][6].piece = new Piece('p', 'white');
        standardCells[1][7].piece = new Piece('p', 'white');
        standardCells[6][0].piece = new Piece('p', 'black');
        standardCells[6][1].piece = new Piece('p', 'black');
        standardCells[6][2].piece = new Piece('p', 'black');
        standardCells[6][3].piece = new Piece('p', 'black');
        standardCells[6][4].piece = new Piece('p', 'black');
        standardCells[6][5].piece = new Piece('p', 'black');
        standardCells[6][6].piece = new Piece('p', 'black');
        standardCells[6][7].piece = new Piece('p', 'black');
        standardCells[7][0].piece = new Piece('R', 'black');
        standardCells[7][1].piece = new Piece('N', 'black');
        standardCells[7][2].piece = new Piece('B', 'black');
        standardCells[7][3].piece = new Piece('Q', 'black');
        standardCells[7][4].piece = new Piece('K', 'black');
        standardCells[7][5].piece = new Piece('B', 'black');
        standardCells[7][6].piece = new Piece('N', 'black');
        standardCells[7][7].piece = new Piece('R', 'black');

        const standardBoard = {
            cells: standardCells,
            meta: {
                minX: 0,
                maxX: 7,
                minY: 0,
                maxY: 7,
            }
        };

        return standardBoard;
    },

    test() {
        return {
            cells: {
                '-1': {
                    '-2': new Cell(-1, -2, undefined, undefined, new Piece('x')),
                },
                0: {
                    0: new Cell(0,0, undefined, undefined, new Piece('o')),
                    1: new Cell(0,1),
                    2: new Cell(0,2),
                },
                1: {
                    3: new Cell(1,3,undefined,'R2D2'),
                    4: new Cell(1,4,false,'unwalkable'),
                },
                3: {
                    4: new Cell(3,4),
                    5: new Cell(2,6,undefined,'wronxy'),
                },
                7: {
                    7: new Cell(7,7),
                    8: new Cell(8,7),
                    9: new Cell(9,7),
                }
            },
            meta: {
                minX: -2,
                maxX: 9,
                minY: -1,
                maxY: 7,
            }
        }
    }
}