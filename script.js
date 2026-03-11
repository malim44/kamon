const { createApp, TransitionGroup } = Vue

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
            const todo = {
                title: this.addTodoInpt,
                coins: 10,
                prio: false    
            }
            
            this.backlog.push(todo)
            this.addTodoInpt = ''
            
        },
        fillTodos() {
            for(let i=1; i<=30; i++){
                const todo = {
                    id: i,
                    title: i,
                    coins: 10,
                    prio: false    
                }
                this.backlog.push(todo)
            }        
        },
        firstDay() {
            const max = this.counterBacklogMin
            for (let i = this.backlog.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [this.backlog[i], this.backlog[j]] = [this.backlog[j], this.backlog[i]];
            }
            //this.next = this.backlog.splice(0, max)
        },
        nextDay() {
            for (let i = this.next.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [this.next[i], this.next[j]] = [this.next[j], this.next[i]];
            }
            this.counterGoldCoins -= 2
            this.active.push(...this.next.splice(0, 2))
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
