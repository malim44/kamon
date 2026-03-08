const addTodoBtn = document.querySelector('.add-todo')
const firstDayBtn = document.querySelector('.firstDayOfMonth')
const nextDayBtn = document.querySelector('.nextDay')
const todo_text = document.querySelector('.todo-text')
const backlog = document.querySelector('.backlog')

const todos = []

if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("./service-worker.js");
}

addTodoBtn.addEventListener('click', (e) => {
    e.preventDefault()
    if(todo_text.value) {
        const todo_single = document.createElement('li')
        todo_single.innerHTML = todo_text.value
        backlog.appendChild(todo_single)
        todo_text.value = ''
    }
})

firstDayBtn.addEventListener('click', (e) => {
    e.preventDefault()
    
})

