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
                this.backlog.push(this.addTodoInpt)
                this.addTodoInpt = ''
            }
        },
        firstDay() {
            this.next = [...this.backlog]
            this.backlog = []            
        },
        nextDay() {
            this.active = [...this.next]
            this.next = []        
        }
    }
}).mount('#app')

if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("./service-worker.js");
}
