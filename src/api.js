import BoardState from './examples/boardState';

export default class Api {
    getBoardState() {
        // return BoardState.test();
        return BoardState.standard();
    }
}