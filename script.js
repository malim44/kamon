const { createApp } = Vue

createApp({
    data() {
        return {
            message: 'Hallo Vue über Github.dev!',
            addTodoInpt: '',
            active: [],
            next: [],
            backlog: [],

        }
    },
    methods: {
        changeMessage() {
            this.message = 'Du hast den Text geändert!'
        },
        addTodoToBacklog() {
            if(this.addTodoInpt) {
                backlog.push(this.addTodoInpt)
                this.addTodoInpt = ''
            }
        }
    }
}).mount('#app')

const firstDayBtn = document.querySelector('.firstDayOfMonth')
const nextDayBtn = document.querySelector('.nextDay')
const todo_text = document.querySelector('.todo-text')
const backlog = document.querySelector('.backlog')

const todos = []

if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("./service-worker.js");
}

firstDayBtn.addEventListener('click', (e) => {
    e.preventDefault()
    
})

