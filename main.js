const table_render = require("./utils/table_render")

const todos = []

const input_form = document.querySelector('#input_form')
const todo_table = document.querySelector('#todo_table')
const todo_text = document.querySelector('#todo_text')
const todo_priority = document.querySelector('#todo_priority')

input_form.onsubmit = event => {
    event.preventDefault()
    const new_todo = todo_text.value
    const new_priority = todo_priority.value
    let date = new Date()
    date = `${(date.getMonth() + 1).toString()}/${date.getDate().toString()}/${(date.getFullYear() % 2000).toString()}`
    todos.push({
        'text': new_todo,
        'priority': new_priority,
        'date_added': date,
        'completed': false,
        'completed_str': 'False',
    })
    new_table = table_render(todos, todo_table, render, onclick)
    yo.update(todo_table, new_table)
}

function render() {
    new_table = table_render(todos, todo_table, render, onclick)
    yo.update(todo_table, new_table)
}

function onclick(index, render) {
    return () => {
        todos[index].completed = !todos[index].completed
        todos[index].completed_str = (todos[index].completed) ? 'True' : 'False'
        table_render(todos, todo_table, render, onclick)
    }
}

todo_table.appendChild(table_render(todos, todo_table, render, onclick))