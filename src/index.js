import Api from './api';
import View from './view';

const api = new Api();
const view = new View();

const initView = () => {
    const boardState = api.getBoardState();
    const boardView = view.getBoardEl(boardState);
    const container = document.getElementById('chess');
    container.appendChild(boardView);
};

document.addEventListener("DOMContentLoaded", initView);