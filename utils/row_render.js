const yo = require('yo-yo')
const func = (todo, index, onclick, render) => {
    let output = yo`<div>
    <tr>
    <th>${todo.text}</th>
    <th>${todo.priority}</th>
    <th>${todo.date_added}</th>
    <th>${todo.completed_str}</th>
    <th><button onclick=${onclick(index, render)}>Complete</button></th>
</tr>
</div>`
    console.log('From sub-function in row_render.js: ' + output)
    return output
}
module.exports = function (todos, onclick, render) {
    let output = yo`<div>
    <div>
        <tr>
            <th>To-Do Item</th>
            <th>Priority</th>
            <th>Date Added</th>
            <th>Complete</th>
            <th></th>
        </tr>
    </div>
    ${todos.map((todo, index) => func(todo, index, onclick, render))}
    </div>`
    console.log('From row_render.js :' + output)
    return output
}
