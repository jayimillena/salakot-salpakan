// Image map: Links ranks to image files
const pieceImages = {
    'P15SG': 'images/Player15SG.png',
    'P14SG': 'images/Player14SG.png',
    'P13SG': 'images/Player13SG.png',
    'P12SG': 'images/Player12SG.png',
    'P11SG': 'images/Player11SG.png',
    'P1Col': 'images/Player1Col.png',
    'P1LC': 'images/Player1LC.png',
    'P1Maj': 'images/Player1Maj.png',
    'P1Cap': 'images/Player1Cap.png',
    'P11Li': 'images/Player11Li.png',
    'P12Li': 'images/Player12Li.png',
    'P1Sgt': 'images/Player1Sgt.png',
    'P1Prv1': 'images/Player1Prv1.png',
    'P1Prv2': 'images/Player1Prv2.png',
    'P1Prv3': 'images/Player1Prv3.png',
    'P1Prv4': 'images/Player1Prv4.png',
    'P1Prv5': 'images/Player1Prv5.png',
    'P1Prv6': 'images/Player1Prv6.png',
    'P1Spy1': 'images/Player1Spy1.png',
    'P1Spy2': 'images/Player1Spy2.png',
    'P1Flg': 'images/Player1Flg.png',

    'P25SG': 'images/Player25SG.png',
    'P24SG': 'images/Player24SG.png',
    'P23SG': 'images/Player23SG.png',
    'P22SG': 'images/Player22SG.png',
    'P21SG': 'images/Player21SG.png',
    'P2Col': 'images/Player2Col.png',
    'P2LC': 'images/Player2LC.png',
    'P2Maj': 'images/Player2Maj.png',
    'P2Cap': 'images/Player2Cap.png',
    'P21Li': 'images/Player21Li.png',
    'P22Li': 'images/Player22Li.png',
    'P2Sgt': 'images/Player2Sgt.png',
    'P2Prv1': 'images/Player2Prv1.png',
    'P2Prv2': 'images/Player2Prv2.png',
    'P2Prv3': 'images/Player2Prv3.png',
    'P2Prv4': 'images/Player2Prv4.png',
    'P2Prv5': 'images/Player2Prv5.png',
    'P2Prv6': 'images/Player2Prv6.png',
    'P2Spy1': 'images/Player2Spy1.png',
    'P2Spy2': 'images/Player2Spy2.png',
    'P2Flg': 'images/Player2Flg.png',
};

const rows = 8;
const cols = 9; // 9 columns for the 9x8 board
const pieces = [
    { rank: 'P15SG', player: 1 }, { rank: 'P14SG', player: 1 }, { rank: 'P13SG', player: 1 },
    { rank: 'P12SG', player: 1 }, { rank: 'P11SG', player: 1 }, { rank: 'P1Col', player: 1 },
    { rank: 'P1LC', player: 1 }, { rank: 'P1Maj', player: 1 }, { rank: 'P1Cap', player: 1 },
    { rank: 'P11Li', player: 1 }, { rank: 'P12Li', player: 1 }, { rank: 'P1Sgt', player: 1 },
    { rank: 'P1Prv1', player: 1 }, { rank: 'P1Prv2', player: 1 }, { rank: 'P1Prv3', player: 1 }, 
    { rank: 'P1Prv4', player: 1 }, { rank: 'P1Prv5', player: 1 }, { rank: 'P1Prv6', player: 1 },  
    { rank: 'P1Spy1', player: 1 }, { rank: 'P1Spy2', player: 1 }, { rank: 'P1Flg', player: 1 },

    { rank: 'P25SG', player: 2 }, { rank: 'P24SG', player: 2 }, { rank: 'P23SG', player: 2 },
    { rank: 'P22SG', player: 2 }, { rank: 'P21SG', player: 2 }, { rank: 'P2Col', player: 2 },
    { rank: 'P2LC', player: 2 }, { rank: 'P2Maj', player: 2 }, { rank: 'P2Cap', player: 2 },
    { rank: 'P21Li', player: 2 }, { rank: 'P22Li', player: 2 }, { rank: 'P2Sgt', player: 2 },
    { rank: 'P2Prv1', player: 2 }, { rank: 'P2Prv2', player: 2 }, { rank: 'P2Prv3', player: 2 }, 
    { rank: 'P2Prv4', player: 2 }, { rank: 'P2Prv5', player: 2 }, { rank: 'P2Prv6', player: 2 },  
    { rank: 'P2Spy1', player: 2 }, { rank: 'P2Spy2', player: 2 }, { rank: 'P2Flg', player: 2 },
];

const gameBoard = document.getElementById('gameBoard');

let board = Array(rows).fill(null).map(() => Array(cols).fill(null));

// Helper function to create pieces
function createPiece(rank, player) {
    const piece = document.createElement('div');
    piece.classList.add('piece', `player${player}`);
    
    // Set background image for the piece
    piece.style.backgroundImage = `url(${pieceImages[rank]})`;

    piece.draggable = true;

    // Drag and Drop Event Listeners
    piece.addEventListener('dragstart', dragStart);
    piece.addEventListener('dragend', dragEnd);

    return piece;
}

// Generate the board and randomly place pieces for both players
function initializeBoard() {
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.setAttribute('data-x', i);
            cell.setAttribute('data-y', j);
            cell.addEventListener('dragover', dragOver);
            cell.addEventListener('drop', drop);

            gameBoard.appendChild(cell);
            board[i][j] = null;
        }
    }

    // Place the pieces on the board for both players
    pieces.forEach((piece) => {
        let x, y;
        do {
            if (piece.player === 2) {
                // Player 1's pieces are placed in the top three rows (0, 1, 2)
                x = Math.floor(Math.random() * 3); // Ensures x is 0, 1, or 2
            } else if (piece.player === 1) {
                // Player 2's pieces are placed in the bottom three rows (5, 6, 7)
                x = Math.floor(Math.random() * 3) + (rows - 3); // Ensures x is 5, 6, or 7
            }
            y = Math.floor(Math.random() * cols); // Random column for both players
        } while (board[x][y]); // Avoid placing multiple pieces in the same cell

        const pieceElement = createPiece(piece.rank, piece.player);
        const cell = gameBoard.querySelector(`[data-x="${x}"][data-y="${y}"]`);
        cell.appendChild(pieceElement);
        board[x][y] = piece;
    });

}

// Drag-and-drop functions
let draggedPiece = null;
let startX = null, startY = null;

function dragStart(e) {
    draggedPiece = e.target;
    startX = parseInt(draggedPiece.parentNode.getAttribute('data-x'));
    startY = parseInt(draggedPiece.parentNode.getAttribute('data-y'));

    setTimeout(() => {
        draggedPiece.style.display = 'none';
    }, 0);
}

function dragEnd(e) {
    setTimeout(() => {
        if (draggedPiece) {
            draggedPiece.style.display = 'flex';
        }
        draggedPiece = null;
        startX = null;
        startY = null;
    }, 0);
}

function dragOver(e) {
    e.preventDefault();
}

function drop(e) {
    e.preventDefault();
    const x = parseInt(e.target.getAttribute('data-x'));
    const y = parseInt(e.target.getAttribute('data-y'));

    const targetCell = e.target;

    // Check if the target cell has a piece
    if (targetCell.classList.contains('cell')) {
        if (targetCell.hasChildNodes()) {
            const targetPiece = targetCell.firstChild; // The piece currently in the target cell

            // Perform piece swapping (regardless of player)
            if (targetPiece && draggedPiece) {
                // Swap pieces visually
                const startCell = gameBoard.querySelector(`[data-x="${startX}"][data-y="${startY}"]`);
                startCell.appendChild(targetPiece);  // Move the piece from the target cell to the start cell
                targetCell.appendChild(draggedPiece); // Move the dragged piece to the target cell

                // Update the internal board state
                const temp = board[x][y]; // Temporarily store the target cell's piece
                board[x][y] = board[startX][startY]; // Move the dragged piece to the target cell
                board[startX][startY] = temp; // Move the target piece to the start cell
            }
        } else {
            // If the target cell is empty, simply move the dragged piece there
            targetCell.appendChild(draggedPiece);

            // Update the internal board state
            board[startX][startY] = null;
            board[x][y] = draggedPiece.textContent;
        }
    }
}

// Initialize the board on page load
initializeBoard();
