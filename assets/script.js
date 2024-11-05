let gameStarted = false; 
let piecesDeployed = false;
let currentPlayer = 1; 
let piecePositioned = false;


createMatchButton.addEventListener('click', () => {
    if (!gameStarted) 
    {
        gameBoard.innerHTML = '';
        board = Array(rows).fill(null).map(() => Array(cols).fill(null));
        
        initializeBoard();

        enableDragging();

        createMatchButton.textContent = 'Deploy';

        gameStarted = true;
    } 
    else if (!piecesDeployed) 
    {
        lockPiecesInPlace();

        createMatchButton.textContent = 'Deploy Your Forces';

        piecesDeployed = true;

        addSurrenderButton();
    } 
    if (piecesDeployed) 
    {
        piecePositioned = true;
        enableDraggingForPlayer(currentPlayer);
    }
});

function addSurrenderButton() 
{
    const surrenderButton = document.createElement('button');
    surrenderButton.textContent = 'Surrender';
    surrenderButton.classList.add('px-6', 'py-2', 'bg-red-500', 'text-white', 'font-semibold', 'rounded-lg', 'hover:bg-red-600', 'ml-4'); // Tailwind classes
    surrenderButton.addEventListener('click', () => {
        alert('You have surrendered!');
    });
    
    document.getElementById('buttonContainer').appendChild(surrenderButton);
}

function isValidMove(startX, startY, endX, endY) 
{
    const dx = Math.abs(endX - startX);
    const dy = Math.abs(endY - startY);

    return (dx === 1 && dy === 0) || (dx === 0 && dy === 1);
}

function enableDragging() 
{
    const allPieces = document.querySelectorAll('.piece');
    allPieces.forEach(piece => {
        piece.draggable = true;
    });
}

function lockPiecesInPlace() 
{
    const allPieces = document.querySelectorAll('.piece');
    allPieces.forEach(piece => {
        piece.draggable = false;
    });
}

function enableDraggingForPlayer(currentPlayer)
{
    if (currentPlayer === 1) 
    {
        const player1Pieces = document.querySelectorAll('.piece');

        console.log(player1Pieces);
        
        player1Pieces.forEach(piece => {
            piece.draggable = true;
        });
    } 
}

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
const cols = 9;
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

const rankHierarchy = {
    'P15SG': 15, 'P14SG': 14, 'P13SG': 13, 'P12SG': 12, 'P11SG': 11,
    'P1Col': 10, 'P1LC': 9, 'P1Maj': 8, 'P1Cap': 7, 'P11Li': 6, 'P12Li': 5,
    'P1Sgt': 4, 'P1Prv1': 3, 'P1Prv2': 3, 'P1Prv3': 3, 'P1Prv4': 3, 'P1Prv5': 3, 'P1Prv6': 3,
    'P1Spy1': 2, 'P1Spy2': 2, 'P1Flg': 1,

    'P25SG': 15, 'P24SG': 14, 'P23SG': 13, 'P22SG': 12, 'P21SG': 11,
    'P2Col': 10, 'P2LC': 9, 'P2Maj': 8, 'P2Cap': 7, 'P21Li': 6, 'P22Li': 5,
    'P2Sgt': 4, 'P2Prv1': 3, 'P2Prv2': 3, 'P2Prv3': 3, 'P2Prv4': 3, 'P2Prv5': 3, 'P2Prv6': 3,
    'P2Spy1': 2, 'P2Spy2': 2, 'P2Flg': 1
};

const gameBoard = document.getElementById('gameBoard');
let board = Array(rows).fill(null).map(() => Array(cols).fill(null));

function createPiece(rank, player) 
{
    const piece = document.createElement('div');
    piece.classList.add('piece', `player${player}`);
    
    piece.style.backgroundImage = `url(${pieceImages[rank]})`;

    piece.draggable = true;

    piece.addEventListener('dragstart', dragStart);
    piece.addEventListener('dragend', dragEnd);

    return piece;
}

function initializeBoard() 
{
    for (let i = 0; i < rows; i++) 
    {
        for (let j = 0; j < cols; j++) 
        {
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

    pieces.forEach((piece) => {
        let x, y;
        do 
        {
            if (piece.player === 2) 
            {
                x = Math.floor(Math.random() * 3); 
            } 
            else if (piece.player === 1) 
            {
                x = Math.floor(Math.random() * 3) + (rows - 3); 
            }
            y = Math.floor(Math.random() * cols); 
        } while (board[x][y]); 

        const pieceElement = createPiece(piece.rank, piece.player);
        const cell = gameBoard.querySelector(`[data-x="${x}"][data-y="${y}"]`);
        cell.appendChild(pieceElement);
        board[x][y] = piece;
    });

}

let draggedPiece = null;
let startX = null, startY = null;

function dragStart(e) 
{
    draggedPiece = e.target;
    startX = parseInt(draggedPiece.parentNode.getAttribute('data-x'));
    startY = parseInt(draggedPiece.parentNode.getAttribute('data-y'));

    setTimeout(() => {
        e.target.style.display = 'none';
    }, 0);
}

function dragEnd(e) 
{
    setTimeout(() => {
        if (draggedPiece) 
        {
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

function drop(e) 
{
    if (!piecePositioned)
    {
        if (!gameStarted) return; 

        const x = parseInt(e.target.getAttribute('data-x'));
        const y = parseInt(e.target.getAttribute('data-y'));

        const targetCell = e.target.classList.contains('piece') ? e.target.parentNode : e.target;

        const targetPiece = targetCell.querySelector('.piece');

        if (draggedPiece.classList.contains('player1') && x < 4) 
        {
            return; 
        }
        if (draggedPiece.classList.contains('player2') && x >= 4) 
        {
            return; 
        }

        if (targetPiece) 
        {
            if (draggedPiece.classList.contains('player1') && targetPiece.classList.contains('player2')) 
            {
                return; 
            }
            if (draggedPiece.classList.contains('player2') && targetPiece.classList.contains('player1')) 
            {
                return; 
            }

            const originalCell = draggedPiece.parentNode;

            originalCell.appendChild(targetPiece);

            targetCell.appendChild(draggedPiece);

            board[startX][startY] = targetPiece ? targetPiece.textContent : null;
            board[x][y] = draggedPiece.textContent;

        } 
        else 
        {
            targetCell.appendChild(draggedPiece);

            board[startX][startY] = null;
            board[x][y] = draggedPiece.textContent;
        }
    }
    currentPlayer = currentPlayer === 1 ? 2 : 1;

    enableDraggingForPlayer(currentPlayer);
}

initializeBoard();


