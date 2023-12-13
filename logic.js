let btnBox = document.querySelectorAll('.box')
let resultMsg = document.querySelector('#resultMsg')
let resetBtn = document.querySelector('.reset-btn')

let turnO = true
let count = 0

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const disableBoxes = () => {
  for (let box of btnBox) {
    box.disabled = true
  }
}

const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1Val = btnBox[pattern[0]].innerText
    let pos2Val = btnBox[pattern[1]].innerText
    let pos3Val = btnBox[pattern[2]].innerText

    if (pos1Val != '' && pos2Val != '' && pos3Val != '') {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        resultMsg.innerText = `Winner is ${pos1Val}`
        disableBoxes()
        return true
      }
    }
  }
}

btnBox.forEach((box) => {
  box.addEventListener('click', () => {
    if (turnO) {
      box.innerText = 'O'
      turnO = false
    }
    else {
      box.innerText = 'X'
      turnO = true
    }
    box.disabled = true
    count++

    let isWinner = checkWinner();

    if (count === 9 && !isWinner) {
      resultMsg.innerText = 'Match Drawn'
    }
  })
})

const resetGame = () => {
  turnO = true
  count = 0
  for (let box of btnBox) {
    box.disabled = false
    box.innerText = ''
  }
  resultMsg.innerText = ''
}

resetBtn.addEventListener('click', resetGame)