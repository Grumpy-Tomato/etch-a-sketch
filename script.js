// initialize grid

const etchSketchScreen = document.querySelector("#etch-sketch-screen");
let gridSize = 16;
for (let i = 0; i < gridSize; i++){
    const etchSketchGridRow = document.createElement("div");
    etchSketchGridRow.classList.toggle('etch-sketch-grid-row');
    for (let i = 0; i < gridSize; i++) {
    const etchSketchSquare = document.createElement("div");
    //etchSketchSquare.textContent = "c"
    etchSketchSquare.classList.toggle('etch-sketch-square');

    etchSketchGridRow.appendChild(etchSketchSquare);
    }
    etchSketchScreen.appendChild(etchSketchGridRow);
}

const listOfEtchSquares = document.querySelectorAll('.etch-sketch-square');

listOfEtchSquares.forEach(square => {
    square.addEventListener('mouseover', () => {
        square.classList.toggle('black-square')
    })
});