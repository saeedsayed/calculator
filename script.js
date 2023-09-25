let previous = document.querySelector(".previous-operand")
let current = document.querySelector(".current-operand")
let number = document.querySelectorAll(".number")
let allClear = document.querySelector(".all-clear")
let del = document.querySelector(".delete")
let operation = document.querySelectorAll(".operation")
let result = document.querySelector(".result")
let sound = document.querySelector(".sound")
number.forEach(btn => {
    btn.addEventListener("click", _ => {
        if (btn.textContent == ".") {
            if (current.innerHTML.includes(".")) return
        }
        current.textContent += btn.textContent
        sound.play()
    })
})

allClear.addEventListener("click", _ => {
    current.textContent = ''
    previous.textContent = ''
    sound.play()

})

del.addEventListener("click", _ => {
    if (current.textContent == '') return
    current.textContent = current.textContent.slice(0, -1)
    sound.play()
})

operation.forEach(opr => {
    opr.addEventListener("click", _ => {
        if (current.textContent == '') return
        if (current.textContent !== '' && previous.textContent !== '') {
            if (previous.innerHTML.includes('/') && current.textContent == "0") {
                return
            }
            previous.textContent = eval(previous.textContent + current.textContent) + opr.dataset.operation
            current.textContent = ''
            sound.play()
        } else {
            previous.textContent = current.textContent + opr.dataset.operation
            current.textContent = ''
            sound.play()
        }
    })
})

result.addEventListener("click", _ => {
    if (current.textContent !== '' && previous.textContent !== '') {
        if (previous.innerHTML.includes('/') && current.textContent == "0") {
            return
        }
        current.textContent = eval(previous.textContent + current.textContent)
        previous.textContent = ''
        sound.play()
    }
})