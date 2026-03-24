const { createApp, TransitionGroup } = Vue

createApp({
    data() {
        return {
            addTodoInpt: '',
            active: [],
            backlog: [],
            
            title: '',
            type: 'einmalig',
            status: 'backlog',
            timing: 'irgendwann',
            date: this.getTomorrowDate(),

            repeat: 'tage',
            repeatValue: 1,
            weekdays: [],

            notes: '',
            tomorrow: this.getTomorrowDate()    
        }
    },
    methods: {
        showTodoForm() {

        },
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
                    coins: 12,
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
            this.shuffleBacklog()
            this.active.push(...this.backlog.splice(0, 2))
            for(let i=this.active.length - 1; i >= 0; i--) {
                this.active[i].coins -= 2
            }
        },

        getTomorrowDate() {
          const today = new Date();
          today.setDate(today.getDate() + 1);
          return today.toISOString().split('T')[0];
        },

        toggleWeekday(day) {
          if (this.weekdays.includes(day)) {
            this.weekdays = this.weekdays.filter(d => d !== day);
          } else {
            this.weekdays.push(day);
          }
        },

        cancel() {
          this.title = '';
          this.type = 'einmalig';
          this.status = 'backlog';
          this.timing = 'irgendwann';
          this.date = this.getTomorrowDate();
          this.repeat = 'tage';
          this.repeatValue = 1;
          this.weekdays = [];
          this.notes = '';
        },

        createTodo() {
          const todo = {
            title: this.title,
            type: this.type,
            status: this.status,
            timing: this.timing,
            date: this.date,
            repeat: this.repeat,
            repeatValue: this.repeatValue,
            weekdays: this.weekdays,
            notes: this.notes
          };

          console.log("Todo erstellt:", todo);
          alert("Todo erstellt! (siehe Konsole)");
        },
        watch: {
        type(newVal) {
          if (newVal !== 'einmalig') {
            this.timing = 'irgendwann';
            this.date = '';
          } else {
            this.date = this.getTomorrowDate();
          }
        },

        timing(newVal) {
          if (newVal === 'exakt' || newVal === 'spaetestens') {
            if (!this.date) {
              this.date = this.getTomorrowDate();
            }
          } else {
            this.date = '';
          }
        }
      }

    },
    computed: {
        
    }
}).mount('#app')

if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("./service-worker.js");
}
