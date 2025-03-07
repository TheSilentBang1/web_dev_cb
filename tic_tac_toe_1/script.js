console.log("Welcome to Tic-Tac-Toe");
let turn = "X";
let isgameover = false;

//function to change turn
const changeTurn= ()=>{
    //if turn is X return 0, else return X
    return turn === "X"?"0":"X";
}

//function to check for a win
const checkWin = ()=>{
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    wins.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "") ){
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won"
            isgameover = true
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px";
        }
    })
}


//game logic 
let boxes = document.getElementsByClassName("box")

//getElementsByClassName returns htmlcollection, so we convert it to an array
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext');
    //add event listener to each box
    element.addEventListener('click',()=>{
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
            turn = changeTurn();
            checkWin();
            if(!isgameover){
                document.getElementsByClassName("info")[0].innerText = "Turn for "+turn; 
            }
        }
    })
})

//add reset functionality
reset.addEventListener('click',()=>{
    let boxtext = document.querySelectorAll('.boxtext');
    Array.from(boxtext).forEach(element=>{
        element.innerText = ""
    })
    turn = "X"
    isgameover = false
    document.getElementsByClassName("info")[0].innerText = "Turn for "+turn;
    document.querySelector('.imgbox img').style.width = "0px";
})
