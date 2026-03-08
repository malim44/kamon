const add_todo = document.querySelector('.add-todo')
const todo_text = document.querySelector('.todo-text')
const todos_list = document.querySelector('.todos-list')
const shuffleBtn = document.querySelector('button')
const todos = []

if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("./service-worker.js");
}

add_todo.addEventListener('click', (e) => {
    e.preventDefault()
    if(todo_text.value) {
        const todo_single = document.createElement('li')
        todo_single.innerHTML = todo_text.value
        todos_list.appendChild(todo_single)
        todo_text.value = ''
    }
})

shuffleBtn.onclick = () => {
  document.startViewTransition(() => {
    const items = [...list.children];

    items
      .sort(() => Math.random() - 0.5)
      .forEach(el => list.appendChild(el));
  });
};