/* 
add event handlers to each cell
create a player factory.. for 2 players??
intialize gameboard DONE



functions to add:
clear DONE
check win
check cell populated
check player turn?
*/

const player = (name) => {
    const getName = () => name;
    return {getName}
}

const p1 = player('X');
const p2 = player('O');


const displayController = (() => {

})

const gameBoard = (() => {
    const board = Array(9).fill();

    const victory = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];
    return {board}
})();

