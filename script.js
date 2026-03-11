const { createApp } = Vue

createApp({
    data() {
        return {
            message: 'Hallo Vue über Github.dev!',
            addTodoInpt: '',
            active: [],
            next: [],
            backlog: [],
            counterGoldCoins: 10,    
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
        fillTodos() {
            for(let i=1; i<=30; i++){
                this.backlog.push(i)
            }        
        },
        firstDay() {
            const max = this.counterBacklogMin
            for (let i = this.backlog.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [this.backlog[i], this.backlog[j]] = [this.backlog[j], this.backlog[i]];
            }
            this.next = this.backlog.splice(0, max)
        },
        nextDay() {
            for (let i = this.next.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [this.next[i], this.next[j]] = [this.next[j], this.next[i]];
            }
            this.active.push([...this.next.splice(0, 2)]
        }
    },
    computed: {
        counterBacklogCurrent() {
            return this.backlog.length        
        },
        counterBacklogMin() {
            const today = new Date();
            return new Date(today.getFullYear(), today.getMonth() + 2, 0).getDate();
        },
        counterBacklogMax() {
            const today = new Date()
            const daysOfNextMonth = this.counterBacklogMin
            const daysOfMonthAfterNext = new Date(today.getFullYear(), today.getMonth() + 3, 0).getDate()
            return daysOfNextMonth + daysOfMonthAfterNext
        }
    }
}).mount('#app')

if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("./service-worker.js");
}
