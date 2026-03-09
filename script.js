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
    },
    computed: {
        counterBacklogCurrent() {
            return this.backlog.length        
        },
        counterBacklogTotal() {
            const today = new Date();
            // month + 2 = the month after next month
            // day 0 = last day of previous month → last day of next month
            return new Date(today.getFullYear(), today.getMonth() + 2, 0).getDate();
        }
    }
}).mount('#app')

if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("./service-worker.js");
}
