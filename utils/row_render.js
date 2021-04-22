const yo = require('yo-yo')
module.exports = function (todos, onclick, render) {
    return yo`<div>
    <tr>
        <th>To-Do Item</th>
        <th>Priority</th>
        <th>Date Added</th>
        <th>Complete</th>
        <th></th>
    </tr>
    ${todos.map(function (todo, index) {
        return yo`<tr>
        <th>${todo.text}</th>
        <th>${todo.priority}</th>
        <th>${todo.date_added}</th>
        <th>${todo.completed_str}</th>
        <th><button onclick=${onclick(index, render)}>Complete</button></th>
    </tr>
</div>`
    })}`
}