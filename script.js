let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#resetbtn");
let newbutton = document.querySelector(".newgame");
let msgcontainer = document.querySelector(".msg-container");
let message = document.querySelector("#winner");
let turn0 = true;
const winptrn = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
const resetgame = () => {
    turn0 = true;
    enablebox();
    msgcontainer.classList.add("hide");
    if (newbutton) { newbutton.classList.add("hide"); }
    if (resetbtn) { resetbtn.classList.remove("hide"); }
}

boxes.forEach((boxes) => {
    boxes.addEventListener("click", () => {
        console.log('box is clicked');
        boxes.innerText = turn0 ? "O" : "X";
        turn0 = !turn0;
        boxes.disabled = true;
        checkwinner();
    })
})
const boxdisable = () => {
    for (box of boxes) {
        box.disabled = true;
    }
}
const enablebox = () => {
    for (box of boxes) {
        box.disabled= false;
        box.innerText = "";
    }
}
const showWinner = (winner) => {
    message.innerText = `Congratulations, The Winner is ${winner}.`;
    msgcontainer.classList.remove("hide");
    newbutton.classList.remove("hide");
    resetbtn.classList.add("hide")
    boxdisable();
}
const checkwinner = () => {
    for (let patterns of winptrn) {
        let posval1 = boxes[patterns[0]].innerText;
        let posval2 = boxes[patterns[1]].innerText;
        let posval3 = boxes[patterns[2]].innerText;

        if (posval1 != "" && posval2 != "" && posval3 != "") {
            if (posval1 === posval2 && posval2 === posval3) {
                showWinner(posval1);
            }
        }
    }
}
newbutton.addEventListener("click", resetgame);
resetbtn.addEventListener("click", resetgame);
