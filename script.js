//input task
const input = document.querySelector('input')

//list (ul, li)
const mainDiv = document.querySelector('#center')
const doneDiv = document.querySelector('#done')

//add task button (click)
const btn = document.querySelector('button')
btn.innerHTML = "+"
const addlist = (event) => {
    if (input.value == '') {
        alert("Task cannot be empty!!")
    } else {
        const divTask = document.createElement('div')
        divTask.setAttribute("class", "flex justify-between border-b-2 border-indico-100 m-1")
        const div = document.createElement('div')
        div.innerHTML = input.value
        divTask.append(div)

        const divTasknew = document.createElement('div')
        divTasknew.setAttribute("class", "flex")
        divTask.append(divTasknew)
        divTasknew.style.visibility = 'hidden'
        divTask.addEventListener('mouseenter', () => {
            divTasknew.style.visibility = 'visible'
        })
        divTask.addEventListener('mouseleave', () => {
            divTasknew.style.visibility = 'hidden'
        })


        const doneBtn = document.createElement('button')
        doneBtn.setAttribute("class", "border-2 border-black bg-green-400 p-1")
        doneBtn.innerHTML = 'Done'
        doneBtn.addEventListener('click', () => {
            div.style.textDecoration = 'line-through'
            divTask.remove()
            doneDiv.append(divTask)
            divTasknew.remove()
        })
        const delBtn = document.createElement('button')
        delBtn.setAttribute("class", "border-2 border-black bg-red-400 mx-1 p-1")
        delBtn.innerHTML = 'Delete'
        delBtn.addEventListener('click', () => {
            mainDiv.removeChild(divTask)
        })

        divTasknew.append(doneBtn)
        divTasknew.append(delBtn)
        mainDiv.insertBefore(divTask, mainDiv.firstChild)
    }
}
btn.addEventListener('click', addlist)

//add task button (enter)
input.addEventListener('keyup', (ev) => {
    if(ev.key === "Enter") {
        ev.preventDefault()
        addlist(ev)
    }
})
