const { createApp, TransitionGroup } = Vue

createApp({
    data() {
        return {
            addTodoInpt: '',
            active: [],
            backlog: []
            
        }
    },
    methods: {
        addTodoToBacklog() {
            const todo = {
                id: crypto.randomUUID(),
                title: this.addTodoInpt,
                coins: 11,
                prio: false    
            }
            this.backlog.push(todo)
            this.addTodoInpt = ''
        },
        fillTodos() {
            for(let i=1; i<=30; i++){
                const todo = {
                    id: crypto.randomUUID(),
                    title: i,
                    coins: 10,
                    prio: false    
                }
                this.backlog.push(todo)
            }        
        },
        shuffleBacklog() {
            for (let i = this.backlog.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [this.backlog[i], this.backlog[j]] = [this.backlog[j], this.backlog[i]];
            }        
        },
        nextDay() {
            for (let i = this.next.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [this.next[i], this.next[j]] = [this.next[j], this.next[i]];
            }
            this.active.push(...this.next.splice(0, 2))
            for(let i=this.active.length - 1; i >= 0; i--) {
                this.active[i].coins -= 2
            }
        }
    },
    computed: {
        
    }
}).mount('#app')

if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("./service-worker.js");
}
