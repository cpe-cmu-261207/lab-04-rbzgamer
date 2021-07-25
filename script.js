//input task
const input = document.querySelector('input')

//list (ul, li)
const mainDiv = document.querySelector('#center')
const doneDiv = document.querySelector('#done')

//local storage
let todolist = []
let donelist = []
todolist = JSON.parse(localStorage.getItem('todolist'))
donelist = JSON.parse(localStorage.getItem('donelist'))
if(todolist === null) todolist = []
if(donelist === null) donelist = []

//load list || value = 0 -> todolist , value = 1 -> donelist
const loadlist = (text, value) => {
    if (text == '') {
        alert("Task cannot be empty!!")
    } else {
        const divTask = document.createElement('div')
        divTask.setAttribute("class", "flex justify-between border-b-2 border-indico-100 m-1")
        const div = document.createElement('div')
        div.innerHTML = text
        divTask.append(div)

        const divTasknew = document.createElement('div')
        divTasknew.setAttribute("class", "flex")
        divTask.append(divTasknew)
        divTasknew.style.visibility = 'hidden'
        divTask.addEventListener('mouseenter', () => {
            if (value === 0) {
                divTasknew.style.visibility = 'visible'
            }
            else if (value === 1) {
                divTasknew.style.visibility = 'hidden'
            }
        })
        divTask.addEventListener('mouseleave', () => {
            divTasknew.style.visibility = 'hidden'

        })


        const doneBtn = document.createElement('button')
        doneBtn.setAttribute("class", "border-2 border-black bg-green-400 p-1")
        doneBtn.innerHTML = 'Done'
        if (value === 1) div.style.textDecoration = 'line-through'
        doneBtn.addEventListener('click', () => {
            div.style.textDecoration = 'line-through'
            divTask.remove()
            doneDiv.insertBefore(divTask, doneDiv.firstChild)
            divTasknew.remove()
            donelist.push(div.innerHTML)
            todolist.splice(todolist.findIndex(x => (x === div.innerHTML)), 1)
            localStorage.setItem('todolist', JSON.stringify(todolist))
            localStorage.setItem('donelist', JSON.stringify(donelist))
        })
        const delBtn = document.createElement('button')
        delBtn.setAttribute("class", "border-2 border-black bg-red-400 mx-1 p-1")
        delBtn.innerHTML = 'Delete'
        delBtn.addEventListener('click', () => {
            mainDiv.removeChild(divTask)
            todolist.splice(todolist.findIndex(x => (x === div.innerHTML)), 1)
            localStorage.setItem('todolist', JSON.stringify(todolist))
        })

        divTasknew.append(doneBtn)
        divTasknew.append(delBtn)
        if(value === 0) mainDiv.insertBefore(divTask, mainDiv.firstChild)
        else if(value === 1) doneDiv.insertBefore(divTask, doneDiv.firstChild)
    }
}
for (let i = 0; i < todolist.length; i++) {
    loadlist(todolist[i], 0)
}
for (let j = 0; j < donelist.length; j++) {
    loadlist(donelist[j], 1)
}

//add task button (click)
const btn = document.querySelector('button')
btn.innerHTML = "+"

//add list
const addlist = (event) => {
    if (input.value == '') {
        alert("Task cannot be empty!!")
    } else {
        const divTask = document.createElement('div')
        divTask.setAttribute("class", "flex justify-between border-b-2 border-indico-100 m-1")
        const div = document.createElement('div')
        div.innerHTML = input.value
        todolist.push(input.value)
        localStorage.setItem('todolist', JSON.stringify(todolist))
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
            doneDiv.insertBefore(divTask, doneDiv.firstChild)
            divTasknew.remove()
            donelist.push(div.innerHTML)
            console.log(todolist.findIndex(x => (x === div.innerHTML)))
            todolist.splice(todolist.findIndex(x => (x === div.innerHTML)), 1)
            localStorage.setItem('todolist', JSON.stringify(todolist))
            localStorage.setItem('donelist', JSON.stringify(donelist))
        })
        const delBtn = document.createElement('button')
        delBtn.setAttribute("class", "border-2 border-black bg-red-400 mx-1 p-1")
        delBtn.innerHTML = 'Delete'
        delBtn.addEventListener('click', () => {
            mainDiv.removeChild(divTask)
            todolist.splice(todolist.findIndex(x => (x = div.innerHTML)), 1)
            localStorage.setItem('todolist', JSON.stringify(todolist))
        })

        divTasknew.append(doneBtn)
        divTasknew.append(delBtn)
        mainDiv.insertBefore(divTask, mainDiv.firstChild)
        
    }
}
btn.addEventListener('click', addlist)

//add task button (enter)
input.addEventListener('keyup', (ev) => {
    if (ev.key === "Enter") {
        ev.preventDefault()
        addlist(ev)
    }
})

