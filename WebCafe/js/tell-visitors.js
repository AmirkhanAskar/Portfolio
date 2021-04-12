const words = 'visitors shoul know about your best product.'

let charTurn = 0

const output = document.getElementById('Text-2')

printWord()

function printWord() {
    if (charTurn <= words.length) {
        let str = words.substr(0, charTurn)
        output.innerHTML = str
        charTurn += 1
        setTimeout(printWord, 150)
    } else {
        setTimeout(deleteWord, 10)
    }
}

function deleteWord() {
    if (charTurn >= 0) {
        let str = words.substr(0, charTurn)
        output.innerHTML = str
        charTurn -= 1
        setTimeout(deleteWord, 10)
    } else {
        setTimeout(printWord, 150)

    }
}